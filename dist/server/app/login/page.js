(()=>{var e={};e.id=2626,e.ids=[2626],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9491:e=>{"use strict";e.exports=require("assert")},6113:e=>{"use strict";e.exports=require("crypto")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},6224:e=>{"use strict";e.exports=require("tty")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},7177:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>c,originalPathname:()=>u,pages:()=>d,routeModule:()=>x,tree:()=>p});var s=r(7096),a=r(6132),o=r(7284),n=r.n(o),i=r(2564),l={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);r.d(t,l);let p=["",{children:["login",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,5004)),"/home/josej/box-fronend/app/login/page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,4978)),"/home/josej/box-fronend/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9291,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/home/josej/box-fronend/app/login/page.tsx"],u="/login/page",c={require:r,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/login/page",pathname:"/login",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:p}})},7994:(e,t,r)=>{Promise.resolve().then(r.bind(r,6176))},6176:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>LoginPage});var s=r(784),a=r(2451),o=r.n(a),n=r(2075),i=r(9885),l=r(4997);let p={src:"/_next/static/media/loginImage.4d0dab34.png",height:553,width:564,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAASFBMVEVMaXFPTU1+fn6YkZGhoKBWCgqZW1usrKyhqam8vr6jFxdOPECJiYl/KCpRTk61t7V/fX1sbW22trZ8XV2hmZmxr6/W1dWlX1/rh/PfAAAAFnRSTlMAgr31RhggEAkkYjepeF5k2PfZg9CnVosuIQAAAAlwSFlzAAALEwAACxMBAJqcGAAAAD5JREFUeJwdy0sWgCAMwMAAhbb+UFC8/019sstiAlAUQDVc9Q/LMZ3HCvj9dvYFJI3HSwaLo8lEYZO5oa4GHzhoAZEhlBVOAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8};var d=r(7114);function LoginPage(){let e=(0,d.useRouter)(),[t,r]=(0,i.useState)({email:"",password:""}),[a,u]=(0,i.useState)(!1);function handleInput(e){let s=e.target.value;r({...t,[e.target.name]:s}),u(!1)}async function handleButton(){try{let r={email:t.email,password:t.password},s=await l.Z.post("https://deportnortbox-api.ddns.net/login",r,{headers:{"Content-Type":"application/json"}}),a=s.data;localStorage.setItem("userData",JSON.stringify(a)),u(!1),"Admin"==a.role&&(a.role="administrador"),e.push(`/${a.role.toLowerCase()}/mi-perfil`)}catch(e){r({email:"",password:""}),u(!0)}}return(0,s.jsxs)("div",{className:"flex justify-center align-center",children:[s.jsx(o(),{src:p,alt:"Logo Liga de Boxeo de Norte de Santander",className:"w4/6",priority:!0}),s.jsx("div",{className:"flex flex-col items-end justify-center m-20",children:(0,s.jsxs)(n.l,{title1:"LIGA DE",title2:"BOXEO",title3:"NORTE",onSubmit:()=>{},description:"",className:"",children:[(0,s.jsxs)("div",{className:"my-[10px] flex flex-col gap-4",children:[a&&s.jsx("p",{className:"text-red-500 mb-2",children:"Los datos ingresados son incorrectos"}),s.jsx(n.l.Input,{className:"",label:"",name:"email",placeholder:"email",onChange:handleInput,value:t.email,type:"text"}),s.jsx(n.l.Input,{className:"",label:"",name:"password",placeholder:"Contrase\xf1a...",onChange:handleInput,value:t.password,type:"password"})]}),(0,s.jsxs)("div",{className:"flex gap-4 ",children:[s.jsx(n.l.SubmitButton,{buttonText:"INGRESAR",handleButton:handleButton}),s.jsx(n.l.Footer,{description:"",link:"/forget-password",textLink:"\xbfOlvidaste la contrase\xf1a?"})]})]})})]})}},5004:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>n,__esModule:()=>o,default:()=>l});var s=r(5153);let a=(0,s.createProxy)(String.raw`/home/josej/box-fronend/app/login/page.tsx`),{__esModule:o,$$typeof:n}=a,i=a.default,l=i},7114:(e,t,r)=>{e.exports=r(4979)}};var t=require("../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),r=t.X(0,[260,1323,614,6686,4425,4997,4634,2127],()=>__webpack_exec__(7177));module.exports=r})();