(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_troubleshooting_cli_mdx"],{14553:function(n,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});!function(n,e){for(var r in e)Object.defineProperty(n,r,{enumerable:!0,get:e[r]})}(e,{frontmatter:function(){return d},title:function(){return p},toc:function(){return o},default:function(){return a}});var s=r("9880"),c=r("23169"),d={sidebar_position:2},p="命令行问题",o=[{text:"使用 pnpm 时无法正确传递命令行参数？",depth:3,id:"使用-pnpm-时无法正确传递命令行参数？"}];function i(n){var e=Object.assign({h1:"h1",a:"a",h3:"h3",p:"p",code:"code",pre:"pre",strong:"strong"},(0,c.useMDXComponents)(),n.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.h1,{id:"命令行问题",children:["命令行问题",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#命令行问题",children:"#"})]}),"\n",(0,s.jsxs)(e.h3,{id:"使用-pnpm-时无法正确传递命令行参数？",children:["使用 pnpm 时无法正确传递命令行参数？",(0,s.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#使用-pnpm-时无法正确传递命令行参数？",children:"#"})]}),"\n",(0,s.jsx)(e.p,{children:"pnpm v6 和 pnpm v7 版本在执行命令时使用姿势不完全一致，需要注意以下事项："}),"\n",(0,s.jsx)(e.p,{children:"pnpm v7："}),"\n",(0,s.jsxs)(e.p,{children:["在使用 pnpm 调用 ",(0,s.jsx)(e.code,{children:"package.json"})," 中的命令时，如果需要传递参数至 pnpm，需要将参数放到命令前。"]}),"\n",(0,s.jsxs)(e.p,{children:["例如使用 pnpm ",(0,s.jsx)(e.code,{children:"--filter"})," 参数执行 prepare 命令："]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:'pnpm run --filter "./packages/**" prepare\n'})}),"\n",(0,s.jsx)(e.p,{children:"如果需要传递参数至命令，需要将参数放到命令后。"}),"\n",(0,s.jsxs)(e.p,{children:["例如，在如下 ",(0,s.jsx)(e.code,{children:"package.json"})," 配置中："]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'{\n  "scripts": {\n    "command": "modern command"\n  }\n}\n'})}),"\n",(0,s.jsx)(e.p,{children:"执行 command 命令时携带参数方式为："}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"pnpm run command --options\n"})}),"\n",(0,s.jsx)(e.p,{children:"pnpm v6:"}),"\n",(0,s.jsxs)(e.p,{children:["在如下 ",(0,s.jsx)(e.code,{children:"package.json"})," 配置中："]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'{\n  "scripts": {\n    "command": "modern command"\n  }\n}\n'})}),"\n",(0,s.jsxs)(e.p,{children:["当需要执行 ",(0,s.jsx)(e.code,{children:"modern command --option"}),"："]}),"\n",(0,s.jsxs)(e.p,{children:["使用 pnpm 时，需要执行 ",(0,s.jsx)(e.code,{children:"pnpm run command -- --option"}),"。"]}),"\n",(0,s.jsxs)(e.p,{children:["这是因为 pnpm 对于命令参数的处理与 Yarn 并不相同，但是与 npm 类似：在不加 ",(0,s.jsx)(e.code,{children:"--"})," 字符串的时候，传递的是 pnpm 的参数；在使用 ",(0,s.jsx)(e.code,{children:"--"})," 字符串的时候，传递的是执行脚本的参数。"]}),"\n",(0,s.jsxs)(e.p,{children:["在上述例子里参数 ",(0,s.jsx)(e.code,{children:"--option"})," 传递给了 ",(0,s.jsx)(e.code,{children:"modern command"}),"。如果执行 ",(0,s.jsx)(e.code,{children:"pnpm run command --option"}),"，则参数 ",(0,s.jsx)(e.code,{children:"--option"})," 将传递给 pnpm。"]}),"\n",(0,s.jsx)(e.p,{children:"总结来说："}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"在使用 pnpm v7 时，如果传递参数给 pnpm，需要将参数放置到命令前"})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsxs)(e.strong,{children:["在使用 pnpm v6 时，如果传递的参数给 pnpm，不需要加 ",(0,s.jsx)(e.code,{children:"--"}),"；如果传递的参数是给脚本使用，需要增加 ",(0,s.jsx)(e.code,{children:"--"})," 字符串"]}),"。"]})]})}var a=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object.assign({},(0,c.useMDXComponents)(),n.components).wrapper;return e?(0,s.jsx)(e,Object.assign({},n,{children:(0,s.jsx)(i,n)})):i(n)}}}]);