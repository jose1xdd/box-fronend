(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7642],{9092:function(e,t,n){Promise.resolve().then(n.bind(n,5260))},5260:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Calendario}});var r=n(7437),a=n(9030);function Calendario(){return(0,r.jsx)("div",{children:(0,r.jsx)(a.Z,{})})}},9030:function(e,t,n){"use strict";n.d(t,{Z:function(){return Calendario}});var r=n(7437),a=n(2265),s=n(2173),o=n(6278),i=n(1860),d=n(3747),l=n(1999),c=n(4033);function CalendarioEventos(){let[e,t]=(0,a.useState)([]),n=(0,c.useRouter)(),cargaEventos=async()=>{let e;let n=localStorage.getItem("userData");null!=n&&(e=JSON.parse(n).token);let r=await getEvents(e);t(getFormatedEvents(r))},getEvents=async e=>{try{let t=await s.Z.get("".concat("https://deportnortbox-api.ddns.net","/event"),{headers:{sessiontoken:e}});return t.data.eventos}catch(e){console.log(e)}},getFormatedEvents=e=>{let t=[];for(let n of e){let e={id:"1",title:"1",start:new Date,end:new Date,backgroundColor:"000",extendedProps:{}};e.id=n._id,e.title=n.name,e.start=new Date(n.startsAt),e.start.setHours(e.start.getHours()+5),e.end=new Date(n.endsAt),e.end.setHours(e.end.getHours()+5);let r="#cd1919";"Reunion"==n.type&&(r="3F8BD8"),e.backgroundColor=r,e.extendedProps.description=n.description,t.push(e)}return t};return(0,a.useEffect)(()=>{cargaEventos()},[]),(0,r.jsx)("div",{children:(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{className:"text-5xl text-white mb-4",children:"Calendario de eventos"}),(0,r.jsx)(o.Z,{plugins:[i.Z,d.Z,l.ZP],initialView:"dayGridMonth",headerToolbar:{start:"today prev,next",center:"title",end:"dayGridMonth,timeGridWeek,timeGridDay"},events:e,eventClick:e=>{e.event,n.push("/eventos/verEventos?EventId="+e.event.id)},height:"90vh"})]})})}function Calendario(){let[e,t]=(0,a.useState)(!1),n=(0,c.useRouter)(),handlerCrear=e=>{let t;let r=localStorage.getItem("userData");null!=r&&(t=JSON.parse(r).role),"Admin"==t&&(t="administrador"),n.push("/"+t+"/eventos/Crear"+e)};return(0,a.useEffect)(()=>{let e;let n=localStorage.getItem("userData");null!=n&&(e=JSON.parse(n).role),console.log(e),t("Admin"==e||"Entrenador"==e)},[]),(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"container mx-auto mt-8",children:(0,r.jsx)("div",{className:"p-4 ",children:(0,r.jsx)(CalendarioEventos,{})})}),e&&(0,r.jsxs)("div",{className:"container flex justify-end items-end mt-4 ",children:[(0,r.jsx)("button",{type:"button",onClick:()=>handlerCrear("Convocatoria"),className:"bg-[#cd1919] text-white rounded p-2 mx-5",children:"Crear convocatoria"}),(0,r.jsx)("button",{onClick:()=>handlerCrear("Torneo"),className:"bg-[#cd1919] text-white rounded p-2",children:"CrearTorneo"})]})]})}}},function(e){e.O(0,[8554,5580,2783,2971,2472,1744],function(){return e(e.s=9092)}),_N_E=e.O()}]);