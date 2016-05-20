'use strict';

const $ = require('../rc');

module.exports = function(node) {
  const left = $.token.findInBetween(node.startToken, node.endToken, '{');
  const right = $.token.findInBetweenFromEnd(node.fromToken, node.endToken, '}');

  // 没有大括号
  if (!left || !right) return;

  // 同行
  if (left.loc.start.line === right.loc.start.line) return;

  // 只有1个
  if (node.specifiers.length < 2) return;

  // 两个以上
  node.specifiers.forEach(s => {
    $.linebreak.limitBefore(s.startToken, 1);
    $.indent.addLevel(s.startToken, 1);
  });

  $.linebreak.limitBefore(right, 1);
};