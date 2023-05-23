import { Then } from '@wdio/cucumber-framework';
import ProductPage from '../../../pageobjects/product.page';
import CheckoutPage from '../../../pageobjects/checkout.page';

Then(
  'A product addition success message must be shown',
  async function (): Promise<void> {
    expect(await ProductPage.successAlert.isDisplayed()).toBe(true);
    expect(await ProductPage.successAlertText.getText()).toContain('You added');
  },
);

Then('The order sumary must be displayed', async function (): Promise<void> {
  await CheckoutPage.stepTitle.waitForDisplayed();
  expect(await CheckoutPage.stepTitle.isDisplayed()).toBe(true);
});

Then(
  'A purchase success message must be shown',
  async function (): Promise<void> {
    expect(await CheckoutPage.successTitle.getText()).toContain(
      'Thank you for your purchase!',
    );
  },
);
Then('The order number must be visible', async function (): Promise<void> {
  expect(await CheckoutPage.orderNumberTxt.getText()).toContain(
    'Your order # is:',
  );
});

Then(
  'The cart must have {int} products',
  async function (productQuantity: number): Promise<void> {
    await ProductPage.cartQuantityTxt.waitUntil(
      async function () {
        return (await this.getText()) !== '';
      },
      {
        timeout: 5000,
        timeoutMsg: 'expected text to be different after 5s',
      },
    );
    expect(await ProductPage.cartQuantityTxt.getText()).toContain(
      productQuantity.toString(),
    );
  },
);
