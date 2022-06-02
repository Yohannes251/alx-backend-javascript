const expect = require('chai').expect;

const getPaymentTokenFromApi = require('./6-payment_token');

describe('getPaymentTokenFromApi', () => {
  it('checks the result of getPaymentTokenFromApi when true is passed as argument', (done) => {
    getPaymentTokenFromApi(true)
      .then((res) => {
        expect(res).to.include({ data: 'Successful response from the API' });
        done();
      })
      .catch((err) => done(err));
  });
});
