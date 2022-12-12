"use strict";(self.webpackChunktimistudio_docs=self.webpackChunktimistudio_docs||[]).push([[9317],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),k=r,v=c["".concat(p,".").concat(k)]||c[k]||m[k]||o;return n?a.createElement(v,i(i({ref:t},u),{},{components:n})):a.createElement(v,i({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},374:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return c}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:3},p="Dakota (Expo)",s={unversionedId:"dakota/expo-version",id:"dakota/expo-version",title:"Dakota (Expo)",description:"Environment confirmation",source:"@site/docs/dakota/expo-version.md",sourceDirName:"dakota",slug:"/dakota/expo-version",permalink:"/docs/dakota/expo-version",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Dakota (React Native)",permalink:"/docs/dakota/react-native-version"}},u=[{value:"Environment confirmation",id:"environment-confirmation",children:[],level:2},{value:"Run in development",id:"run-in-development",children:[],level:2},{value:"File structure",id:"file-structure",children:[],level:2},{value:"SUPPORT INFORMATION",id:"support-information",children:[{value:"OUR PRODUCTS:",id:"our-products",children:[],level:3}],level:2}],m={toc:u};function c(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"dakota-expo"},"Dakota (Expo)"),(0,o.kt)("h2",{id:"environment-confirmation"},"Environment confirmation"),(0,o.kt)("p",null,"In Expo template application, please setup environment follow Expo environment setup guide first."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/environment-setup/expo-environment-setup"},"https://docs.timistudio.dev/docs/environment-setup/expo-environment-setup")),(0,o.kt)("p",null,"Then to confirm all setup is ok, please execute command below to verify."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ yarn -v\n1.22.17\n\n$ node -v\nv14.17.5\n\n$ npm -v\n6.14.14\n\n$ expo --version\n5.0.3\n")),(0,o.kt)("p",null,"If you are using MacOS and work with iOS, please check your XCode is latest version."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ /usr/bin/xcodebuild -version\nXcode 13.2.1\nBuild version 13C100\n")),(0,o.kt)("h2",{id:"run-in-development"},"Run in development"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd <react-native-project-root>\nyarn install\n")),(0,o.kt)("p",null,"If you are using npm without yarn"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd <react-native-project-root>\nnpm install\n")),(0,o.kt)("p",null,"Finally start simulator with command below"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn android\n# or\nyarn ios\n")),(0,o.kt)("p",null,"If you are using npm without yarn"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm run android\n# or\nnpm run ios\n")),(0,o.kt)("h2",{id:"file-structure"},"File structure"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"- assets/                                     # Image asset files\n- components/                                 # React Components\n- configs/                                    # Project configs files  \n- constants/                                  # Project constant files\n- hooks/                                      # React hooks\n- i18n/                                       # Internationalization files\n- navigation/                                 # React native navigation\n- screens/                                    # Project screens\n- store/                                      # Redux files           \n- utils/                                      # Helper files\n- App.tsx\n- AuthContext.tsx\n- ThemeContext.tsx\n- BottomSheetContext.tsx\n- app.json\n- index.js\n- babel.config.js\n- package.json                                # Node packages\n- tsconfig.json                               # Typescript config\n- react-native-web-refresh-control.d.ts\n")),(0,o.kt)("h2",{id:"support-information"},"SUPPORT INFORMATION"),(0,o.kt)("p",null,"Thank for your purchase, feel free to contact with us if you have any trouble when install application."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Email: ",(0,o.kt)("a",{parentName:"li",href:"mailto:admin@timistudio.dev"},"admin@timistudio.dev")),(0,o.kt)("li",{parentName:"ul"},"Facebook official fanpage: ",(0,o.kt)("a",{parentName:"li",href:"https://www.facebook.com/timistudio.dev"},"https://www.facebook.com/timistudio.dev"))),(0,o.kt)("h3",{id:"our-products"},"OUR PRODUCTS:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fairpay \u2013 Split Bill React Native: ",(0,o.kt)("a",{parentName:"li",href:"https://1.envato.market/Kez64a"},"https://1.envato.market/Kez64a")),(0,o.kt)("li",{parentName:"ul"},"Monsy Money Manager Full Application: ",(0,o.kt)("a",{parentName:"li",href:"https://1.envato.market/do9d3k"},"https://1.envato.market/do9d3k")),(0,o.kt)("li",{parentName:"ul"},"Runner Flutter Full Application: ",(0,o.kt)("a",{parentName:"li",href:"https://1.envato.market/qnAOaq"},"https://1.envato.market/qnAOaq")),(0,o.kt)("li",{parentName:"ul"},"Triplan Flutter Template: ",(0,o.kt)("a",{parentName:"li",href:"https://1.envato.market/doyJdK"},"https://1.envato.market/doyJdK")),(0,o.kt)("li",{parentName:"ul"},"Stacy Roommate Flutter Template: ",(0,o.kt)("a",{parentName:"li",href:"https://1.envato.market/YgR1Xj"},"https://1.envato.market/YgR1Xj")),(0,o.kt)("li",{parentName:"ul"},"Fitness Love: ",(0,o.kt)("a",{parentName:"li",href:"https://1.envato.market/x9kDjx"},"https://1.envato.market/x9kDjx")),(0,o.kt)("li",{parentName:"ul"},"Doctor Plus \u2013 Patient React Native: ",(0,o.kt)("a",{parentName:"li",href:"https://1.envato.market/x99yJR"},"https://1.envato.market/x99yJR")),(0,o.kt)("li",{parentName:"ul"},"Doctor Plus \u2013 Doctor React Native: ",(0,o.kt)("a",{parentName:"li",href:"https://1.envato.market/x07Bk"},"https://1.envato.market/x07Bk")),(0,o.kt)("li",{parentName:"ul"},"Carer \u2013 Patient React Native App Template: ",(0,o.kt)("a",{parentName:"li",href:"https://1.envato.market/RzAzy"},"https://1.envato.market/RzAzy")),(0,o.kt)("li",{parentName:"ul"},"Wala \u2013 Food React Native: ",(0,o.kt)("a",{parentName:"li",href:"http://1.envato.market/qbXgy"},"http://1.envato.market/qbXgy")),(0,o.kt)("li",{parentName:"ul"},"Evez React Native: ",(0,o.kt)("a",{parentName:"li",href:"https://1.envato.market/emE1r"},"https://1.envato.market/emE1r")),(0,o.kt)("li",{parentName:"ul"},"Finany \u2013 Cashflow Manager App: ",(0,o.kt)("a",{parentName:"li",href:"https://1.envato.market/d1v17"},"https://1.envato.market/d1v17")),(0,o.kt)("li",{parentName:"ul"},"Imba React Native: ",(0,o.kt)("a",{parentName:"li",href:"https://1.envato.market/M3KWM"},"https://1.envato.market/M3KWM")),(0,o.kt)("li",{parentName:"ul"},"Healer React Native: ",(0,o.kt)("a",{parentName:"li",href:"https://1.envato.market/v6BDd"},"https://1.envato.market/v6BDd")),(0,o.kt)("li",{parentName:"ul"},"Healer Flutter: ",(0,o.kt)("a",{parentName:"li",href:"https://1.envato.market/b1xk9"},"https://1.envato.market/b1xk9")),(0,o.kt)("li",{parentName:"ul"},"Finey React Rative: ",(0,o.kt)("a",{parentName:"li",href:"https://1.envato.market/dJQyM"},"https://1.envato.market/dJQyM")),(0,o.kt)("li",{parentName:"ul"},"Finey Flutter: ",(0,o.kt)("a",{parentName:"li",href:"https://1.envato.market/RdB09"},"https://1.envato.market/RdB09")),(0,o.kt)("li",{parentName:"ul"},"Kid Draw React Native: ",(0,o.kt)("a",{parentName:"li",href:"https://1.envato.market/Z3nQk"},"https://1.envato.market/Z3nQk"))),(0,o.kt)("p",null,"Thank you!"))}c.isMDXComponent=!0}}]);