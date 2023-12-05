(()=>{var e={};e.id=3478,e.ids=[3478],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9491:e=>{"use strict";e.exports=require("assert")},6113:e=>{"use strict";e.exports=require("crypto")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},6224:e=>{"use strict";e.exports=require("tty")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},7020:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>x,originalPathname:()=>p,pages:()=>c,routeModule:()=>u,tree:()=>l});var s=r(7096),a=r(6132),n=r(7284),i=r.n(n),o=r(2564),d={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>o[e]);r.d(t,d);let l=["",{children:["administrador",{children:["ranking",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,6757)),"/home/josej/box-fronend/app/administrador/ranking/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,5066)),"/home/josej/box-fronend/app/administrador/layout.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,4978)),"/home/josej/box-fronend/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9291,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/home/josej/box-fronend/app/administrador/ranking/page.tsx"],p="/administrador/ranking/page",x={require:r,loadChunk:()=>Promise.resolve()},u=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/administrador/ranking/page",pathname:"/administrador/ranking",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},8681:(e,t,r)=>{Promise.resolve().then(r.bind(r,8063))},8063:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>RankingAdmin});var s=r(784);r(4190);var a=r(9885),n=r(1739),i=r.n(n);let ranking=({data:e})=>{console.log(e);let[t,r]=(0,a.useState)(e),[n,o]=(0,a.useState)(0);return(0,s.jsxs)("div",{className:" w-[80%] mx-auto mt-5 p-5",children:[s.jsx("h1",{className:"text-5xl text-white mb-4",children:"RANKING"}),s.jsx("input",{type:"text",placeholder:"Filtrar por nombre",onChange:t=>{let s=t.target.value.toLowerCase(),a=e.filter(e=>e.nombre.toLowerCase().includes(s));r(a),o(0)},className:"px-5 py-2 rounded-[18px] bg-gray-200 focus:outline-none mb-4"}),(0,s.jsxs)("table",{className:"w-full",children:[s.jsx("thead",{children:(0,s.jsxs)("tr",{children:[s.jsx("th",{className:" border-[#1e1e1e] border-[8px] p-3 bg-[#cd1919] text-white text-center",children:"NOMBRE"}),s.jsx("th",{className:" border-[#1e1e1e] border-[8px] p-3 bg-[#cd1919] text-white text-center",children:"VICTORIAS"}),s.jsx("th",{className:" border-[#1e1e1e] border-[8px] p-3 bg-[#cd1919] text-white text-center",children:"DERROTAS"}),s.jsx("th",{className:" border-[#1e1e1e] border-[8px] p-3 bg-[#cd1919] text-white text-center",children:"EMPATES"})]})}),s.jsx("tbody",{children:(()=>{let e=10*n,r=e+10;return t.slice(e,r).map((e,t)=>(0,s.jsxs)("tr",{children:[s.jsx("td",{className:" border-[#1e1e1e] border-[8px] p-3 bg-[#dfdfdf] text-center text-black",children:e.nombre}),s.jsx("td",{className:" border-[#1e1e1e] border-[8px] p-3 bg-[#dfdfdf] text-center text-black",children:e.ranking.win}),s.jsx("td",{className:" border-[#1e1e1e] border-[8px] p-3 bg-[#dfdfdf] text-center text-black",children:e.ranking.lose}),s.jsx("td",{className:" border-[#1e1e1e] border-[8px] p-3 bg-[#dfdfdf] text-center text-black",children:e.ranking.draw})]},e.id))})()})]}),s.jsx(i(),{pageCount:Math.ceil(t.length/10),onPageChange:e=>{let r=e.selected;r>=0&&r<Math.ceil(t.length/10)&&o(r)},containerClassName:"pagination flex gap-2 justify-center",activeClassName:"active",pageLinkClassName:"page-link",previousLabel:s.jsx("button",{className:"bg-[#cd1919] text-white rounded p-2",children:"Previous"}),nextLabel:s.jsx("button",{className:"bg-[#cd1919] text-white rounded p-2",children:"Next"}),pageRangeDisplayed:2,marginPagesDisplayed:1})]})};var o=r(4997);function RankingAdmin(){let e="https://deportnortbox-api.ddns.net",[t,r]=(0,a.useState)([]),n=(0,a.useCallback)(async t=>{try{let s={sessiontoken:t.token},a=await o.Z.get(`${e}/users/List`,{params:{role:"Deportista"},headers:s}),n=[];for(let e of a.data.users){let t={win:e.ranking.win,lose:e.ranking.lose,draw:e.ranking.draw},r={nombre:e.name,id:e._id,ranking:t};n.push(r)}r(n)}catch(e){console.log(e)}},[e,r]);return(0,a.useEffect)(()=>{let e=localStorage.getItem("userData");null!=e&&n(JSON.parse(e))},[n]),s.jsx(ranking,{data:t})}},6757:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>i,__esModule:()=>n,default:()=>d});var s=r(5153);let a=(0,s.createProxy)(String.raw`/home/josej/box-fronend/app/administrador/ranking/page.tsx`),{__esModule:n,$$typeof:i}=a,o=a.default,d=o},4190:()=>{}};var t=require("../../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),r=t.X(0,[260,1323,614,6686,4425,4997,1739,4634,5423],()=>__webpack_exec__(7020));module.exports=r})();