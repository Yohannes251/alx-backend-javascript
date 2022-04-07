// import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  // Getter/setter for amount
  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    this._amount = newAmount;
  }

  // Getter/setter for currency
  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    this._currency = newCurrency;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
