webpackJsonp([131],{2029:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,a=n(1),i=n(843),r=n(55),s=n(1117),c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a.__extends(t,e),t.prototype.apply=function(e){return this.applyWithFunction(e,l)},t.metadata={ruleName:"forin",description:"Requires a `for ... in` statement to be filtered with an `if` statement.",rationale:s.Utils.dedent(o||(o=a.__makeTemplateObject(["\n            ```ts\n            for (let key in someObject) {\n                if (someObject.hasOwnProperty(key)) {\n                    // code here\n                }\n            }\n            ```\n            Prevents accidental iteration over properties inherited from an object's prototype.\n            See [MDN's `for...in`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)\n            documentation for more information about `for...in` loops.\n\n            Also consider using a [`Map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)\n            or [`Set`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)\n            if you're storing collections of objects.\n            Using `Object`s can cause occasional edge case bugs, such as if a key is named \"hasOwnProperty\".\n        "],["\n            \\`\\`\\`ts\n            for (let key in someObject) {\n                if (someObject.hasOwnProperty(key)) {\n                    // code here\n                }\n            }\n            \\`\\`\\`\n            Prevents accidental iteration over properties inherited from an object's prototype.\n            See [MDN's \\`for...in\\`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)\n            documentation for more information about \\`for...in\\` loops.\n\n            Also consider using a [\\`Map\\`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)\n            or [\\`Set\\`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)\n            if you're storing collections of objects.\n            Using \\`Object\\`s can cause occasional edge case bugs, such as if a key is named \"hasOwnProperty\".\n        "]))),optionsDescription:"Not configurable.",options:null,optionExamples:[!0],type:"functionality",typescriptOnly:!1},t.FAILURE_STRING="for (... in ...) statements must be filtered with an if statement",t}(s.Rules.AbstractRule);function l(e){return r.forEachChild(e.sourceFile,function t(n){return i.isForInStatement(n)&&i.isBlock(n.statement)&&!function(e){var t=e.statements;switch(t.length){case 0:return!0;case 1:return t[0].kind===r.SyntaxKind.IfStatement;default:return t[0].kind===r.SyntaxKind.IfStatement&&((n=t[0].thenStatement).kind===r.SyntaxKind.ContinueStatement||i.isBlock(n)&&1===n.statements.length&&n.statements[0].kind===r.SyntaxKind.ContinueStatement)}var n}(n.statement)&&e.addFailureAtNode(n,c.FAILURE_STRING),r.forEachChild(n,t)})}t.Rule=c}});
//# sourceMappingURL=131.d457553f.chunk.js.map