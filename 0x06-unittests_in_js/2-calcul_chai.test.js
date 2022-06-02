const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai');

describe('#calculateNumber() with type SUM', () => {
  it('should round arguments and return the correct sum', () => {
    expect(calculateNumber('SUM', 0, 2.2)).to.equal(2);
    expect(calculateNumber('SUM', 2.2, 0)).to.equal(2);
    expect(calculateNumber('SUM', 2.2, 2.2)).to.equal(4);
    expect(calculateNumber('SUM', 6.8, 0)).to.equal(7);
    expect(calculateNumber('SUM', 0, 6.8)).to.equal(7);
    expect(calculateNumber('SUM', 6.8, 6.8)).to.equal(14);
    expect(calculateNumber('SUM', 5.5, 0)).to.equal(6);
    expect(calculateNumber('SUM', 0, 5.5)).to.equal(6);
    expect(calculateNumber('SUM', 5.5, 5.5)).to.equal(12);
    expect(calculateNumber('SUM', -3.1, -4.2)).to.equal(-7);
    expect(calculateNumber('SUM', -3.8, -1.7)).to.equal(-6); 
  });
});

describe('#calculateNumber() with type SUBTRACT', () => {
  it('should round arguments and return the correct difference', () => {
    expect(calculateNumber('SUBTRACT', 0, 0)).to.equal(0);
    expect(calculateNumber('SUBTRACT', 0, 2.2)).to.equal(-2);
    expect(calculateNumber('SUBTRACT', 2.2, 0)).to.equal(2);
    expect(calculateNumber('SUBTRACT', 2.2, 2.2)).to.equal(0);
    expect(calculateNumber('SUBTRACT', 6.8, 0)).to.equal(7);
    expect(calculateNumber('SUBTRACT', 0, 6.8)).to.equal(-7);
    expect(calculateNumber('SUBTRACT', 6.8, 6.8)).to.equal(0);
    expect(calculateNumber('SUBTRACT', 5.5, 0)).to.equal(6);
    expect(calculateNumber('SUBTRACT', 0, 5.5)).to.equal(-6);
    expect(calculateNumber('SUBTRACT', 5.5, 5.5)).to.equal(0);
    expect(calculateNumber('SUBTRACT', -3.1, -6.2)).to.equal(3);
    expect(calculateNumber('SUBTRACT', -3.8, -1.7)).to.equal(-2);
  });
});

describe('#calculateNumber() with type DIVIDE', () => {
  it('should round arguments and return the correct division', () => {
    expect(calculateNumber('DIVIDE', 0, 0)).to.equal('Error');
    expect(calculateNumber('DIVIDE', 0, 2.2)).to.equal(0);
    expect(calculateNumber('DIVIDE', 2.2, 0)).to.equal('Error');
    expect(calculateNumber('DIVIDE', 2.2, 2.2)).to.equal(1);
    expect(calculateNumber('DIVIDE', 0, 6.8)).to.equal(0);
    expect(calculateNumber('DIVIDE', 6.8, 6.8)).to.equal(1);
    expect(calculateNumber('DIVIDE', 5.5, 0)).to.equal('Error');
    expect(calculateNumber('DIVIDE', 0, -5.5)).to.equal(0);
    expect(calculateNumber('DIVIDE', -5, 5)).to.equal(-1);
    expect(calculateNumber('DIVIDE', -3.1, -6.2)).to.equal(0.5);
    expect(calculateNumber('DIVIDE', -3.8, -1.7)).to.equal(2);
  });
});
