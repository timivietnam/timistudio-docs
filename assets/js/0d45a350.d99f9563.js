"use strict";(self.webpackChunktimistudio_docs=self.webpackChunktimistudio_docs||[]).push([[5778],{3905:function(t,e,a){a.d(e,{Zo:function(){return s},kt:function(){return k}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),u=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},s=function(t){var e=u(t.components);return n.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,p=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),c=u(a),k=r,d=c["".concat(p,".").concat(k)]||c[k]||m[k]||o;return a?n.createElement(d,l(l({ref:e},s),{},{components:a})):n.createElement(d,l({ref:e},s))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,l=new Array(o);l[0]=c;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:r,l[1]=i;for(var u=2;u<o;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},1809:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return s},default:function(){return c}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),l=["components"],i={sidebar_position:5},p="Patient Plus (Flutter)",u={unversionedId:"doctorplus-patient/flutter-version",id:"doctorplus-patient/flutter-version",title:"Patient Plus (Flutter)",description:"Environment confirmation",source:"@site/docs/doctorplus-patient/flutter-version.md",sourceDirName:"doctorplus-patient",slug:"/doctorplus-patient/flutter-version",permalink:"/docs/doctorplus-patient/flutter-version",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Doctor Plus - Patient (Expo)",permalink:"/docs/doctorplus-patient/expo-version"},next:{title:"Introduction",permalink:"/docs/evez/introduction"}},s=[{value:"Environment confirmation",id:"environment-confirmation",children:[],level:2},{value:"Run in development",id:"run-in-development",children:[],level:2},{value:"File structure",id:"file-structure",children:[],level:2},{value:"SUPPORT INFORMATION",id:"support-information",children:[{value:"OUR PRODUCTS:",id:"our-products",children:[],level:3}],level:2}],m={toc:s};function c(t){var e=t.components,a=(0,r.Z)(t,l);return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"patient-plus-flutter"},"Patient Plus (Flutter)"),(0,o.kt)("h2",{id:"environment-confirmation"},"Environment confirmation"),(0,o.kt)("p",null,"In Flutter application, please setup environment follow Flutter environment setup guide first."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/environment-setup/flutter-environment-setup"},"https://docs.timistudio.dev/docs/environment-setup/flutter-environment-setup")),(0,o.kt)("p",null,"Then to confirm all setup is ok, please execute command below to verify."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ flutter --version\nFlutter 2.8.1 \u2022 channel stable \u2022 https://github.com/flutter/flutter.git\nFramework \u2022 revision 77d935af4d (8 weeks ago) \u2022 2021-12-16 08:37:33 -0800\nEngine \u2022 revision 890a5fca2e\nTools \u2022 Dart 2.15.1\n")),(0,o.kt)("p",null,"If you are using MacOS and work with iOS, please check your XCode is latest version."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ /usr/bin/xcodebuild -version\nXcode 13.2.1\nBuild version 13C100\n")),(0,o.kt)("h2",{id:"run-in-development"},"Run in development"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd <flutter-project-root>\nflutter pub get\n")),(0,o.kt)("p",null,"Then list, launch and create emulators."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"flutter emulators\n")),(0,o.kt)("p",null,"Start simulator with command below"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"flutter emulators --launch <emulator id>\n")),(0,o.kt)("p",null,"Finally run project"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"flutter run\n")),(0,o.kt)("h2",{id:"file-structure"},"File structure"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"- android/                                    # Flutter default android files\n- ios/                                        # Flutter default iOS files\n- assets/                                     # Image asset files\n- fonts/                                      # Fonts family in app\n- lib/                                        # Contains code program\n- test/                                       # Contains code test\n- pubspec.yaml                                # flutter packages\n")),(0,o.kt)("h2",{id:"support-information"},"SUPPORT INFORMATION"),(0,o.kt)("p",null,"Thank for your purchase, feel free to contact with us if you have any trouble when install application."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Email: ",(0,o.kt)("a",{parentName:"li",href:"mailto:admin@timistudio.dev"},"admin@timistudio.dev")),(0,o.kt)("li",{parentName:"ul"},"Facebook official fanpage: ",(0,o.kt)("a",{parentName:"li",href:"https://www.facebook.com/timistudio.dev"},"https://www.facebook.com/timistudio.dev"))),(0,o.kt)("h3",{id:"our-products"},"OUR PRODUCTS:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fairpay \u2013 Split Bill React Native: ",(0,o.kt)("a",{parentName:"li",href:"https://1.envato.market/Kez64a"},"https://1.envato.market/Kez64a")),(0,o.kt)("li",{parentName:"ul"},"Monsy Money Manager Full Application: ",(0,o.kt)("a",{parentName:"li",href:"https://1.envato.market/do9d3k"},"https://1.envato.market/do9d3k")),(0,o.kt)("li",{parentName:"ul"},"Runner Flutter Full Application: ",(0,o.kt)("a",{parentName:"li",href:"https://1.envato.market/qnAOaq"},"https://1.envato.market/qnAOaq")),(0,o.kt)("li",{parentName:"ul"},"Triplan Flutter Template: ",(0,o.kt)("a",{parentName:"li",href:"https://1.envato.market/doyJdK"},"https://1.envato.market/doyJdK")),(0,o.kt)("li",{parentName:"ul"},"Stacy Roommate Flutter Template: ",(0,o.kt)("a",{parentName:"li",href:"https://1.envato.market/YgR1Xj"},"https://1.envato.market/YgR1Xj")),(0,o.kt)("li",{parentName:"ul"},"Fitness Love: ",(0,o.kt)("a",{parentName:"li",href:"https://1.envato.market/x9kDjx"},"https://1.envato.market/x9kDjx")),(0,o.kt)("li",{parentName:"ul"},"Doctor Plus \u2013 Patient React Native: ",(0,o.kt)("a",{parentName:"li",href:"https://1.envato.market/x99yJR"},"https://1.envato.market/x99yJR")),(0,o.kt)("li",{parentName:"ul"},"Doctor Plus \u2013 Doctor React Native: ",(0,o.kt)("a",{parentName:"li",href:"https://1.envato.market/x07Bk"},"https://1.envato.market/x07Bk")),(0,o.kt)("li",{parentName:"ul"},"Carer \u2013 Patient React Native App Template: ",(0,o.kt)("a",{parentName:"li",href:"https://1.envato.market/RzAzy"},"https://1.envato.market/RzAzy")),(0,o.kt)("li",{parentName:"ul"},"Wala \u2013 Food React Native: ",(0,o.kt)("a",{parentName:"li",href:"http://1.envato.market/qbXgy"},"http://1.envato.market/qbXgy")),(0,o.kt)("li",{parentName:"ul"},"Evez React Native: ",(0,o.kt)("a",{parentName:"li",href:"https://1.envato.market/emE1r"},"https://1.envato.market/emE1r")),(0,o.kt)("li",{parentName:"ul"},"Finany \u2013 Cashflow Manager App: ",(0,o.kt)("a",{parentName:"li",href:"https://1.envato.market/d1v17"},"https://1.envato.market/d1v17")),(0,o.kt)("li",{parentName:"ul"},"Imba React Native: ",(0,o.kt)("a",{parentName:"li",href:"https://1.envato.market/M3KWM"},"https://1.envato.market/M3KWM")),(0,o.kt)("li",{parentName:"ul"},"Healer React Native: ",(0,o.kt)("a",{parentName:"li",href:"https://1.envato.market/v6BDd"},"https://1.envato.market/v6BDd")),(0,o.kt)("li",{parentName:"ul"},"Healer Flutter: ",(0,o.kt)("a",{parentName:"li",href:"https://1.envato.market/b1xk9"},"https://1.envato.market/b1xk9")),(0,o.kt)("li",{parentName:"ul"},"Finey React Rative: ",(0,o.kt)("a",{parentName:"li",href:"https://1.envato.market/dJQyM"},"https://1.envato.market/dJQyM")),(0,o.kt)("li",{parentName:"ul"},"Finey Flutter: ",(0,o.kt)("a",{parentName:"li",href:"https://1.envato.market/RdB09"},"https://1.envato.market/RdB09")),(0,o.kt)("li",{parentName:"ul"},"Kid Draw React Native: ",(0,o.kt)("a",{parentName:"li",href:"https://1.envato.market/Z3nQk"},"https://1.envato.market/Z3nQk"))),(0,o.kt)("p",null,"Thank you!"))}c.isMDXComponent=!0}}]);