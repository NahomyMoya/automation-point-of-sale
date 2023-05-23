import { sendKeys } from '../helpers/actions';
import { ICheckout } from '../interfaces/checkout';

class CheckoutPage {
  get emailInput() {
    return $('#customer-email');
  }
  get firstNameInput() {
    return $('[name=firstname]');
  }
  get companyInput() {
    return $('[name=company]');
  }
  get lastNameInput() {
    return $('[name=lastname]');
  }
  get streetAddressInput() {
    return $('[name=street\\[0\\]]');
  }
  get cityInput() {
    return $('[name=city]');
  }
  get countryInput() {
    return $('[name=country_id]');
  }
  get stateInput() {
    return $('[name=region_id]');
  }
  get zipcodeInput() {
    return $('[name=postcode]');
  }
  get phoneNumberInput() {
    return $('[name=telephone]');
  }
  get shippingMethodRadioBtn() {
    return $$('.table-checkout-shipping-method tr')[1];
  }
  get nextBtn() {
    return $('button[data-role=opc-continue]');
  }
  get placeOrderBtn() {
    return $('button.checkout');
  }
  get stepTitle() {
    return $('.payment-group .step-title');
  }
  get successTitle() {
    return $('h1');
  }
  get orderNumberTxt() {
    return $('.checkout-success p');
  }
  get shippingForm() {
    return $('#checkout-step-shipping');
  }
  get shippingMethodsForm() {
    return $('#checkout-shipping-method-load');
  }
  public async fillCheckoutInputs(checkoutInfo: ICheckout) {
    await this.selectCountry(checkoutInfo.country);
    await this.selectState(checkoutInfo.state);
    //await sendKeys(this.stateInput, checkoutInfo.state);
    await sendKeys(this.lastNameInput, checkoutInfo.lastName);
    await sendKeys(this.emailInput, checkoutInfo.emailAddress);
    await sendKeys(this.firstNameInput, checkoutInfo.firstName);
    await sendKeys(this.streetAddressInput, checkoutInfo.streetAddress);
    await sendKeys(this.cityInput, checkoutInfo.city);
    await sendKeys(this.zipcodeInput, checkoutInfo.zipCode);
    await sendKeys(this.phoneNumberInput, checkoutInfo.phoneNumber);
    await sendKeys(this.companyInput, checkoutInfo.company);
    (await this.shippingMethodsForm).scrollIntoView();
    await this.selectShippingMethod();
  }

  public async selectCountry(country: string) {
    await this.countryInput.selectByVisibleText(country);
  }
  public async selectState(state: string) {
    await this.stateInput.selectByVisibleText(state);
  }
  public async goToTheNextStep() {
    await this.nextBtn.scrollIntoView();
    await this.nextBtn.click();
  }
  public async selectShippingMethod() {
    await this.shippingMethodRadioBtn.click();
  }

  public async placeOrder() {
    (await this.placeOrderBtn).waitForEnabled();
    await this.placeOrderBtn.click();
  }
}

export default new CheckoutPage();
