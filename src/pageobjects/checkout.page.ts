import { sendKeys } from '../helpers/actions';
import { ICheckout } from '../interfaces/checkout';
import { ChainablePromiseElement } from 'webdriverio';
class CheckoutPage {
  get emailInput(): ChainablePromiseElement<WebdriverIO.Element> {
    return $('#customer-email');
  }
  get firstNameInput(): ChainablePromiseElement<WebdriverIO.Element> {
    return $('[name=firstname]');
  }
  get companyInput(): ChainablePromiseElement<WebdriverIO.Element> {
    return $('[name=company]');
  }
  get lastNameInput(): ChainablePromiseElement<WebdriverIO.Element> {
    return $('[name=lastname]');
  }
  get streetAddressInput(): ChainablePromiseElement<WebdriverIO.Element> {
    return $('[name=street\\[0\\]]');
  }
  get cityInput(): ChainablePromiseElement<WebdriverIO.Element> {
    return $('[name=city]');
  }
  get countryInput(): ChainablePromiseElement<WebdriverIO.Element> {
    return $('[name=country_id]');
  }
  get stateInput(): ChainablePromiseElement<WebdriverIO.Element> {
    return $('[name=region_id]');
  }
  get zipcodeInput(): ChainablePromiseElement<WebdriverIO.Element> {
    return $('[name=postcode]');
  }
  get phoneNumberInput(): ChainablePromiseElement<WebdriverIO.Element> {
    return $('[name=telephone]');
  }
  get shippingMethodRadioBtn(): ChainablePromiseElement<WebdriverIO.Element> {
    return $$('.table-checkout-shipping-method tr')[1];
  }
  get nextBtn(): ChainablePromiseElement<WebdriverIO.Element> {
    return $('button[data-role=opc-continue]');
  }
  get placeOrderBtn(): ChainablePromiseElement<WebdriverIO.Element> {
    return $('button.checkout');
  }
  get stepTitle(): ChainablePromiseElement<WebdriverIO.Element> {
    return $('.payment-group .step-title');
  }
  get successTitle(): ChainablePromiseElement<WebdriverIO.Element> {
    return $('h1');
  }
  get orderNumberTxt(): ChainablePromiseElement<WebdriverIO.Element> {
    return $('.checkout-success p');
  }
  get shippingForm(): ChainablePromiseElement<WebdriverIO.Element> {
    return $('#checkout-step-shipping');
  }
  get shippingMethodsForm(): ChainablePromiseElement<WebdriverIO.Element> {
    return $('#checkout-shipping-method-load');
  }
  public async fillCheckoutInputs(checkoutInfo: ICheckout): Promise<void> {
    await this.selectCountry(checkoutInfo.country);
    await this.selectState(checkoutInfo.state);
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

  public async selectCountry(country: string): Promise<void> {
    await this.countryInput.selectByVisibleText(country);
  }
  public async selectState(state: string): Promise<void> {
    await this.stateInput.selectByVisibleText(state);
  }
  public async goToTheNextStep(): Promise<void> {
    await this.nextBtn.scrollIntoView();
    await this.nextBtn.click();
  }
  public async selectShippingMethod(): Promise<void> {
    await this.shippingMethodRadioBtn.click();
  }

  public async placeOrder(): Promise<void> {
    (await this.placeOrderBtn).waitForEnabled();
    await this.placeOrderBtn.click();
  }
}

export default new CheckoutPage();
