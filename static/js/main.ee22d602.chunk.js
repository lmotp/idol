(this.webpackJsonpidol=this.webpackJsonpidol||[]).push([[0],{39:function(t,e,n){},67:function(t,e,n){"use strict";n.r(e);var c,j=n(0),r=n(28),s=n.n(r),b=(n(39),n(5)),i=n(2),o=n(29),a=n(30),l=n(1),u=a.a.div(c||(c=Object(o.a)(["\n  width: 512px;\n  height: 768px;\n\n  position: relative; /* \ucd94\ud6c4 \ubc15\uc2a4 \ud558\ub2e8\uc5d0 \ucd94\uac00 \ubc84\ud2bc\uc744 \uc704\uce58\uc2dc\ud0a4\uae30 \uc704\ud55c \uc124\uc815 */\n  background: white;\n  border-radius: 16px;\n  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);\n\n  margin: 0 auto; /* \ud398\uc774\uc9c0 \uc911\uc559\uc5d0 \ub098\ud0c0\ub098\ub3c4\ub85d \uc124\uc815 */\n\n  margin-top: 96px;\n  margin-bottom: 32px;\n  display: flex;\n  flex-direction: column;\n"]))),h=function(t){var e=t.children;return Object(l.jsx)(u,{children:e})},O=function(t){var e=t.startGame;return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(h,{children:Object(l.jsx)(b.b,{to:"/game",children:Object(l.jsx)("button",{onClick:e,children:"\uac8c\uc784\uc744 \uc2dc\uc791\ud55c\uc6b0~+"})})})})},x=n(9),d=function(){return Object(l.jsx)(h,{children:Object(l.jsx)("div",{children:Object(l.jsx)("h1",{children:"\ub85c\ub529\uc911"})})})},p=n(34),f=n.n(p);var m=function(){var t=Object(j.useState)([]),e=Object(x.a)(t,2),n=e[0],c=e[1],r=Object(j.useState)(0),s=Object(x.a)(r,2),b=s[0],o=s[1],a=Object(j.useState)([]),u=Object(x.a)(a,2),O=u[0],p=u[1],m=Object(j.useState)([]),g=Object(x.a)(m,1)[0],v=Object(j.useState)(""),S=Object(x.a)(v,2),k=S[0],C=S[1],F=Object(j.useState)([]),I=Object(x.a)(F,2),w=I[0],y=I[1],M=Object(j.useState)(0),E=Object(x.a)(M,2),J=E[0],B=E[1],G=Object(j.useState)(0),L=Object(x.a)(G,2),_=L[0],q=L[1],z=Object(j.useState)(!0),A=Object(x.a)(z,2),D=A[0],H=A[1],K=Object(j.useState)(15),N=Object(x.a)(K,2),P=N[0],Q=N[1],R=function(){p([]),n.map((function(t){return O.push(t.lyrics)})),C(O[b]);var t=[],e=[];n.map((function(t){return g.push(t.title)}));for(var c=g.splice(b,1),j=0;j<9;j++)t.push(g.splice(Math.floor(Math.random()*g.length),1)[0]);t.unshift(c);for(var r=t.slice(0,4),s=0;s<4;s++)e.push(r.splice(Math.floor(Math.random()*r.length),1)[0]);y(e)};Object(j.useEffect)((function(){return f.a.get("../dummy/song_list.json").then((function(t){var e=t.data;c(e.songList),H(!1),R()})).catch((function(t){console.log(t)})),R}),[D,b]);var T=function(t){if(o(b+1),10===b)return o(10);Q(15),R(),t.target.textContent===n[b].title?q(_+1):B(J+1)};return Object(j.useEffect)((function(){var t=setInterval((function(){parseInt(P)>0&&Q(parseInt(P)-1),0===parseInt(P)&&(o(b+1),B(J+1),Q(15))}),1e3);return function(){return clearInterval(t)}}),[P,b,J]),10===b?_<=2?Object(l.jsx)(i.a,{to:"/result1"}):_<=5?Object(l.jsx)(i.a,{to:"/result2"}):_<=8?Object(l.jsx)(i.a,{to:"/result3"}):Object(l.jsx)(i.a,{to:"/result4"}):Object(l.jsx)(l.Fragment,{children:D?Object(l.jsx)("div",{children:Object(l.jsx)(d,{})}):Object(l.jsxs)(h,{children:[Object(l.jsx)("h2",{children:P<10?"0".concat(P):P}),Object(l.jsx)("h1",{children:k}),Object(l.jsxs)("div",{children:[b+1,"/10"]}),Object(l.jsx)("button",{onClick:T,children:w[0]}),Object(l.jsx)("button",{onClick:T,children:w[1]}),Object(l.jsx)("button",{onClick:T,children:w[2]}),Object(l.jsx)("button",{onClick:T,children:w[3]}),_,":",J]})})},g=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(h,{children:[Object(l.jsx)("h1",{children:"\ud558\uc218\ubb34\ubb34"}),Object(l.jsx)(b.b,{to:"/",children:Object(l.jsx)("button",{children:"\ub2e4\uc2dc\ud558\uae30"})})]})})},v=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(h,{children:[Object(l.jsx)("h1",{children:"\uc911\uc218\ubb34\ubb34"}),Object(l.jsx)(b.b,{to:"/",children:Object(l.jsx)("button",{children:"\ub2e4\uc2dc\ud558\uae30"})})]})})},S=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(h,{children:[Object(l.jsx)("h1",{children:"\uace0\uc218\ubb34\ubb34"}),Object(l.jsx)(b.b,{to:"/",children:Object(l.jsx)("button",{children:"\ub2e4\uc2dc\ud558\uae30"})})]})})},k=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(h,{children:[Object(l.jsx)("h1",{children:"\uc644\uc804 \uace0\uc218\ubb34\ubb34"}),Object(l.jsx)(b.b,{to:"/",children:Object(l.jsx)("button",{children:"\ub2e4\uc2dc\ud558\uae30"})})]})})},C=function(){return Object(l.jsxs)(b.a,{children:[Object(l.jsx)(i.b,{path:"/",exact:!0,component:O}),Object(l.jsx)(i.b,{path:"/game",component:m}),Object(l.jsx)(i.b,{path:"/result1",component:g}),Object(l.jsx)(i.b,{path:"/result2",component:v}),Object(l.jsx)(i.b,{path:"/result3",component:S}),Object(l.jsx)(i.b,{path:"/result4",component:k})]})};s.a.render(Object(l.jsx)(C,{}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.ee22d602.chunk.js.map