const Cart = require("./Cart");

class Customer {
  constructor(name, email, shippingAddress) {
    this.name = name;
    this.email = email;
    this.shippingAddress = shippingAddress;

    this.orderHistory = [];
    this.rewardPoints = 0;
  }

  addToOrderHistory(cart) {
    if (cart instanceof Cart) {
      this.orderHistory.push(cart);
    } else {
      throw new Error("Only carts can be added to order history");
    }
  }

  getRewardPoints() {
    this.rewardPoints = this.orderHistory.reduce((totalPoints, cart) => {
      return totalPoints + cart.totalRewardPoints();
    }, 0);
  }
}

module.exports = Customer;
