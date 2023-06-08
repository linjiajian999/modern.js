(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_configure_app_source_resolve-extension-prefix_mdx"],{10632:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return c}});var s=r("9880"),o=r("23169");function i(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",a:"a",h3:"h3",pre:"pre",h4:"h4"},(0,o.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"类型："})," ",(0,s.jsx)(n.code,{children:"string | Record<BuilderTarget, string>"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"默认值："})," ",(0,s.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["用于为 ",(0,s.jsx)(n.a,{href:"https://webpack.js.org/configuration/resolve/#resolveextensions",target:"_blank",rel:"noopener noreferrer",children:"resolve.extensions"})," 添加统一的前缀。"]}),"\n",(0,s.jsx)(n.p,{children:"如果多个文件拥有相同的名称，但具有不同的文件后缀，Builder 会根据 extensions 数组的顺序进行识别，解析数组中第一个被识别的文件，并跳过其余文件。"}),"\n",(0,s.jsxs)(n.h3,{id:"示例",children:["示例",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["下面是配置 ",(0,s.jsx)(n.code,{children:".web"})," 前缀的例子。"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    resolveExtensionPrefix: '.web',\n  },\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"配置完成后，extensions 数组会发生以下变化："}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// 配置前\nconst extensions = ['.js', '.ts', ...];\n\n// 配置后\nconst extensions = ['.web.js', '.js', '.web.ts' , '.ts', ...];\n"})}),"\n",(0,s.jsxs)(n.p,{children:["在代码中 ",(0,s.jsx)(n.code,{children:"import './foo'"})," 时，会优先识别 ",(0,s.jsx)(n.code,{children:"foo.web.js"})," 文件，再识别 ",(0,s.jsx)(n.code,{children:"foo.js"})," 文件。"]}),"\n",(0,s.jsxs)(n.h4,{id:"根据产物类型设置",children:["根据产物类型设置",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#根据产物类型设置",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["当你同时构建多种类型的产物时，你可以为不同的产物类型设置不同的 extension 前缀。此时，你需要把 ",(0,s.jsx)(n.code,{children:"resolveExtensionPrefix"})," 设置为一个对象，对象的 key 为对应的产物类型。"]}),"\n",(0,s.jsxs)(n.p,{children:["比如为 ",(0,s.jsx)(n.code,{children:"web"})," 和 ",(0,s.jsx)(n.code,{children:"node"})," 设置不同的 extension 前缀："]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"export default {\n  output: {\n    source: {\n      resolveExtensionPrefix: {\n        web: '.web',\n        node: '.node',\n      },\n    },\n  },\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["在代码中 ",(0,s.jsx)(n.code,{children:"import './foo'"})," 时，对于 node 产物，会优先识别 ",(0,s.jsx)(n.code,{children:"foo.node.js"})," 文件，而对于 web 产物，则会优先识别 ",(0,s.jsx)(n.code,{children:"foo.web.js"})," 文件。"]})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(i,e)})):i(e)}},50108:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return c},title:function(){return d},toc:function(){return t},default:function(){return a}});var s=r("9880"),o=r("23169"),i=r.ir(r("10632")),c={sidebar_label:"resolveExtensionPrefix"},d="source.resolveExtensionPrefix",t=[];function l(e){var n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,o.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"sourceresolveextensionprefix",children:["source.resolveExtensionPrefix",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#sourceresolveextensionprefix",children:"#"})]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive tip",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,s.jsx)(n.div,{className:"modern-directive-content",children:(0,s.jsxs)(n.p,{children:["该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,s.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-source.html#sourceresolveextensionprefix",target:"_blank",rel:"noopener noreferrer",children:"source.resolveExtensionPrefix"}),"。\n"]})})]}),"\n","\n",(0,s.jsx)(i.default,{})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,o.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}}}]);