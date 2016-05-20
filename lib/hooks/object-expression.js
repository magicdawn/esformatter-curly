'use strict';

const $ = require('../rc');

module.exports = function(node) {
  const left = node.startToken;
  const right = node.endToken;

  // 如果原来就是同行的, 把 linebreak 去掉
  // 原来不同行, 不做处理
  if (left.loc.start.line !== right.loc.start.line) return;

  // 换行
  $.linebreak.limitAfter(left, 0);
  $.whitespace.limitAfter(left, 1);
  $.linebreak.limitBefore(right, 0);
  $.whitespace.limitBefore(right, 1);

  // 只有1个, 不用处理了
  if(node.properties.length < 2) return;

  node.properties.forEach((p,index) => {
    if(index === node.properties.length -1) return; // the last one

    const comma = $.token.findNext(p.endToken, ',');
    $.linebreak.limitAfter(comma, 0);
    $.whitespace.limitAfter(comma, 1);
  });
};