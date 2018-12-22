webpackJsonp([90],{2083:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n,l,o=t(1),i=t(843),s=t(54),r=t(1116),d=function(e){function a(){return null!==e&&e.apply(this,arguments)||this}return o.__extends(a,e),a.prototype.apply=function(e){return this.applyWithFunction(e,c,{allowDeclarations:-1!==this.ruleArguments.indexOf("allow-declarations")})},a.metadata={ruleName:"no-namespace",description:"Disallows use of internal `module`s and `namespace`s.",descriptionDetails:"This rule still allows the use of `declare module ... {}`",rationale:r.Utils.dedent(n||(n=o.__makeTemplateObject(["\n            ES6-style external modules are the standard way to modularize code.\n            Using `module {}` and `namespace {}` are outdated ways to organize TypeScript code."],["\n            ES6-style external modules are the standard way to modularize code.\n            Using \\`module {}\\` and \\`namespace {}\\` are outdated ways to organize TypeScript code."]))),optionsDescription:r.Utils.dedent(l||(l=o.__makeTemplateObject(["\n            One argument may be optionally provided:\n\n            * `","` allows `declare namespace ... {}` to describe external APIs."],["\n            One argument may be optionally provided:\n\n            * \\`","\\` allows \\`declare namespace ... {}\\` to describe external APIs."])),"allow-declarations"),options:{type:"array",items:{type:"string",enum:["allow-declarations"]},minLength:0,maxLength:1},optionExamples:[!0,[!0,"allow-declarations"]],type:"typescript",typescriptOnly:!0},a.FAILURE_STRING="'namespace' and 'module' are disallowed",a}(r.Rules.AbstractRule);function c(e){if(!e.sourceFile.isDeclarationFile||!e.options.allowDeclarations)for(var a=0,t=e.sourceFile.statements;a<t.length;a++){var n=t[a];n.kind===s.SyntaxKind.ModuleDeclaration&&(n.name.kind===s.SyntaxKind.StringLiteral||i.isNodeFlagSet(n,s.NodeFlags.GlobalAugmentation)||e.options.allowDeclarations&&i.hasModifier(n.modifiers,s.SyntaxKind.DeclareKeyword)||e.addFailureAtNode(n,d.FAILURE_STRING))}}a.Rule=d}});
//# sourceMappingURL=90.a65822e6.chunk.js.map