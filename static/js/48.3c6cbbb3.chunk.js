webpackJsonp([48],{2115:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(1),c=t(843),s=t(55),i=t(1117),o=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return a.__extends(n,e),n.prototype.apply=function(e){return this.applyWithWalker(new h(e,this.ruleName,{brace:-1!==this.ruleArguments.indexOf("check-open-brace"),catch:-1!==this.ruleArguments.indexOf("check-catch"),else:-1!==this.ruleArguments.indexOf("check-else"),finally:-1!==this.ruleArguments.indexOf("check-finally"),whitespace:-1!==this.ruleArguments.indexOf("check-whitespace")}))},n.metadata={ruleName:"one-line",description:"Requires the specified tokens to be on the same line as the expression preceding them.",optionsDescription:i.Utils.dedent(r||(r=a.__makeTemplateObject(['\n            Five arguments may be optionally provided:\n\n            * `"','"` checks that `catch` is on the same line as the closing brace for `try`.\n            * `"','"` checks that `finally` is on the same line as the closing brace for `catch`.\n            * `"','"` checks that `else` is on the same line as the closing brace for `if`.\n            * `"','"` checks that an open brace falls on the same line as its preceding expression.\n            * `"','"` checks preceding whitespace for the specified tokens.'],['\n            Five arguments may be optionally provided:\n\n            * \\`"','"\\` checks that \\`catch\\` is on the same line as the closing brace for \\`try\\`.\n            * \\`"','"\\` checks that \\`finally\\` is on the same line as the closing brace for \\`catch\\`.\n            * \\`"','"\\` checks that \\`else\\` is on the same line as the closing brace for \\`if\\`.\n            * \\`"','"\\` checks that an open brace falls on the same line as its preceding expression.\n            * \\`"','"\\` checks preceding whitespace for the specified tokens.'])),"check-catch","check-finally","check-else","check-open-brace","check-whitespace"),options:{type:"array",items:{type:"string",enum:["check-catch","check-finally","check-else","check-open-brace","check-whitespace"]},minLength:0,maxLength:5},optionExamples:[[!0,"check-catch","check-finally","check-else"]],type:"style",typescriptOnly:!1,hasFix:!0},n.WHITESPACE_FAILURE_STRING="missing whitespace",n}(i.Rules.AbstractRule);n.Rule=o;var r,h=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return a.__extends(n,e),n.prototype.walk=function(e){var n=this,t=function(a){switch(a.kind){case s.SyntaxKind.Block:c.isBlockLike(a.parent)||n.check({pos:a.pos,end:a.statements.pos});break;case s.SyntaxKind.CaseBlock:n.check({pos:a.pos,end:a.clauses.pos});break;case s.SyntaxKind.ModuleBlock:n.check({pos:a.pos,end:a.statements.pos});break;case s.SyntaxKind.EnumDeclaration:n.check({pos:a.name.end,end:a.members.pos});break;case s.SyntaxKind.InterfaceDeclaration:case s.SyntaxKind.ClassDeclaration:case s.SyntaxKind.ClassExpression:var i=c.getChildOfKind(a,s.SyntaxKind.OpenBraceToken,e);void 0!==i&&n.check(i);break;case s.SyntaxKind.IfStatement:var o=a,r=o.thenStatement,h=o.elseStatement;void 0!==h&&r.kind===s.SyntaxKind.Block&&n.check({pos:r.end,end:h.pos},"else");break;case s.SyntaxKind.TryStatement:var l=a,p=l.finallyBlock,d=l.catchClause,k=l.tryBlock;void 0!==d?(n.check(d.getChildAt(0,e),"catch"),void 0!==p&&n.check({pos:d.end,end:p.pos},"finally")):void 0!==p&&n.check({pos:k.end,end:p.pos},"finally");break;case s.SyntaxKind.BinaryExpression:var y=a,u=y.operatorToken,f=y.right;u.kind===s.SyntaxKind.EqualsToken&&c.isObjectLiteralExpression(f)&&n.check({pos:f.pos,end:f.properties.pos});break;case s.SyntaxKind.VariableDeclaration:var m=a.initializer;void 0!==m&&c.isObjectLiteralExpression(m)&&n.check({pos:m.pos,end:m.properties.pos});break;case s.SyntaxKind.TypeAliasDeclaration:var b=a.type;b.kind!==s.SyntaxKind.MappedType&&b.kind!==s.SyntaxKind.TypeLiteral||n.check(b.getChildAt(0,e))}return s.forEachChild(a,t)};return s.forEachChild(e,t)},n.prototype.check=function(e,n){var t=e.end-(void 0===n?1:n.length);this.options[void 0===n?"brace":n]&&!c.isSameLine(this.sourceFile,e.pos,t)?this.addFailure(t,e.end,"misplaced "+(void 0===n?"opening brace":"'"+n+"'"),i.Replacement.replaceFromTo(e.pos,t,this.options.whitespace?" ":"")):this.options.whitespace&&e.pos===t&&this.addFailure(t,e.end,o.WHITESPACE_FAILURE_STRING,i.Replacement.appendText(e.pos," "))},n}(i.AbstractWalker)}});
//# sourceMappingURL=48.3c6cbbb3.chunk.js.map