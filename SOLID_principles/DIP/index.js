class Store {
  constructor(paymentProcessor) {
    this.paymentProcessor = paymentProcessor;
  }
  purchaseBook(quantity, price) {
    this.paymentProcessor.pay(quantity * price);
  }
  purchaseCourse(quantity, price) {
    this.paymentProcessor.pay(quantity * price);
  }
}

class StripPaymentProcessor {
  constructor(user) {
    this.strip = new Strip(user);
  }
  pay(amountInDollars) {
    this.strip.makePayment(this.user, amountInDollars);
  }
}

class PaypalPaymentProcessor {
  constructor(user) {
    this.user = user;
    this.paypal = new Paypal();
  }
  pay(amountInDollars) {
    this.paypal.makePayment(this.user, amountInDollars);
  }
}

class Strip {
  constructor(user) {
    this.user = user;
  }
  makePayment(amountInDollars) {
    console.log(
      `Success Payment ${this.user} using Strip, the amount is ${amountInDollars}`
    );
  }
}

class Paypal {
  makePayment(user, amountInDollars) {
    console.log(
      `Success Payment ${user} using Paypal, the amount is ${amountInDollars}`
    );
  }
}

const stripPayment = new Store(new StripPaymentProcessor("Moath Ahmad"));
stripPayment.purchaseBook(2, 5);
console.log(stripPayment);

const paypalPayment = new Store(new PaypalPaymentProcessor("Anas Ahmad"));
paypalPayment.purchaseBook(2, 5);
console.log(paypalPayment);
