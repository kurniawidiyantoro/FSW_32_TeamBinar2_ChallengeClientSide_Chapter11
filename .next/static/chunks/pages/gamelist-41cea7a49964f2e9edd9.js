(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5],{4184:function(e,n){var t;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var o=typeof t;if("string"===o||"number"===o)e.push(t);else if(Array.isArray(t)&&t.length){var i=a.apply(null,t);i&&e.push(i)}else if("object"===o)for(var s in t)r.call(t,s)&&t[s]&&e.push(s)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(t=function(){return a}.apply(n,[]))||(e.exports=t)}()},4705:function(e,n,t){"use strict";t.r(n);t(7294);var r=t(6706),a=t(9544),o=t(6992),i=t(7243),s=t(8008),c=t(5893);n.default=(0,r.$j)((function(e){return{isLoggedIn:e.reducer.isLoggedIn,userEmail:e.reducer.email||""}}))((function(e){var n=e.isLoggedIn,t=e.userEmail;return(0,c.jsx)("div",{children:(0,c.jsxs)(a.Z,{color:"dark",dark:!0,expand:"md",children:[(0,c.jsx)(o.Z,{href:"/",className:"ps-3",children:n?"Welcome, ".concat(t):"Team 2"}),(0,c.jsx)(i.Z,{className:"ms-auto",navbar:!0,children:n?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.Z,{href:"/editprofile",children:"Edit Profile"}),(0,c.jsx)(s.Z,{href:"/logout",children:"Logout"})]}):(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.Z,{href:"/register",children:"Register"}),(0,c.jsx)(s.Z,{href:"/login",children:"Login"})]})})]})})}))},1420:function(e,n,t){"use strict";t.r(n);t(7294);var r=t(6706),a=t(9544),o=t(3999),i=t(6992),s=t(7243),c=t(8008),l=(t(9594),t(5893));n.default=(0,r.$j)((function(e){return{userEmail:e.reducer.email,totalScore:e.reducer.totalScore}}))((function(e){var n=e.userEmail;return e.totalScore,(0,r.I0)(),(0,l.jsx)("div",{children:(0,l.jsxs)(a.Z,{color:"dark",dark:!0,expand:"md",children:[(0,l.jsx)(o.Z,{children:(0,l.jsx)(i.Z,{className:"ps-3",children:"Welcome ".concat(n)})}),(0,l.jsxs)(s.Z,{className:"ms-auto",navbar:!0,children:[(0,l.jsx)(o.Z,{children:(0,l.jsx)(c.Z,{href:"/editprofile",children:"Edit Profile"})}),(0,l.jsx)(o.Z,{children:(0,l.jsx)(c.Z,{href:"/",className:"pe-3",children:"Logout"})})]})]})})}))},222:function(e,n,t){"use strict";t.r(n);var r=t(5861),a=t(7757),o=t.n(a),i=t(7294),s=t(7975),c=(t(4705),t(1420)),l=t(3707),u=t.n(l),d=t(6706),f=t(9594),p=t(5893);n.default=(0,d.$j)((function(e){return{isLoggedIn:e.reducer.isLoggedIn,user:e.reducer.user,playedGames:e.reducer.playedGames}}))((function(e){var n=e.isLoggedIn,t=e.user,a=e.playedGames,l=(0,d.I0)(),m=(0,i.useState)(!1),g=m[0],v=m[1],h=function(){var e=(0,r.Z)(o().mark((function e(){var n,t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=localStorage.getItem("token"),t=localStorage.getItem("email"),console.log(n),console.log(t);try{n?console.log("Authorized !"):(console.log("Not Authorized!"),window.location.replace("/login"))}catch(r){console.log("Internal Server Error!"),window.location.replace("/login")}case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,i.useEffect)((function(){var e=localStorage.getItem("email");l((0,f.vV)(e)),h();var n=JSON.parse(localStorage.getItem("playedGames"))||{};l((0,f.Xr)(n))}),[]);return(0,p.jsxs)("div",{className:u().FeaturePageImage,children:[(0,p.jsx)(c.default,{isLoggedIn:n,userEmail:t.email}),(0,p.jsxs)("div",{className:"py-12 md:py-20",children:[(0,p.jsxs)("div",{className:"text-center",children:[(0,p.jsx)("h2",{className:u().featureTitle,children:"Game List"}),(0,p.jsx)("p",{className:u().featureDescription,children:"Berbagai permainan yang bisa anda mainkan di website kami"})]}),(0,p.jsx)("div",{className:"d-flex justify-content-center",children:(0,p.jsx)(s.Z,{color:"primary",onClick:function(){window.location.replace("/leaderboard")},children:"Leaderboard"})}),(0,p.jsx)("div",{className:u().mderwSm,children:[{title:"Rock Paper Scissor",description:"Bantung Gunting Kertas melawan computer",backgroundImage:"/images/rock-paper-scissor.jpg",path:"/gamerps"},{title:"Head or Tails",description:"Mencoba menebak hasil dari lemparan coin",backgroundImage:"/images/coin.jpg",path:"/gamecoin"},{title:"Game Dadu",description:"Permainan lempar dadu melawan komputer",backgroundImage:"/images/dadu.jpg",path:"/gamedice"}].map((function(e,n){return(0,p.jsxs)("div",{className:"".concat(u().rectangleItem," ").concat(a[e.path]?u().played:""),style:{backgroundImage:"url(".concat(e.backgroundImage,")")},"data-aos":"fade-up",children:[(0,p.jsx)("div",{className:u().playedText,children:a[e.path]?"Pernah Dimainkan":""}),console.log("Item path: ".concat(e.path,", Played: ").concat(a[e.path])),(0,p.jsxs)("div",{className:u().rectangleItemContent,children:[(0,p.jsx)("svg",{viewBox:"0 0 64 64",xmlns:"http://www.w3.org/2000/svg"}),(0,p.jsx)("h2",{className:"h4 mb-2",children:e.title}),(0,p.jsx)("p",{children:e.description}),(0,p.jsx)(s.Z,{color:"primary",onClick:function(){return n=e.path,v(!0),console.log(n),void window.location.replace(n);var n},disabled:g,children:g?"Processing":"Play"})]})]},n)}))})]})]})}))},9594:function(e,n,t){"use strict";t.d(n,{vV:function(){return r},SL:function(){return a},Xr:function(){return o}});t(7757);function r(e){return{type:"SET_EMAIL",payload:e}}var a=function(e,n){return{type:"SET_LOGGED_IN",payload:{isLoggedIn:e,user:n}}},o=function(e){return{type:"SET_PLAYED_GAMES",payload:e}}},5201:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/gamelist",function(){return t(222)}])},3707:function(e){e.exports={FeaturePageImage:"feature_FeaturePageImage__15vSC",LeaderboardPageImage:"feature_LeaderboardPageImage__3ZiuA",GamecoinPageImage:"feature_GamecoinPageImage__16mwe",GamedicePageImage:"feature_GamedicePageImage__3ZZr_",featureTitle:"feature_featureTitle__3j_jX",featureDescription:"feature_featureDescription__1_igv",mderwSm:"feature_mderwSm__1hnjs",rectangleItem:"feature_rectangleItem__RYjPa",rectangleItemContent:"feature_rectangleItemContent__1VXOY",played:"feature_played__3Cusk",playedText:"feature_playedText__1n4px",tableStyle:"feature_tableStyle__1fvkw",buttonContainer:"feature_buttonContainer__DEWS8",buttonPDF:"feature_buttonPDF__P23Up","mderw-sm":"feature_mderw-sm__EtlwB"}},7975:function(e,n,t){"use strict";var r=t(7462),a=t(3366),o=t(7326),i=t(4578),s=t(7294),c=t(5697),l=t.n(c),u=t(4184),d=t.n(u),f=t(3663),p=["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"],m={active:l().bool,"aria-label":l().string,block:l().bool,color:l().string,disabled:l().bool,outline:l().bool,tag:f.iC,innerRef:l().oneOfType([l().object,l().func,l().string]),onClick:l().func,size:l().string,children:l().node,className:l().string,cssModule:l().object,close:l().bool},g=function(e){function n(n){var t;return(t=e.call(this,n)||this).onClick=t.onClick.bind((0,o.Z)(t)),t}(0,i.Z)(n,e);var t=n.prototype;return t.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},t.render=function(){var e=this.props,n=e.active,t=e["aria-label"],o=e.block,i=e.className,c=e.close,l=e.cssModule,u=e.color,m=e.outline,g=e.size,v=e.tag,h=e.innerRef,b=(0,a.Z)(e,p);c&&"undefined"===typeof b.children&&(b.children=s.createElement("span",{"aria-hidden":!0},"\xd7"));var x="btn"+(m?"-outline":"")+"-"+u,y=(0,f.mx)(d()(i,{close:c},c||"btn",c||x,!!g&&"btn-"+g,!!o&&"btn-block",{active:n,disabled:this.props.disabled}),l);b.href&&"button"===v&&(v="a");var _=c?"Close":null;return s.createElement(v,(0,r.Z)({type:"button"===v&&b.onClick?"button":void 0},b,{className:y,ref:h,onClick:this.onClick,"aria-label":t||_}))},n}(s.Component);g.propTypes=m,g.defaultProps={color:"secondary",tag:"button"},n.Z=g},7243:function(e,n,t){"use strict";var r=t(7462),a=t(3366),o=t(7294),i=t(5697),s=t.n(i),c=t(4184),l=t.n(c),u=t(3663),d=["className","cssModule","tabs","pills","vertical","horizontal","justified","fill","navbar","card","tag"],f={tabs:s().bool,pills:s().bool,vertical:s().oneOfType([s().bool,s().string]),horizontal:s().string,justified:s().bool,fill:s().bool,navbar:s().bool,card:s().bool,tag:u.iC,className:s().string,cssModule:s().object},p=function(e){var n=e.className,t=e.cssModule,i=e.tabs,s=e.pills,c=e.vertical,f=e.horizontal,p=e.justified,m=e.fill,g=e.navbar,v=e.card,h=e.tag,b=(0,a.Z)(e,d),x=(0,u.mx)(l()(n,g?"navbar-nav":"nav",!!f&&"justify-content-"+f,function(e){return!1!==e&&(!0===e||"xs"===e?"flex-column":"flex-"+e+"-column")}(c),{"nav-tabs":i,"card-header-tabs":v&&i,"nav-pills":s,"card-header-pills":v&&s,"nav-justified":p,"nav-fill":m}),t);return o.createElement(h,(0,r.Z)({},b,{className:x}))};p.propTypes=f,p.defaultProps={tag:"ul",vertical:!1},n.Z=p},3999:function(e,n,t){"use strict";var r=t(7462),a=t(3366),o=t(7294),i=t(5697),s=t.n(i),c=t(4184),l=t.n(c),u=t(3663),d=["className","cssModule","active","tag"],f={tag:u.iC,active:s().bool,className:s().string,cssModule:s().object},p=function(e){var n=e.className,t=e.cssModule,i=e.active,s=e.tag,c=(0,a.Z)(e,d),f=(0,u.mx)(l()(n,"nav-item",!!i&&"active"),t);return o.createElement(s,(0,r.Z)({},c,{className:f}))};p.propTypes=f,p.defaultProps={tag:"li"},n.Z=p},8008:function(e,n,t){"use strict";var r=t(7462),a=t(3366),o=t(7326),i=t(4578),s=t(7294),c=t(5697),l=t.n(c),u=t(4184),d=t.n(u),f=t(3663),p=["className","cssModule","active","tag","innerRef"],m={tag:f.iC,innerRef:l().oneOfType([l().object,l().func,l().string]),disabled:l().bool,active:l().bool,className:l().string,cssModule:l().object,onClick:l().func,href:l().any},g=function(e){function n(n){var t;return(t=e.call(this,n)||this).onClick=t.onClick.bind((0,o.Z)(t)),t}(0,i.Z)(n,e);var t=n.prototype;return t.onClick=function(e){this.props.disabled?e.preventDefault():("#"===this.props.href&&e.preventDefault(),this.props.onClick&&this.props.onClick(e))},t.render=function(){var e=this.props,n=e.className,t=e.cssModule,o=e.active,i=e.tag,c=e.innerRef,l=(0,a.Z)(e,p),u=(0,f.mx)(d()(n,"nav-link",{disabled:l.disabled,active:o}),t);return s.createElement(i,(0,r.Z)({},l,{ref:c,onClick:this.onClick,className:u}))},n}(s.Component);g.propTypes=m,g.defaultProps={tag:"a"},n.Z=g},9544:function(e,n,t){"use strict";var r=t(7462),a=t(3366),o=t(7294),i=t(5697),s=t.n(i),c=t(4184),l=t.n(c),u=t(3663),d=["expand","className","cssModule","light","dark","fixed","sticky","color","tag"],f={light:s().bool,dark:s().bool,full:s().bool,fixed:s().string,sticky:s().string,color:s().string,role:s().string,tag:u.iC,className:s().string,cssModule:s().object,expand:s().oneOfType([s().bool,s().string])},p=function(e){var n,t=e.expand,i=e.className,s=e.cssModule,c=e.light,f=e.dark,p=e.fixed,m=e.sticky,g=e.color,v=e.tag,h=(0,a.Z)(e,d),b=(0,u.mx)(l()(i,"navbar",function(e){return!1!==e&&(!0===e||"xs"===e?"navbar-expand":"navbar-expand-"+e)}(t),((n={"navbar-light":c,"navbar-dark":f})["bg-"+g]=g,n["fixed-"+p]=p,n["sticky-"+m]=m,n)),s);return o.createElement(v,(0,r.Z)({},h,{className:b}))};p.propTypes=f,p.defaultProps={tag:"nav",expand:!1},n.Z=p},6992:function(e,n,t){"use strict";var r=t(7462),a=t(3366),o=t(7294),i=t(5697),s=t.n(i),c=t(4184),l=t.n(c),u=t(3663),d=["className","cssModule","tag"],f={tag:u.iC,className:s().string,cssModule:s().object},p=function(e){var n=e.className,t=e.cssModule,i=e.tag,s=(0,a.Z)(e,d),c=(0,u.mx)(l()(n,"navbar-brand"),t);return o.createElement(i,(0,r.Z)({},s,{className:c}))};p.propTypes=f,p.defaultProps={tag:"a"},n.Z=p},3663:function(e,n,t){"use strict";t.d(n,{mx:function(){return i},CE:function(){return s},ei:function(){return c},O4:function(){return u},iC:function(){return f},wF:function(){return p},rb:function(){return m},E5:function(){return g},Kn:function(){return v}});var r,a=t(5697),o=t.n(a);function i(e,n){return void 0===e&&(e=""),void 0===n&&(n=r),n?e.split(" ").map((function(e){return n[e]||e})).join(" "):e}function s(e,n){var t={};return Object.keys(e).forEach((function(r){-1===n.indexOf(r)&&(t[r]=e[r])})),t}function c(e,n){for(var t,r=Array.isArray(n)?n:[n],a=r.length,o={};a>0;)o[t=r[a-=1]]=e[t];return o}var l={};function u(e){l[e]||("undefined"!==typeof console&&console.error(e),l[e]=!0)}var d="object"===typeof window&&window.Element||function(){};o().oneOfType([o().string,o().func,function(e,n,t){if(!(e[n]instanceof d))return new Error("Invalid prop `"+n+"` supplied to `"+t+"`. Expected prop to be an instance of Element. Validation failed.")},o().shape({current:o().any})]);var f=o().oneOfType([o().func,o().string,o().shape({$$typeof:o().symbol,render:o().func}),o().arrayOf(o().oneOfType([o().func,o().string,o().shape({$$typeof:o().symbol,render:o().func})]))]),p={Fade:150,Collapse:350,Modal:300,Carousel:600},m=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],g={ENTERING:"entering",ENTERED:"entered",EXITING:"exiting",EXITED:"exited"};"undefined"===typeof window||!window.document||window.document.createElement;function v(e){var n=typeof e;return null!=e&&("object"===n||"function"===n)}},7326:function(e,n,t){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}t.d(n,{Z:function(){return r}})},5861:function(e,n,t){"use strict";function r(e,n,t,r,a,o,i){try{var s=e[o](i),c=s.value}catch(l){return void t(l)}s.done?n(c):Promise.resolve(c).then(r,a)}function a(e){return function(){var n=this,t=arguments;return new Promise((function(a,o){var i=e.apply(n,t);function s(e){r(i,a,o,s,c,"next",e)}function c(e){r(i,a,o,s,c,"throw",e)}s(void 0)}))}}t.d(n,{Z:function(){return a}})},4578:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var r=t(9611);function a(e,n){e.prototype=Object.create(n.prototype),e.prototype.constructor=e,(0,r.Z)(e,n)}},9611:function(e,n,t){"use strict";function r(e,n){return(r=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}t.d(n,{Z:function(){return r}})}},function(e){e.O(0,[774,888,179],(function(){return n=5201,e(e.s=n);var n}));var n=e.O();_N_E=n}]);