'use strict';

const $ = require('../rc');

module.exports = function(node) {
  const left = node.startToken;
  const right = node.endToken;

  if (left.loc.start.line === right.loc.start.line) return;

  if (node.properties.length < 2) return;

  node.properties.forEach(p => {
    $.linebreak.limitBefore(p.startToken, 1);
  });

  $.linebreak.limitBefore(right, 1);
};
