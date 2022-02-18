"use strict";(self.webpackChunktimistudio_docs=self.webpackChunktimistudio_docs||[]).push([[6983],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=d(n),m=o,h=c["".concat(s,".").concat(m)]||c[m]||p[m]||r;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var d=2;d<r;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2170:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return u},default:function(){return c}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),l=["components"],i={id:"react-native-environment-setup",title:"React Native",sidebar_position:1},s=void 0,d={unversionedId:"environment-setup/react-native-environment-setup",id:"environment-setup/react-native-environment-setup",title:"React Native",description:"Install Node",source:"@site/docs/environment-setup/react-native-environment-setup.md",sourceDirName:"environment-setup",slug:"/environment-setup/react-native-environment-setup",permalink:"/docs/environment-setup/react-native-environment-setup",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"react-native-environment-setup",title:"React Native",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/intro"},next:{title:"Expo",permalink:"/docs/environment-setup/expo-environment-setup"}},u=[{value:"Install Node",id:"install-node",children:[],level:2},{value:"Watchman",id:"watchman",children:[],level:2},{value:"Android development environment",id:"android-development-environment",children:[{value:"1. Install Android Studio",id:"1-install-android-studio",children:[],level:3},{value:"2. Install the Android SDK",id:"2-install-the-android-sdk",children:[],level:3},{value:"3. Configure the ANDROID_HOME environment variable",id:"3-configure-the-android_home-environment-variable",children:[],level:3}],level:2},{value:"iOS development environment",id:"ios-development-environment",children:[{value:"Xcode",id:"xcode",children:[],level:3},{value:"Command Line Tools",id:"command-line-tools",children:[],level:3},{value:"Installing an iOS Simulator in Xcode",id:"installing-an-ios-simulator-in-xcode",children:[],level:3},{value:"CocoaPods",id:"cocoapods",children:[],level:3},{value:"OUR PRODUCTS:",id:"our-products",children:[],level:3}],level:2}],p={toc:u};function c(e){var t=e.components,n=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"install-node"},"Install Node"),(0,r.kt)("p",null,"Go to ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/"},"https://nodejs.org/en/download/"),", download latest LTS version then install it."),(0,r.kt)("h2",{id:"watchman"},"Watchman"),(0,r.kt)("p",null,"Follow the Watchman installation guide to compile and install Watchman from source."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://facebook.github.io/watchman/docs/install.html"},"https://facebook.github.io/watchman/docs/install.html")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Watchman is a tool by Facebook for watching changes in the filesystem. It is highly recommended you install it for better performance and increased compatibility in certain edge cases (translation: you may be able to get by without installing this, but your mileage may vary; installing this now may save you from a headache later).")),(0,r.kt)("h2",{id:"android-development-environment"},"Android development environment"),(0,r.kt)("p",null,"Setting up your development environment can be somewhat tedious if you're new to Android development. If you're already familiar with Android development, there are a few things you may need to configure. In either case, please make sure to carefully follow the next few steps."),(0,r.kt)("h3",{id:"1-install-android-studio"},"1. Install Android Studio"),(0,r.kt)("p",null,"Download and install Android Studio. While on Android Studio installation wizard, make sure the boxes next to all of the following items are checked:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Android SDK"),(0,r.kt)("li",{parentName:"ul"},"Android SDK Platform"),(0,r.kt)("li",{parentName:"ul"},"Android Virtual Device")),(0,r.kt)("p",null,'Then, click "Next" to install all of these components.'),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If the checkboxes are grayed out, you will have a chance to install these components later on.")),(0,r.kt)("p",null,"Once setup has finalized and you're presented with the Welcome screen, proceed to the next step."),(0,r.kt)("h3",{id:"2-install-the-android-sdk"},"2. Install the Android SDK"),(0,r.kt)("p",null,"Android Studio installs the latest Android SDK by default. Building a React Native app with native code, however, requires the Android 10 (Q) SDK in particular. Additional Android SDKs can be installed through the SDK Manager in Android Studio."),(0,r.kt)("p",null,'To do that, open Android Studio, click on "Configure" button and select "SDK Manager".'),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'The SDK Manager can also be found within the Android Studio "Preferences" dialog, under Appearance & Behavior \u2192 System Settings \u2192 Android SDK.')),(0,r.kt)("p",null,'Select the "SDK Platforms" tab from within the SDK Manager, then check the box next to "Show Package Details" in the bottom right corner. Look for and expand the Android 10 (Q) entry, then make sure the following items are checked:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Android SDK Platform 29"),(0,r.kt)("li",{parentName:"ul"},"Intel x86 Atom_64 System Image or Google APIs Intel x86 Atom System Image")),(0,r.kt)("p",null,'Next, select the "SDK Tools" tab and check the box next to "Show Package Details" here as well. Look for and expand the "Android SDK Build-Tools" entry, then make sure that 29.0.2 is selected.'),(0,r.kt)("p",null,'Finally, click "Apply" to download and install the Android SDK and related build tools.'),(0,r.kt)("h3",{id:"3-configure-the-android_home-environment-variable"},"3. Configure the ANDROID_HOME environment variable"),(0,r.kt)("p",null,"The React Native tools require some environment variables to be set up in order to build apps with native code."),(0,r.kt)("p",null,"Add the following lines to your $HOME/.bash_profile or $HOME/.bashrc (if you are using zsh then ~/.zprofile or ~/.zshrc) config file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export ANDROID_HOME=$HOME/Android/Sdk\nexport PATH=$PATH:$ANDROID_HOME/emulator\nexport PATH=$PATH:$ANDROID_HOME/tools\nexport PATH=$PATH:$ANDROID_HOME/tools/bin\nexport PATH=$PATH:$ANDROID_HOME/platform-tools\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},".bash_profile is specific to bash. If you're using another shell, you will need to edit the appropriate shell-specific config file.")),(0,r.kt)("p",null,"Type source $HOME/.bash_profile for bash or source $HOME/.zprofile to load the config into your current shell. Verify that ANDROID_HOME has been set by running echo $ANDROID_HOME and the appropriate directories have been added to your path by running echo $PATH."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'Please make sure you use the correct Android SDK path. You can find the actual location of the SDK in the Android Studio "Preferences" dialog, under Appearance & Behavior \u2192 System Settings \u2192 Android SDK.')),(0,r.kt)("h2",{id:"ios-development-environment"},"iOS development environment"),(0,r.kt)("p",null,"You will need Node, Watchman, the React Native command line interface, Xcode and CocoaPods."),(0,r.kt)("p",null,"While you can use any editor of your choice to develop your app, you will need to install Xcode in order to set up the necessary tooling to build your React Native app for iOS."),(0,r.kt)("h3",{id:"xcode"},"Xcode"),(0,r.kt)("p",null,"The easiest way to install Xcode is via the Mac App Store. Installing Xcode will also install the iOS Simulator and all the necessary tools to build your iOS app."),(0,r.kt)("p",null,"If you have already installed Xcode on your system, make sure it is version 10 or newer."),(0,r.kt)("h3",{id:"command-line-tools"},"Command Line Tools"),(0,r.kt)("p",null,'You will also need to install the Xcode Command Line Tools. Open Xcode, then choose "Preferences..." from the Xcode menu. Go to the Locations panel and install the tools by selecting the most recent version in the Command Line Tools dropdown.'),(0,r.kt)("h3",{id:"installing-an-ios-simulator-in-xcode"},"Installing an iOS Simulator in Xcode"),(0,r.kt)("p",null,"To install a simulator, open Xcode > Preferences... and select the Components tab. Select a simulator with the corresponding version of iOS you wish to use."),(0,r.kt)("h3",{id:"cocoapods"},"CocoaPods"),(0,r.kt)("p",null,"CocoaPods is built with Ruby and it will be installable with the default Ruby available on macOS. You can use a Ruby Version manager, however we recommend that you use the standard Ruby available on macOS unless you know what you're doing."),(0,r.kt)("p",null,"Using the default Ruby install will require you to use sudo when installing gems. (This is only an issue for the duration of the gem installation, though.)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo gem install cocoapods\n")),(0,r.kt)("p",null,"For more information, please visit CocoaPods Getting Started guide."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://guides.cocoapods.org/using/getting-started.html"},"https://guides.cocoapods.org/using/getting-started.html")),(0,r.kt)("h3",{id:"our-products"},"OUR PRODUCTS:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fairpay \u2013 Split Bill React Native: ",(0,r.kt)("a",{parentName:"li",href:"https://1.envato.market/Kez64a"},"https://1.envato.market/Kez64a")),(0,r.kt)("li",{parentName:"ul"},"Monsy Money Manager Full Application: ",(0,r.kt)("a",{parentName:"li",href:"https://1.envato.market/do9d3k"},"https://1.envato.market/do9d3k")),(0,r.kt)("li",{parentName:"ul"},"Runner Flutter Full Application: ",(0,r.kt)("a",{parentName:"li",href:"https://1.envato.market/qnAOaq"},"https://1.envato.market/qnAOaq")),(0,r.kt)("li",{parentName:"ul"},"Triplan Flutter Template: ",(0,r.kt)("a",{parentName:"li",href:"https://1.envato.market/doyJdK"},"https://1.envato.market/doyJdK")),(0,r.kt)("li",{parentName:"ul"},"Stacy Roommate Flutter Template: ",(0,r.kt)("a",{parentName:"li",href:"https://1.envato.market/YgR1Xj"},"https://1.envato.market/YgR1Xj")),(0,r.kt)("li",{parentName:"ul"},"Fitness Love: ",(0,r.kt)("a",{parentName:"li",href:"https://1.envato.market/x9kDjx"},"https://1.envato.market/x9kDjx")),(0,r.kt)("li",{parentName:"ul"},"Doctor Plus \u2013 Patient React Native: ",(0,r.kt)("a",{parentName:"li",href:"https://1.envato.market/x99yJR"},"https://1.envato.market/x99yJR")),(0,r.kt)("li",{parentName:"ul"},"Doctor Plus \u2013 Doctor React Native: ",(0,r.kt)("a",{parentName:"li",href:"https://1.envato.market/x07Bk"},"https://1.envato.market/x07Bk")),(0,r.kt)("li",{parentName:"ul"},"Carer \u2013 Patient React Native App Template: ",(0,r.kt)("a",{parentName:"li",href:"https://1.envato.market/RzAzy"},"https://1.envato.market/RzAzy")),(0,r.kt)("li",{parentName:"ul"},"Wala \u2013 Food React Native: ",(0,r.kt)("a",{parentName:"li",href:"http://1.envato.market/qbXgy"},"http://1.envato.market/qbXgy")),(0,r.kt)("li",{parentName:"ul"},"Evez React Native: ",(0,r.kt)("a",{parentName:"li",href:"https://1.envato.market/emE1r"},"https://1.envato.market/emE1r")),(0,r.kt)("li",{parentName:"ul"},"Finany \u2013 Cashflow Manager App: ",(0,r.kt)("a",{parentName:"li",href:"https://1.envato.market/d1v17"},"https://1.envato.market/d1v17")),(0,r.kt)("li",{parentName:"ul"},"Imba React Native: ",(0,r.kt)("a",{parentName:"li",href:"https://1.envato.market/M3KWM"},"https://1.envato.market/M3KWM")),(0,r.kt)("li",{parentName:"ul"},"Healer React Native: ",(0,r.kt)("a",{parentName:"li",href:"https://1.envato.market/v6BDd"},"https://1.envato.market/v6BDd")),(0,r.kt)("li",{parentName:"ul"},"Healer Flutter: ",(0,r.kt)("a",{parentName:"li",href:"https://1.envato.market/b1xk9"},"https://1.envato.market/b1xk9")),(0,r.kt)("li",{parentName:"ul"},"Finey React Rative: ",(0,r.kt)("a",{parentName:"li",href:"https://1.envato.market/dJQyM"},"https://1.envato.market/dJQyM")),(0,r.kt)("li",{parentName:"ul"},"Finey Flutter: ",(0,r.kt)("a",{parentName:"li",href:"https://1.envato.market/RdB09"},"https://1.envato.market/RdB09")),(0,r.kt)("li",{parentName:"ul"},"Kid Draw React Native: ",(0,r.kt)("a",{parentName:"li",href:"https://1.envato.market/Z3nQk"},"https://1.envato.market/Z3nQk"))),(0,r.kt)("p",null,"Thank you!"))}c.isMDXComponent=!0}}]);