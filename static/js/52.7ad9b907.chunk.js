webpackJsonp([52],{2129:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),s=n(843),i=n(54),a=n(1116),o=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),t.prototype.apply=function(e){return this.applyWithFunction(e,p)},t.metadata={ruleName:"prefer-object-spread",description:"Enforces the use of the ES2018 object spread operator over `Object.assign()` where appropriate.",rationale:"Object spread allows for better type checking and inference.",optionsDescription:"Not configurable.",options:null,optionExamples:[!0],type:"functionality",typescriptOnly:!1,hasFix:!0},t.FAILURE_STRING="Use the object spread operator instead.",t.ASSIGNMENT_FAILURE_STRING="'Object.assign' returns the first argument. Prefer object spread if you want a new object.",t}(a.Rules.AbstractRule);function p(e){return i.forEachChild(e.sourceFile,function t(n){return s.isCallExpression(n)&&0!==n.arguments.length&&s.isPropertyAccessExpression(n.expression)&&"assign"===n.expression.name.text&&s.isIdentifier(n.expression.expression)&&"Object"===n.expression.expression.text&&!i.isFunctionLike(n.arguments[0])&&!n.arguments.some(s.isSpreadElement)&&!n.arguments.some(l)&&(n.arguments[0].kind===i.SyntaxKind.ObjectLiteralExpression?e.addFailureAtNode(n,o.FAILURE_STRING,c(n,e.sourceFile)):s.isExpressionValueUsed(n)&&!s.hasSideEffects(n.arguments[0],2)&&e.addFailureAtNode(n,o.ASSIGNMENT_FAILURE_STRING,c(n,e.sourceFile))),i.forEachChild(n,t)})}function c(e,t){for(var n=e.arguments,r=e.parent.kind===i.SyntaxKind.ArrowFunction,o=[a.Replacement.replaceFromTo(e.getStart(t),n[0].getStart(t),(r?"(":"")+"{"),new a.Replacement(e.end-1,1,"}"+(r?")":""))],p=0;p<n.length;++p){var c=n[p];if(s.isObjectLiteralExpression(c))if(0===c.properties.length){var l=c.end;p!==n.length-1?l=n[p+1].getStart(t):n.hasTrailingComma&&(l=n.end),o.push(a.Replacement.deleteFromTo(c.getStart(t),l))}else o.push(a.Replacement.deleteText(c.getStart(t),1),a.Replacement.deleteFromTo(c.properties[c.properties.length-1].end,c.end));else{var d=u(c);o.push(a.Replacement.appendText(c.getStart(t),d?"...(":"...")),d&&o.push(a.Replacement.appendText(c.end,")"))}}return o}function l(e){return e.kind===i.SyntaxKind.ThisKeyword}function u(e){switch(e.kind){case i.SyntaxKind.ConditionalExpression:case i.SyntaxKind.BinaryExpression:return!0;default:return!1}}t.Rule=o}});
//# sourceMappingURL=52.7ad9b907.chunk.js.map