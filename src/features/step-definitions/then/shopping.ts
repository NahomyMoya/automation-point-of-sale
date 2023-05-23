import { Then } from '@wdio/cucumber-framework';

//DUDA: Los selectors que estan aqui y los expects deberian estar en sus respectivos page classes?

Then('A product addition success message must be shown', async function () {
  const successAlert = await $('[role=alert]');
  const successAlertText = await $('[role=alert] div div');
  expect(await successAlert.isDisplayed()).toBe(true);
  expect(await successAlertText.getText()).toContain('You added');
});

Then('The order sumary must be displayed', async function () {
  const stepTitle = await $('.payment-group .step-title');
  expect(await stepTitle.isDisplayed()).toBe(true);
  const sumary = await $('.opc-block-summary>span');
  expect(await sumary.isDisplayed()).toBe(true);
});

Then('A purchase success message must be shown', async function () {
  const successTitle = await $('h1');
  expect(await successTitle.getText()).toContain(
    'Thank you for your purchase!',
  );
});
Then('The order number must be visible', async function () {
  const orderNumber = await $('.checkout-success p');
  expect(await orderNumber.getText()).toContain('Your order # is:');
});
