'use strict'

const path = require('path')
const { URL } = require('url')

const AppConstants = require('./app-constants')

const nodemailer = require('nodemailer')
const hbs = require('nodemailer-express-handlebars')

const HBSHelpers = require('./template-helpers/')
const mozlog = require('./log')

const log = mozlog('email-utils')

const hbsOptions = {
  viewEngine: {
    extname: '.hbs',
    layoutsDir: path.join(__dirname, '/views/layouts'),
    defaultLayout: 'email-2022',
    partialsDir: path.join(__dirname, '/views/partials'),
    helpers: HBSHelpers.helpers
  },
  viewPath: path.join(__dirname, '/views/layouts'),
  extName: '.hbs'
}

// The SMTP transport object. This is initialized to a nodemailer transport
// object while reading SMTP credentials, or to a dummy function in debug mode.
let gTransporter

const EmailUtils = {
  async init (smtpUrl = AppConstants.SMTP_URL) {
    // Allow a debug mode that will log JSON instead of sending emails.
    if (!smtpUrl) {
      log.info('smtpUrl-empty', { message: 'EmailUtils will log a JSON response instead of sending emails.' })
      gTransporter = nodemailer.createTransport({ jsonTransport: true })
      return Promise.resolve(true)
    }

    gTransporter = nodemailer.createTransport(smtpUrl)
    const gTransporterVerification = await gTransporter.verify()
    gTransporter.use('compile', hbs(hbsOptions))
    return Promise.resolve(gTransporterVerification)
  },

  sendEmail (aRecipient, aSubject, aTemplate, aContext) {
    if (!gTransporter) {
      return Promise.reject(new Error('SMTP transport not initialized'))
    }

    const emailContext = Object.assign({
      SERVER_URL: AppConstants.SERVER_URL,
      layout: aTemplate
    }, aContext)
    return new Promise((resolve, reject) => {
      const emailFrom = AppConstants.EMAIL_FROM
      const mailOptions = {
        from: emailFrom,
        to: aRecipient,
        subject: aSubject,
        template: aTemplate,
        context: emailContext,
        headers: {
          'x-ses-configuration-set': AppConstants.SES_CONFIG_SET
        }
      }

      gTransporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          reject(error)
          return
        }
        if (gTransporter.transporter.name === 'JSONTransport') {
          log.info('JSONTransport', { message: info.message.toString() })
        }
        resolve(info)
      })
    })
  },

  appendUtmParams (url, campaign, content) {
    const utmParameters = {
      utm_source: 'fx-monitor',
      utm_medium: 'email',
      utm_campaign: campaign,
      utm_content: content
    }
    for (const param in utmParameters) {
      url.searchParams.append(param, utmParameters[param])
    }
    return url
  },

  getEmailCtaHref (emailType, content, subscriberId = null) {
    const subscriberParamPath = (subscriberId) ? `/?subscriber_id=${subscriberId}` : '/'
    const url = new URL(subscriberParamPath, AppConstants.SERVER_URL)
    return this.appendUtmParams(url, emailType, content)
  },

  getVerificationUrl (subscriber) {
    if (!subscriber.verification_token) throw new Error('subscriber has no verification_token')
    let url = new URL(`${AppConstants.SERVER_URL}/user/verify`)
    url = this.appendUtmParams(url, 'verified-subscribers', 'account-verification-email')
    url.searchParams.append('token', encodeURIComponent(subscriber.verification_token))
    return url
  },

  getUnsubscribeUrl (subscriber, emailType) {
    // TODO: email unsubscribe is broken for most emails
    let url = new URL(`${AppConstants.SERVER_URL}/user/unsubscribe`)
    const token = (subscriber.hasOwnProperty('verification_token')) ? subscriber.verification_token : subscriber.primary_verification_token
    const hash = (subscriber.hasOwnProperty('sha1')) ? subscriber.sha1 : subscriber.primary_sha1
    url.searchParams.append('token', encodeURIComponent(token))
    url.searchParams.append('hash', encodeURIComponent(hash))
    url = this.appendUtmParams(url, 'unsubscribe', emailType)
    return url
  },

  getMonthlyUnsubscribeUrl (subscriber, campaign, content) {
    // TODO: create new subscriptions section in settings to manage all emails and avoid one-off routes like this
    if (!subscriber.primary_verification_token) throw new Error('subscriber has no primary verification_token')
    let url = new URL('user/unsubscribe-monthly/', AppConstants.SERVER_URL)

    url = this.appendUtmParams(url, campaign, content)
    url.searchParams.append('token', encodeURIComponent(subscriber.primary_verification_token))

    return url
  }
}

module.exports = EmailUtils
