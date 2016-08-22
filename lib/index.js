'use strict';

/**
 * Module dependencies
 */

const $ = require('./rc');

/**
 * Hooks
 */

const Hooks = {
  ImportDeclaration: require('./hooks/import-declaration'),
  ObjectExpression: require('./hooks/object-expression'),
  ObjectPattern: require('./hooks/object-pattern'),
};

module.exports = {
  setOptions(options) {
    $.whitespace.setOptions(options.whiteSpace);
    $.indent.setOptions(options.indent);
    $.linebreak.setOptions(options.lineBreak);
  },

  nodeAfter(node) {
    const type = node.type;
    if (!type) return;
    const hook = Hooks[type];
    if (!hook) return;

    // just do it
    hook(node);
  }
};