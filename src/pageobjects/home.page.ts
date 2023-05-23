import { ChainablePromiseElement } from 'webdriverio';
class HomePage {
  get womenCategoryTabOption(): ChainablePromiseElement<WebdriverIO.Element> {
    return $('#ui-id-4');
  }
  get firstProductCard(): ChainablePromiseElement<WebdriverIO.Element> {
    return $('.product-item');
  }
  get cartBtn(): ChainablePromiseElement<WebdriverIO.Element> {
    return $('.showcart');
  }
  get checkoutBtn(): ChainablePromiseElement<WebdriverIO.Element> {
    return $('#top-cart-btn-checkout');
  }
  public async selectProductCategory() {
    await this.womenCategoryTabOption.click();
  }

  public async goToCheckout(): Promise<void> {
    await this.cartBtn.waitForDisplayed();
    await this.cartBtn.click();
    await this.checkoutBtn.waitForDisplayed();
    await this.checkoutBtn.click();
  }
  public async selectFirstProductOnPage(): Promise<void> {
    await this.firstProductCard.click();
  }
}

export default new HomePage();
