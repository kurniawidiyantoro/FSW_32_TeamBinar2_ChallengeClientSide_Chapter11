(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[292],{4184:function(n,e){var t;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var n=[],e=0;e<arguments.length;e++){var t=arguments[e];if(t){var a=typeof t;if("string"===a||"number"===a)n.push(t);else if(Array.isArray(t)&&t.length){var i=o.apply(null,t);i&&n.push(i)}else if("object"===a)for(var s in t)r.call(t,s)&&t[s]&&n.push(s)}}return n.join(" ")}n.exports?(o.default=o,n.exports=o):void 0===(t=function(){return o}.apply(e,[]))||(n.exports=t)}()},1420:function(n,e,t){"use strict";t.r(e);t(7294);var r=t(6706),o=t(9544),a=t(3999),i=t(6992),s=t(7243),c=t(8008),u=(t(9594),t(5893));e.default=(0,r.$j)((function(n){return{userEmail:n.reducer.email,totalScore:n.reducer.totalScore}}))((function(n){var e=n.userEmail;return n.totalScore,(0,r.I0)(),(0,u.jsx)("div",{children:(0,u.jsxs)(o.Z,{color:"dark",dark:!0,expand:"md",children:[(0,u.jsx)(a.Z,{children:(0,u.jsx)(i.Z,{className:"ps-3",children:"Welcome ".concat(e)})}),(0,u.jsxs)(s.Z,{className:"ms-auto",navbar:!0,children:[(0,u.jsx)(a.Z,{children:(0,u.jsx)(c.Z,{href:"/editprofile",children:"Edit Profile"})}),(0,u.jsx)(a.Z,{children:(0,u.jsx)(c.Z,{href:"/",className:"pe-3",children:"Logout"})})]})]})})}))},9594:function(n,e,t){"use strict";t.d(e,{vV:function(){return r},SL:function(){return o},Xr:function(){return a}});t(7757);function r(n){return{type:"SET_EMAIL",payload:n}}var o=function(n,e){return{type:"SET_LOGGED_IN",payload:{isLoggedIn:n,user:e}}},a=function(n){return{type:"SET_PLAYED_GAMES",payload:n}}},2570:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/navbarUser",function(){return t(1420)}])},7243:function(n,e,t){"use strict";var r=t(7462),o=t(3366),a=t(7294),i=t(5697),s=t.n(i),c=t(4184),u=t.n(c),l=t(3663),f=["className","cssModule","tabs","pills","vertical","horizontal","justified","fill","navbar","card","tag"],d={tabs:s().bool,pills:s().bool,vertical:s().oneOfType([s().bool,s().string]),horizontal:s().string,justified:s().bool,fill:s().bool,navbar:s().bool,card:s().bool,tag:l.iC,className:s().string,cssModule:s().object},p=function(n){var e=n.className,t=n.cssModule,i=n.tabs,s=n.pills,c=n.vertical,d=n.horizontal,p=n.justified,v=n.fill,b=n.navbar,m=n.card,g=n.tag,h=(0,o.Z)(n,f),y=(0,l.mx)(u()(e,b?"navbar-nav":"nav",!!d&&"justify-content-"+d,function(n){return!1!==n&&(!0===n||"xs"===n?"flex-column":"flex-"+n+"-column")}(c),{"nav-tabs":i,"card-header-tabs":m&&i,"nav-pills":s,"card-header-pills":m&&s,"nav-justified":p,"nav-fill":v}),t);return a.createElement(g,(0,r.Z)({},h,{className:y}))};p.propTypes=d,p.defaultProps={tag:"ul",vertical:!1},e.Z=p},3999:function(n,e,t){"use strict";var r=t(7462),o=t(3366),a=t(7294),i=t(5697),s=t.n(i),c=t(4184),u=t.n(c),l=t(3663),f=["className","cssModule","active","tag"],d={tag:l.iC,active:s().bool,className:s().string,cssModule:s().object},p=function(n){var e=n.className,t=n.cssModule,i=n.active,s=n.tag,c=(0,o.Z)(n,f),d=(0,l.mx)(u()(e,"nav-item",!!i&&"active"),t);return a.createElement(s,(0,r.Z)({},c,{className:d}))};p.propTypes=d,p.defaultProps={tag:"li"},e.Z=p},8008:function(n,e,t){"use strict";var r=t(7462),o=t(3366),a=t(7326),i=t(4578),s=t(7294),c=t(5697),u=t.n(c),l=t(4184),f=t.n(l),d=t(3663),p=["className","cssModule","active","tag","innerRef"],v={tag:d.iC,innerRef:u().oneOfType([u().object,u().func,u().string]),disabled:u().bool,active:u().bool,className:u().string,cssModule:u().object,onClick:u().func,href:u().any},b=function(n){function e(e){var t;return(t=n.call(this,e)||this).onClick=t.onClick.bind((0,a.Z)(t)),t}(0,i.Z)(e,n);var t=e.prototype;return t.onClick=function(n){this.props.disabled?n.preventDefault():("#"===this.props.href&&n.preventDefault(),this.props.onClick&&this.props.onClick(n))},t.render=function(){var n=this.props,e=n.className,t=n.cssModule,a=n.active,i=n.tag,c=n.innerRef,u=(0,o.Z)(n,p),l=(0,d.mx)(f()(e,"nav-link",{disabled:u.disabled,active:a}),t);return s.createElement(i,(0,r.Z)({},u,{ref:c,onClick:this.onClick,className:l}))},e}(s.Component);b.propTypes=v,b.defaultProps={tag:"a"},e.Z=b},9544:function(n,e,t){"use strict";var r=t(7462),o=t(3366),a=t(7294),i=t(5697),s=t.n(i),c=t(4184),u=t.n(c),l=t(3663),f=["expand","className","cssModule","light","dark","fixed","sticky","color","tag"],d={light:s().bool,dark:s().bool,full:s().bool,fixed:s().string,sticky:s().string,color:s().string,role:s().string,tag:l.iC,className:s().string,cssModule:s().object,expand:s().oneOfType([s().bool,s().string])},p=function(n){var e,t=n.expand,i=n.className,s=n.cssModule,c=n.light,d=n.dark,p=n.fixed,v=n.sticky,b=n.color,m=n.tag,g=(0,o.Z)(n,f),h=(0,l.mx)(u()(i,"navbar",function(n){return!1!==n&&(!0===n||"xs"===n?"navbar-expand":"navbar-expand-"+n)}(t),((e={"navbar-light":c,"navbar-dark":d})["bg-"+b]=b,e["fixed-"+p]=p,e["sticky-"+v]=v,e)),s);return a.createElement(m,(0,r.Z)({},g,{className:h}))};p.propTypes=d,p.defaultProps={tag:"nav",expand:!1},e.Z=p},6992:function(n,e,t){"use strict";var r=t(7462),o=t(3366),a=t(7294),i=t(5697),s=t.n(i),c=t(4184),u=t.n(c),l=t(3663),f=["className","cssModule","tag"],d={tag:l.iC,className:s().string,cssModule:s().object},p=function(n){var e=n.className,t=n.cssModule,i=n.tag,s=(0,o.Z)(n,f),c=(0,l.mx)(u()(e,"navbar-brand"),t);return a.createElement(i,(0,r.Z)({},s,{className:c}))};p.propTypes=d,p.defaultProps={tag:"a"},e.Z=p},3663:function(n,e,t){"use strict";t.d(e,{mx:function(){return i},CE:function(){return s},ei:function(){return c},O4:function(){return l},iC:function(){return d},wF:function(){return p},rb:function(){return v},E5:function(){return b},Kn:function(){return m}});var r,o=t(5697),a=t.n(o);function i(n,e){return void 0===n&&(n=""),void 0===e&&(e=r),e?n.split(" ").map((function(n){return e[n]||n})).join(" "):n}function s(n,e){var t={};return Object.keys(n).forEach((function(r){-1===e.indexOf(r)&&(t[r]=n[r])})),t}function c(n,e){for(var t,r=Array.isArray(e)?e:[e],o=r.length,a={};o>0;)a[t=r[o-=1]]=n[t];return a}var u={};function l(n){u[n]||("undefined"!==typeof console&&console.error(n),u[n]=!0)}var f="object"===typeof window&&window.Element||function(){};a().oneOfType([a().string,a().func,function(n,e,t){if(!(n[e]instanceof f))return new Error("Invalid prop `"+e+"` supplied to `"+t+"`. Expected prop to be an instance of Element. Validation failed.")},a().shape({current:a().any})]);var d=a().oneOfType([a().func,a().string,a().shape({$$typeof:a().symbol,render:a().func}),a().arrayOf(a().oneOfType([a().func,a().string,a().shape({$$typeof:a().symbol,render:a().func})]))]),p={Fade:150,Collapse:350,Modal:300,Carousel:600},v=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],b={ENTERING:"entering",ENTERED:"entered",EXITING:"exiting",EXITED:"exited"};"undefined"===typeof window||!window.document||window.document.createElement;function m(n){var e=typeof n;return null!=n&&("object"===e||"function"===e)}},7326:function(n,e,t){"use strict";function r(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}t.d(e,{Z:function(){return r}})},4578:function(n,e,t){"use strict";t.d(e,{Z:function(){return o}});var r=t(9611);function o(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,(0,r.Z)(n,e)}},9611:function(n,e,t){"use strict";function r(n,e){return(r=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}t.d(e,{Z:function(){return r}})}},function(n){n.O(0,[774,888,179],(function(){return e=2570,n(n.s=e);var e}));var e=n.O();_N_E=e}]);