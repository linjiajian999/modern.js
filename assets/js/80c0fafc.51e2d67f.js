"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[36285],{54852:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var a=t(49231);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=a.createContext({}),s=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(i.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=s(t),u=o,b=c["".concat(i,".").concat(u)]||c[u]||m[u]||l;return t?a.createElement(b,r(r({ref:n},d),{},{components:t})):a.createElement(b,r({ref:n},d))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,r=new Array(l);r[0]=c;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p.mdxType="string"==typeof e?e:o,r[1]=p;for(var s=2;s<l;s++)r[s]=t[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},24271:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var a=t(86215),o=(t(49231),t(54852));const l={title:"loadable",sidebar_position:1},r=void 0,p={unversionedId:"apis/app/runtime/utility/loadable/loadable_",id:"apis/app/runtime/utility/loadable/loadable_",title:"loadable",description:"\u7528\u4e8e\u521b\u5efa loadable \u7684\u7ec4\u4ef6\u3002",source:"@site/docs/apis/app/runtime/utility/loadable/loadable_.md",sourceDirName:"apis/app/runtime/utility/loadable",slug:"/apis/app/runtime/utility/loadable/loadable_",permalink:"/docs/apis/app/runtime/utility/loadable/loadable_",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"loadable",sidebar_position:1},sidebar:"apisAppSidebar",previous:{title:"CSS-In-JS API",permalink:"/docs/apis/app/runtime/utility/css-in-js"},next:{title:"lazy",permalink:"/docs/apis/app/runtime/utility/loadable/lazy"}},i={},s=[{value:"API",id:"api",level:2},{value:"loadFn",id:"loadfn",level:3},{value:"options.resolveComponent",id:"optionsresolvecomponent",level:3},{value:"options.fallback",id:"optionsfallback",level:3},{value:"options.ssr",id:"optionsssr",level:3},{value:"LoadableComponent\uff08\u8fd4\u56de\u503c\u7c7b\u578b\uff09",id:"loadablecomponent\u8fd4\u56de\u503c\u7c7b\u578b",level:3},{value:"loadable.lib",id:"loadablelib",level:2},{value:"options",id:"options",level:3},{value:"LoadableLibrary \uff08\u8fd4\u56de\u503c\u7c7b\u578b\uff09",id:"loadablelibrary-\u8fd4\u56de\u503c\u7c7b\u578b",level:3}],d={toc:s};function m(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8865\u5145\u4fe1\u606f")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u7528\u4e8e\u521b\u5efa ",(0,o.kt)("inlineCode",{parentName:"p"},"loadable \u7684\u7ec4\u4ef6"),"\u3002"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import loadable from '@modern-js/runtime/loadable';\n")),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"<Props>(\n  loadFn: Function,\n  options?: {\n    resolveComponent?: (\n      module: Module,\n      props: Props,\n    ) => React.ComponentType<Props>,\n    fallback?: JSX.Element;\n    ssr?: boolean;\n  }\n) => LoadableComponent\n")),(0,o.kt)("h3",{id:"loadfn"},"loadFn"),(0,o.kt)("p",null,"\u7c7b\u578b\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"function")),(0,o.kt)("p",null,"\u7528\u4e8e\u52a0\u8f7d\u7ec4\u4ef6\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import loadable from '@modern-js/runtime/loadable';\n\nconst OtherComponent = loadable(() => import('./OtherComponent'))\n")),(0,o.kt)("h3",{id:"optionsresolvecomponent"},"options.resolveComponent"),(0,o.kt)("p",null,"\u7c7b\u578b\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"(module: Module, props: Props) => React.ComponentType<Props>")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"module")," \u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"loadFn")," \u8fd4\u56de\u7684\u7ec4\u4ef6\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"props")," \u662f loadable \u8fd4\u56de\u7684\u7ec4\u4ef6\u63a5\u53d7\u7684 props \u53c2\u6570\u3002\u9ed8\u8ba4\u7684\u8bdd\uff0c\u6211\u4eec\u8ba4\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"import")," \u7684\u6587\u4ef6\u90fd\u662f\u9ed8\u8ba4\u5bfc\u51fa react \u7ec4\u4ef6\uff0c\u8fd9\u65f6\u5019\u76f4\u63a5\u6e32\u67d3\u8be5\u7ec4\u4ef6\u5373\u53ef\u3002\u4f46\u5f53\u7ec4\u4ef6\u662f\u5177\u540d\u5bfc\u51fa\u7684\uff0c\u6216\u8005\u6211\u4eec\u9700\u8981\u6839\u636e\u5177\u4f53\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"props")," \u52a8\u6001\u5224\u65ad\u9700\u8981\u6e32\u67d3\u54ea\u4e2a\u7ec4\u4ef6\u7684\u65f6\u5019\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"resolveComponent")," \u6765\u5b9e\u73b0\u3002\u4e0b\u9762\u662f\u4e00\u4e2a\u793a\u4f8b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title='component.js'",title:"'component.js'"},"export const Apple = () => 'Apple!'\nexport const Orange = () => 'Orange!'\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title='loadable.js'",title:"'loadable.js'"},"const LoadableApple = loadable(() => import('./components'), {\n  resolveComponent: (components) => components.Apple,\n})\nconst LoadableOrange = loadable(() => import('./components'), {\n  resolveComponent: (components) => components.Orange,\n})\nconst LoadableFruit = loadable(() => import('./components'), {\n  resolveComponent: (components, props) => components[props.fruit],\n})\n")),(0,o.kt)("h3",{id:"optionsfallback"},"options.fallback"),(0,o.kt)("p",null,"\u7c7b\u578b\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"JSX.Element")),(0,o.kt)("p",null,"\u5728 loading \u9636\u6bb5\u663e\u793a fallback \u5185\u5bb9\u3002"),(0,o.kt)("h3",{id:"optionsssr"},"options.ssr"),(0,o.kt)("p",null,"\u7c7b\u578b\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"boolean")),(0,o.kt)("p",null,"\u9ed8\u8ba4\u503c\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"true")),(0,o.kt)("p",null,"\u5982\u679c\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"\uff0c\u5219\u8be5\u7ec4\u4ef6\u4e0d\u4f1a\u518d\u670d\u52a1\u7aef\u6e32\u67d3\u9636\u6bb5\u5904\u7406\uff0c\u5373\u4e0d\u652f\u6301 ssr\uff0c\u9ed8\u8ba4\u503c\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"\u3002"),(0,o.kt)("h3",{id:"loadablecomponent\u8fd4\u56de\u503c\u7c7b\u578b"},"LoadableComponent\uff08\u8fd4\u56de\u503c\u7c7b\u578b\uff09"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/apis/app/runtime/utility/loadable/loadable-component"},"loadableComponent"),"\u3002"),(0,o.kt)("h2",{id:"loadablelib"},"loadable.lib"),(0,o.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"loadable \u7684\u5e93"),"\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import loadable from '@modern-js/runtime/loadable';\nconst Moment = loadable.lib(() => import('moment'))\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"<Props>(\n  loadFn: Function,\n  options?: {\n    resolveComponent?: any,\n    fallback?: any;\n    ssr?: boolean;\n  }\n) => LoadableLibrary\n")),(0,o.kt)("h3",{id:"options"},"options"),(0,o.kt)("p",null,"\u540c ",(0,o.kt)("a",{parentName:"p",href:"#optionsresolvecomponent"},"options"),"\u3002"),(0,o.kt)("h3",{id:"loadablelibrary-\u8fd4\u56de\u503c\u7c7b\u578b"},"LoadableLibrary \uff08\u8fd4\u56de\u503c\u7c7b\u578b\uff09"),(0,o.kt)("p",null,"\u79fb\u67b6 ",(0,o.kt)("a",{parentName:"p",href:"/docs/apis/app/runtime/utility/loadable/loadable-library"},"LoadableLibrary"),"\u3002"))}m.isMDXComponent=!0}}]);