"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[257],{158:function(t,e,n){n.d(e,{x:function(){return a}});var r=n(6444),A=n(407),a=(0,r.ZP)("div")(A.cp,A.Dh,A.bK,A.Cg,A.AF,A.GQ,A.FK)},9257:function(t,e,n){n.r(e),n.d(e,{default:function(){return Z}});var r,A,a=n(1413),c=n(5861),s=n(9439),u=n(7757),i=n.n(u),o=n(2791),p=n(1087),f=n(7689),l=n(158),d=n(787),x=n(168),h=n(6444),v=h.ZP.h1(r||(r=(0,x.Z)(["\n  font-size: 28px;\n"]))),m=h.ZP.h2(A||(A=(0,x.Z)(["\n  font-size: 18px;\n"]))),b=n(1394),B=n(184),Z=function(){var t,e,n=(0,o.useState)([]),r=(0,s.Z)(n,2),A=r[0],u=r[1],x=(0,o.useState)(""),h=(0,s.Z)(x,2),Z=h[0],U=h[1],w=(0,o.useState)(null),j=(0,s.Z)(w,2),g=j[0],F=j[1],k=(0,f.UO)().id,y=(0,f.TH)(),E=A.title,M=A.name,R=A.overview,z=A.genres,T=A.release_date,H=A.vote_average;(0,o.useEffect)((function(){if(k){var t=new AbortController,e=function(){var t=(0,c.Z)(i().mark((function t(){var e,n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,d.TP)(k);case 3:return e=t.sent,u(e),t.next=7,(0,d._u)(e.poster_path);case 7:n=t.sent,U(n),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0),F(t.t0.response.data.status_message);case 15:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(){return t.apply(this,arguments)}}();return e(),function(){t.abort()}}}),[k]);var Q,q,O;return(0,B.jsxs)(l.x,{pl:"40px",pr:"40px",pt:"20px",children:[0!==A.length&&(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(p.rU,{to:null!==(t=null===(e=y.state)||void 0===e?void 0:e.from)&&void 0!==t?t:"/",children:"Go back"}),(0,B.jsxs)(l.x,{display:"flex",mb:"20px",mt:"20px",children:[(0,B.jsx)(l.x,{children:(0,B.jsx)("img",{src:Z,alt:"movie title"})}),(0,B.jsxs)(l.x,{pl:"20px",children:[(0,B.jsxs)(v,{children:[E||M," (",(O=T,O.slice(0,4)),")"]}),(0,B.jsxs)("p",{children:["User Score: ",(q=H,Math.round(10*q)),"%"]}),(0,B.jsx)(m,{children:"Overview"}),(0,B.jsx)("p",{children:R}),(0,B.jsx)(m,{children:"Genres"}),(0,B.jsx)("p",{children:(Q=z,Q.map((function(t){return(0,B.jsxs)("span",{children:[t.name," "]},t.name)})))})]})]}),(0,B.jsxs)(l.x,{borderTop:"1px solid black",borderBottom:"1px solid black",children:[(0,B.jsx)("p",{children:"Additional information"}),(0,B.jsxs)("ul",{children:[(0,B.jsx)("li",{children:(0,B.jsx)(p.rU,{to:"cast",state:(0,a.Z)({},y.state),children:"Cast"})}),(0,B.jsx)("li",{children:(0,B.jsx)(p.rU,{to:"reviews",state:(0,a.Z)({},y.state),children:"Reviews"})})]})]})]}),g&&(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(p.rU,{to:y.state.from,children:"Go back"}),(0,B.jsx)("h1",{children:"Ooops...smth went wrong:("})," ",(0,B.jsx)("p",{children:g})]}),(0,B.jsx)(b.F,{})]})}},787:function(t,e,n){n.d(e,{Ml:function(){return d},zv:function(){return m},TP:function(){return v},_u:function(){return l},tx:function(){return b},Df:function(){return x},z1:function(){return h}});var r=n(5861),A=n(7757),a=n.n(A),c=n(1243),s=n(6359),u="4a77cd59efaf1d55812c775cbc766c97",i="https://api.themoviedb.org/3/trending/all/day",o="https://api.themoviedb.org/3/search/movie",p="https://api.themoviedb.org/3/movie",f="https://api.themoviedb.org/3/configuration",l=function(){var t=(0,r.Z)(a().mark((function t(e){var n,r,A,i,o;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=f,c.Z.defaults.baseURL="".concat(n,"?api_key=").concat(u),t.next=4,c.Z.get();case 4:if(r=t.sent,A=r.data.images,i=A.secure_base_url,o=A.poster_sizes,e){t.next=8;break}return t.abrupt("return",s);case 8:return t.abrupt("return","".concat(i).concat(o[2],"/").concat(e));case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(t){return t?"https://image.tmdb.org/t/p/w185/".concat(t):s},x=function(){var t=(0,r.Z)(a().mark((function t(){var e,n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=i,c.Z.defaults.baseURL="".concat(e,"?api_key=").concat(u),t.next=4,c.Z.get();case 4:return n=t.sent,t.abrupt("return",n.data.results);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(a().mark((function t(e){var n,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=o,c.Z.defaults.baseURL="".concat(n,"?api_key=").concat(u,"&query=").concat(e,"&page=1&include_adult=false"),t.next=4,c.Z.get();case 4:return r=t.sent,t.abrupt("return",r.data.results);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(a().mark((function t(e){var n,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=p,c.Z.defaults.baseURL="".concat(n,"/").concat(e,"?api_key=").concat(u),t.next=4,c.Z.get();case 4:return r=t.sent,t.abrupt("return",r.data);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=(0,r.Z)(a().mark((function t(e){var n,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=p,c.Z.defaults.baseURL="".concat(n,"/").concat(e,"/credits?api_key=").concat(u),t.next=4,c.Z.get();case 4:return r=t.sent,t.abrupt("return",r.data.cast);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),b=function(){var t=(0,r.Z)(a().mark((function t(e){var n,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=p,c.Z.defaults.baseURL="".concat(n,"/").concat(e,"/reviews?api_key=").concat(u,"&page=1"),t.next=4,c.Z.get();case 4:return r=t.sent,t.abrupt("return",r.data.results);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},6359:function(t){t.exports="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/wAALCAEOAK8BAREA/8QAGwABAQEBAAMBAAAAAAAAAAAAAAEHBgIEBQP/xAA9EAEAAQIEAgQIDAcBAAAAAAAAAQIDBAUGERIxBxMhsRc0UVRykZPRFBUkMjdBUlZxgaHSFiIjQpS0wbP/2gAIAQEAAD8A3wAAAAAAAAAEBQQVFAAAAABIUAAAAAAAAAAAAEFAAAgAAAAAAAAAAAABFAAAAAEUAAAAAAAAAAAAARQAAAAABFAAAAAAABFBFRUUAASaojnMR+KcdH26fWnHR9qn1r1lH2qfWsTExvHbCiKAAAAMq6ea66MJk3BVVTvXd5Tt9VL8LPRJfuWqK/4hqjiiJ2+DT+95eCG/94av8af3uSwmk72I1xe058Z10zb3+UdXM77U8XzeL/rRtI6gnLc6taPrw83ZwlNVE42bm3HtG+/Bt2etoETExvE7wKCKAAAMo6e/FMm9O73UtCzPMYynTl7Hzb6yMPY6zgiduLaOT1dFahjU2T1Y+nDzh4i7Va4Jq4uURO/6uCymYjpyxsz2fP8A/KHf6vyWnP8AJL2Bt4ijD13KqZ6zbfbad3M6PzuMnzvD6LqtTerw0VR8L4toq3pm5y/PZoQqKBAAAMo6fPFMm9O73UtBzfLpzbTV/AU3ItTiMP1cVzG/DvHPZ6ehdO1aYyWrAV4mMRM3arvHFHDziI223nyOW1J0aYjN9Q4zM7Ob04eb9UVRTFmZmnsiOfFHkeh4KMw+8VXsqv3PkaMyu5kvS5ay+9iPhNyzFcTd224t7Mz5Z8rcQRYAAABlHT54pk3p3e6lqOE8Vs+hHc/WZiOcwbx5YVkeF+nq9+f+u1tRFBFAAGUdPfimTend7qWh5jmNOU6eu4+u3NynD2IuTRE7TVtDO7mWYzpGq+O8tx9eWWKfk/UVTVVMzT28XZMR/d+jxjo9zbK5jMLufVXreE/r1W44444o/mmOf17O20Rqq1qrCYm/ZwteHizXFExXVFW+8buHwv09Xvz/ANdrgAAAADKOnvxTJvTu91LqbOutMzhbdu7mdmY4IiqmaZmOX4PO1rnS1mnhtZlh6Kee1NExHc8p17pmqJic0szE9kxNNXueFnXGlbMTFnMcPbiecU0TH/HDZHjsNmfTZOLwN2LuGuxVwVx9e1jbviWyCgAAAD42otN5ZqKixTmtmq7FmZmjhrmnbfny/CHxPBlpjzK77ev3ngy0x5ld9vX7zwZaY8yu+3r954MtMeZXfb1+972S6HyLJsxt47L8Nct4m3ExTVN2qrbeJieyZ8kumAAAAAAAAAAAABBUBQBBQAAAAAAAAAABFBFAAAAAAAAAAAAAABFAAABBUFBFEUAABFBFARUUAAEUEFEFQUAAAARYAAAAAAEUAAAAAEUQUQUAAABFBIURYEUABFEUAAAH/9k="}}]);
//# sourceMappingURL=257.a1c206c8.chunk.js.map