(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[680],{4705:function(e,r,a){"use strict";a.r(r);a(7294);var t=a(6706),n=a(9544),c=a(6992),s=a(7243),i=a(8008),o=a(5893);r.default=(0,t.$j)((function(e){return{isLoggedIn:e.reducer.isLoggedIn,userEmail:e.reducer.email||""}}))((function(e){var r=e.isLoggedIn,a=e.userEmail;return(0,o.jsx)("div",{children:(0,o.jsxs)(n.Z,{color:"dark",dark:!0,expand:"md",children:[(0,o.jsx)(c.Z,{href:"/",className:"ps-3",children:r?"Welcome, ".concat(a):"Team 2"}),(0,o.jsx)(s.Z,{className:"ms-auto",navbar:!0,children:r?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.Z,{href:"/editprofile",children:"Edit Profile"}),(0,o.jsx)(i.Z,{href:"/logout",children:"Logout"})]}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.Z,{href:"/register",children:"Register"}),(0,o.jsx)(i.Z,{href:"/login",children:"Login"})]})})]})})}))},1420:function(e,r,a){"use strict";a.r(r);a(7294);var t=a(6706),n=a(9544),c=a(3999),s=a(6992),i=a(7243),o=a(8008),l=(a(9594),a(5893));r.default=(0,t.$j)((function(e){return{userEmail:e.reducer.email,totalScore:e.reducer.totalScore}}))((function(e){var r=e.userEmail;return e.totalScore,(0,t.I0)(),(0,l.jsx)("div",{children:(0,l.jsxs)(n.Z,{color:"dark",dark:!0,expand:"md",children:[(0,l.jsx)(c.Z,{children:(0,l.jsx)(s.Z,{className:"ps-3",children:"Welcome ".concat(r)})}),(0,l.jsxs)(i.Z,{className:"ms-auto",navbar:!0,children:[(0,l.jsx)(c.Z,{children:(0,l.jsx)(o.Z,{href:"/editprofile",children:"Edit Profile"})}),(0,l.jsx)(c.Z,{children:(0,l.jsx)(o.Z,{href:"/",className:"pe-3",children:"Logout"})})]})]})})}))},3178:function(e,r,a){"use strict";a.r(r);var t=a(5861),n=a(7757),c=a.n(n),s=a(7294),i=a(7975),o=a(6595),l=(a(4705),a(1420)),u=a(3707),d=a.n(u),m=a(6706),h=a(2861),f=a(6201),g=a(7657),_=a(1819),x=(a(8159),a(5893));r.default=(0,m.$j)((function(e){return{isLoggedIn:e.reducer.isLoggedIn,user:e.reducer.user}}))((function(e){var r=e.isLoggedIn,a=e.user,n=(0,s.useState)(""),u=(n[0],n[1],(0,s.useState)("")),m=(u[0],u[1],(0,s.useState)(0)),j=(m[0],m[1],(0,s.useState)([])),p=j[0],S=j[1],v=(0,s.useState)(1),w=v[0],I=v[1],Z=(0,s.useState)(10),b=Z[0],E=Z[1],P=function(){var e=(0,t.Z)(c().mark((function e(){var r,a,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=localStorage.getItem("token"),a=localStorage.getItem("email"),e.prev=2,r){e.next=8;break}console.log("Not Authorize !"),window.location.replace("/login"),e.next=14;break;case 8:return"gamedice",e.next=11,h.Z.post("".concat("https://chapter11team2.cyclic.app","/gamehistory/get/rank"),{email:a,gamename:"gamedice"},{headers:{Authorization:"Basic ".concat(r)}});case 11:t=e.sent,console.log(t.data.data.rows),S(t.data.data.rows);case 14:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(2),console.log("Internal Server Error !");case 20:case"end":return e.stop()}}),e,null,[[2,17]])})));return function(){return e.apply(this,arguments)}}(),N=p.slice((w-1)*b,w*b);return(0,s.useEffect)((function(){P()}),[]),(0,x.jsxs)("div",{className:d().GamedicePageImage,children:[(0,x.jsx)(l.default,{isLoggedIn:r,userEmail:a.email}),(0,x.jsx)(i.Z,{color:"primary",onClick:function(){window.location.replace("/gamelist")},className:"mt-3",children:"Kembali"}),(0,x.jsxs)("div",{className:d().buttonContainer,children:[(0,x.jsx)(i.Z,{color:"success",onClick:function(){window.location.replace("/leaderboard")},className:"mt-3",children:"Game RPS"}),(0,x.jsx)(i.Z,{color:"success",onClick:function(){window.location.replace("/leaderboard/gamecoin")},className:"mt-3",children:"Game Coin"})]}),(0,x.jsx)("div",{className:"mt-4",children:0===p.length?(0,x.jsx)(f.Z,{active:!0}):(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(o.Z,{striped:!0,datasource:N,pagination:"",children:[(0,x.jsx)("thead",{children:(0,x.jsxs)("tr",{children:[(0,x.jsx)("th",{children:"#"}),(0,x.jsx)("th",{children:"Username"}),(0,x.jsx)("th",{children:"Game Name"}),(0,x.jsx)("th",{children:"Status"}),(0,x.jsx)("th",{children:"Total Score"})]})}),(0,x.jsx)("tbody",{children:N.map((function(e,r){return(0,x.jsxs)("tr",{children:[(0,x.jsx)("th",{scope:"row",children:r+1}),(0,x.jsx)("td",{children:e.username}),(0,x.jsx)("td",{children:e.gamename}),(0,x.jsx)("td",{children:e.status}),(0,x.jsx)("td",{children:e.totalscore})]},r)}))})]}),(0,x.jsx)(g.Z,{current:w,pageSize:b,total:p.length,onChange:I,showSizeChanger:!0,onShowSizeChange:function(e,r){E(r),I(1)}})]})}),(0,x.jsx)("div",{}),(0,x.jsx)(i.Z,{color:"success",onClick:function(){var e=new _.jsPDF;e.text("Game Dadu Report",10,10);var r=p.map((function(e,r){return[r+1,e.username,e.gamename,e.status,e.totalscore]}));e.autoTable({head:[["#","Username","Game Name","Status","Total Score"]],body:r}),e.save("Game-Dadu.pdf")},className:d().buttonPDF,children:"Generate PDF"})]})}))},9594:function(e,r,a){"use strict";a.d(r,{vV:function(){return t},SL:function(){return n},Xr:function(){return c}});a(7757);function t(e){return{type:"SET_EMAIL",payload:e}}var n=function(e,r){return{type:"SET_LOGGED_IN",payload:{isLoggedIn:e,user:r}}},c=function(e){return{type:"SET_PLAYED_GAMES",payload:e}}},7488:function(e,r,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/leaderboard/gamedice",function(){return a(3178)}])},3707:function(e){e.exports={FeaturePageImage:"feature_FeaturePageImage__15vSC",LeaderboardPageImage:"feature_LeaderboardPageImage__3ZiuA",GamecoinPageImage:"feature_GamecoinPageImage__16mwe",GamedicePageImage:"feature_GamedicePageImage__3ZZr_",featureTitle:"feature_featureTitle__3j_jX",featureDescription:"feature_featureDescription__1_igv",mderwSm:"feature_mderwSm__1hnjs",rectangleItem:"feature_rectangleItem__RYjPa",rectangleItemContent:"feature_rectangleItemContent__1VXOY",played:"feature_played__3Cusk",playedText:"feature_playedText__1n4px",tableStyle:"feature_tableStyle__1fvkw",buttonContainer:"feature_buttonContainer__DEWS8",buttonPDF:"feature_buttonPDF__P23Up","mderw-sm":"feature_mderw-sm__EtlwB"}}},function(e){e.O(0,[774,847,573,865,489,888,179],(function(){return r=7488,e(e.s=r);var r}));var r=e.O();_N_E=r}]);