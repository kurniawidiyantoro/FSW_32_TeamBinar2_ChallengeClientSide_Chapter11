(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[756],{1351:function(e,t,r){"use strict";r.r(t);var a=r(5861),n=r(4942),s=r(7757),o=r.n(s),c=r(7294),i=r(2861),d=r(3686),l=r(5538),u=r(2669),p=r(7954),w=r(609),f=r(7975),m=r(3768),h=r.n(m),g=r(6968),x=r(5893);function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.default=function(){var e=(0,c.useState)(!0),t=e[0],r=e[1],n=(0,c.useState)(""),s=n[0],m=n[1],_=(0,c.useState)("danger"),b=_[0],j=_[1],P=(0,c.useState)(""),y=P[0],N=P[1],k=(0,c.useState)(!1),O=k[0],C=k[1],Z=(0,c.useState)({newPassword:"",confirmNewPassword:""}),S=Z[0],E=Z[1],D=(0,c.useState)(!1),I=D[0],z=D[1];function B(e){E(v(v({},S),e))}var L=function(){var e=(0,a.Z)(o().mark((function e(){var t,r,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("token"),r=localStorage.getItem("email"),console.log(t),console.log(r),e.prev=4,t){e.next=10;break}console.log("Not Authorize !"),window.location.replace("/login"),e.next=15;break;case 10:return e.next=12,i.Z.post("".concat("https://chapter11team2.cyclic.app","/usergame/get"),{email:r},{headers:{Authorization:"Basic ".concat(t)}});case 12:a=e.sent,console.log(a.data.data),N(a.data.data.id);case 15:e.next=21;break;case 17:e.prev=17,e.t0=e.catch(4),console.log("Internal Server Error !"),window.location.replace("/login");case 21:case"end":return e.stop()}}),e,null,[[4,17]])})));return function(){return e.apply(this,arguments)}}();(0,c.useEffect)((function(){L()}),[]);var A=function(){var e=(0,a.Z)(o().mark((function e(t){var a,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=localStorage.getItem("token"),C(!0),e.prev=3,e.next=6,i.Z.post("".concat("https://chapter11team2.cyclic.app","/usergame/update/password"),{id:y,newPassword:S.newPassword,confirmNewPassword:S.confirmNewPassword},{headers:{Authorization:"Basic ".concat(a)}});case 6:n=e.sent,console.log(n.data.status),j("success"),m(n.data.status),r(!1),z(!0),e.next=19;break;case 14:e.prev=14,e.t0=e.catch(3),j("danger"),m(e.t0.response.data.message),r(!1);case 19:return e.prev=19,C(!1),e.finish(19);case 22:case"end":return e.stop()}}),e,null,[[3,14,19,22]])})));return function(t){return e.apply(this,arguments)}}();return(0,x.jsxs)("div",{className:h().EditPasswordImage,children:[(0,x.jsx)("h1",{className:h().textH1,children:"Change Password"}),(0,x.jsx)("div",{className:h().imageContainer,children:(0,x.jsx)(d.Z,{color:b,hidden:t,children:s})}),(0,x.jsx)("div",{className:h().formContainer,children:(0,x.jsxs)(l.Z,{children:[(0,x.jsxs)(u.Z,{id:"formBasicEmail",children:[(0,x.jsx)(p.Z,{className:h().textLabel,children:"New Password"}),(0,x.jsx)(w.Z,{type:"password",value:S.newPassword,onChange:function(e){return B({newPassword:e.target.value})}})]}),(0,x.jsxs)(u.Z,{id:"formBasicPassword",children:[(0,x.jsx)(p.Z,{className:h().textLabel,children:"Confirm New Password"}),(0,x.jsx)(w.Z,{type:"password",value:S.confirmNewPassword,onChange:function(e){return B({confirmNewPassword:e.target.value})}})]}),(0,x.jsx)("br",{}),(0,x.jsx)(f.Z,{color:"primary",block:!0,style:{width:"100%"},onClick:A,disabled:O||I,children:O?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(g.Z,{animation:"border",size:"sm",className:"mr-2"}),"Processing"]}):I?"Done":"Update Password"}),(0,x.jsx)("br",{}),(0,x.jsx)("br",{}),(0,x.jsx)(f.Z,{color:"primary",block:!0,style:{width:"100%"},onClick:function(){window.location.replace("/editprofile")},children:"Back"})]})})]})}},9418:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/editpassword",function(){return r(1351)}])},3768:function(e){e.exports={EditPasswordImage:"editpassword_EditPasswordImage__1kJod",alertContainer:"editpassword_alertContainer__19vL5",formContainer:"editpassword_formContainer__2SvfQ",imageContainer:"editpassword_imageContainer__3YERX",textH1:"editpassword_textH1__3zJS9",textLabel:"editpassword_textLabel__39Ntu",textDescription:"editpassword_textDescription__35jxq"}}},function(e){e.O(0,[774,573,317,806,888,179],(function(){return t=9418,e(e.s=t);var t}));var t=e.O();_N_E=t}]);