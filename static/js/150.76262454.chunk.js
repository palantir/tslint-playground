webpackJsonp([150],{1957:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e(1),i=e(843),a=e(55),o=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(n,t),n.FAILURE_STRING=function(t){return"All '"+t+"' signatures should be adjacent"},n.prototype.apply=function(t){return this.applyWithFunction(t,s)},n.metadata={ruleName:"adjacent-overload-signatures",description:"Enforces function overloads to be consecutive.",optionsDescription:"Not configurable.",options:null,optionExamples:[!0],rationale:"Improves readability and organization by grouping naturally related items together.",type:"typescript",typescriptOnly:!0},n}(e(1117).Rules.AbstractRule);function s(t){var n=t.sourceFile;return e(n.statements),a.forEachChild(n,function t(n){switch(n.kind){case a.SyntaxKind.ModuleBlock:e(n.statements);break;case a.SyntaxKind.InterfaceDeclaration:case a.SyntaxKind.ClassDeclaration:case a.SyntaxKind.TypeLiteral:r(u(n.members,function(t){return i.isSignatureDeclaration(t)?d(t):void 0}))}return a.forEachChild(n,t)});function e(t){r(u(t,function(t){return i.isFunctionDeclaration(t)&&void 0!==t.name?t.name.text:void 0}))}function r(n){for(var e=0,r=n;e<r.length;e++){var i=r[e];t.addFailureAtNode(i,o.FAILURE_STRING(c(i)))}}}function u(t,n){for(var e,r=[],i=new Set,o=0,s=t;o<s.length;o++){var u=s[o];if(u.kind!==a.SyntaxKind.SemicolonClassElement){var c=n(u);void 0!==c?(i.has(c)&&e!==c&&r.push(u),i.add(c),e=c):e=void 0}}return r}function c(t){var n=l(t);return"string"===typeof n?n:void 0===n?"<unknown>":n.name}function d(t){var n=l(t);if(void 0!==n){var e="string"===typeof n?[!1,n]:[n.computed,n.name],r=e[0],o=e[1],s=i.hasModifier(t.modifiers,a.SyntaxKind.StaticKeyword);return(r?"0":"1")+(s?"0":"1")+o}}function l(t){switch(t.kind){case a.SyntaxKind.ConstructSignature:case a.SyntaxKind.Constructor:return"constructor";case a.SyntaxKind.CallSignature:return"()";default:var n=t.name;if(void 0===n)return;switch(n.kind){case a.SyntaxKind.Identifier:return n.text;case a.SyntaxKind.ComputedPropertyName:var e=n.expression;return i.isLiteralExpression(e)?e.text:{name:e.getText(),computed:!0};default:return i.isLiteralExpression(n)?n.text:void 0}}}n.Rule=o,n.getOverloadKey=d}});
//# sourceMappingURL=150.76262454.chunk.js.map