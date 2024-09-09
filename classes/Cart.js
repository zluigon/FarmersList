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
}

module.exports = Cart;
