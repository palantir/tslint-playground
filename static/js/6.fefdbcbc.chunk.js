webpackJsonp([6,115],{1958:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i,o,s=t(1),a=t(843),r=t(54),l=t(1116),p=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return s.__extends(n,e),n.FAILURE_STRING_FACTORY=function(e){return 1===e?"Consecutive blank lines are forbidden":"Exceeds the "+e+" allowed consecutive blank lines"},n.prototype.isEnabled=function(){var n=this.ruleArguments[0];return e.prototype.isEnabled.call(this)&&(void 0===n||n>0)},n.prototype.apply=function(e){var t=this.ruleArguments[0];return this.applyWithFunction(e,c,void 0!==t?t:n.DEFAULT_ALLOWED_BLANKS)},n.DEFAULT_ALLOWED_BLANKS=1,n.metadata={ruleName:"no-consecutive-blank-lines",description:"Disallows one or more blank lines in a row.",hasFix:!0,rationale:l.Utils.dedent(i||(i=s.__makeTemplateObject(["\n            Helps maintain a readable style in your codebase.\n\n            Extra blank lines take up extra space and add little to a semantic understanding of the code.\n            It can be harder to read through files when fewer components can fit into the screen.\n            If you find a file is so large you feel a need to split them up with extra blank lines or comments,\n            consider splitting your file into smaller files.\n        "],["\n            Helps maintain a readable style in your codebase.\n\n            Extra blank lines take up extra space and add little to a semantic understanding of the code.\n            It can be harder to read through files when fewer components can fit into the screen.\n            If you find a file is so large you feel a need to split them up with extra blank lines or comments,\n            consider splitting your file into smaller files.\n        "]))),optionsDescription:l.Utils.dedent(o||(o=s.__makeTemplateObject(["\n            An optional number of maximum allowed sequential blanks can be specified. If no value\n            is provided, a default of "," will be used."],["\n            An optional number of maximum allowed sequential blanks can be specified. If no value\n            is provided, a default of "," will be used."])),n.DEFAULT_ALLOWED_BLANKS),options:{type:"number",minimum:"1"},optionExamples:[!0,[!0,2]],type:"style",typescriptOnly:!1},n}(l.Rules.AbstractRule);function c(e){for(var n=e.sourceFile.text,t=e.options+1,i=[],o=0,s=0,r=a.getLineRanges(e.sourceFile);s<r.length;s++){var c=r[s];0===c.contentLength||-1===n.substr(c.pos,c.contentLength).search(/\S/)?++o===t?i.push({end:c.end,pos:c.pos}):o>t&&(i[i.length-1].end=c.end):o=0}if(0!==i.length)for(var d=p.FAILURE_STRING_FACTORY(e.options),m=u(e.sourceFile),g=function(t){m.some(function(e){return e.pos<t.pos&&t.pos<e.end})||e.addFailureAt(t.pos,1,d,[l.Replacement.deleteFromTo(t.end===n.length?function(e,n){return e[n-2],n-1}(n,t.pos):t.pos,t.end)])},f=0,h=i;f<h.length;f++){g(h[f])}}function u(e){var n=[],t=function(i){if(!(i.kind>=r.SyntaxKind.FirstTemplateToken&&i.kind<=r.SyntaxKind.LastTemplateToken))return r.forEachChild(i,t);n.push({end:i.end,pos:i.getStart(e)})};return r.forEachChild(e,t),n}n.Rule=p,n.getTemplateRanges=u},2101:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i,o=t(1),s=t(843),a=t(54),r=t(1116),l=t(1958),p=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return o.__extends(n,e),n.prototype.apply=function(e){var n=-1!==this.ruleArguments.indexOf("ignore-comments");return this.applyWithFunction(e,c,{ignoreBlankLines:-1!==this.ruleArguments.indexOf("ignore-blank-lines"),ignoreComments:n,ignoreJsDoc:n||-1!==this.ruleArguments.indexOf("ignore-jsdoc"),ignoreTemplates:-1!==this.ruleArguments.indexOf("ignore-template-strings")})},n.metadata={ruleName:"no-trailing-whitespace",description:"Disallows trailing whitespace at the end of a line.",rationale:"Keeps version control diffs clean as it prevents accidental whitespace from being committed.",optionsDescription:r.Utils.dedent(i||(i=o.__makeTemplateObject(['\n            Possible settings are:\n\n            * `"','"`: Allows trailing whitespace in template strings.\n            * `"','"`: Allows trailing whitespace in comments.\n            * `"','"`: Allows trailing whitespace only in JSDoc comments.\n            * `"','"`: Allows trailing whitespace on empty lines.'],['\n            Possible settings are:\n\n            * \\`"','"\\`: Allows trailing whitespace in template strings.\n            * \\`"','"\\`: Allows trailing whitespace in comments.\n            * \\`"','"\\`: Allows trailing whitespace only in JSDoc comments.\n            * \\`"','"\\`: Allows trailing whitespace on empty lines.'])),"ignore-template-strings","ignore-comments","ignore-jsdoc","ignore-blank-lines"),hasFix:!0,options:{type:"array",items:{type:"string",enum:["ignore-comments","ignore-jsdoc","ignore-template-strings","ignore-blank-lines"]}},optionExamples:[!0,[!0,"ignore-comments"],[!0,"ignore-jsdoc"]],type:"style",typescriptOnly:!1},n.FAILURE_STRING="trailing whitespace",n}(r.Rules.AbstractRule);function c(e){for(var n=[],t=e.sourceFile,i=t.text,o=0,c=s.getLineRanges(t);o<c.length;o++){var d=c[o],m=i.substr(d.pos,d.contentLength).match(/\s+$/);null===m||e.options.ignoreBlankLines&&0===m.index||n.push({end:d.pos+d.contentLength,pos:d.pos+m.index})}if(0!==n.length)for(var g=e.options.ignoreTemplates?e.options.ignoreJsDoc?function(e,n){var t=[];return s.forEachTokenWithTrivia(e,function(e,i,o){i>=a.SyntaxKind.FirstTemplateToken&&i<=a.SyntaxKind.LastTemplateToken?t.push(o):n.ignoreComments?i!==a.SyntaxKind.SingleLineCommentTrivia&&i!==a.SyntaxKind.MultiLineCommentTrivia||t.push(o):n.ignoreJsDoc&&u(e,i,o)&&t.push(o)}),t}(t,e.options):l.getTemplateRanges(t):e.options.ignoreJsDoc?function(e,n){var t=[];return s.forEachComment(e,function(e,i){(n.ignoreComments||n.ignoreJsDoc&&u(e,i.kind,i))&&t.push(i)}),t}(t,e.options):[],f=function(n){g.some(function(e){return e.pos<n.pos&&n.pos<e.end})||e.addFailure(n.pos,n.end,p.FAILURE_STRING,r.Replacement.deleteFromTo(n.pos,n.end))},h=0,y=n;h<y.length;h++){f(y[h])}}function u(e,n,t){return n===a.SyntaxKind.MultiLineCommentTrivia&&"*"===e[t.pos+2]&&"*"!==e[t.pos+3]}n.Rule=p}});
//# sourceMappingURL=6.fefdbcbc.chunk.js.map