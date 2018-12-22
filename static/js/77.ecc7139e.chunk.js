webpackJsonp([77],{2098:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,s,r=a(1),i=a(843),n=a(54),p=a(1116),l=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(e,t),e.prototype.apply=function(t){return this.applyWithFunction(t,u,this.ruleArguments)},e.metadata={ruleName:"no-submodule-imports",description:p.Utils.dedent(o||(o=r.__makeTemplateObject(["\n            Disallows importing any submodule."],["\n            Disallows importing any submodule."]))),rationale:p.Utils.dedent(s||(s=r.__makeTemplateObject(["\n            Submodules of some packages are treated as private APIs and the import\n            paths may change without deprecation periods. It's best to stick with\n            top-level package exports."],["\n            Submodules of some packages are treated as private APIs and the import\n            paths may change without deprecation periods. It's best to stick with\n            top-level package exports."]))),optionsDescription:"A list of whitelisted package or submodule names.",options:{type:"array",items:{type:"string"}},optionExamples:[!0,[!0,"rxjs","@angular/platform-browser","@angular/core/testing"]],type:"functionality",typescriptOnly:!1},e.FAILURE_STRING="Submodule import paths from this package are disallowed; import from the root instead",e}(p.Rules.AbstractRule);function u(t){for(var e=0,a=i.findImports(t.sourceFile,63);e<a.length;e++){var o=a[e];!n.isExternalModuleNameRelative(o.text)&&(s=o.text).split("/").length>("@"===s[0]?2:1)&&!d(o.text,t.options)&&t.addFailureAtNode(o,l.FAILURE_STRING)}var s}function d(t,e){for(var a=0,o=e;a<o.length;a++){var s=o[a];if(t===s||t.startsWith(s+"/"))return!0}return!1}e.Rule=l}});
//# sourceMappingURL=77.ecc7139e.chunk.js.map