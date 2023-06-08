(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_apis_app_hooks_src_app_mdx"],{43937:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return s},title:function(){return o},toc:function(){return i},default:function(){return a}});var t=r("9880"),p=r("23169"),s={title:"App.[tj]sx",sidebar_position:1},o="App.[tj]sx",i=[];function c(e){var n=Object.assign({h1:"h1",a:"a",p:"p",code:"code",pre:"pre",div:"div"},(0,p.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h1,{id:"app[tj]sx",children:["App.[tj]sx",(0,t.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#app[tj]sx",children:"#"})]}),"\n",(0,t.jsxs)(n.p,{children:["应用使用",(0,t.jsx)(n.a,{href:"/guides/basic-features/routes#self-controlled-routing",children:"自控路由"}),"时的入口标识符。"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"App.[tj]sx"})," 并不是实际的应用入口，Modern.js 会自动生成真正的构建打包的入口文件, 内容大致如下："]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import React from 'react';\nimport ReactDOM from 'react-dom/client';\nimport { createApp, bootstrap } from '@modern-js/runtime';\n// App.[jt]sx\nimport App from '@_modern_js_src/App';\n// runtime plugin\nimport { router } from '@modern-js/runtime/plugins';\n\nconst IS_BROWSER = typeof window !== 'undefined' && window.name !== 'nodejs';\nconst MOUNT_ID = 'root';\n\nlet AppWrapper = null;\n\nfunction render() {\n  AppWrapper = createApp({\n    plugins: [\n     router({...{\"serverBase\":[\"/\"]}, ...App.config?.router}),\n    ]\n  })(App)\n  if (IS_BROWSER) {\n    bootstrap(AppWrapper, MOUNT_ID, null, ReactDOM);\n  }\n  return AppWrapper\n}\n\nAppWrapper = render();\nexport default AppWrapper;\n"})}),"\n",(0,t.jsxs)(n.div,{className:"modern-directive note",children:[(0,t.jsx)(n.div,{className:"modern-directive-title",children:"NOTE"}),(0,t.jsxs)(n.div,{className:"modern-directive-content",children:[(0,t.jsxs)(n.p,{children:["在多入口的场景下，每个入口都可以拥有独立的 ",(0,t.jsx)(n.code,{children:"App.[jt]sx"}),"，详见",(0,t.jsx)(n.a,{href:"/guides/concept/entries",children:"入口"}),"。"]}),"\n"]})]})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,p.useMDXComponents)(),e.components).wrapper;return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(c,e)})):c(e)}}}]);