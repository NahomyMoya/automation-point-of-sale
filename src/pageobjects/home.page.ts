class HomePage {
  get womenCategory() {
    return $('#ui-id-4');
  }
  get firstProductCard() {
    return $('.product-item');
  }
  get cartBtn() {
    return $('.showcart');
  }
  get checkoutBtn() {
    return $('#top-cart-btn-checkout');
  }
  public async selectProductCategory() {
    await this.womenCategory.click();
  }

  public async goToCheckout() {
    await this.cartBtn.click();
    await this.checkoutBtn.click();
  }
  public async selectFirstProductOnPage() {
    await this.firstProductCard.click();
  }
}

export default new HomePage();
