const expect = require('chai').expect;
const request = require('request');


describe('Index page integration test', () => {
  describe('GET /', () => {
    it('Code: 200 | Body: Welcome to the payment system', (done) => {
      const options = {
        url: 'http://localhost:7865',
        method: 'GET',
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome to the payment system');
        done();
      });
    });
  });

  describe('GET /cart/:id', () => {
    it('Returns status code of 200 and id of 123', (done) => {
      const options = {
        url: 'http://localhost:7865/cart/123',
        method: 'GET',
      };

      request(options, function (err, res, body) {
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 123');
        done();
      });
    });

    it('returns a 404 status code', (done) => {
      const options = {
        url: 'http://localhost:7865/cart/abc',
        method: 'GET',
      };

      request(options, function (err, res, body) {
        expect(res.statusCode).to.equal(404);
        done();
      });
    });
  });

  describe('GET /available_payments', () => {
    it('Responds with 200 and correct JSON string', (done) => {
      const options = {
        url: 'http://localhost:7865/available_payments',
        method: 'GET',
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal(
          '{"payment_methods":{"credit_cards":true,"paypal":false}}'
        );
        done();
      });
    });

    it('Responds with 200 and correct JSON object when parsed', (done) => {
      const options = {
        url: 'http://localhost:7865/available_payments',
        method: 'GET',
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        const bodyParsed = JSON.parse(body);

        const referenceBody = {
          payment_methods: {
            credit_cards: true,
            paypal: false,
          },
        };

        expect(bodyParsed).to.deep.equal(referenceBody);
        done();
      });
    });
  });

  describe('POST /login with body', () => {
    it('Responds with 200 and correct name Betty', (done) => {
      const options = {
        url: 'http://localhost:7865/login',
        method: 'POST',
        json: {
          userName: 'Betty',
        },
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome Betty');
        done();
      });
    });

    it('Responds with 200 and correct name Undefined', (done) => {
      const options = {
        url: 'http://localhost:7865/login',
        method: 'POST',
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome undefined');
        done();
      });
    });
  });
});
