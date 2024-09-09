const Product = require("./Product");

class Cart {
  constructor() {
    this.products = [];
    this.total = 0;
  }

  addProduct(product) {
    if (product instanceof Product) {
      this.products.push(product);
      this.total += product.price;
    } else {
      throw new Error("Only products can be added to the cart");
    }
  }

  removeProduct(i) {
    let product = this.products[i];
    this.products.splice(i, 1);
    this.total -= product.price;
  }

  getTotal() {
    return this.products.reduce((a, b) => a + b.price, 0);
  }

  clear() {
    this.products = [];
    this.total = 0;
  }

  totalRewardPoints() {
    return this.products.reduce(
      (points, product) => points + product.rewardPoints,
      0
    );
  }

  removeItemByName(productName) {
    const index = this.products.findIndex(
      (product) => product.name === productName
    );

    if (index !== -1) {
      const removedProduct = this.products[index];
      this.products.splice(index, 1);
      this.total -= removedProduct.price;
    }
  }
}

module.exports = Cart;
