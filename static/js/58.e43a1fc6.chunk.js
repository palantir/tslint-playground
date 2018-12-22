webpackJsonp([58],{2123:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),n=r(843),i=r(54),s=r(1116),a=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o.__extends(t,e),t.prototype.apply=function(e){return this.applyWithWalker(new m(e,this.ruleName,(t=this.ruleArguments,r=t[0],n=(o=void 0===r?{}:r)["grouped-imports"],i=void 0!==n&&n,s=o["import-sources-order"],a=void 0===s?"case-insensitive":s,c=o["named-imports-order"],u=void 0===c?"case-insensitive":c,l=o["module-source-path"],d=void 0===l?"full":l,{groupedImports:i,importSourcesOrderTransform:p.get(a),moduleSourcePath:p.get(d),namedImportsOrderTransform:p.get(u)})));var t,r,o,n,i,s,a,c,u,l,d},t.metadata={ruleName:"ordered-imports",description:"Requires that import statements be alphabetized and grouped.",descriptionDetails:s.Utils.dedent(u||(u=o.__makeTemplateObject(['\n            Enforce a consistent ordering for ES6 imports:\n            - Named imports must be alphabetized (i.e. "import {A, B, C} from "foo";")\n                - The exact ordering can be controlled by the named-imports-order option.\n                - "longName as name" imports are ordered by "longName".\n            - Import sources must be alphabetized within groups, i.e.:\n                    import * as foo from "a";\n                    import * as bar from "b";\n            - Groups of imports are delineated by blank lines. You can use these to group imports\n                however you like, e.g. by first- vs. third-party or thematically or can you can\n                enforce a grouping of third-party, parent directories and the current directory.'],['\n            Enforce a consistent ordering for ES6 imports:\n            - Named imports must be alphabetized (i.e. "import {A, B, C} from "foo";")\n                - The exact ordering can be controlled by the named-imports-order option.\n                - "longName as name" imports are ordered by "longName".\n            - Import sources must be alphabetized within groups, i.e.:\n                    import * as foo from "a";\n                    import * as bar from "b";\n            - Groups of imports are delineated by blank lines. You can use these to group imports\n                however you like, e.g. by first- vs. third-party or thematically or can you can\n                enforce a grouping of third-party, parent directories and the current directory.']))),hasFix:!0,optionsDescription:s.Utils.dedent(l||(l=o.__makeTemplateObject(['\n            You may set the `"import-sources-order"` option to control the ordering of source\n            imports (the `"foo"` in `import {A, B, C} from "foo"`).\n\n            Possible values for `"import-sources-order"` are:\n\n            * `"case-insensitive\'`: Correct order is `"Bar"`, `"baz"`, `"Foo"`. (This is the default.)\n            * `"lowercase-first"`: Correct order is `"baz"`, `"Bar"`, `"Foo"`.\n            * `"lowercase-last"`: Correct order is `"Bar"`, `"Foo"`, `"baz"`.\n            * `"any"`: Allow any order.\n\n            You may set the `"grouped-imports"` option to control the grouping of source\n            imports (the `"foo"` in `import {A, B, C} from "foo"`).\n\n            Possible values for `"grouped-imports"` are:\n\n            * `false`: Do not enforce grouping. (This is the default.)\n            * `true`: Group source imports by `"bar"`, `"../baz"`, `"./foo"`.\n\n            You may set the `"named-imports-order"` option to control the ordering of named\n            imports (the `{A, B, C}` in `import {A, B, C} from "foo"`).\n\n            Possible values for `"named-imports-order"` are:\n\n            * `"case-insensitive\'`: Correct order is `{A, b, C}`. (This is the default.)\n            * `"lowercase-first"`: Correct order is `{b, A, C}`.\n            * `"lowercase-last"`: Correct order is `{A, C, b}`.\n            * `"any"`: Allow any order.\n\n            You may set the `"module-source-path"` option to control the ordering of imports based full path\n            or just the module name\n\n            Possible values for `"module-source-path"` are:\n\n            * `"full\'`: Correct order is  `"./a/Foo"`, `"./b/baz"`, `"./c/Bar"`. (This is the default.)\n            * `"basename"`: Correct order is `"./c/Bar"`, `"./b/baz"`, `"./a/Foo"`.\n\n        '],['\n            You may set the \\`"import-sources-order"\\` option to control the ordering of source\n            imports (the \\`"foo"\\` in \\`import {A, B, C} from "foo"\\`).\n\n            Possible values for \\`"import-sources-order"\\` are:\n\n            * \\`"case-insensitive\'\\`: Correct order is \\`"Bar"\\`, \\`"baz"\\`, \\`"Foo"\\`. (This is the default.)\n            * \\`"lowercase-first"\\`: Correct order is \\`"baz"\\`, \\`"Bar"\\`, \\`"Foo"\\`.\n            * \\`"lowercase-last"\\`: Correct order is \\`"Bar"\\`, \\`"Foo"\\`, \\`"baz"\\`.\n            * \\`"any"\\`: Allow any order.\n\n            You may set the \\`"grouped-imports"\\` option to control the grouping of source\n            imports (the \\`"foo"\\` in \\`import {A, B, C} from "foo"\\`).\n\n            Possible values for \\`"grouped-imports"\\` are:\n\n            * \\`false\\`: Do not enforce grouping. (This is the default.)\n            * \\`true\\`: Group source imports by \\`"bar"\\`, \\`"../baz"\\`, \\`"./foo"\\`.\n\n            You may set the \\`"named-imports-order"\\` option to control the ordering of named\n            imports (the \\`{A, B, C}\\` in \\`import {A, B, C} from "foo"\\`).\n\n            Possible values for \\`"named-imports-order"\\` are:\n\n            * \\`"case-insensitive\'\\`: Correct order is \\`{A, b, C}\\`. (This is the default.)\n            * \\`"lowercase-first"\\`: Correct order is \\`{b, A, C}\\`.\n            * \\`"lowercase-last"\\`: Correct order is \\`{A, C, b}\\`.\n            * \\`"any"\\`: Allow any order.\n\n            You may set the \\`"module-source-path"\\` option to control the ordering of imports based full path\n            or just the module name\n\n            Possible values for \\`"module-source-path"\\` are:\n\n            * \\`"full\'\\`: Correct order is  \\`"./a/Foo"\\`, \\`"./b/baz"\\`, \\`"./c/Bar"\\`. (This is the default.)\n            * \\`"basename"\\`: Correct order is \\`"./c/Bar"\\`, \\`"./b/baz"\\`, \\`"./a/Foo"\\`.\n\n        ']))),options:{type:"object",properties:{"grouped-imports":{type:"boolean"},"import-sources-order":{type:"string",enum:["case-insensitive","lowercase-first","lowercase-last","any"]},"named-imports-order":{type:"string",enum:["case-insensitive","lowercase-first","lowercase-last","any"]},"module-source-path":{type:"string",enum:["full","basename"]}},additionalProperties:!1},optionExamples:[!0,[!0,{"import-sources-order":"lowercase-last","named-imports-order":"lowercase-first"}]],type:"style",typescriptOnly:!1},t.IMPORT_SOURCES_NOT_GROUPED="Import sources of different groups must be sorted by: libraries, parent directories, current directory.",t.IMPORT_SOURCES_UNORDERED="Import sources within a group must be alphabetized.",t.NAMED_IMPORTS_UNORDERED="Named imports must be alphabetized.",t.IMPORT_SOURCES_OF_SAME_TYPE_NOT_IN_ONE_GROUP="Import sources of the same type (package, same folder, different folder) must be grouped together.",t}(s.Rules.AbstractRule);t.Rule=a;var c,p=new Map([["any",function(){return""}],["case-insensitive",function(e){return e.toLowerCase()}],["lowercase-first",function(e){return Array.from(e).map(function(e){return e>="a"&&e<="z"?e.toUpperCase():e>="A"&&e<="Z"?e.toLowerCase():e}).join("")}],["lowercase-last",function(e){return e}],["full",function(e){return e}],["basename",function(e){if(!i.isExternalModuleNameRelative(e))return e;var t=e.lastIndexOf("/");return-1===t?e:e.substr(t+1)}]]);!function(e){e[e.LIBRARY_IMPORT=1]="LIBRARY_IMPORT",e[e.PARENT_DIRECTORY_IMPORT=2]="PARENT_DIRECTORY_IMPORT",e[e.CURRENT_DIRECTORY_IMPORT=3]="CURRENT_DIRECTORY_IMPORT"}(c||(c={}));var u,l,m=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.importsBlocks=[new d],t.nextType=c.LIBRARY_IMPORT,t}return o.__extends(t,e),Object.defineProperty(t.prototype,"currentImportsBlock",{get:function(){return this.importsBlocks[this.importsBlocks.length-1]},enumerable:!0,configurable:!0}),t.prototype.walk=function(e){for(var t=0,r=e.statements;t<r.length;t++){var o=r[t];this.checkStatement(o)}this.endBlock(),this.options.groupedImports&&this.checkBlocksGrouping()},t.prototype.checkStatement=function(e){if((!n.isImportDeclaration(e)&&!n.isImportEqualsDeclaration(e)||/\r?\n\r?\n/.test(this.sourceFile.text.slice(e.getFullStart(),e.getStart(this.sourceFile))))&&this.endBlock(),n.isImportDeclaration(e))this.checkImportDeclaration(e);else if(n.isImportEqualsDeclaration(e))this.checkImportEqualsDeclaration(e);else if(n.isModuleDeclaration(e)){var t=function(e){var t=e.body;for(;void 0!==t&&t.kind===i.SyntaxKind.ModuleDeclaration;)t=t.body;return void 0!==t&&t.kind===i.SyntaxKind.ModuleBlock?t:void 0}(e);if(void 0!==t){for(var r=0,o=t.statements;r<o.length;r++){var s=o[r];this.checkStatement(s)}this.endBlock()}}},t.prototype.checkImportDeclaration=function(e){if(n.isStringLiteral(e.moduleSpecifier)){var t=h(e.moduleSpecifier.text);this.checkSource(t,e);var r=e.importClause;void 0!==r&&void 0!==r.namedBindings&&n.isNamedImports(r.namedBindings)&&this.checkNamedImports(r.namedBindings)}},t.prototype.checkImportEqualsDeclaration=function(e){var t=e.moduleReference;if(n.isExternalModuleReference(t)){var r=t.expression;if(void 0!==r&&n.isStringLiteral(r)){var o=h(r.text);this.checkSource(o,e)}}},t.prototype.checkSource=function(e,t){var r,o="."===(r=e).charAt(0)?"."===r.charAt(1)?c.PARENT_DIRECTORY_IMPORT:c.CURRENT_DIRECTORY_IMPORT:c.LIBRARY_IMPORT,n=this.options.importSourcesOrderTransform(e),i=this.options.moduleSourcePath(n),s=this.currentImportsBlock.getLastImportSource();this.currentImportsBlock.addImportDeclaration(this.sourceFile,t,i,o),null!==s&&-1===f(i,s)&&(this.lastFix=[],this.addFailureAtNode(t,a.IMPORT_SOURCES_UNORDERED,this.lastFix))},t.prototype.endBlock=function(){if(void 0!==this.lastFix){var e=this.currentImportsBlock.getReplacement();void 0!==e&&this.lastFix.push(e),this.lastFix=void 0}this.importsBlocks.push(new d)},t.prototype.checkNamedImports=function(e){var t=this,r=e.elements,o=function(e,t){for(var r=1;r<e.length;r++)if(t(e[r].getText())<t(e[r-1].getText()))return[e[r-1],e[r]];return}(r,this.options.namedImportsOrderTransform);if(void 0!==o){for(var n=o[0],i=o[1],s=R(r,function(e){return t.options.namedImportsOrderTransform(e.getText())}).map(function(e){return e.getText()}),c=r.length-1;c>=0;c--){var p=r[c].getStart(),u=r[c].getText().length;this.currentImportsBlock.replaceNamedImports(p,u,s[c])}this.lastFix=[],this.addFailure(n.getStart(),i.getEnd(),a.NAMED_IMPORTS_UNORDERED,this.lastFix)}},t.prototype.checkBlocksGrouping=function(){this.checkBlocksUniqueness(),this.importsBlocks.some(this.checkBlockGroups,this)},t.prototype.checkBlocksUniqueness=function(){var e=this,t=new Map([[c.LIBRARY_IMPORT,!1],[c.PARENT_DIRECTORY_IMPORT,!1],[c.CURRENT_DIRECTORY_IMPORT,!1]]);this.importsBlocks.filter(function(e){return e.getImportDeclarations().length>0}).forEach(function(r){var o=r.getImportDeclarations()[0];t.get(o.type)?e.addFailureAtNode(o.node,a.IMPORT_SOURCES_OF_SAME_TYPE_NOT_IN_ONE_GROUP):t.set(o.type,!0)})},t.prototype.checkBlockGroups=function(e){var t=this.getOddImportDeclaration(e);return void 0!==t&&(this.addFailureAtNode(t.node,a.IMPORT_SOURCES_NOT_GROUPED,this.getReplacements()),!0)},t.prototype.getOddImportDeclaration=function(e){var t=e.getImportDeclarations();if(0!==t.length){var r=t[0].type;return r<this.nextType?t[0]:(this.nextType=r,t.find(function(e){return e.type!==r}))}},t.prototype.getReplacements=function(){var e,t=this.importsBlocks.map(function(e){return e.getImportDeclarations()}).filter(function(e){return e.length>0}),r=(e=[]).concat.apply(e,t),o=this.getReplacementsForExistingImports(t),n=0===r.length?0:r[0].nodeStartOffset;return o.push(s.Replacement.appendText(n,this.getGroupedImports(r))),o},t.prototype.getReplacementsForExistingImports=function(e){var t=this;return e.map(function(r,o){var n=r[0].nodeStartOffset;if(o>0){var i=e[o-1],a=i[i.length-1];/[\r\n]+/.test(t.sourceFile.text.slice(a.nodeEndOffset,n))&&(n=a.nodeEndOffset)}return s.Replacement.deleteFromTo(n,r[r.length-1].nodeEndOffset)})},t.prototype.getGroupedImports=function(e){return[c.LIBRARY_IMPORT,c.PARENT_DIRECTORY_IMPORT,c.CURRENT_DIRECTORY_IMPORT].map(function(t){return g(e.filter(function(e){return e.type===t}))}).filter(function(e){return e.length>0}).join(this.getEolChar())},t.prototype.getEolChar=function(){var e,t=this.sourceFile.getLineEndOfPosition(0);return t>0&&(t>1&&"\r"===this.sourceFile.text[t-1]?e="\r\n":"\n"===this.sourceFile.text[t]&&(e="\n")),void 0===e?i.sys.newLine:e},t}(s.AbstractWalker),d=function(){function e(){this.importDeclarations=[]}return e.prototype.addImportDeclaration=function(e,t,r,o){var n=this.getStartOffset(t),i=this.getEndOffset(e,t),s=e.text.substring(n,i);n>t.getStart()||0===i?this.importDeclarations=[]:this.importDeclarations.push({node:t,nodeEndOffset:i,nodeStartOffset:n,sourcePath:r,text:s,type:o})},e.prototype.getImportDeclarations=function(){return this.importDeclarations},e.prototype.replaceNamedImports=function(e,t,r){var o=this.getLastImportDeclaration();if(void 0!==o){var n=e-o.nodeStartOffset;if(n<0||n+t>o.node.getEnd())throw new Error("Unexpected named import position");var i=o.text;o.text=i.substring(0,n)+r+i.substring(n+t)}},e.prototype.getLastImportSource=function(){return 0===this.importDeclarations.length?null:this.getLastImportDeclaration().sourcePath},e.prototype.getReplacement=function(){if(0!==this.importDeclarations.length){var e=g(this.importDeclarations),t=this.importDeclarations[0].nodeStartOffset,r=this.getLastImportDeclaration().nodeEndOffset;return new s.Replacement(t,r-t,e)}},e.prototype.getStartOffset=function(e){return 0===this.importDeclarations.length?e.getStart():this.getLastImportDeclaration().nodeEndOffset},e.prototype.getEndOffset=function(e,t){return e.text.indexOf("\n",t.end)+1},e.prototype.getLastImportDeclaration=function(){return this.importDeclarations[this.importDeclarations.length-1]},e}();function f(e,t){function r(e){return"."===e[0]||"/"===e[0]}return r(e)&&!r(t)?1:!r(e)&&r(t)?-1:e>t?1:e<t?-1:0}function h(e){return e.length>1&&("'"===e[0]||'"'===e[0])&&(e=e.substr(1,e.length-2)),e}function g(e){return R(e.slice(),function(e){return e.sourcePath}).map(function(e){return e.text}).join("")}function R(e,t){return e.slice().sort(function(e,r){return f(t(e),t(r))})}}});
//# sourceMappingURL=58.e43a1fc6.chunk.js.map