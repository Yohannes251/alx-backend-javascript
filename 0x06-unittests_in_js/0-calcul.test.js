const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should round arguments and return the correct sum', () => {
    assert.equal(calculateNumber(0, 2.2), 2);
    assert.equal(calculateNumber(2.2, 0), 2);
    assert.equal(calculateNumber(2.2, 2.2), 4);
    assert.equal(calculateNumber(6.8, 0), 7);
    assert.equal(calculateNumber(0, 6.8), 7);
    assert.equal(calculateNumber(6.8, 6.8), 14);
    assert.equal(calculateNumber(5.5, 0), 6);
    assert.equal(calculateNumber(0, 5.5), 6);
    assert.equal(calculateNumber(5.5, 5.5), 12);
  });
});
