/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { test, expect } from "../fixtures/basePage.js";
import { checkAuthState, setEnvVariables } from "../utils/helpers.js";

test.describe(`${process.env.E2E_TEST_ENV} - Monitor Plus Purchase Flow Yearly`, () => {
  test.beforeEach(
    async ({ page, authPage, landingPage, welcomePage, dashboardPage }) => {
      test.info().annotations.push({
        type: "testrail id",
        description:
          "https://testrail.stage.mozaws.net/index.php?/cases/view/2463564",
      });

      // this test runs through the welcome scan flow, increasing timeout to address it
      test.slow();

      setEnvVariables(process.env.E2E_TEST_ACCOUNT_EMAIL as string);

      // speed up test by ignore non necessary requests
      await page.route(/(analytics)/, async (route) => {
        await route.abort();
      });

      // start authentication flow
      await landingPage.open();
      await landingPage.goToSignIn();

      // Fill out sign up form
      const randomEmail = `_${Date.now()}@restmail.net`;
      await authPage.signUp(randomEmail, page);

      // wait for welcome page
      await page.waitForURL("**/user/welcome");

      // confirm get started step elements
      expect(await welcomePage.getStartedStep.count()).toEqual(3);
      await expect(page.getByText("Get started")).toBeVisible();
      await expect(page.getByText("Enter info")).toBeVisible();
      await expect(page.getByText("Find exposures")).toBeVisible();

      // navigate to enter info step
      await welcomePage.startFreeScanButton.click();

      // confirm enter info step
      await welcomePage.firstNameInputField.fill("Monitor");
      await welcomePage.lastNameInputField.fill("Automation1");
      await welcomePage.cityStateInputField.pressSequentially(
        "Atlanta, GA, USA",
      );
      await page.getByText("AtlantaGA, USA", { exact: true }).click();
      await welcomePage.dobInputField.fill("2002-01-01");
      await welcomePage.findExposuresButton.click();

      await welcomePage.modalConfirmButton.click();
      // Waiting for scan to complete
      await dashboardPage.actionNeededTab.waitFor();
      expect(page.url()).toContain("/user/dashboard");
    },
  );

  test("Verify that the user can purchase the plus subscription with a Stripe card - Yearly", async ({
    dashboardPage,
    purchasePage,
    page,
  }) => {
    test.skip(
      process.env.E2E_TEST_ENV === "production",
      "payment method test not available in production",
    );
    // link to testrail case
    test.info().annotations.push({
      type: "testrail",
      description:
        "https://testrail.stage.mozaws.net/index.php?/cases/view/2463627",
    });

    try {
      await checkAuthState(page);
    } catch {
      console.log(
        "[E2E_LOG] - No fxa auth required, proceeding... with stripe yearly",
      );
    }

    // navigate to subscription
    await dashboardPage.open();
    await dashboardPage.subscribeButton.click();
    await dashboardPage.subscribeDialogSelectYearlyPlanLink.click();
    await purchasePage.subscriptionHeader.waitFor();

    // fill out subscription payment
    await purchasePage.authorizationCheckbox.check();
    await purchasePage.fillOutStripeCardInfo();
    await purchasePage.payNowButton.click();
    await page.getByText("Subscription confirmation").waitFor();
    // navigate to confirmation
    await purchasePage.getStartedButton.click();
    await purchasePage.goToNextStep.waitFor();
    await purchasePage.goToNextStep.click();

    // confirm successful payment
    await dashboardPage.plusSubscription.waitFor({
      state: "attached",
      timeout: 5000,
    });
    await expect(dashboardPage.plusSubscription).toBeVisible();
  });

  test("Verify that the user can purchase the plus subscription with a Stripe card - Monthly", async ({
    purchasePage,
    dashboardPage,
    page,
  }) => {
    test.skip(
      process.env.E2E_TEST_ENV === "production",
      "payment method test not available in production",
    );
    // link to multiple testrail cases
    test.info().annotations.push({
      type: "testrail",
      description:
        "https://testrail.stage.mozaws.net/index.php?/cases/view/2463627",
    });

    test.info().annotations.push({
      type: "testrail",
      description:
        "https://testrail.stage.mozaws.net/index.php?/cases/view/2301529",
    });

    try {
      await checkAuthState(page);
    } catch {
      console.log(
        "[E2E_LOG] - No fxa auth required, proceeding... with stripe monthly",
      );
    }

    // navigate to subscription
    await dashboardPage.open();
    await dashboardPage.subscribeButton.click();

    // verify user purchase choices
    await expect(dashboardPage.subscribeDialogCloseButton).toBeVisible();
    await expect(dashboardPage.yearlyMonthlyTablist).toBeVisible();
    await dashboardPage.yearlyTab.click();
    await expect(
      dashboardPage.subscribeDialogSelectYearlyPlanLink,
    ).toBeVisible();

    await dashboardPage.monthlyTab.click();
    await expect(
      dashboardPage.subscribeDialogSelectMonthlyPlanLink,
    ).toBeVisible();

    await dashboardPage.monthlyTab.click();
    await dashboardPage.subscribeDialogSelectMonthlyPlanLink.click();
    await purchasePage.subscriptionHeader.waitFor();

    // fill out subscription payment
    await purchasePage.authorizationCheckbox.check();
    await purchasePage.fillOutStripeCardInfo();
    await purchasePage.payNowButton.click();
    await page.getByText("Subscription confirmation").waitFor();
    // navigate to confirmation
    await purchasePage.getStartedButton.click();
    await purchasePage.goToNextStep.click();

    // confirm successful payment
    await dashboardPage.plusSubscription.waitFor({
      state: "attached",
      timeout: 5000,
    });
    await expect(dashboardPage.plusSubscription).toBeVisible();
  });
});
