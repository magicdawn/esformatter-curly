'use strict';

const hooks = {
  ImportDeclaration: require('./hooks/import-declaration'),
  ObjectExpression: require('./hooks/object-expression')
};

module.exports = {
  nodeAfter: function(node) {
    if (node.type === 'ImportDeclaration') {
      hooks.ImportDeclaration(node);
    } else if (node.type === 'ObjectExpression') {
      hooks.ObjectExpression(node);
    }
  }
};