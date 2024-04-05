# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.


# Settings page

settings-page-title = Настройки { -product-short-name }

## Breach alert preferences

settings-alert-preferences-title = Настройки оповещений об утечках
settings-alert-preferences-option-one = Отправлять оповещения об утечках на затронутые ими адреса электронной почты
settings-alert-preferences-option-two = Отправлять все оповещения об утечках на основной адрес электронной почты

## Monitored email addresses

settings-email-list-title = Отслеживаемые адреса электронной почты
# Variables:
#   $limit (number) - Number of email addresses included in the plan
settings-email-limit-info =
    { $limit ->
        [one] Ваш аккаунт включает мониторинг до { $limit } адреса электронной почты.
        [few] Ваш аккаунт включает мониторинг до { $limit } адресов электронной почты.
        [many] Ваш аккаунт включает мониторинг до { $limit } адресов электронной почты.
       *[other] Ваш аккаунт включает мониторинг до { $limit } адресов электронной почты.
    }
settings-email-verification-callout = Требуется верификация электронной почты
settings-resend-email-verification-link = Отправить письмо подтверждения заново
settings-add-email-button = Добавить адрес электронной почты
settings-remove-email-button-label = Удалить
# Variables:
#   $emailAddress (string) - The email address to remove, e.g. `billnye@example.com`
settings-remove-email-button-tooltip = Перестать отслеживать { $emailAddress }

# This string is shown beneath each of the user’s email addresses to indicate
# how many known breaches that email address was found in.
# Variables:
#   $breachCount (number) - Number of breaches
settings-email-number-of-breaches-info =
    { $breachCount ->
        [one] Найден в { $breachCount } известной утечке.
        [few] Найден в { $breachCount } известных утечках.
        [many] Найден в { $breachCount } известных утечках.
       *[other] Найден в { $breachCount } известных утечках.
    }

## Cancel Premium subscription

## Deactivate account

settings-deactivate-account-title = Деактивировать аккаунт
settings-deactivate-account-info-2 = Вы можете деактивировать { -product-short-name }, удалив свой { -brand-mozilla-account }.
settings-fxa-link-label-3 = Перейти в настройки { -brand-mozilla-account }.

## Delete Monitor account

settings-delete-monitor-free-account-title = Удалить аккаунт { -brand-monitor }
settings-delete-monitor-free-account-description = Это навсегда удалит ваш аккаунт { -brand-monitor } и отключит все уведомления.
settings-delete-monitor-free-account-cta-label = Удалить аккаунт
settings-delete-monitor-free-account-dialog-title = Ваш аккаунт { -brand-monitor } будет удалён навсегда
settings-delete-monitor-free-account-dialog-lead = Вся информация вашего аккаунта { -brand-monitor } будет удалена, и мы больше не будем отслеживать новые утечки данных. Это действие не приведет к удалению вашего аккаунта { -brand-mozilla }.
settings-delete-monitor-free-account-dialog-cta-label = Удалить аккаунт
settings-delete-monitor-free-account-dialog-cancel-button-label = Не важно, верните меня обратно
settings-delete-monitor-account-confirmation-toast-label-2 = Ваш аккаунт { -brand-monitor } удалён.
settings-delete-monitor-account-confirmation-toast-dismiss-label = Закрыть

## Add email dialog

## Unsubscribe Dialog Survey

