import { Given } from '@wdio/cucumber-framework';
import HomePage from '../../../pageobjects/home.page';
Given('I am on the main page', async function () {
  await browser.url('https://magento.softwaretestingboard.com/');
});
Given('I select any product category', async function () {
  await HomePage.selectProductCategory();
});

Given('I am on the checkout page', async function () {
  await HomePage.goToCheckout();
});
