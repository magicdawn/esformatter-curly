'use strict';

/**
 * module dependencies
 */

const curly = require('../');
const esformatter = require('esformatter');
esformatter.register(curly);
const fs = require('fs');

describe('It works', function() {
  it('import-declaration', function*() {
    const src = fs.readFileSync(__dirname + '/fixtures/import-in.js', 'utf8');
    const out = esformatter.format(src);
    out.should.equal(src);
  });

  it('inline-object-declaration', function*() {
    const src = fs.readFileSync(__dirname + '/fixtures/object-in.js', 'utf8');
    const out = esformatter.format(src);
    out.should.equal(src);
  });

  it('object-pattern', function*() {
    const srcIn = fs.readFileSync(__dirname + '/fixtures/object-pattern-in.js', 'utf8');
    const srcOut = fs.readFileSync(__dirname + '/fixtures/object-pattern-out.js', 'utf8');
    const out = esformatter.format(srcIn);
    out.should.equal(srcOut);
  });
});