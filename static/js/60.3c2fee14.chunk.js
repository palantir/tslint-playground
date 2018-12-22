webpackJsonp([60],{2118:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,r=n(1),a=n(843),o=n(54),s=n(1116),d=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),t.prototype.apply=function(e){return this.applyWithFunction(e,-1===this.ruleArguments.indexOf("never")?c:l)},t.metadata={ruleName:"object-literal-shorthand",description:"Enforces/disallows use of ES6 object literal shorthand.",hasFix:!0,optionsDescription:s.Utils.dedent(i||(i=r.__makeTemplateObject(["\n        If the 'never' option is provided, any shorthand object literal syntax will cause a failure."],["\n        If the \\'never\\' option is provided, any shorthand object literal syntax will cause a failure."]))),options:{type:"string",enum:["never"]},optionExamples:[!0,[!0,"never"]],type:"style",typescriptOnly:!1},t.LONGHAND_PROPERTY="Expected property shorthand in object literal ",t.LONGHAND_METHOD="Expected method shorthand in object literal ",t.SHORTHAND_ASSIGNMENT="Shorthand property assignments have been disallowed.",t}(s.Rules.AbstractRule);function l(e){return o.forEachChild(e.sourceFile,function t(n){return a.isShorthandPropertyAssignment(n)?e.addFailureAtNode(n.name,d.SHORTHAND_ASSIGNMENT,s.Replacement.appendText(n.getStart(e.sourceFile),n.name.text+": ")):a.isMethodDeclaration(n)&&n.parent.kind===o.SyntaxKind.ObjectLiteralExpression&&e.addFailureAtNode(n.name,d.SHORTHAND_ASSIGNMENT,function(e,t){var n=void 0!==e.asteriskToken,i=a.hasModifier(e.modifiers,o.SyntaxKind.AsyncKeyword);return s.Replacement.replaceFromTo(e.getStart(t),e.name.end,e.name.getText(t)+":"+(i?" async":"")+" function"+(n?"*":""))}(n,e.sourceFile)),o.forEachChild(n,t)})}function c(e){return o.forEachChild(e.sourceFile,function t(n){if(a.isPropertyAssignment(n))if(n.name.kind===o.SyntaxKind.Identifier&&a.isIdentifier(n.initializer)&&n.name.text===n.initializer.text)e.addFailureAtNode(n,d.LONGHAND_PROPERTY+"('{"+n.name.text+"}').",s.Replacement.deleteFromTo(n.name.end,n.end));else if(a.isFunctionExpression(n.initializer)&&void 0===n.initializer.name){var i=function(e,t,n){var i=e.getStart(n),r=s.Replacement.deleteFromTo(e.end,a.getChildOfKind(t,o.SyntaxKind.OpenParenToken).pos),d="";void 0!==t.asteriskToken&&(d="*");a.hasModifier(t.modifiers,o.SyntaxKind.AsyncKeyword)&&(d="async "+d);""!==d&&(r=[r,s.Replacement.appendText(i,d)]);return[d+n.text.substring(i,e.end),r]}(n.name,n.initializer,e.sourceFile),r=i[0],l=i[1];e.addFailure(n.getStart(e.sourceFile),a.getChildOfKind(n.initializer,o.SyntaxKind.OpenParenToken,e.sourceFile).pos,d.LONGHAND_METHOD+"('{"+r+"() {...}}').",l)}return o.forEachChild(n,t)})}t.Rule=d}});
//# sourceMappingURL=60.3c2fee14.chunk.js.map