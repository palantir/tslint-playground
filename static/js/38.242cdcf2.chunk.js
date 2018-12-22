webpackJsonp([38],{2148:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r,l=i(1),a=i(843),s=i(54),o=i(1116),p=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return l.__extends(t,e),t.prototype.apply=function(e){return this.applyWithFunction(e,c,this.getRuleOptions())},t.prototype.getRuleOptions=function(){return void 0===this.ruleArguments[0]?{}:this.ruleArguments[0]},t.metadata={ruleName:"type-literal-delimiter",description:o.Utils.dedent(r||(r=l.__makeTemplateObject(["\n            Checks that type literal members are separated by semicolons.\n            Enforces a trailing semicolon for multiline type literals."],["\n            Checks that type literal members are separated by semicolons.\n            Enforces a trailing semicolon for multiline type literals."]))),optionsDescription:'`{singleLine: "always"}` enforces semicolon for one liners',options:{type:"object",properties:(n={},n.singleLine={type:"string",enum:["always","never"]},n)},hasFix:!0,optionExamples:[!0],type:"style",typescriptOnly:!0},t.FAILURE_STRING_MISSING="Expected type literal to use ';' to separate members.",t.FAILURE_STRING_COMMA="Expected type literal to use ';' instead of ','.",t.FAILURE_STRING_TRAILING="Did not expect single-line type literal to have a trailing ';'.",t}(o.Rules.AbstractRule);function c(e){var t=e.sourceFile,i=e.options;s.forEachChild(t,function n(r){a.isTypeLiteralNode(r)&&function(n){n.members.forEach(function(r,l){var s=r.end-1,c="always"!==i.singleLine&&(l===n.members.length-1&&a.isSameLine(t,n.getStart(t),n.getEnd())),u=t.text[s];switch(u){case";":c&&e.addFailureAt(s,1,p.FAILURE_STRING_TRAILING,o.Replacement.replaceFromTo(s,s+1,""));break;case",":e.addFailureAt(s,1,p.FAILURE_STRING_COMMA,o.Replacement.replaceFromTo(s,s+1,";"));break;default:c||e.addFailureAt(s,1,p.FAILURE_STRING_MISSING,o.Replacement.replaceFromTo(s+1,s+1,";"))}})}(r),s.forEachChild(r,n)})}t.Rule=p}});
//# sourceMappingURL=38.242cdcf2.chunk.js.map