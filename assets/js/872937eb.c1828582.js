"use strict";(self.webpackChunk_electron_react_boilerplate_site=self.webpackChunk_electron_react_boilerplate_site||[]).push([[32],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,h=u["".concat(d,".").concat(m)]||u[m]||c[m]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3029:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={id:"adding-dependencies",title:"Adding Dependencies",sidebar_label:"Adding Dependencies"},d=void 0,s={unversionedId:"adding-dependencies",id:"adding-dependencies",title:"Adding Dependencies",description:"Add modules to the project",source:"@site/docs/adding-dependencies.md",sourceDirName:".",slug:"/adding-dependencies",permalink:"/docs/adding-dependencies",draft:!1,editUrl:"https://github.com/electron-react-boilerplate/site/edit/main/docs/adding-dependencies.md",tags:[],version:"current",frontMatter:{id:"adding-dependencies",title:"Adding Dependencies",sidebar_label:"Adding Dependencies"},sidebar:"docs",previous:{title:"Adding Assets",permalink:"/docs/adding-assets"},next:{title:"Native Modules",permalink:"/docs/native-modules"}},p={},c=[{value:"Add modules to the project",id:"add-modules-to-the-project",level:2},{value:"Module Structure",id:"module-structure",level:3},{value:"Which <code>package.json</code> file to use",id:"which-packagejson-file-to-use",level:3},{value:"Further Readings",id:"further-readings",level:3}],u={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"add-modules-to-the-project"},"Add modules to the project"),(0,i.kt)("p",null,"You will need to add other modules to this boilerplate, depending on the requirements of your project. For example, you may want to add ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/brianc/node-postgres"},"node-postgres")," to communicate with PostgreSQL database, or\n",(0,i.kt)("a",{parentName:"p",href:"http://www.material-ui.com/"},"material-ui")," to reuse React UI components."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Please read the following section before installing any dependencies"))),(0,i.kt)("h3",{id:"module-structure"},"Module Structure"),(0,i.kt)("p",null,"This boilerplate uses a ",(0,i.kt)("a",{parentName:"p",href:"https://www.electron.build/tutorials/two-package-structure.html"},"two package.json structure"),". This means you will have two ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," files."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"./package.json")," in the root of your project"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"./release/app/package.json")," relative to the project root")),(0,i.kt)("h3",{id:"which-packagejson-file-to-use"},"Which ",(0,i.kt)("inlineCode",{parentName:"h3"},"package.json")," file to use"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Rule of thumb")," is: all modules go into ",(0,i.kt)("inlineCode",{parentName:"p"},"./package.json")," except for native modules, or modules with native dependencies or peer dependencies. Native modules, or packages with native dependencies should go into ",(0,i.kt)("inlineCode",{parentName:"p"},"./release/app/package.json"),"."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"If the module is native to a platform (like node-postgres), it should be listed under ",(0,i.kt)("inlineCode",{parentName:"li"},"dependencies")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"./release/app/package.json")),(0,i.kt)("li",{parentName:"ol"},"If a module is ",(0,i.kt)("inlineCode",{parentName:"li"},"import"),"ed by another module, include it in ",(0,i.kt)("inlineCode",{parentName:"li"},"dependencies")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"./package.json"),". See ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md"},"this ESLint rule"),". Examples of such modules are ",(0,i.kt)("inlineCode",{parentName:"li"},"material-ui"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"redux-form"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"moment"),"."),(0,i.kt)("li",{parentName:"ol"},"Otherwise, modules used for building, testing, and debugging should be included in ",(0,i.kt)("inlineCode",{parentName:"li"},"devDependencies")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"./package.json"),".")),(0,i.kt)("h3",{id:"further-readings"},"Further Readings"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"See ",(0,i.kt)("a",{parentName:"li",href:"https://www.electronjs.org/docs/tutorial/using-native-node-modules"},"Electron Documentation - Using Native Node Modules")," to see how Electron uses native Node modules."),(0,i.kt)("li",{parentName:"ul"},"See ",(0,i.kt)("a",{parentName:"li",href:"https://nodejs.org/api/addons.html"},"Node.js Documentation - Addons")," to see what are native Node modules.")),(0,i.kt)("p",null,"For an example app that uses this boilerplate and packages native dependencies, see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/amilajack/erb-sqlite-example"},"erb-sqlite-example"),"."))}m.isMDXComponent=!0}}]);