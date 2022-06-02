const expect = require('chai').expect;
const sinon = require('sinon');

const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi function', () => {
  const spy = sinon.spy(console, 'log');

  it('validate the usage of the Utils function', () => {
    const stub = sinon.stub(Utils, 'calculateNumber').returns(10)
    
    sendPaymentRequestToApi(100, 20);
    expect(stub.calledWith('SUM', 100, 20)).to.be.true;
    expect(stub.alwaysReturned(10)).to.be.true;
    expect(spy.calledWith('The total is: 10')).to.be.true;

    stub.restore()
    spy.restore();
  });
});
