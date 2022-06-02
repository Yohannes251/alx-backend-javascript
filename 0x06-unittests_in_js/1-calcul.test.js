const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('#calculateNumber() with type SUM', () => {
  it('should round arguments and return the correct sum', () => {
    assert.equal(calculateNumber('SUM', 0, 2.2), 2);
    assert.equal(calculateNumber('SUM', 2.2, 0), 2);
    assert.equal(calculateNumber('SUM', 2.2, 2.2), 4);
    assert.equal(calculateNumber('SUM', 6.8, 0), 7);
    assert.equal(calculateNumber('SUM', 0, 6.8), 7);
    assert.equal(calculateNumber('SUM', 6.8, 6.8), 14);
    assert.equal(calculateNumber('SUM', 5.5, 0), 6);
    assert.equal(calculateNumber('SUM', 0, 5.5), 6);
    assert.equal(calculateNumber('SUM', 5.5, 5.5), 12);
    assert.equal(calculateNumber('SUM', -3.1, -4.2), -7);
    assert.equal(calculateNumber('SUM', -3.8, -1.7), -6); 
  });
});

describe('#calculateNumber() with type SUBTRACT', () => {
  it('should round arguments and return the correct difference', () => {
    assert.equal(calculateNumber('SUBTRACT', 0, 0), 0);
    assert.equal(calculateNumber('SUBTRACT', 0, 2.2), -2);
    assert.equal(calculateNumber('SUBTRACT', 2.2, 0), 2);
    assert.equal(calculateNumber('SUBTRACT', 2.2, 2.2), 0);
    assert.equal(calculateNumber('SUBTRACT', 6.8, 0), 7);
    assert.equal(calculateNumber('SUBTRACT', 0, 6.8), -7);
    assert.equal(calculateNumber('SUBTRACT', 6.8, 6.8), 0);
    assert.equal(calculateNumber('SUBTRACT', 5.5, 0), 6);
    assert.equal(calculateNumber('SUBTRACT', 0, 5.5), -6);
    assert.equal(calculateNumber('SUBTRACT', 5.5, 5.5), 0);
    assert.equal(calculateNumber('SUBTRACT', -3.1, -6.2), 3);
    assert.equal(calculateNumber('SUBTRACT', -3.8, -1.7), -2);
  });
});

describe('#calculateNumber() with type DIVIDE', () => {
  it('should round arguments and return the correct division', () => {
    assert.equal(calculateNumber('DIVIDE', 0, 0), 'Error');
    assert.equal(calculateNumber('DIVIDE', 0, 2.2), 0);
    assert.equal(calculateNumber('DIVIDE', 2.2, 0), 'Error');
    assert.equal(calculateNumber('DIVIDE', 2.2, 2.2), 1);
    assert.equal(calculateNumber('DIVIDE', 0, 6.8), 0);
    assert.equal(calculateNumber('DIVIDE', 6.8, 6.8), 1);
    assert.equal(calculateNumber('DIVIDE', 5.5, 0), 'Error');
    assert.equal(calculateNumber('DIVIDE', 0, -5.5), 0);
    assert.equal(calculateNumber('DIVIDE', -5, 5), -1);
    assert.equal(calculateNumber('DIVIDE', -3.1, -6.2), 0.5);
    assert.equal(calculateNumber('DIVIDE', -3.8, -1.7), 2);
  });
});
