import { sendKeys } from '../helpers/actions';
class ProductPage {
  get quantityInput() {
    return $('#qty');
  }
  get addToCartBtn() {
    return $('#product-addtocart-button');
  }
  get sizeOption() {
    return $('.swatch-option.text');
  }
  get colorOption() {
    return $('.swatch-option.color');
  }
  get successAlert() {
    return $('[role=alert]');
  }
  get successAlertText() {
    return $('[role=alert] div div');
  }
  get cartQuantityTxt() {
    return $('.showcart .qty');
  }

  public async selectSizeRandomly(): Promise<void> {
    await this.sizeOption.click();
  }
  public async selectColorRandomly(): Promise<void> {
    await this.colorOption.click();
  }
  public async fillTheProductQuantity(quantity: number) {
    await sendKeys(this.quantityInput, quantity.toString());
  }
  public async addProductsToCart() {
    await this.addToCartBtn.click();
  }
}

export default new ProductPage();
