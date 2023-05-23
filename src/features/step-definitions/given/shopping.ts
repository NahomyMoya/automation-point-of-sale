import { Given } from '@wdio/cucumber-framework';
import HomePage from '../../../pageobjects/home.page';
import CheckoutPage from '../../../pageobjects/checkout.page';
Given('I am on the main page', async function (): Promise<void> {
  await browser.url('https://magento.softwaretestingboard.com/');
});
Given('I select any product category', async function (): Promise<void> {
  await HomePage.selectProductCategory();
});

Given('I am on the checkout page', async function (): Promise<void> {
  await HomePage.goToCheckout();
  await CheckoutPage.shippingForm.waitUntil(
    async function () {
      return this.isDisplayed;
    },
    {
      timeout: 5000,
      timeoutMsg: 'expected text to be different after 5s',
    },
  );
});
