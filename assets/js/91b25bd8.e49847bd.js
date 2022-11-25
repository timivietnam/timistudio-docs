"use strict";(self.webpackChunktimistudio_docs=self.webpackChunktimistudio_docs||[]).push([[5649],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=r,f=d["".concat(p,".").concat(h)]||d[h]||u[h]||i;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4070:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],s={sidebar_position:3},p="Setup Api Server (React Native)",l={unversionedId:"revenues/setup_api_server",id:"revenues/setup_api_server",title:"Setup Api Server (React Native)",description:"Prerequisites",source:"@site/docs/revenues/setup_api_server.md",sourceDirName:"revenues",slug:"/revenues/setup_api_server",permalink:"/docs/revenues/setup_api_server",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Revenues (React Native)",permalink:"/docs/revenues/react-native-version"}},c=[{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"1. Config Firebase",id:"1-config-firebase",children:[{value:"1.1 Install via NPM",id:"11-install-via-npm",children:[],level:3},{value:"1.2 Android Setup",id:"12-android-setup",children:[{value:"Generating Android credentials",id:"generating-android-credentials",children:[],level:4}],level:3},{value:"1.3 iOS Setup",id:"13-ios-setup",children:[{value:"Generating iOS credentials",id:"generating-ios-credentials",children:[],level:4}],level:3},{value:"1.4 Autolinking &amp; rebuilding",id:"14-autolinking--rebuilding",children:[],level:3}],level:2},{value:"2. Config Database",id:"2-config-database",children:[],level:2},{value:"3. Config Metadata",id:"3-config-metadata",children:[],level:2},{value:"4. Config Vercel and deploy server app",id:"4-config-vercel-and-deploy-server-app",children:[],level:2},{value:"5. Config Api Endpoint",id:"5-config-api-endpoint",children:[],level:2}],u={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"setup-api-server-react-native"},"Setup Api Server (React Native)"),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"Before getting started, you have an active Firebase, Hasura and Vercel project. If you do not meet these prerequisites, follow the links below:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/environment-setup/react-native-environment-setup"},"React Native - Setting up the development environment")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Create a new Firebase project: ",(0,i.kt)("a",{parentName:"p",href:"https://console.firebase.google.com/"},"https://console.firebase.google.com/"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Guide config firebase project: ",(0,i.kt)("a",{parentName:"p",href:"https://rnfirebase.io/"},"https://rnfirebase.io/"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Create a new Hasura project: ",(0,i.kt)("a",{parentName:"p",href:"https://cloud.hasura.io/projects"},"https://cloud.hasura.io/projects"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Create a new Vercel project: ",(0,i.kt)("a",{parentName:"p",href:"https://vercel.com/new"},"https://vercel.com/new"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Guide create Vercel project: ",(0,i.kt)("a",{parentName:"p",href:"https://dev.to/hte305/deploy-express-js-app-to-vercel-38jb"},"https://dev.to/hte305/deploy-express-js-app-to-vercel-38jb"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Video Guide Setup Api Server: ",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=cFipNeeRphE&t"},"https://www.youtube.com/watch?v=cFipNeeRphE&t")))),(0,i.kt)("h2",{id:"1-config-firebase"},"1. Config Firebase"),(0,i.kt)("p",null,"Installing React Native Firebase requires a few steps; installing the NPM module, adding the Firebase config files & rebuilding your application."),(0,i.kt)("h3",{id:"11-install-via-npm"},"1.1 Install via NPM"),(0,i.kt)("p",null,'Install the React Native Firebase "app" module to the root of your React Native project with NPM or Yarn:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# Using npm\nnpm install --save @react-native-firebase/app\n\n# Using Yarn\nyarn add @react-native-firebase/app\n")),(0,i.kt)("p",null,"The @react-native-firebase/app module must be installed before using any other Firebase service."),(0,i.kt)("h3",{id:"12-android-setup"},"1.2 Android Setup"),(0,i.kt)("p",null,"To allow the Android app to securely connect to your Firebase project, a configuration file must be downloaded and added to your project."),(0,i.kt)("h4",{id:"generating-android-credentials"},"Generating Android credentials"),(0,i.kt)("p",null,'On the Firebase console, add a new Android application and enter your projects details. The "Android package name" must match your local projects package name which can be found inside of the manifest tag within the ',(0,i.kt)("em",{parentName:"p"},"/android/app/src/main/AndroidManifest.xml")," file within your project."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"The debug signing certificate is optional to use Firebase with your app, but is required for Dynamic Links, Invites and Phone Authentication. To generate a certificate run cd android && ./gradlew signingReport. This generates two variant keys. You have to copy both 'SHA1' and 'SHA-256' keys that belong to the 'debugAndroidTest' variant key option. Then, you can add those keys to the 'SHA certificate fingerprints' on your app in Firebase console.")),(0,i.kt)("p",null,"Download the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"google-services.json"))," file and place it inside of your project at the following location: ",(0,i.kt)("em",{parentName:"p"},"/android/app/google-services.json.")),(0,i.kt)("h3",{id:"13-ios-setup"},"1.3 iOS Setup"),(0,i.kt)("p",null,"To allow the iOS app to securely connect to your Firebase project, a configuration file must be downloaded and added to your project, and you must enable frameworks in CocoaPods"),(0,i.kt)("h4",{id:"generating-ios-credentials"},"Generating iOS credentials"),(0,i.kt)("p",null,'On the Firebase console, add a new iOS application and enter your projects details. The "iOS bundle ID" must match your local project bundle ID. The bundle ID can be found within the "General" tab when opening the project with Xcode.'),(0,i.kt)("p",null,"Download the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"GoogleService-Info.plist"))," file."),(0,i.kt)("p",null,"Using Xcode, open the projects ",(0,i.kt)("em",{parentName:"p"},"/ios/{projectName}.xcodeproj")," file (or ",(0,i.kt)("em",{parentName:"p"},"/ios/{projectName}.xcworkspace")," if using Pods)."),(0,i.kt)("p",null,'Right click on the project name and "Add files" to the project, as demonstrated below:'),(0,i.kt)("img",{src:"https://user-images.githubusercontent.com/42206067/203504374-021e92e4-1662-4370-baab-120a325119c8.png",alt:"drawing"}),(0,i.kt)("p",null,"Select the downloaded ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"GoogleService-Info.plist")),' file from your computer, and ensure the "Copy items if needed" checkbox is enabled.'),(0,i.kt)("img",{src:"https://user-images.githubusercontent.com/42206067/203505211-fb8320a5-3156-44e0-afce-35266d29023f.png",alt:"drawing"}),(0,i.kt)("h3",{id:"14-autolinking--rebuilding"},"1.4 Autolinking & rebuilding"),(0,i.kt)("p",null,"Once the above steps have been completed, the React Native Firebase library must be linked to your project and your application needs to be rebuilt."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# Android apps\nnpx react-native run-android\n\n# iOS apps\ncd ios/\npod install --repo-update\ncd ..\nnpx react-native run-ios\n")),(0,i.kt)("p",null,"Once successfully linked and rebuilt, your application will be connected to Firebase using the ",(0,i.kt)("em",{parentName:"p"},"@react-native-firebase/app")," module. This module does not provide much functionality, therefore to use other Firebase services, each of the modules for the individual Firebase services need installing separately."),(0,i.kt)("h2",{id:"2-config-database"},"2. Config Database"),(0,i.kt)("p",null,"Open hasura project and open the \u201cData\u201d page, then click \u201cCreate New Database (free)\u201d, then create a new database."),(0,i.kt)("img",{width:"1554",alt:"Screen Shot 2022-11-23 at 23 40 18",src:"https://user-images.githubusercontent.com/42206067/203601371-fbe16bdf-7873-45fd-93fc-8f586e76dfc5.png"}),(0,i.kt)("p",null,'Go to Hasura Cloud page, click "setting" button project, open \u201cEnv vars\u201d. You can see \u201cPG_DATABASE_URL\u201d. Click the copy button, and you can get database information.'),(0,i.kt)("img",{width:"1712",alt:"Screen Shot 2022-11-23 at 23 59 16",src:"https://user-images.githubusercontent.com/42206067/203605707-c53d423b-cd0f-4e33-b368-3839f4c0f4c5.png"}),(0,i.kt)("p",null,"Open file dbexport.pgsql, replace all \u201cdankuanmei\u201d to your database username."),(0,i.kt)("p",null,"And import dbexport.pgsql file to Hasura database (you can use DBeaver)"),(0,i.kt)("p",null,"And update new database url with \u201cPG_DATABASE_URL\u201d value."),(0,i.kt)("h2",{id:"3-config-metadata"},"3. Config Metadata"),(0,i.kt)("p",null,"After import database finish, open \u201cmetadata.json\u201d file go to bottom, update new database url with PG_DATABASE_URL value."),(0,i.kt)("p",null,"Remember if you change \u201cDatabase Display Name\u201d rename database ",(0,i.kt)("em",{parentName:"p"},'"name": "default"'),"  also."),(0,i.kt)("img",{width:"1279",alt:"Screen Shot 2022-11-24 at 17 52 32",src:"https://user-images.githubusercontent.com/42206067/203766494-496f17a3-f4da-44eb-8466-150aff11f32c.png"}),(0,i.kt)("img",{width:"1279",alt:"Screen Shot 2022-11-24 at 17 53 10",src:"https://user-images.githubusercontent.com/42206067/203766511-391e6081-9aa9-472f-8dc0-e20b88930eb0.png"}),(0,i.kt)("p",null,"open Hasura config page, in Hasura Metadata Actions, import \u201cmetadata.json\u201d file."),(0,i.kt)("img",{width:"1712",alt:"Screen Shot 2022-11-24 at 00 12 07",src:"https://user-images.githubusercontent.com/42206067/203608114-16f03382-026f-4738-855d-25f4822f3155.png"}),(0,i.kt)("h2",{id:"4-config-vercel-and-deploy-server-app"},"4. Config Vercel and deploy server app"),(0,i.kt)("p",null,"Go to Firebase Project settings > Service accounts, then click \u201cgenerate new private key\u201d, rename file to \u201cserviceAccountKey.json\u201d, copy it to \u201crevenues-extend-services\u201d source code."),(0,i.kt)("img",{width:"1655",alt:"Screen Shot 2022-11-24 at 00 33 04",src:"https://user-images.githubusercontent.com/42206067/203612166-f801add0-08d5-401a-a01d-1338b503e072.png"}),(0,i.kt)("img",{width:"1201",alt:"Screen Shot 2022-11-24 at 00 50 27",src:"https://user-images.githubusercontent.com/42206067/203615645-f6c4b8f1-5541-43bf-a45f-9c07c0d8ae14.png"}),(0,i.kt)("p",null,"Open \u201cserver.js\u201d file in \u201crevenues-extend-services\u201d, update \u201cDatabase URL\u201d."),(0,i.kt)("img",{width:"1195",alt:"Screen Shot 2022-11-24 at 00 51 54",src:"https://user-images.githubusercontent.com/42206067/203615643-f684ebdb-2280-432d-9edb-08e63e89cbd4.png"}),(0,i.kt)("p",null,"Create a new github repository, push \u201crevenues-extend-services\u201d source code to that github repository."),(0,i.kt)("p",null,"Then create a Vercel project and connect it with the github repository, "),(0,i.kt)("p",null,"Remember to configure require nodejs version to 14.x."),(0,i.kt)("p",null,"When deploy complete copy link domain \u201cDOMAINS\u201d > go to hasura project settings > Add \u201cNew Env Var\u201d with \u201ckey\u201d : \u201cHASURA_GRAPHQL_AUTH_HOOK\u201d "),(0,i.kt)("img",{width:"1623",alt:"Screen Shot 2022-11-24 at 20 02 10",src:"https://user-images.githubusercontent.com/42206067/203792044-a63275eb-9fc1-4b30-b43a-a83f9907e1e4.png"}),(0,i.kt)("h2",{id:"5-config-api-endpoint"},"5. Config Api Endpoint"),(0,i.kt)("p",null,'Finally, go to project app source code > src/configs folder, then replace "API_ENDPOINT" to your "GraphQL API" endpoint'),(0,i.kt)("img",{width:"1158",alt:"Screen Shot 2022-11-24 at 01 28 21",src:"https://user-images.githubusercontent.com/42206067/203621712-85783eac-6588-440d-9cf3-3d3b99f06d48.png"}),(0,i.kt)("img",{width:"1621",alt:"Screen Shot 2022-11-24 at 01 33 47",src:"https://user-images.githubusercontent.com/42206067/203622547-fe1ff943-8659-41ef-ab2b-ee81c3dab2fb.png"}))}d.isMDXComponent=!0}}]);