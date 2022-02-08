"use strict";(self.webpackChunktimistudio_docs=self.webpackChunktimistudio_docs||[]).push([[4485],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),f=o,d=m["".concat(u,".").concat(f)]||m[f]||p[f]||a;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5845:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={sidebar_position:4},u="Healer (Flutter)",c={unversionedId:"healer/flutter-version",id:"healer/flutter-version",title:"Healer (Flutter)",description:"Environment confirmation",source:"@site/docs/healer/flutter-version.md",sourceDirName:"healer",slug:"/healer/flutter-version",permalink:"/docs/healer/flutter-version",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Healer (Expo)",permalink:"/docs/healer/expo-version"},next:{title:"Introduction",permalink:"/docs/imba/introduction"}},s=[{value:"Environment confirmation",id:"environment-confirmation",children:[],level:2},{value:"Run in development",id:"run-in-development",children:[],level:2},{value:"File structure",id:"file-structure",children:[],level:2},{value:"SUPPORT INFORMATION",id:"support-information",children:[],level:2}],p={toc:s};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"healer-flutter"},"Healer (Flutter)"),(0,a.kt)("h2",{id:"environment-confirmation"},"Environment confirmation"),(0,a.kt)("p",null,"In Flutter application, please setup environment follow Flutter environment setup guide first."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/environment-setup/flutter-environment-setup"},"https://docs.timistudio.dev/docs/environment-setup/flutter-environment-setup")),(0,a.kt)("p",null,"Then to confirm all setup is ok, please execute command below to verify."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ flutter --version\nFlutter 2.8.1 \u2022 channel stable \u2022 https://github.com/flutter/flutter.git\nFramework \u2022 revision 77d935af4d (8 weeks ago) \u2022 2021-12-16 08:37:33 -0800\nEngine \u2022 revision 890a5fca2e\nTools \u2022 Dart 2.15.1\n")),(0,a.kt)("p",null,"If you are using MacOS and work with iOS, please check your XCode is latest version."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ /usr/bin/xcodebuild -version\nXcode 13.2.1\nBuild version 13C100\n")),(0,a.kt)("h2",{id:"run-in-development"},"Run in development"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd <flutter-project-root>\nflutter pub get\n")),(0,a.kt)("p",null,"Then list, launch and create emulators."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"flutter emulators\n")),(0,a.kt)("p",null,"Start simulator with command below"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"flutter emulators --launch <emulator id>\n")),(0,a.kt)("p",null,"Finally run project"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"flutter run\n")),(0,a.kt)("h2",{id:"file-structure"},"File structure"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"- android/                                    # Flutter default android files\n- ios/                                        # Flutter default iOS files\n- assets/                                     # Image asset files\n- lib/                                        # Contains code program\n- test/                                       # Contains code test\n- pubspec.yaml                                # flutter packages\n")),(0,a.kt)("h2",{id:"support-information"},"SUPPORT INFORMATION"),(0,a.kt)("p",null,"Thank for your purchase, feel free to contact with us if you have any trouble when install application."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Email: ",(0,a.kt)("a",{parentName:"li",href:"mailto:admin@timistudio.dev"},"admin@timistudio.dev")),(0,a.kt)("li",{parentName:"ul"},"Facebook official fanpage: ",(0,a.kt)("a",{parentName:"li",href:"https://www.facebook.com/timistudio.dev"},"https://www.facebook.com/timistudio.dev"))))}m.isMDXComponent=!0}}]);