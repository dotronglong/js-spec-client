const expect = require('chai').expect;
const Replacer = require('../dist/replacer').default;

describe('Replacer', function () {
  describe('#replace', function () {
    it('should not modify origin source', function() {
      const replacer = new Replacer();
      const source = 'This is a {{fruit}}';
      replacer.replace(source, { fruit: 'lemon' });
      expect(source).to.equal('This is a {{fruit}}');
    });

    it('should replace keys in source', function() {
      const replacer = new Replacer();
      const source = 'This is a {{fruit}}';
      const result = replacer.replace(source, { fruit: 'lemon' });
      expect(result).to.equal('This is a lemon');
    });
  });
});