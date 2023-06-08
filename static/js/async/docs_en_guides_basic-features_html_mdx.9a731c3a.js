(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_guides_basic-features_html_mdx"],{16977:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var t in n)Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}(n,{frontmatter:function(){return i},title:function(){return o},toc:function(){return a},default:function(){return l}});var s=t("9880"),r=t("23169"),i={title:"HTML Template",sidebar_position:9},o="HTML Template",a=[{text:"JSX syntax",depth:2,id:"jsx-syntax"},{text:"HTML Component",depth:3,id:"html-component"},{text:"Template Params",depth:3,id:"template-params"},{text:"Examples",depth:3,id:"examples"},{text:"Html Synxtax",depth:2,id:"html-synxtax"},{text:"Custom HTML Fragments",depth:3,id:"custom-html-fragments"},{text:"Fully Custom HTML Templates",depth:3,id:"fully-custom-html-templates"},{text:"Template Params",depth:3,id:"template-params-1"},{text:"Config By Entry",depth:3,id:"config-by-entry"}];function d(e){var n=Object.assign({h1:"h1",a:"a",p:"p",strong:"strong",h2:"h2",code:"code",pre:"pre",h3:"h3",ul:"ul",li:"li",div:"div"},(0,r.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"html-template",children:["HTML Template",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#html-template",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Modern.js provides ",(0,s.jsx)(n.strong,{children:"JSX syntax"})," and ",(0,s.jsx)(n.strong,{children:"HTML(EJS) syntax"})," for customizing HTML template."]}),"\n",(0,s.jsxs)(n.h2,{id:"jsx-syntax",children:["JSX syntax",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#jsx-syntax",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Modern.js convention, in the ",(0,s.jsx)(n.code,{children:"src/"}),", or in the entry directory, you can create ",(0,s.jsx)(n.code,{children:"Document.[jt]sx"})," and export a component by default. The rendering result of this component can be used as an HTML template for the entry."]}),"\n",(0,s.jsx)(n.p,{children:"For example the following directory structure:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:".\n└── src\n    ├── Document.tsx\n    ├── entry-a\n    │   ├── Document.tsx\n    │   └── routes\n    ├── entry-b\n    │    └── routes\n    └── modern-app-env.d.ts\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"entry-a"})," will take precedence over the ",(0,s.jsx)(n.code,{children:"Docoument.[jt]sx"})," file under the current entry. If the current entry does not have a ",(0,s.jsx)(n.code,{children:"Document.[jt]sx"})," file, such as ",(0,s.jsx)(n.code,{children:"entry-b"}),", it will look for the ",(0,s.jsx)(n.code,{children:"Document.[jt]sx"})," file in the root directory."]}),"\n",(0,s.jsx)(n.p,{children:"If not, it will go to the the logic of traditional templates."}),"\n",(0,s.jsxs)(n.h3,{id:"html-component",children:["HTML Component",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#html-component",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Modern.js provides a list of components for rendering pages to help developers generate templates, which can be exported from ",(0,s.jsx)(n.code,{children:"@modern-js/runtime/document"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"import { Html, Body, Root, Head, Scripts } from '@modern-js/runtime/document';\n"})}),"\n",(0,s.jsx)(n.p,{children:"These components are rendered:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Html"}),": Provide the ability of native HTML Elements, and render necessary components that the developer did not add by default. ",(0,s.jsx)(n.code,{children:"<Head>"})," and ",(0,s.jsx)(n.code,{children:"<Body>"})," must exist, and other components can be assembled by selecting appropriate components on demand."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Body"}),": Provide the ability of native Body Element, which needs to contain the ",(0,s.jsx)(n.code,{children:"<Root>"})," component internally, and also supports other elements as child elements at the same time, such as adding footers."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Root"}),": React root element ",(0,s.jsx)(n.code,{children:"<div id='root'></div>"}),". the default element id is ",(0,s.jsx)(n.code,{children:"id = 'root'"}),", can set ",(0,s.jsx)(n.code,{children:"props.rootId"})," to change the id.Child components can be added, and will also be rendered into HTML templates, which will be overwritten when React rendering is complete, generally used to implement global Loading."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Head"}),": Provides native Head Element capabilities and automatically populates ",(0,s.jsx)(n.code,{children:"<meta>"}),", as well as the ",(0,s.jsx)(n.code,{children:"<Scripts>"})," component."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Scripts"}),": The script content generated by the webpack, which can be used to adjust the position of the bundle result, is placed in the ",(0,s.jsx)(n.code,{children:"<Head>"})," component by default."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Comment"}),": Make the comment like ",(0,s.jsx)(n.code,{children:"<!-- gateway -->"}),", could be stay to the html that final render."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"template-params",children:["Template Params",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#template-params",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["Because it is in the form of JSX, in ",(0,s.jsx)(n.code,{children:"Document.[jt]sx"}),", you can use various variables in the component to assign values to various custom components more freely."]}),"\n",(0,s.jsxs)(n.p,{children:["At the same time, Modern.js provides ",(0,s.jsx)(n.code,{children:"DocumentContext"})," to provide some configuration and environment parameters, The main parameters as follow:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"processEnv"}),": Provide build-time env vars."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"config"}),": The configuration of the project, only ",(0,s.jsx)(n.code,{children:"output"})," are exposed."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"entryName"}),": current entry name."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"templateParams"}),": HTML template params(in order to be compatible with traditional templates, it is not recommended to use)."]}),"\n"]}),"\n",(0,s.jsxs)(n.h3,{id:"examples",children:["Examples",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#examples",children:"#"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"import React, { useContext } from 'react';\nimport {\n  Html,\n  Root,\n  Head,\n  Body,\n  DocumentContext,\n  Comment,\n} from '@modern-js/runtime/document';\n\nexport default function Document(): React.ReactElement {\n  // the params provide by DocumentContext\n  const {\n    config: { output: htmlConfig },\n    entryName,\n    templateParams,\n  } = useContext(DocumentContext);\n\n  return (\n    <Html>\n      <Head>\n        <link href=\"https://modernjs.dev\" />\n        <Comment>{'<!-- Need a Comment -->'}</Comment>\n      </Head>\n      <Body>\n        <Root rootId=\"root\">\n          <h1 style={{ color: 'red' }}>Some Params: </h1>\n          <h2> entryName：{entryName}</h2>\n          <h2> title：{htmlConfig.title}</h2>\n          <h2> rootId: {templateParams.mountId}</h2>\n        </Root>\n        <h1>bottom</h1>\n      </Body>\n    </Html>\n  );\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"The above JSX component will generate the following HTML template:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<!DOCTYPE html>\n<html>\n\n<head>\n    <meta charset="utf-8">\n    <meta name="viewport"\n        content="width=device-width, initial-scale=1.0, shrink-to-fit=no, viewport-fit=cover, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">\n    <meta http-equiv="x-ua-compatible" content="ie=edge">\n    <meta name="renderer" content="webkit">\n    <meta name="layoutmode" content="standard">\n    <meta name="imagemode" content="force">\n    <meta name="wap-font-scale" content="no">\n    <meta name="format-detection" content="telephone=no">\n    <link rel="icon" href="/a.icon">\n    <script defer src="/static/js/builder-runtime.js"></script>\n    <script defer src="/static/js/lib-react.js"></script>\n    <script defer src="/static/js/lib-polyfill.js"></script>\n    <script defer src="/static/js/lib-router.js"></script>\n\n    <script>\n      ...\n    </script>\n    <script defer src="/static/js/sub.js"></script>\n    <link href="https://modernjs.dev" />\n    <!-- Need a Comment -->\n</head>\n\n<body>\n    <div id="root">\n        <!--<?- html ?>-->\n        <h1 style="color:red">Some Params: </h1>\n        <h2> entryName：sub</h2>\n        <h2> title：</h2>\n        <h2> rootId: root</h2>\n    </div>\n    <h1>bottom</h1>\n    <!--<?- chunksMap.js ?>-->\n    <!--<?- SSRDataScript ?>-->\n</body>\n\n</html>\n\n'})}),"\n",(0,s.jsxs)(n.h2,{id:"html-synxtax",children:["Html Synxtax",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#html-synxtax",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"Modern.js also supports HTML syntax. By default, an HTML template is built into the Modern.js application project to generate HTML code."}),"\n",(0,s.jsxs)(n.p,{children:["Based on HTML syntax templates, Modern.js provides ",(0,s.jsx)(n.strong,{children:"Custom HTML Fragments"})," and ",(0,s.jsx)(n.strong,{children:"Fully Custom HTML Templates"})," two ways to customize templates."]}),"\n",(0,s.jsxs)(n.h3,{id:"custom-html-fragments",children:["Custom HTML Fragments",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#custom-html-fragments",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["In the application root directory, create the ",(0,s.jsx)(n.code,{children:"config/html/"})," directory, which supports the creation of four kinds of HTML fragments."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"top.html"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"head.html"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"body.html"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"bottom.html"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"These fragments will be injected into the default HTML template."})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:"<!DOCTYPE html>\n<html>\n  <head>\n    <%= meta %>\n    <title><%= title %></title>\n    <%= topTemplate %>\n    <%= headTemplate %>\n    {/* webpack inject css  */}\n  </head>\n  <body>\n    <noscript>\n      We're sorry but react app doesn't work properly without JavaScript\n      enabled. Please enable it to continue.\n    </noscript>\n    <div id=\"<%= mountId %>\"></div>\n    <%= bodyTemplate %>\n    {/* webpack inject js  */}\n    {/* <?- bottomTemplate ?> */}\n  </body>\n</html>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["HTML Fragments support the use ",(0,s.jsx)(n.a,{href:"https://lodash.com/docs/4.17.15#template",target:"_blank",rel:"noopener noreferrer",children:"Lodash template"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["For example, insert a script in ",(0,s.jsx)(n.code,{children:"body.html"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",meta:'title="config/html/body.html"',children:'<script src="//example.com/assets/a.js"></script>\n'})}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive info",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,s.jsxs)(n.div,{className:"modern-directive-content",children:[(0,s.jsxs)(n.p,{children:["The implementation of the custom HTML fragment is to merge the fragment with the built-in template of the frame. Since ",(0,s.jsx)(n.code,{children:"<title>"})," already exists in the default template of the frame, the ",(0,s.jsx)(n.code,{children:"<title>"})," in the custom HTML template cannot take effect. Please pass ",(0,s.jsx)(n.a,{href:"/configure/app/html/title",children:"html.title"})," to modify the page title."]}),"\n"]})]}),"\n",(0,s.jsxs)(n.h3,{id:"fully-custom-html-templates",children:["Fully Custom HTML Templates",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#fully-custom-html-templates",children:"#"})]}),"\n",(0,s.jsx)(n.p,{children:"In some cases, HTML snippets do not meet the customization requirements, Modern.js provide a fully customized way."}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive caution",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"CAUTION"}),(0,s.jsxs)(n.div,{className:"modern-directive-content",children:[(0,s.jsx)(n.p,{children:"It is not recommended to override the default HTML template directly, and some features may be lost. Even if it needs to be replaced, it is recommended to build on the built-in template and modify it as needed."}),"\n"]})]}),"\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.code,{children:"config/html/"})," directory, create a index.html file that will override the default HTML template."]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive info",children:[(0,s.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,s.jsxs)(n.div,{className:"modern-directive-content",children:[(0,s.jsxs)(n.p,{children:["The internal default HTML template can be viewed in ",(0,s.jsx)(n.code,{children:"node_modules/.modern-js/${entryName}/index.html"}),"."]}),"\n"]})]}),"\n",(0,s.jsxs)(n.h3,{id:"template-params-1",children:["Template Params",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#template-params-1",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["The parameters used in the template can be defined by the ",(0,s.jsx)(n.a,{href:"/configure/app/html/template-parameters",children:"html.templateParameters"}),"."]}),"\n",(0,s.jsxs)(n.h3,{id:"config-by-entry",children:["Config By Entry",(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#config-by-entry",children:"#"})]}),"\n",(0,s.jsxs)(n.p,{children:["The fragment in the ",(0,s.jsx)(n.code,{children:"config/html/"})," directory are valid for all entries in the application. If you want to customize the HTML by entry, you can create a new directory named with the ",(0,s.jsx)(n.strong,{children:"entry name"})," in the ",(0,s.jsx)(n.code,{children:"config/html/"})," directory, and then customize the HTML snippets in this directory."]}),"\n",(0,s.jsxs)(n.p,{children:["For example, the following HTML fragment is only valid for ",(0,s.jsx)(n.code,{children:"entry1"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:".\n├── config/\n│   └── html/\n│       └── entry1\n│           ├── head.html\n│           └── body.html\n└── src/\n    ├── entry1/\n    │   └── routes\n    └── entry2/\n        └── routes\n"})})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}}}]);