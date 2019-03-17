const expect = require('chai').expect;
const Request = require('../dist/request').default;
const { Method } = require('../dist/spec');

describe('Request', function () {
  describe('#toString', function () {
    it('test without query', function() {
      const request = new Request('https://api.domain.com', Method.GET);
      expect(request.toString()).to.equal('https://api.domain.com');
    });

    it('test with query', function() {
      const request = new Request('https://api.domain.com', Method.GET);
      request.query['foo'] = 'baz';
      request.query['bar'] = 'foo';
      expect(request.toString()).to.equal('https://api.domain.com?foo=baz&bar=foo');
    });

    it('test with query but has current query', function() {
      const request = new Request('https://api.domain.com?foo=baz', Method.GET);
      request.query['bar'] = 'foo';
      expect(request.toString()).to.equal('https://api.domain.com?foo=baz&bar=foo');
    });
  });
});