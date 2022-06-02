const expect = require('chai').expect;
const sinon = require('sinon');

const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let spy;

  beforeEach(() => {
   spy = sinon.spy(console, 'log');
  });

  afterEach(() => {
   expect(spy.calledOnce).to.be.true;
   spy.restore();
  });

  it('validate output of sendPaymentRequestToApi(100, 20)', () => {
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledWith('The total is: 120')).to.be.true;
  });

  it('validate output of sendPaymentRequestToApi(10, 10)', () => {
    sendPaymentRequestToApi(10, 10);
    expect(spy.calledWith('The total is: 20')).to.be.true;
  });
});
