"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[170],{158:function(e,t,n){n.d(t,{x:function(){return a}});var r=n(6444),A=n(407),a=(0,r.ZP)("div")(A.cp,A.Dh,A.bK,A.Cg,A.AF,A.GQ,A.FK)},5170:function(e,t,n){n.r(t),n.d(t,{default:function(){return B}});var r,A,a=n(1413),c=n(5861),s=n(9439),u=n(7757),i=n.n(u),o=n(2791),p=n(1087),f=n(7689),d=n(158),l=n(787),x=n(168),h=n(6444),v=h.ZP.h1(r||(r=(0,x.Z)(["\n  font-size: 28px;\n"]))),m=h.ZP.h2(A||(A=(0,x.Z)(["\n  font-size: 18px;\n"]))),b=n(184),B=function(){var e,t,n=(0,o.useState)([]),r=(0,s.Z)(n,2),A=r[0],u=r[1],x=(0,o.useState)(""),h=(0,s.Z)(x,2),B=h[0],Z=h[1],j=(0,o.useState)(null),U=(0,s.Z)(j,2),w=U[0],g=U[1],k=(0,f.UO)().id,F=(0,f.TH)(),y=A.title,E=A.name,M=A.overview,R=A.genres,z=A.release_date,T=A.vote_average;(0,o.useEffect)((function(){if(k){var e=new AbortController,t=function(){var e=(0,c.Z)(i().mark((function e(){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.TP)(k);case 3:return t=e.sent,u(t),e.next=7,(0,l._u)(t.poster_path);case 7:n=e.sent,Z(n),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0),g(e.t0.response.data.status_message);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();return t(),function(){e.abort()}}}),[k]);var H,Q,q;return(0,b.jsxs)(d.x,{pl:"40px",pr:"40px",pt:"20px",children:[0!==A.length&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(p.rU,{to:null!==(e=null===(t=F.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/",children:"Go back"}),(0,b.jsxs)(d.x,{display:"flex",mb:"20px",mt:"20px",children:[(0,b.jsx)(d.x,{children:(0,b.jsx)("img",{src:B,alt:"movie title"})}),(0,b.jsxs)(d.x,{pl:"20px",children:[(0,b.jsxs)(v,{children:[y||E," (",(q=z,q.slice(0,4)),")"]}),(0,b.jsxs)("p",{children:["User Score: ",(Q=T,Math.round(10*Q)),"%"]}),(0,b.jsx)(m,{children:"Overview"}),(0,b.jsx)("p",{children:M}),(0,b.jsx)(m,{children:"Genres"}),(0,b.jsx)("p",{children:(H=R,H.map((function(e){return(0,b.jsxs)("span",{children:[e.name," "]},e.name)})))})]})]}),(0,b.jsxs)(d.x,{borderTop:"1px solid black",borderBottom:"1px solid black",children:[(0,b.jsx)("p",{children:"Additional information"}),(0,b.jsxs)("ul",{children:[(0,b.jsx)("li",{children:(0,b.jsx)(p.rU,{to:"cast",state:(0,a.Z)({},F.state),children:"Cast"})}),(0,b.jsx)("li",{children:(0,b.jsx)(p.rU,{to:"reviews",state:(0,a.Z)({},F.state),children:"Reviews"})})]})]})]}),w&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(p.rU,{to:F.state.from,children:"Go back"}),(0,b.jsx)("h1",{children:"Ooops...smth went wrong:("})," ",(0,b.jsx)("p",{children:w})]}),(0,b.jsx)(o.Suspense,{fallback:(0,b.jsx)("div",{children:"Loading additional information..."}),children:(0,b.jsx)(f.j3,{})})]})}},787:function(e,t,n){n.d(t,{Ml:function(){return l},zv:function(){return m},TP:function(){return v},_u:function(){return d},tx:function(){return b},Df:function(){return x},z1:function(){return h}});var r=n(5861),A=n(7757),a=n.n(A),c=n(1243),s=n(6359),u="4a77cd59efaf1d55812c775cbc766c97",i="https://api.themoviedb.org/3/trending/all/day",o="https://api.themoviedb.org/3/search/movie",p="https://api.themoviedb.org/3/movie",f="https://api.themoviedb.org/3/configuration",d=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r,A,i,o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=f,c.Z.defaults.baseURL="".concat(n,"?api_key=").concat(u),e.next=4,c.Z.get();case 4:if(r=e.sent,A=r.data.images,i=A.secure_base_url,o=A.poster_sizes,t){e.next=8;break}return e.abrupt("return",s);case 8:return e.abrupt("return","".concat(i).concat(o[2],"/").concat(t));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(e){return e?"https://image.tmdb.org/t/p/w185/".concat(e):s},x=function(){var e=(0,r.Z)(a().mark((function e(){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i,c.Z.defaults.baseURL="".concat(t,"?api_key=").concat(u),e.next=4,c.Z.get();case 4:return n=e.sent,e.abrupt("return",n.data.results);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o,c.Z.defaults.baseURL="".concat(n,"?api_key=").concat(u,"&query=").concat(t,"&page=1&include_adult=false"),e.next=4,c.Z.get();case 4:return r=e.sent,e.abrupt("return",r.data.results);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=p,c.Z.defaults.baseURL="".concat(n,"/").concat(t,"?api_key=").concat(u),e.next=4,c.Z.get();case 4:return r=e.sent,e.abrupt("return",r.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=p,c.Z.defaults.baseURL="".concat(n,"/").concat(t,"/credits?api_key=").concat(u),e.next=4,c.Z.get();case 4:return r=e.sent,e.abrupt("return",r.data.cast);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=p,c.Z.defaults.baseURL="".concat(n,"/").concat(t,"/reviews?api_key=").concat(u,"&page=1"),e.next=4,c.Z.get();case 4:return r=e.sent,e.abrupt("return",r.data.results);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},6359:function(e){e.exports="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/wAALCAEOAK8BAREA/8QAGwABAQEBAAMBAAAAAAAAAAAAAAEHBgIEBQP/xAA9EAEAAQIEAgQIDAcBAAAAAAAAAQIDBAUGERIxBxMhsRc0UVRykZPRFBUkMjdBUlZxgaHSFiIjQpS0wbP/2gAIAQEAAD8A3wAAAAAAAAAEBQQVFAAAAABIUAAAAAAAAAAAAEFAAAgAAAAAAAAAAAABFAAAAAEUAAAAAAAAAAAAARQAAAAABFAAAAAAABFBFRUUAASaojnMR+KcdH26fWnHR9qn1r1lH2qfWsTExvHbCiKAAAAMq6ea66MJk3BVVTvXd5Tt9VL8LPRJfuWqK/4hqjiiJ2+DT+95eCG/94av8af3uSwmk72I1xe058Z10zb3+UdXM77U8XzeL/rRtI6gnLc6taPrw83ZwlNVE42bm3HtG+/Bt2etoETExvE7wKCKAAAMo6e/FMm9O73UtCzPMYynTl7Hzb6yMPY6zgiduLaOT1dFahjU2T1Y+nDzh4i7Va4Jq4uURO/6uCymYjpyxsz2fP8A/KHf6vyWnP8AJL2Bt4ijD13KqZ6zbfbad3M6PzuMnzvD6LqtTerw0VR8L4toq3pm5y/PZoQqKBAAAMo6fPFMm9O73UtBzfLpzbTV/AU3ItTiMP1cVzG/DvHPZ6ehdO1aYyWrAV4mMRM3arvHFHDziI223nyOW1J0aYjN9Q4zM7Ob04eb9UVRTFmZmnsiOfFHkeh4KMw+8VXsqv3PkaMyu5kvS5ay+9iPhNyzFcTd224t7Mz5Z8rcQRYAAABlHT54pk3p3e6lqOE8Vs+hHc/WZiOcwbx5YVkeF+nq9+f+u1tRFBFAAGUdPfimTend7qWh5jmNOU6eu4+u3NynD2IuTRE7TVtDO7mWYzpGq+O8tx9eWWKfk/UVTVVMzT28XZMR/d+jxjo9zbK5jMLufVXreE/r1W44444o/mmOf17O20Rqq1qrCYm/ZwteHizXFExXVFW+8buHwv09Xvz/ANdrgAAAADKOnvxTJvTu91LqbOutMzhbdu7mdmY4IiqmaZmOX4PO1rnS1mnhtZlh6Kee1NExHc8p17pmqJic0szE9kxNNXueFnXGlbMTFnMcPbiecU0TH/HDZHjsNmfTZOLwN2LuGuxVwVx9e1jbviWyCgAAAD42otN5ZqKixTmtmq7FmZmjhrmnbfny/CHxPBlpjzK77ev3ngy0x5ld9vX7zwZaY8yu+3r954MtMeZXfb1+972S6HyLJsxt47L8Nct4m3ExTVN2qrbeJieyZ8kumAAAAAAAAAAAABBUBQBBQAAAAAAAAAABFBFAAAAAAAAAAAAAABFAAABBUFBFEUAABFBFARUUAAEUEFEFQUAAAARYAAAAAAEUAAAAAEUQUQUAAABFBIURYEUABFEUAAAH/9k="}}]);
//# sourceMappingURL=170.5e0cda9a.chunk.js.map