import { sendKeys } from '../helpers/actions';
import { ChainablePromiseElement } from 'webdriverio';
class ProductPage {
  get quantityInput(): ChainablePromiseElement<WebdriverIO.Element> {
    return $('#qty');
  }
  get addToCartBtn(): ChainablePromiseElement<WebdriverIO.Element> {
    return $('#product-addtocart-button');
  }
  get sizeOption(): ChainablePromiseElement<WebdriverIO.Element> {
    return $('.swatch-option.text');
  }
  get colorOption(): ChainablePromiseElement<WebdriverIO.Element> {
    return $('.swatch-option.color');
  }
  get successAlert(): ChainablePromiseElement<WebdriverIO.Element> {
    return $('[role=alert]');
  }
  get successAlertText(): ChainablePromiseElement<WebdriverIO.Element> {
    return $('[role=alert] div div');
  }
  get cartQuantityTxt(): ChainablePromiseElement<WebdriverIO.Element> {
    return $('.showcart .qty');
  }

  public async selectSizeRandomly(): Promise<void> {
    await this.sizeOption.click();
  }
  public async selectColorRandomly(): Promise<void> {
    await this.colorOption.click();
  }
  public async fillTheProductQuantity(quantity: number): Promise<void> {
    await sendKeys(this.quantityInput, quantity.toString());
  }
  public async addProductsToCart(): Promise<void> {
    await this.addToCartBtn.click();
  }
}

export default new ProductPage();
