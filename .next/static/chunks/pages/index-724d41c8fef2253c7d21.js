(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7250:function(e,t,a){"use strict";a.r(t);var r=a(4942),n=a(7294),o=a(1359),s=a(8504),i=a(8602),c=a(228),l=a(3571),u=a.n(l),d=a(5893);function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(Object(a),!0).forEach((function(t){(0,r.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var f=[{src:"/images/rock-paper-scissor.jpg",altText:"Your happiness is here",caption:"Don't let it go!",key:1},{src:"/images/coin.jpg",altText:"Your happiness is here",caption:"Don't let it go!",key:2},{src:"/images/dadu.jpg",altText:"Your happiness is here",caption:"Don't let it go!",key:3}];t.default=function(e){var t=(0,n.useState)(0),a=t[0],r=t[1],l=(0,n.useState)(!1),m=l[0],p=l[1],_=function(){if(!m){var e=a===f.length-1?0:a+1;r(e)}},x=function(){if(!m){var e=0===a?f.length-1:a-1;r(e)}},h=f.map((function(e){return(0,d.jsxs)(o.Z,{onExiting:function(){return p(!0)},onExited:function(){return p(!1)},children:[(0,d.jsx)("div",{className:u().carouselImage,children:(0,d.jsx)("img",{src:e.src,alt:e.altText,className:u().carouselImage})}),(0,d.jsx)(s.Z,{captionText:e.altText,captionHeader:e.caption})]},e.src)}));return(0,d.jsxs)(i.Z,g(g({activeIndex:a,next:_,previous:x},e),{},{children:[h,(0,d.jsx)(c.Z,{direction:"prev",directionText:"Previous",onClickHandler:x}),(0,d.jsx)(c.Z,{direction:"next",directionText:"Next",onClickHandler:_})]}))}},2833:function(e,t,a){"use strict";a.r(t);a(7294);var r=a(9583),n=a(8634),o=a.n(n),s=a(5893);t.default=function(){var e=[{name:"Facebook",url:"https://www.facebook.com/",icon:(0,s.jsx)(r.Am9,{})},{name:"Twitter",url:"https://www.twitter.com/",icon:(0,s.jsx)(r.fWC,{})},{name:"Instagram",url:"https://www.instagram.com/",icon:(0,s.jsx)(r.Zf_,{})}];return(0,s.jsx)("footer",{className:o().footer,children:(0,s.jsx)("ul",{className:o().socialMediaLinks,children:e.map((function(e){return(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",children:e.icon})},e.name)}))})})}},4705:function(e,t,a){"use strict";a.r(t);a(7294);var r=a(6706),n=a(9544),o=a(6992),s=a(7243),i=a(8008),c=a(5893);t.default=(0,r.$j)((function(e){return{isLoggedIn:e.reducer.isLoggedIn,userEmail:e.reducer.email||""}}))((function(e){var t=e.isLoggedIn,a=e.userEmail;return(0,c.jsx)("div",{children:(0,c.jsxs)(n.Z,{color:"dark",dark:!0,expand:"md",children:[(0,c.jsx)(o.Z,{href:"/",className:"ps-3",children:t?"Welcome, ".concat(a):"Team 2"}),(0,c.jsx)(s.Z,{className:"ms-auto",navbar:!0,children:t?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i.Z,{href:"/editprofile",children:"Edit Profile"}),(0,c.jsx)(i.Z,{href:"/logout",children:"Logout"})]}):(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i.Z,{href:"/register",children:"Register"}),(0,c.jsx)(i.Z,{href:"/login",children:"Login"})]})})]})})}))},3738:function(e,t,a){"use strict";a.r(t);a(7294);var r=a(3707),n=a.n(r),o=a(5893);t.default=function(){return(0,o.jsx)("section",{children:(0,o.jsx)("div",{className:n().FeaturePageImage,children:(0,o.jsxs)("div",{className:"py-12 md:py-20",children:[(0,o.jsxs)("div",{className:"".concat(n()["max-w-3xl"]," mx-auto text-center pb-12 md:pb-20"),children:[(0,o.jsx)("h2",{className:n().featureTitle,children:"Game List"}),(0,o.jsx)("p",{className:n().featureDescription,children:"Berbagai permainan yang bisa anda mainkan di website kami"})]}),(0,o.jsx)("div",{className:n().mderwSm,children:[{title:"Rock Paper Scissors",description:"Game Bantung Gunting Kertas melawan computer",backgroundImage:"/images/rock-paper-scissor.jpg"},{title:"Head or Tails",description:"Mencoba menebak hasil dari lemparan coin",backgroundImage:"/images/coin.jpg"},{title:"Game Dadu",description:"Permainan lempar dadu melawan komputer",backgroundImage:"/images/dadu.jpg"}].map((function(e,t){return(0,o.jsx)("div",{className:n().rectangleItem,style:{backgroundImage:"url(".concat(e.backgroundImage,")")},"data-aos":"fade-up",children:(0,o.jsxs)("div",{className:n().rectangleItemContent,children:[(0,o.jsx)("svg",{viewBox:"0 0 64 64",xmlns:"http://www.w3.org/2000/svg"}),(0,o.jsx)("h2",{className:"h4 mb-2",children:e.title}),(0,o.jsx)("p",{children:e.description})]})},t)}))})]})})})}},6124:function(e,t,a){"use strict";a.r(t);var r=a(7294),n=a(9392),o=a(3738),s=a(2833),i=a(5893);t.default=function(){return(0,r.useEffect)((function(){localStorage.removeItem("token"),localStorage.removeItem("email")}),[]),(0,i.jsxs)("div",{children:[(0,i.jsx)(n.default,{}),(0,i.jsx)(o.default,{}),(0,i.jsx)(s.default,{})]})}},9392:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return c}});a(7294);var r=a(4705),n=a(7250),o=a(3571),s=a.n(o),i=a(5893);function c(){return(0,i.jsx)("section",{children:(0,i.jsxs)("div",{className:s().HomePageImage,children:[(0,i.jsx)(r.default,{}),(0,i.jsxs)("div",{className:s().contentContainer,children:[(0,i.jsx)("h1",{className:s().welcomeText,children:"Welcome to our game site!"}),(0,i.jsx)("div",{className:s().carouselWrapper,children:(0,i.jsx)(n.default,{})})]})]})})}},8581:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(6124)}])},3571:function(e){e.exports={HomePage:"HomePage_HomePage__4rGld",HomePageLogo:"HomePage_HomePageLogo__2GNcd",HomePageImage:"HomePage_HomePageImage__2ASwP",carouselWrapper:"HomePage_carouselWrapper__M9zaw",carouselImage:"HomePage_carouselImage__2mMyx",contentContainer:"HomePage_contentContainer__3brX9",welcomeText:"HomePage_welcomeText__W0MIG","HomePage-logo":"HomePage_HomePage-logo__32LVh","App-logo-spin":"HomePage_App-logo-spin__en1-M",HomePageHeader:"HomePage_HomePageHeader__3BQqw",HomePageLink:"HomePage_HomePageLink__8wwjH"}},3707:function(e){e.exports={FeaturePageImage:"feature_FeaturePageImage__15vSC",LeaderboardPageImage:"feature_LeaderboardPageImage__3ZiuA",GamecoinPageImage:"feature_GamecoinPageImage__16mwe",GamedicePageImage:"feature_GamedicePageImage__3ZZr_",featureTitle:"feature_featureTitle__3j_jX",featureDescription:"feature_featureDescription__1_igv",mderwSm:"feature_mderwSm__1hnjs",rectangleItem:"feature_rectangleItem__RYjPa",rectangleItemContent:"feature_rectangleItemContent__1VXOY",played:"feature_played__3Cusk",playedText:"feature_playedText__1n4px",tableStyle:"feature_tableStyle__1fvkw",buttonContainer:"feature_buttonContainer__DEWS8",buttonPDF:"feature_buttonPDF__P23Up","mderw-sm":"feature_mderw-sm__EtlwB"}},8634:function(e){e.exports={footer:"footer_footer__A2QDl",socialMediaLinks:"footer_socialMediaLinks__7suV2"}},4405:function(e,t,a){"use strict";a.d(t,{w_:function(){return l}});var r=a(7294),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=r.createContext&&r.createContext(n),s=function(){return(s=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},i=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a};function c(e){return e&&e.map((function(e,t){return r.createElement(e.tag,s({key:t},e.attr),c(e.child))}))}function l(e){return function(t){return r.createElement(u,s({attr:s({},e.attr)},t),c(e.child))}}function u(e){var t=function(t){var a,n=e.attr,o=e.size,c=e.title,l=i(e,["attr","size","title"]),u=o||t.size||"1em";return t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className),r.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,l,{className:a,style:s(s({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),c&&r.createElement("title",null,c),e.children)};return void 0!==o?r.createElement(o.Consumer,null,(function(e){return t(e)})):t(n)}},7243:function(e,t,a){"use strict";var r=a(7462),n=a(3366),o=a(7294),s=a(5697),i=a.n(s),c=a(4184),l=a.n(c),u=a(3663),d=["className","cssModule","tabs","pills","vertical","horizontal","justified","fill","navbar","card","tag"],m={tabs:i().bool,pills:i().bool,vertical:i().oneOfType([i().bool,i().string]),horizontal:i().string,justified:i().bool,fill:i().bool,navbar:i().bool,card:i().bool,tag:u.iC,className:i().string,cssModule:i().object},g=function(e){var t=e.className,a=e.cssModule,s=e.tabs,i=e.pills,c=e.vertical,m=e.horizontal,g=e.justified,f=e.fill,p=e.navbar,_=e.card,x=e.tag,h=(0,n.Z)(e,d),v=(0,u.mx)(l()(t,p?"navbar-nav":"nav",!!m&&"justify-content-"+m,function(e){return!1!==e&&(!0===e||"xs"===e?"flex-column":"flex-"+e+"-column")}(c),{"nav-tabs":s,"card-header-tabs":_&&s,"nav-pills":i,"card-header-pills":_&&i,"nav-justified":g,"nav-fill":f}),a);return o.createElement(x,(0,r.Z)({},h,{className:v}))};g.propTypes=m,g.defaultProps={tag:"ul",vertical:!1},t.Z=g},8008:function(e,t,a){"use strict";var r=a(7462),n=a(3366),o=a(7326),s=a(4578),i=a(7294),c=a(5697),l=a.n(c),u=a(4184),d=a.n(u),m=a(3663),g=["className","cssModule","active","tag","innerRef"],f={tag:m.iC,innerRef:l().oneOfType([l().object,l().func,l().string]),disabled:l().bool,active:l().bool,className:l().string,cssModule:l().object,onClick:l().func,href:l().any},p=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind((0,o.Z)(a)),a}(0,s.Z)(t,e);var a=t.prototype;return a.onClick=function(e){this.props.disabled?e.preventDefault():("#"===this.props.href&&e.preventDefault(),this.props.onClick&&this.props.onClick(e))},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,o=e.active,s=e.tag,c=e.innerRef,l=(0,n.Z)(e,g),u=(0,m.mx)(d()(t,"nav-link",{disabled:l.disabled,active:o}),a);return i.createElement(s,(0,r.Z)({},l,{ref:c,onClick:this.onClick,className:u}))},t}(i.Component);p.propTypes=f,p.defaultProps={tag:"a"},t.Z=p},9544:function(e,t,a){"use strict";var r=a(7462),n=a(3366),o=a(7294),s=a(5697),i=a.n(s),c=a(4184),l=a.n(c),u=a(3663),d=["expand","className","cssModule","light","dark","fixed","sticky","color","tag"],m={light:i().bool,dark:i().bool,full:i().bool,fixed:i().string,sticky:i().string,color:i().string,role:i().string,tag:u.iC,className:i().string,cssModule:i().object,expand:i().oneOfType([i().bool,i().string])},g=function(e){var t,a=e.expand,s=e.className,i=e.cssModule,c=e.light,m=e.dark,g=e.fixed,f=e.sticky,p=e.color,_=e.tag,x=(0,n.Z)(e,d),h=(0,u.mx)(l()(s,"navbar",function(e){return!1!==e&&(!0===e||"xs"===e?"navbar-expand":"navbar-expand-"+e)}(a),((t={"navbar-light":c,"navbar-dark":m})["bg-"+p]=p,t["fixed-"+g]=g,t["sticky-"+f]=f,t)),i);return o.createElement(_,(0,r.Z)({},x,{className:h}))};g.propTypes=m,g.defaultProps={tag:"nav",expand:!1},t.Z=g},6992:function(e,t,a){"use strict";var r=a(7462),n=a(3366),o=a(7294),s=a(5697),i=a.n(s),c=a(4184),l=a.n(c),u=a(3663),d=["className","cssModule","tag"],m={tag:u.iC,className:i().string,cssModule:i().object},g=function(e){var t=e.className,a=e.cssModule,s=e.tag,i=(0,n.Z)(e,d),c=(0,u.mx)(l()(t,"navbar-brand"),a);return o.createElement(s,(0,r.Z)({},i,{className:c}))};g.propTypes=m,g.defaultProps={tag:"a"},t.Z=g}},function(e){e.O(0,[774,445,317,262,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);