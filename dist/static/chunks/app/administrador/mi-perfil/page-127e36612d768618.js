(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[90],{9290:function(e,l,t){Promise.resolve().then(t.bind(t,6237))},6237:function(e,l,t){"use strict";t.r(l),t.d(l,{default:function(){return Home}});var a=t(7437),s=t(2265),n=t(2173),r=t(2601);function Home(){var e=!1;let l=r.env.NEXT_PUBLIC_API_ENDPOINT,[t,c]=(0,s.useState)({nombre:"Texto",apellido:"Texto",cedula:"Texto",direccion:"Texto",telefono:"Texto",correo:"Texto"}),[d,i]=(0,s.useState)(!1);async function carga(e){try{let t={sessiontoken:e.token},a={userId:e.userId},s=await n.Z.get("".concat(l,"/users"),{params:a,headers:t});c({nombre:s.data.user.name,apellido:s.data.user.lastName,cedula:s.data.user.cedula,direccion:s.data.user.address,telefono:s.data.user.phone,correo:s.data.user.email})}catch(e){console.log(e)}}async function cambiar(e,t){try{let a={sessiontoken:e.token},s={userId:e.userId},r={name:t.nombre,lastName:t.apellido,phone:t.telefono,address:t.direccion};console.log(s),console.log(a),console.log(r),await n.Z.patch("".concat(l,"/users"),r,{params:s,headers:a})}catch(e){console.log(e)}}(0,s.useEffect)(()=>{var l;let t=localStorage.getItem("userData");null!=t&&(l=JSON.parse(t)),carga(l),e=!0},[!e]);let handleChange=(e,l)=>{c(t=>({...t,[e]:l}))},handleToggleEdit=async()=>{if(d){var e;let l=localStorage.getItem("userData");null!=l&&(e=JSON.parse(l)),cambiar(e,t)}else console.log(t);i(e=>!e)};return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"container mx-auto mt-8",children:[(0,a.jsx)("h1",{className:"text-center text-[400%]",id:"titulos-grandes",children:"MI PERFIL"}),(0,a.jsxs)("div",{className:"p-4 max-w-5xl mx-auto flex",children:[(0,a.jsx)("div",{className:"w-2/3 pr-4",children:(0,a.jsxs)("form",{children:[(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)("div",{className:"w-1/3 mx-2",children:(0,a.jsx)("div",{className:"bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 flex items-center justify-center text-black",id:"texto-general",children:"Nombre:"})}),(0,a.jsx)("div",{className:"w-2/3 mx-2",children:d?(0,a.jsx)("input",{type:"text",className:"bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 pl-4 text-black",id:"texto-general",value:t.nombre,onChange:e=>handleChange("nombre",e.target.value)}):(0,a.jsx)("div",{className:"bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 flex items-center justify-center text-black",id:"texto-general",children:t.nombre})})]}),(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)("div",{className:"w-1/3 mx-2",children:(0,a.jsx)("div",{className:"bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 flex items-center justify-center text-black",id:"texto-general",children:"Apellido:"})}),(0,a.jsx)("div",{className:"w-2/3 mx-2",children:d?(0,a.jsx)("input",{type:"text",className:"bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 pl-4 text-black",id:"texto-general",value:t.apellido,onChange:e=>handleChange("apellido",e.target.value)}):(0,a.jsx)("div",{className:"bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 flex items-center justify-center text-black",id:"texto-general",children:t.apellido})})]}),(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)("div",{className:"w-1/3 mx-2",children:(0,a.jsx)("div",{className:"bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 flex items-center justify-center text-black",id:"texto-general",children:"Cedula:"})}),(0,a.jsx)("div",{className:"w-2/3 mx-2",children:(0,a.jsx)("div",{className:"bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 flex items-center justify-center text-black",id:"texto-general",children:t.cedula})})]}),(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)("div",{className:"w-1/3 mx-2",children:(0,a.jsx)("div",{className:"bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 flex items-center justify-center text-black",id:"texto-general",children:"Direcci\xf3n:"})}),(0,a.jsx)("div",{className:"w-2/3 mx-2",children:d?(0,a.jsx)("input",{type:"text",className:"bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 pl-4 text-black",id:"texto-general",value:t.direccion,onChange:e=>handleChange("direccion",e.target.value)}):(0,a.jsx)("div",{className:"bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 flex items-center justify-center text-black",id:"texto-general",children:t.direccion})})]}),(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)("div",{className:"w-1/3 mx-2",children:(0,a.jsx)("div",{className:"bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 flex items-center justify-center text-black",id:"texto-general",children:"Tel\xe9fono:"})}),(0,a.jsx)("div",{className:"w-2/3 mx-2",children:d?(0,a.jsx)("input",{type:"text",className:"bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 pl-4 text-black",id:"texto-general",value:t.telefono,onChange:e=>handleChange("telefono",e.target.value)}):(0,a.jsx)("div",{className:"bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 flex items-center justify-center text-black",id:"texto-general",children:t.telefono})})]}),(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)("div",{className:"w-1/3 mx-2",children:(0,a.jsx)("div",{className:"bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 flex items-center justify-center text-black",id:"texto-general",children:"Correo:"})}),(0,a.jsx)("div",{className:"w-2/3 mx-2",children:(0,a.jsx)("div",{className:"bg-neutral-200 rounded-full w-full h-10 mx-5 my-2 flex items-center justify-center text-black",id:"texto-general",children:t.correo})})]}),(0,a.jsx)("div",{className:"mt-5 flex justify-center",children:(0,a.jsx)("button",{type:"button",onClick:handleToggleEdit,className:"bg-[#cd1919] w-60 h-10 text-white py-2 px-4 rounded-lg",id:"titulos-pequenos",children:d?"Guardar cambios":"Editar informaci\xf3n"})})]})}),(0,a.jsxs)("div",{className:"w-1/3 flex flex-col justify-center items-center",children:[(0,a.jsx)("svg",{className:"my-1",xmlns:"http://www.w3.org/2000/svg",height:"15em",viewBox:"0 0 512 512",fill:"#ffffff",children:(0,a.jsx)("path",{d:"M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"})}),(0,a.jsx)("button",{className:"bg-[#cd1919] w-60 h-10 text-white py-2 px-4 rounded-lg mt-4",id:"titulos-pequenos",children:"Cargar nueva foto de perfil"})]})]})]})})}}},function(e){e.O(0,[126,971,472,560],function(){return e(e.s=9290)}),_N_E=e.O()}]);