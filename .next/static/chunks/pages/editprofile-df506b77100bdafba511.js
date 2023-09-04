(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[242],{8088:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return ae}});var a=r(5861),s=r(7757),n=r.n(s),o=r(7294),i=r(2861),l=r(4036),c=r.n(l),d=r(5697),u=r.n(d),f=r(5893);const p={type:u().string,tooltip:u().bool,as:u().elementType},m=o.forwardRef((({as:e="div",className:t,type:r="valid",tooltip:a=!1,...s},n)=>(0,f.jsx)(e,{...s,ref:n,className:c()(t,`${r}-${a?"tooltip":"feedback"}`)})));m.displayName="Feedback",m.propTypes=p;var b=m;var v=o.createContext({}),x=r(600);const g=o.forwardRef((({id:e,bsPrefix:t,className:r,type:a="checkbox",isValid:s=!1,isInvalid:n=!1,as:i="input",...l},d)=>{const{controlId:u}=(0,o.useContext)(v);return t=(0,x.vE)(t,"form-check-input"),(0,f.jsx)(i,{...l,ref:d,type:a,id:e||u,className:c()(r,t,s&&"is-valid",n&&"is-invalid")})}));g.displayName="FormCheckInput";var h=g;const y=o.forwardRef((({bsPrefix:e,className:t,htmlFor:r,...a},s)=>{const{controlId:n}=(0,o.useContext)(v);return e=(0,x.vE)(e,"form-check-label"),(0,f.jsx)("label",{...a,ref:s,htmlFor:r||n,className:c()(t,e)})}));y.displayName="FormCheckLabel";var j=y;const N=o.forwardRef((({id:e,bsPrefix:t,bsSwitchPrefix:r,inline:a=!1,reverse:s=!1,disabled:n=!1,isValid:i=!1,isInvalid:l=!1,feedbackTooltip:d=!1,feedback:u,feedbackType:p,className:m,style:g,title:y="",type:N="checkbox",label:w,children:C,as:O="input",...P},E)=>{t=(0,x.vE)(t,"form-check"),r=(0,x.vE)(r,"form-switch");const{controlId:k}=(0,o.useContext)(v),_=(0,o.useMemo)((()=>({controlId:e||k})),[k,e]),I=!C&&null!=w&&!1!==w||function(e,t){return o.Children.toArray(e).some((e=>o.isValidElement(e)&&e.type===t))}(C,j),S=(0,f.jsx)(h,{...P,type:"switch"===N?"checkbox":N,ref:E,isValid:i,isInvalid:l,disabled:n,as:O});return(0,f.jsx)(v.Provider,{value:_,children:(0,f.jsx)("div",{style:g,className:c()(m,I&&t,a&&`${t}-inline`,s&&`${t}-reverse`,"switch"===N&&r),children:C||(0,f.jsxs)(f.Fragment,{children:[S,I&&(0,f.jsx)(j,{title:y,children:w}),u&&(0,f.jsx)(b,{type:p,tooltip:d,children:u})]})})})}));N.displayName="FormCheck";var w=Object.assign(N,{Input:h,Label:j});r(2473);const C=o.forwardRef((({bsPrefix:e,type:t,size:r,htmlSize:a,id:s,className:n,isValid:i=!1,isInvalid:l=!1,plaintext:d,readOnly:u,as:p="input",...m},b)=>{const{controlId:g}=(0,o.useContext)(v);let h;return e=(0,x.vE)(e,"form-control"),h=d?{[`${e}-plaintext`]:!0}:{[e]:!0,[`${e}-${r}`]:r},(0,f.jsx)(p,{...m,type:t,size:a,ref:b,readOnly:u,id:s||g,className:c()(n,h,i&&"is-valid",l&&"is-invalid","color"===t&&`${e}-color`)})}));C.displayName="FormControl";var O=Object.assign(C,{Feedback:b}),P=/-(.)/g;const E=e=>{return e[0].toUpperCase()+(t=e,t.replace(P,(function(e,t){return t.toUpperCase()}))).slice(1);var t};var k=function(e,{displayName:t=E(e),Component:r,defaultProps:a}={}){const s=o.forwardRef((({className:t,bsPrefix:s,as:n=r||"div",...o},i)=>{const l={...a,...o},d=(0,x.vE)(s,e);return(0,f.jsx)(n,{ref:i,className:c()(t,d),...l})}));return s.displayName=t,s}("form-floating");const _=o.forwardRef((({controlId:e,as:t="div",...r},a)=>{const s=(0,o.useMemo)((()=>({controlId:e})),[e]);return(0,f.jsx)(v.Provider,{value:s,children:(0,f.jsx)(t,{...r,ref:a})})}));_.displayName="FormGroup";var I=_;const S=o.forwardRef(((e,t)=>{const[{className:r,...a},{as:s="div",bsPrefix:n,spans:o}]=function({as:e,bsPrefix:t,className:r,...a}){t=(0,x.vE)(t,"col");const s=(0,x.pi)(),n=(0,x.zG)(),o=[],i=[];return s.forEach((e=>{const r=a[e];let s,l,c;delete a[e],"object"===typeof r&&null!=r?({span:s,offset:l,order:c}=r):s=r;const d=e!==n?`-${e}`:"";s&&o.push(!0===s?`${t}${d}`:`${t}${d}-${s}`),null!=c&&i.push(`order${d}-${c}`),null!=l&&i.push(`offset${d}-${l}`)})),[{...a,className:c()(r,...o,...i)},{as:e,bsPrefix:t,spans:o}]}(e);return(0,f.jsx)(s,{...a,ref:t,className:c()(r,!o.length&&n)})}));S.displayName="Col";var $=S;const R=o.forwardRef((({as:e="label",bsPrefix:t,column:r=!1,visuallyHidden:a=!1,className:s,htmlFor:n,...i},l)=>{const{controlId:d}=(0,o.useContext)(v);t=(0,x.vE)(t,"form-label");let u="col-form-label";"string"===typeof r&&(u=`${u} ${u}-${r}`);const p=c()(s,t,a&&"visually-hidden",r&&u);return n=n||d,r?(0,f.jsx)($,{ref:l,as:"label",className:p,htmlFor:n,...i}):(0,f.jsx)(e,{ref:l,className:p,htmlFor:n,...i})}));R.displayName="FormLabel";var F=R;const T=o.forwardRef((({bsPrefix:e,className:t,id:r,...a},s)=>{const{controlId:n}=(0,o.useContext)(v);return e=(0,x.vE)(e,"form-range"),(0,f.jsx)("input",{...a,type:"range",ref:s,className:c()(t,e),id:r||n})}));T.displayName="FormRange";var L=T;const D=o.forwardRef((({bsPrefix:e,size:t,htmlSize:r,className:a,isValid:s=!1,isInvalid:n=!1,id:i,...l},d)=>{const{controlId:u}=(0,o.useContext)(v);return e=(0,x.vE)(e,"form-select"),(0,f.jsx)("select",{...l,size:r,ref:d,className:c()(a,e,t&&`${e}-${t}`,s&&"is-valid",n&&"is-invalid"),id:i||u})}));D.displayName="FormSelect";var z=D;const A=o.forwardRef((({bsPrefix:e,className:t,as:r="small",muted:a,...s},n)=>(e=(0,x.vE)(e,"form-text"),(0,f.jsx)(r,{...s,ref:n,className:c()(t,e,a&&"text-muted")}))));A.displayName="FormText";var Z=A;const B=o.forwardRef(((e,t)=>(0,f.jsx)(w,{...e,ref:t,type:"switch"})));B.displayName="Switch";var M=Object.assign(B,{Input:w.Input,Label:w.Label});const U=o.forwardRef((({bsPrefix:e,className:t,children:r,controlId:a,label:s,...n},o)=>(e=(0,x.vE)(e,"form-floating"),(0,f.jsxs)(I,{ref:o,className:c()(t,e),controlId:a,...n,children:[r,(0,f.jsx)("label",{htmlFor:a,children:s})]}))));U.displayName="FloatingLabel";var G=U;const V={_ref:u().any,validated:u().bool,as:u().elementType},H=o.forwardRef((({className:e,validated:t,as:r="form",...a},s)=>(0,f.jsx)(r,{...a,ref:s,className:c()(e,t&&"was-validated")})));H.displayName="Form",H.propTypes=V;var K=Object.assign(H,{Group:I,Control:O,Floating:k,Check:w,Switch:M,Label:F,Text:Z,Range:L,Select:z,FloatingLabel:G});const X=["as","disabled"];function J({tagName:e,disabled:t,href:r,target:a,rel:s,role:n,onClick:o,tabIndex:i=0,type:l}){e||(e=null!=r||null!=a||null!=s?"a":"button");const c={tagName:e};if("button"===e)return[{type:l||"button",disabled:t},c];const d=a=>{(t||"a"===e&&function(e){return!e||"#"===e.trim()}(r))&&a.preventDefault(),t?a.stopPropagation():null==o||o(a)};return"a"===e&&(r||(r="#"),t&&(r=void 0)),[{role:null!=n?n:"button",disabled:void 0,tabIndex:t?void 0:i,href:r,target:"a"===e?a:void 0,"aria-disabled":t||void 0,rel:"a"===e?s:void 0,onClick:d,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),d(e))}},c]}const Q=o.forwardRef(((e,t)=>{let{as:r,disabled:a}=e,s=function(e,t){if(null==e)return{};var r,a,s={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,X);const[n,{tagName:o}]=J(Object.assign({tagName:r,disabled:a},s));return(0,f.jsx)(o,Object.assign({},s,n,{ref:t}))}));Q.displayName="Button";const W=o.forwardRef((({as:e,bsPrefix:t,variant:r="primary",size:a,active:s=!1,disabled:n=!1,className:o,...i},l)=>{const d=(0,x.vE)(t,"btn"),[u,{tagName:p}]=J({tagName:e,disabled:n,...i}),m=p;return(0,f.jsx)(m,{...u,...i,ref:l,disabled:n,className:c()(o,d,s&&"active",r&&`${d}-${r}`,a&&`${d}-${a}`,i.href&&n&&"disabled")})}));W.displayName="Button";var q=W,Y=r(3686),ee=r(4001),te=r.n(ee),re=r(6968),ae=function(){var e=(0,o.useState)(!0),t=e[0],r=e[1],s=(0,o.useState)(""),l=s[0],c=s[1],d=(0,o.useState)("danger"),u=d[0],p=d[1],m=(0,o.useState)(""),b=m[0],v=m[1],x=(0,o.useState)(""),g=x[0],h=x[1],y=(0,o.useState)(""),j=y[0],N=y[1],w=(0,o.useState)(null),C=w[0],O=w[1],P=(0,o.useState)(!1),E=P[0],k=P[1],_=(0,o.useState)(!1),I=_[0],S=_[1],$=function(){var e=(0,a.Z)(n().mark((function e(){var t,r,a,s,o;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("token"),r=localStorage.getItem("email"),console.log(t),console.log(r),e.prev=4,t){e.next=10;break}console.log("Not Authorized!"),window.location.replace("/login"),e.next=24;break;case 10:return e.next=12,i.Z.post("http://localhost:3005/usergame/get",{email:r},{headers:{Authorization:"Basic ".concat(t)}});case 12:return a=e.sent,console.log(a.data.data),s=a.data.data.username,v(a.data.data.id),h(a.data.data.username),N(a.data.data.email),console.log("username: ",s),e.next=21,i.Z.post("http://localhost:3005/usergame/getProfilePicUrl",{inputUsername:s},{headers:{Authorization:"Basic ".concat(t)}});case 21:o=e.sent,console.log("Profile Pic URL:",o.data.url),O(o.data.url);case 24:e.next=30;break;case 26:e.prev=26,e.t0=e.catch(4),console.log("Internal Server Error!"),window.location.replace("/login");case 30:case"end":return e.stop()}}),e,null,[[4,26]])})));return function(){return e.apply(this,arguments)}}();(0,o.useEffect)((function(){$()}),[]);var R=function(){var e=(0,a.Z)(n().mark((function e(t){var a,s;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),k(!0),a=localStorage.getItem("token"),e.prev=3,e.next=6,i.Z.post("http://localhost:3005/usergame/update/profile",{id:b,username:g,email:j},{headers:{Authorization:"Basic ".concat(a)}});case 6:s=e.sent,console.log(s.data.newData.email),console.log(s.data.status),p("success"),c(s.data.status),r(!1),localStorage.setItem("email",s.data.newData.email),S(!0),e.next=21;break;case 16:e.prev=16,e.t0=e.catch(3),p("danger"),c(e.t0.response.data.message),r(!1);case 21:return e.prev=21,k(!1),e.finish(21);case 24:case"end":return e.stop()}}),e,null,[[3,16,21,24]])})));return function(t){return e.apply(this,arguments)}}();return(0,f.jsxs)("div",{className:te().EditProfileImage,children:[(0,f.jsx)("h1",{className:te().textH1,children:"Change Profile"}),(0,f.jsx)("div",{className:te().alertContainer,children:(0,f.jsx)(Y.Z,{color:u,hidden:t,children:l})}),(0,f.jsxs)("div",{className:te().formContainer,children:[(0,f.jsx)("div",{className:te().imageContainer,children:(0,f.jsx)("img",{src:C,alt:"Avatar",className:"rounded-circle",width:"150"})}),(0,f.jsxs)(K,{onSubmit:function(e){e.preventDefault(),console.log("Username:",g),console.log("Email:",j)},children:[(0,f.jsxs)(K.Group,{controlId:"formBasicUsername",children:[(0,f.jsx)(K.Label,{className:te().textLabel,children:"Username"}),(0,f.jsx)(K.Control,{type:"text",placeholder:"Enter username",value:g,onChange:function(e){return h(e.target.value)}})]}),(0,f.jsxs)(K.Group,{controlId:"formBasicEmail",children:[(0,f.jsx)(K.Label,{className:te().textLabel,children:"Email"}),(0,f.jsx)(K.Control,{type:"email",placeholder:"Enter email",value:j,onChange:function(e){return N(e.target.value)}})]}),(0,f.jsx)("br",{}),(0,f.jsx)(q,{color:"primary",block:!0,style:{width:"100%"},onClick:R,disabled:E||I,children:E?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(re.Z,{animation:"border",size:"sm",className:"mr-2"}),"Processing"]}):I?"Done":"Edit Profile"}),(0,f.jsx)("br",{}),(0,f.jsx)("br",{}),(0,f.jsx)(q,{color:"primary",style:{width:"100%"},onClick:function(){window.location.replace("/editpassword")},children:"Change Password"}),(0,f.jsx)("br",{}),(0,f.jsx)("br",{}),(0,f.jsx)(q,{color:"primary",style:{width:"100%"},onClick:function(){window.location.replace("/gamelist")},children:"Back"})]})]})]})}},1212:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/editprofile",function(){return r(8088)}])},4001:function(e){e.exports={EditProfileImage:"editprofile_EditProfileImage__1O3El",alertContainer:"editprofile_alertContainer__1Wdd7",formContainer:"editprofile_formContainer__3EEx5",imageContainer:"editprofile_imageContainer__2wBzK",textH1:"editprofile_textH1__KuCog",textLabel:"editprofile_textLabel__38Cn4",textDescription:"editprofile_textDescription__cTPQJ"}},6968:function(e,t,r){"use strict";var a=r(4036),s=r.n(a),n=r(7294),o=r(600),i=r(5893);const l=n.forwardRef((({bsPrefix:e,variant:t,animation:r="border",size:a,as:n="div",className:l,...c},d)=>{const u=`${e=(0,o.vE)(e,"spinner")}-${r}`;return(0,i.jsx)(n,{ref:d,...c,className:s()(l,u,a&&`${u}-${a}`,t&&`text-${t}`)})}));l.displayName="Spinner",t.Z=l},600:function(e,t,r){"use strict";r.d(t,{vE:function(){return l},pi:function(){return c},zG:function(){return d}});var a=r(7294);r(5893);const s=["xxl","xl","lg","md","sm","xs"],n=a.createContext({prefixes:{},breakpoints:s,minBreakpoint:"xs"}),{Consumer:o,Provider:i}=n;function l(e,t){const{prefixes:r}=(0,a.useContext)(n);return e||r[t]||t}function c(){const{breakpoints:e}=(0,a.useContext)(n);return e}function d(){const{minBreakpoint:e}=(0,a.useContext)(n);return e}},4036:function(e,t){var r;!function(){"use strict";var a={}.hasOwnProperty;function s(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var n=typeof r;if("string"===n||"number"===n)e.push(r);else if(Array.isArray(r)){if(r.length){var o=s.apply(null,r);o&&e.push(o)}}else if("object"===n){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var i in r)a.call(r,i)&&r[i]&&e.push(i)}}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):void 0===(r=function(){return s}.apply(t,[]))||(e.exports=r)}()},3686:function(e,t,r){"use strict";r.d(t,{Z:function(){return P}});var a=r(7462),s=r(3366),n=r(4942),o=r(7294),i=r(5697),l=r.n(i),c=r(4184),d=r.n(c),u=r(3663),f=r(4317),p=["tag","baseClass","baseClassActive","className","cssModule","children","innerRef"];function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v=b(b({},f.Transition.propTypes),{},{children:l().oneOfType([l().arrayOf(l().node),l().node]),tag:u.iC,baseClass:l().string,baseClassActive:l().string,className:l().string,cssModule:l().object,innerRef:l().oneOfType([l().object,l().string,l().func])}),x=b(b({},f.Transition.defaultProps),{},{tag:"div",baseClass:"fade",baseClassActive:"show",timeout:u.wF.Fade,appear:!0,enter:!0,exit:!0,in:!0});function g(e){var t=e.tag,r=e.baseClass,n=e.baseClassActive,i=e.className,l=e.cssModule,c=e.children,m=e.innerRef,b=(0,s.Z)(e,p),v=(0,u.ei)(b,u.rb),x=(0,u.CE)(b,u.rb);return o.createElement(f.Transition,v,(function(e){var s="entered"===e,f=(0,u.mx)(d()(i,r,s&&n),l);return o.createElement(t,(0,a.Z)({className:f},x,{ref:m}),c)}))}g.propTypes=v,g.defaultProps=x;var h=g,y=["className","closeClassName","closeAriaLabel","cssModule","tag","color","isOpen","toggle","children","transition","fade","innerRef"];function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function N(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var w={children:l().node,className:l().string,closeClassName:l().string,closeAriaLabel:l().string,cssModule:l().object,color:l().string,fade:l().bool,isOpen:l().bool,toggle:l().func,tag:u.iC,transition:l().shape(h.propTypes),innerRef:l().oneOfType([l().object,l().string,l().func])},C={color:"success",isOpen:!0,tag:"div",closeAriaLabel:"Close",fade:!0,transition:N(N({},h.defaultProps),{},{unmountOnExit:!0})};function O(e){var t=e.className,r=e.closeClassName,n=e.closeAriaLabel,i=e.cssModule,l=e.tag,c=e.color,f=e.isOpen,p=e.toggle,m=e.children,b=e.transition,v=e.fade,x=e.innerRef,g=(0,s.Z)(e,y),j=(0,u.mx)(d()(t,"alert","alert-"+c,{"alert-dismissible":p}),i),w=(0,u.mx)(d()("close",r),i),C=N(N(N({},h.defaultProps),b),{},{baseClass:v?b.baseClass:"",timeout:v?b.timeout:0});return o.createElement(h,(0,a.Z)({},g,C,{tag:l,className:j,in:f,role:"alert",innerRef:x}),p?o.createElement("button",{type:"button",className:w,"aria-label":n,onClick:p},o.createElement("span",{"aria-hidden":"true"},"\xd7")):null,m)}O.propTypes=w,O.defaultProps=C;var P=O},2473:function(e){"use strict";var t=function(){};e.exports=t}},function(e){e.O(0,[774,573,317,888,179],(function(){return t=1212,e(e.s=t);var t}));var t=e.O();_N_E=t}]);