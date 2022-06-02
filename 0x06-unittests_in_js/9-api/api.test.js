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
});
