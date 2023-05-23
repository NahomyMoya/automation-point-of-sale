import { When } from '@wdio/cucumber-framework';
import ProductPage from '../../../pageobjects/product.page';
import CheckoutPage from '../../../pageobjects/checkout.page';
import HomePage from '../../../pageobjects/home.page';
import { generateCheckoutInfo } from '../../../helpers/dataGenerators';
import { faker } from '@faker-js/faker';
When('I select the first item for that category', async function () {
  await HomePage.selectFirstProductOnPage();
});

When('I select size and color', async function () {
  await ProductPage.selectSizeRandomly();
  await ProductPage.selectColorRandomly();
});

When('I add product items to the cart', async function () {
  const productQuantity = faker.number.int({ min: 1, max: 10 }).toString();
  await ProductPage.fillTheProductQuantity(productQuantity);
  await ProductPage.addProductsToCart();
  await browser.pause(3000); //sin este asunto no se espera a que los elementos se agreguen al cart
});

When('I fill the checkout info on the first step', async function () {
  const newCheckoutInfo = generateCheckoutInfo();
  await CheckoutPage.fillCheckoutInputs(newCheckoutInfo);
  await browser.pause(5000);
  await CheckoutPage.goToTheNextStep();
  await browser.pause(5000);
  // estoy teniendo un problema aqui porque no me está pasando a la siguiente pagina\
});

When('I place my order', async function () {
  await CheckoutPage.placeOrder();
});
