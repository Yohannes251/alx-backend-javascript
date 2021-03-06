export default class Building {
  constructor(sqft) {
    this.sqft = sqft;
    if (this.constructor.name !== 'Building' && typeof (this.evacuationWarningMessage) !== 'function') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  // Getter/setter for sqft
  get sqft() {
    return this._sqft;
  }

  set sqft(newSqft) {
    this._sqft = newSqft;
  }
}
