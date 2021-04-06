(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{76:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var o=n(3),a=n(7),r=(n(0),n(85)),i={title:"How it works",slug:"/how-it-works"},c={unversionedId:"how-it-works",id:"how-it-works",isDocsHomePage:!1,title:"How it works",description:"This section will walk you through the hurdles of implementing bidirectional infinite scroll and how its solved by this package.",source:"@site/docs/how-it-works.md",slug:"/how-it-works",permalink:"/react-native-bidirectional-infinite-scroll/how-it-works",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/how-it-works.md",version:"current",sidebar:"docs",previous:{title:"Installation and Usage",permalink:"/react-native-bidirectional-infinite-scroll/installation"},next:{title:"Example",permalink:"/react-native-bidirectional-infinite-scroll/example"}},l=[{value:"Support for <code>onStartReached</code>",id:"support-for-onstartreached",children:[]},{value:"Race condition between <code>onStartReached</code> and <code>onEndReached</code>",id:"race-condition-between-onstartreached-and-onendreached",children:[]},{value:"<code>onStartReachedThreshold</code> and <code>onEndReachedThreshold</code>",id:"onstartreachedthreshold-and-onendreachedthreshold",children:[]},{value:"Smooth scrolling experience",id:"smooth-scrolling-experience",children:[]}],s={toc:l};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This section will walk you through the hurdles of implementing bidirectional infinite scroll and how its solved by this package.\n\u200b"),Object(r.b)("h3",{id:"support-for-onstartreached"},"Support for ",Object(r.b)("inlineCode",{parentName:"h3"},"onStartReached")),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://reactnative.dev/docs/flatlist"},"FlatList")," from React Native has built-in support for infinite scroll in a single direction (from the end of the list). You can add a prop ",Object(r.b)("inlineCode",{parentName:"p"},"onEndReached"),"on ",Object(r.b)("inlineCode",{parentName:"p"},"FlatList"),". This function gets called when your scroll is near the end of the list, and thus you can append more items to the list from this function. You can Google for ",Object(r.b)("strong",{parentName:"p"},"React Native infinite scrolling"),", and you will find plenty of examples for this. Unfortunately, the ",Object(r.b)("inlineCode",{parentName:"p"},"FlatList")," doesn't provide any similar prop for ",Object(r.b)("inlineCode",{parentName:"p"},"onStartReached")," for infinite scrolling in other directions.\n\u200b\nWe have added support for this prop as part of this package by simply adding the ",Object(r.b)("inlineCode",{parentName:"p"},"onScroll")," handler on ",Object(r.b)("inlineCode",{parentName:"p"},"FlatList"),", and executing the callback function (",Object(r.b)("inlineCode",{parentName:"p"},"onStartReached"),") when the scroll is near the start of the list. If you take a look at the implementation of ",Object(r.b)("a",{parentName:"p",href:"https://github.com/facebook/react-native/blob/master/Libraries/Lists/VirtualizedList.js"},"VirtualizedList"),", you will notice that ",Object(r.b)("inlineCode",{parentName:"p"},"onEndReached"),"function gets called only once per content length. That's there for a good purpose - to avoid redundant function calls on every scroll position change. Similar optimizations have been done for ",Object(r.b)("inlineCode",{parentName:"p"},"onStartReached")," within this package.\n\u200b"),Object(r.b)("h3",{id:"race-condition-between-onstartreached-and-onendreached"},"Race condition between ",Object(r.b)("inlineCode",{parentName:"h3"},"onStartReached")," and ",Object(r.b)("inlineCode",{parentName:"h3"},"onEndReached")),Object(r.b)("p",null,"To maintain a smooth scrolling experience, we need to manage the execution order of ",Object(r.b)("inlineCode",{parentName:"p"},"onStartReached")," and ",Object(r.b)("inlineCode",{parentName:"p"},"onEndReached"),". Because if both the callbacks happen at (almost) the same time, which means items will be added to the list from both directions. This may result in scroll jump, and that's not a good user experience. Thus it's essential to make sure one callback waits for the other callback to finish.\n\u200b"),Object(r.b)("h3",{id:"onstartreachedthreshold-and-onendreachedthreshold"},Object(r.b)("inlineCode",{parentName:"h3"},"onStartReachedThreshold")," and ",Object(r.b)("inlineCode",{parentName:"h3"},"onEndReachedThreshold")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"FlatList")," from React Native has a support for the prop ",Object(r.b)("inlineCode",{parentName:"p"},"onEndReachedThreshold"),", which is ",Object(r.b)("a",{parentName:"p",href:"https://reactnative.dev/docs/flatlist#onendreachedthreshold"},"documented here"),"\n\u200b"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"How far from the end (in units of visible length of the list) the bottom edge of the list must be from the end of the content to trigger the ",Object(r.b)("inlineCode",{parentName:"p"},"onEndReached")," callback.")),Object(r.b)("p",null,"Instead, it's easier to have a fixed value offset (distance from the end of the list) to trigger one of these callbacks. Thus we can maintain these two values within our implementation. So ",Object(r.b)("inlineCode",{parentName:"p"},"onStartReachedThreshold")," and ",Object(r.b)("inlineCode",{parentName:"p"},"onEndReachedThreshold")," props accept the number - distance from the end of the list to trigger one of these callbacks.\n\u200b"),Object(r.b)("h3",{id:"smooth-scrolling-experience"},"Smooth scrolling experience"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"FlatList")," from React Native accepts a prop - ",Object(r.b)("a",{parentName:"p",href:"https://reactnative.dev/docs/scrollview#maintainvisiblecontentposition"},"maintainVisibleContentPosition"),", which makes sure your scroll doesn't jump to the end of the list when more items are added to the list. But this prop is only supported on iOS for now. So taking some inspiration from this ",Object(r.b)("a",{parentName:"p",href:"https://github.com/facebook/react-native/pull/29466"},"PR"),", we published our separate package to add support for this prop on Android - ",Object(r.b)("a",{parentName:"p",href:"https://github.com/GetStream/flat-list-mvcp#maintainvisiblecontentposition-prop-support-for-android-react-native"},"flat-list-mvcp"),". And thus ",Object(r.b)("inlineCode",{parentName:"p"},"@stream-io/flat-list-mvcp")," is a dependency of the ",Object(r.b)("inlineCode",{parentName:"p"},"react-native-bidirectional-scroll")," package.\n\u200b"))}d.isMDXComponent=!0},85:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),d=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=d(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(n),b=o,u=p["".concat(i,".").concat(b)]||p[b]||h[b]||r;return n?a.a.createElement(u,c(c({ref:t},s),{},{components:n})):a.a.createElement(u,c({ref:t},s))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);