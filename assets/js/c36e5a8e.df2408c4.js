"use strict";(self.webpackChunktimistudio_docs=self.webpackChunktimistudio_docs||[]).push([[5699],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(t),d=o,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return t?r.createElement(f,a(a({ref:n},s),{},{components:t})):r.createElement(f,a({ref:n},s))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7858:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],l={sidebar_position:3},p="Triplan (Expo)",c={unversionedId:"triplan/expo-version",id:"triplan/expo-version",title:"Triplan (Expo)",description:"Environment confirmation",source:"@site/docs/triplan/expo-version.md",sourceDirName:"triplan",slug:"/triplan/expo-version",permalink:"/docs/triplan/expo-version",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Triplan (React Native)",permalink:"/docs/triplan/react-native-version"},next:{title:"Triplan (Flutter)",permalink:"/docs/triplan/flutter-version"}},s=[{value:"Environment confirmation",id:"environment-confirmation",children:[],level:2},{value:"Run in development",id:"run-in-development",children:[],level:2},{value:"File structure",id:"file-structure",children:[],level:2},{value:"SUPPORT INFORMATION",id:"support-information",children:[],level:2}],u={toc:s};function m(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"triplan-expo"},"Triplan (Expo)"),(0,i.kt)("h2",{id:"environment-confirmation"},"Environment confirmation"),(0,i.kt)("p",null,"In Expo template application, please setup environment follow Expo environment setup guide first."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/environment-setup/expo-environment-setup"},"https://docs.timistudio.dev/docs/environment-setup/expo-environment-setup")),(0,i.kt)("p",null,"Then to confirm all setup is ok, please execute command below to verify."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ yarn -v\n1.22.17\n\n$ node -v\nv14.17.5\n\n$ npm -v\n6.14.14\n\n$ expo --version\n5.0.3\n")),(0,i.kt)("p",null,"If you are using MacOS and work with iOS, please check your XCode is latest version."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ /usr/bin/xcodebuild -version\nXcode 13.2.1\nBuild version 13C100\n")),(0,i.kt)("h2",{id:"run-in-development"},"Run in development"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd <react-native-project-root>\nyarn install\n")),(0,i.kt)("p",null,"If you are using npm without yarn"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd <react-native-project-root>\nnpm install\n")),(0,i.kt)("p",null,"Finally start simulator with command below"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn android\n# or\nyarn ios\n")),(0,i.kt)("p",null,"If you are using npm without yarn"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm run android\n# or\nnpm run ios\n")),(0,i.kt)("h2",{id:"file-structure"},"File structure"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"- assets/                                     # Project fonts,icon and splash screen\n- components/                                 # React Components\n- src/config/                                 # React config\n- constants/                                  # Project constant files\n- hooks/                                      # React hooks\n- navigation/                                 # React native navigation\n- screens/                                    # Project screens\n- utils/                                      # Helper files\n- app.json                                    # App config\n- App.tsx\n- babel.config.js                             # Babel config\n- package.json                                # Node packages\n- tsconfig.json                               # Typescript config\n")),(0,i.kt)("h2",{id:"support-information"},"SUPPORT INFORMATION"),(0,i.kt)("p",null,"Thank for your purchase, feel free to contact with us if you have any trouble when install application."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Email: ",(0,i.kt)("a",{parentName:"li",href:"mailto:admin@timistudio.dev"},"admin@timistudio.dev")),(0,i.kt)("li",{parentName:"ul"},"Facebook official fanpage: ",(0,i.kt)("a",{parentName:"li",href:"https://www.facebook.com/timistudio.dev"},"https://www.facebook.com/timistudio.dev"))))}m.isMDXComponent=!0}}]);