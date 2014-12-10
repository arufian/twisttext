var should = require('chai').should(),
    twisttext = require('../index'),
    twist = twisttext.twist,
    flip = twisttext.flip;

describe('#twist', function() {
  it('converts abcdefghijklmnopqrstuvwxyz into ɐbɔdǝfƃhıjʞlɯnopqrstuvʍxʎz ', function() {
    twist('abcdefghijklmnopqrstuvwxyz', true).should.equal('ɐbɔdǝfƃhıjʞlɯnopqrstuvʍxʎz');
  });
  it('converts abcdefghijklmnopqrstuvwxyz into aqcpeɟgɥiɾkןmuopqɹsʇuʌwxyz ', function() {
    twist('abcdefghijklmnopqrstuvwxyz', false).should.equal('aqcpeɟgɥiɾkןmuopqɹsʇuʌwxyz');
  });
});

describe('#flip', function() {
  it('converts abcdefghijklmnopqrstuvwxyz into abcdefghijklmnopqrstuvwxyz ', function() {
    flip('abcdefghijklmnopqrstuvwxyz', true).should.equal('zʎxʍʌuʇsɹqpouɯןʞɾıɥƃɟǝpɔqɐ');
  });
});