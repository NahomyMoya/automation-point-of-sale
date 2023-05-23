import { faker } from '@faker-js/faker';
import { sendKeys } from '../helpers/actions';
class ProductPage {
  get quantityInput() {
    return $('#qty');
  }
  get addToCartBtn() {
    return $('#product-addtocart-button');
  }
  get sizeOptions() {
    return $('.swatch-option.text');
  }
  get colorOptions() {
    return $('.swatch-option.color');
  }
  public async selectSizeRandomly(): Promise<void> {
    // const elementsLength = await this.sizeOptions.length;
    // const randomElement = faker.number.int({ min: 0, max: elementsLength });
    // await this.sizeOptions[randomElement].click();
    await this.sizeOptions.click();
  }
  public async selectColorRandomly(): Promise<void> {
    // const elementsLength = await this.colorOptions.length;
    // const randomElement = faker.number.int({ min: 0, max: elementsLength });
    // await this.colorOptions[randomElement].click();
    await this.colorOptions.click();
  }
  public async fillTheProductQuantity(quantity: string) {
    await sendKeys(this.quantityInput, quantity);
  }
  public async addProductsToCart() {
    await this.addToCartBtn.click();
  }
}

export default new ProductPage();
