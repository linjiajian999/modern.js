"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[77257],{54852:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(49231);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=u(n),k=a,m=d["".concat(o,".").concat(k)]||d[k]||c[k]||i;return n?r.createElement(m,l(l({ref:t},s),{},{components:n})):r.createElement(m,l({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},20044:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var r=n(86215),a=(n(49231),n(54852));const i={sidebar_position:1},l="\u81ea\u5b9a\u4e49\u8f93\u5165\u76f8\u5173\u7c7b\u578b\u5b9a\u4e49",p={unversionedId:"apis/generator/plugin/input/type",id:"apis/generator/plugin/input/type",title:"\u81ea\u5b9a\u4e49\u8f93\u5165\u76f8\u5173\u7c7b\u578b\u5b9a\u4e49",description:"Input",source:"@site/docs/apis/generator/plugin/input/type.md",sourceDirName:"apis/generator/plugin/input",slug:"/apis/generator/plugin/input/type",permalink:"/docs/apis/generator/plugin/input/type",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"apisGeneratorSidebar",previous:{title:"\u4ecb\u7ecd",permalink:"/docs/apis/generator/plugin/introduce"},next:{title:"addInputBefore",permalink:"/docs/apis/generator/plugin/input/addInputBefore"}},o={},u=[{value:"Input",id:"input",level:2},{value:"key",id:"key",level:3},{value:"name",id:"name",level:3},{value:"type",id:"type",level:3},{value:"options",id:"options",level:3},{value:"validate",id:"validate",level:3},{value:"when",id:"when",level:3},{value:"Option",id:"option",level:2},{value:"key",id:"key-1",level:3},{value:"name",id:"name-1",level:3},{value:"isDefault",id:"isdefault",level:3},{value:"when",id:"when-1",level:3}],s={toc:u};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u81ea\u5b9a\u4e49\u8f93\u5165\u76f8\u5173\u7c7b\u578b\u5b9a\u4e49"},"\u81ea\u5b9a\u4e49\u8f93\u5165\u76f8\u5173\u7c7b\u578b\u5b9a\u4e49"),(0,a.kt)("h2",{id:"input"},"Input"),(0,a.kt)("p",null,"\u8f93\u5165\u7c7b\u578b\u7ed3\u6784\uff0c\u5176\u7c7b\u578b\u5b9a\u4e49\u4e3a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface Input {\n    key: string;\n    name: string;\n    type: 'input' | 'radio' | 'checkbox';\n    options?: IOption[];\n    validate?: (value: any, data: Record<string, unknown>, extra?: Record<string, unknown>) => {\n        success: boolean;\n        error?: string;\n    } | Promise<{\n        success: boolean;\n        error?: string;\n    >\n    when?: (input: Record<string, any>, extra?: Record<string, any>) => Promise<boolean>\n}\n")),(0,a.kt)("h3",{id:"key"},"key"),(0,a.kt)("p",null,"\u5173\u952e\u5b57\uff0c\u4f5c\u4e3a\u8f93\u5165\u5b57\u6bb5\u7684 key\uff0c\u53ef\u5728\u751f\u6210\u5668\u63d2\u4ef6\u751f\u547d\u5468\u671f\u4e2d\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"input[key]")," \u83b7\u53d6\u5230\u7528\u6237\u8f93\u5165\u3002"),(0,a.kt)("h3",{id:"name"},"name"),(0,a.kt)("p",null,"\u5c55\u793a\u540d\u79f0\u3002"),(0,a.kt)("h3",{id:"type"},"type"),(0,a.kt)("p",null,"\u8f93\u5165\u7c7b\u578b\uff0c\u5305\u542b\u4e09\u79cd\u503c:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"input\uff1a\u76f4\u63a5\u8f93\u5165\u7c7b\u578b\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"radio\uff1a\u5355\u9009\u7c7b\u578b\uff0c\u9700\u914d\u5408 options \u4f7f\u7528\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"checkbox\uff1a\u591a\u9009\u7c7b\u578b\uff0c\u9700\u914d\u5408 options \u4f7f\u7528\u3002"))),(0,a.kt)("h3",{id:"options"},"options"),(0,a.kt)("p",null,"\u5355\u9009\u548c\u591a\u9009\u7c7b\u578b\u65f6\u9009\u9879\uff0c\u9009\u9879\u7ed3\u6784\u540e\u7eed\u4ecb\u7ecd\u3002"),(0,a.kt)("h3",{id:"validate"},"validate"),(0,a.kt)("p",null,"\u9a8c\u8bc1\u51fd\u6570\uff0c\u5f53\u7528\u6237\u8f93\u5165\u4e4b\u540e\uff0c\u53ef\u5728\u8be5\u51fd\u6570\u4e2d\u5bf9\u8f93\u5165\u8fdb\u884c\u9a8c\u8bc1\u3002\u5176\u4e2d\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"value \u4e3a\u5f53\u524d\u8f93\u5165\u5b57\u6bb5\u503c")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"data \u4e3a\u5f53\u524d\u8868\u5355\u7684\u6240\u6709\u8f93\u5165\u5b57\u6bb5\u503c")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"extra \u4e3a\u4ece config \u53c2\u6570\u989d\u5916\u4f20\u5165\u7684\u53c2\u6570"))),(0,a.kt)("h3",{id:"when"},"when"),(0,a.kt)("p",null,"\u6761\u4ef6\u51fd\u6570\uff0c\u7528\u4e8e\u63a7\u5236\u95ee\u9898\u662f\u5426\u5c55\u793a\uff0c\u5f53\u8be5\u51fd\u6570\u8fd4\u56de true \u65f6\uff0c\u95ee\u9898\u5c55\u793a\u3002\u5176\u4e2d:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"input \u4e3a\u5f53\u524d\u8868\u5355\u7684\u6240\u6709\u8f93\u5165\u5b57\u6bb5\u503c")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"extra \u4e3a\u4ece config \u53c2\u6570\u989d\u5916\u4f20\u5165\u7684\u53c2\u6570"))),(0,a.kt)("h2",{id:"option"},"Option"),(0,a.kt)("p",null,"option \u4e3a\u8f93\u5165\u9009\u9879\uff0c\u5f53\u81ea\u5b9a\u4e49 Input \u7c7b\u578b\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"radio")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"checkbox")," \u65f6\uff0c\u9700\u8981\u8be5\u914d\u7f6e\u3002"),(0,a.kt)("p",null,"option \u7c7b\u578b\u5b9a\u4e49\u4e3a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface IOption {\n    key: string;\n    name: string;\n    isDefault?: boolean; // \u662f\u5426\u4e3a\u9ed8\u8ba4\u503c\uff0c\u5b58\u5728\u591a\u4e2a\uff0c\u4ee5\u7b2c\u4e00\u4e2a\u9009\u9879\u4e3a\u4e3b\uff0c\u5f53\u524d\u9ed8\u8ba4\u9009\u9879\u6b63\u597d\u4e0d\u5c55\u793a\uff0c\u5c06\u4f1a\u53d6\u7b2c\u4e00\u4e2a\u5c55\u793a\u7684\u9009\u9879\u503c\n    when?: (input: Record<string, any>, extra?: Record<string, any>) => Promise<boolean> // \u95ee\u9898\u53ef\u6839\u636e\u4e4b\u524d\u8f93\u5165\u51b3\u5b9a\u662f\u5426\u5c55\u793a\n}\n")),(0,a.kt)("h3",{id:"key-1"},"key"),(0,a.kt)("p",null,"\u5173\u952e\u5b57\uff0coption \u9009\u9879\u7684\u5173\u952e\u5b57\uff0c\u5f53\u9009\u4e2d\u8be5\u9009\u9879\u662f\uff0c\u5bf9\u5e94 ",(0,a.kt)("inlineCode",{parentName:"p"},"input")," \u7684\u503c\u4e3a\u8be5\u5b57\u6bb5\u503c\u3002"),(0,a.kt)("h3",{id:"name-1"},"name"),(0,a.kt)("p",null,"\u5c55\u793a\u540d\u79f0\u3002"),(0,a.kt)("h3",{id:"isdefault"},"isDefault"),(0,a.kt)("p",null,"\u662f\u5426\u4e3a\u9ed8\u8ba4\u503c\uff0c\u8bbe\u7f6e\u4e3a true \u65f6\uff0c\u5c55\u793a\u95ee\u9898\u4f1a\u9ed8\u8ba4\u9009\u62e9\u8be5\u9009\u9879"),(0,a.kt)("h3",{id:"when-1"},"when"),(0,a.kt)("p",null,"\u6761\u4ef6\u51fd\u6570\uff0c\u7528\u4e8e\u63a7\u5236\u9009\u9879\u662f\u5426\u5c55\u793a\uff0c\u5f53\u8be5\u51fd\u6570\u8fd4\u56de true \u65f6\uff0c\u95ee\u9898\u5c55\u793a\u3002\u5176\u4e2d:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"input \u4e3a\u5f53\u524d\u8868\u5355\u7684\u6240\u6709\u8f93\u5165\u5b57\u6bb5\u503c")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"extra \u4e3a\u4ece config \u53c2\u6570\u989d\u5916\u4f20\u5165\u7684\u53c2\u6570"))))}c.isMDXComponent=!0}}]);