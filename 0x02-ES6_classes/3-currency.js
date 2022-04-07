export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  // Getter/setter for code
  get code() {
    return this._code;
  }

  set code(newCode) {
    this._code = newCode;
  }

  // Getter/setter for name
  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
