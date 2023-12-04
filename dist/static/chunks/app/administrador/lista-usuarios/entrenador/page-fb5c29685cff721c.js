(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[694],{5574:function(e,t,a){Promise.resolve().then(a.bind(a,5620))},5620:function(e,t,a){"use strict";a.r(t);var r=a(7437),s=a(2265),l=a(47),n=a(1187);t.default=()=>{let[e,t]=(0,s.useState)(!1),handleOpenModal=()=>{t(!0)};return(0,r.jsxs)("div",{className:"w-full max-w-screen-xl mx-auto p-6",children:[(0,r.jsx)(l.Z,{rol:"Entrenador"}),(0,r.jsxs)("div",{className:"flex justify-between items-center mt-4",children:[(0,r.jsx)("button",{onClick:()=>alert("Usuarios descargados"),className:"bg-[#cd1919] text-white rounded p-2",children:"Descargar usuarios"}),(0,r.jsxs)("div",{className:"flex gap-2",children:[(0,r.jsx)("label",{htmlFor:"fileInput",className:"bg-[#cd1919] text-white rounded p-2 cursor-pointer",children:"Carga masiva"}),(0,r.jsx)("input",{type:"file",id:"fileInput",style:{display:"none"},onChange:e=>{let t=e.target.files;t&&t.length>0&&handleOpenModal()}}),(0,r.jsx)("button",{onClick:()=>alert("Agregar usuario"),className:"bg-[#cd1919] text-white rounded p-2",children:"+"})]})]}),(0,r.jsx)(n.Z,{isOpen:e,onClose:()=>{t(!1)}})]})}},1187:function(e,t,a){"use strict";var r=a(7437),s=a(2265),l=a(8529),n=a.n(l);a(9918),t.Z=e=>{let{isOpen:t,onClose:a}=e,[l,c]=(0,s.useState)(!1),[i,d]=(0,s.useState)([]);return(0,r.jsx)(n(),{isOpen:t,onRequestClose:a,contentLabel:"Modal",className:l?"dragging react-modal":"react-modal",children:(0,r.jsxs)("div",{onDragEnter:e=>{e.preventDefault(),c(!0)},onDragOver:e=>{e.preventDefault(),c(!0)},onDragLeave:()=>{c(!1)},onDrop:e=>{e.preventDefault(),c(!1);let t=Array.from(e.dataTransfer.files);d(t)},className:"drop-zone",children:[(0,r.jsx)("h2",{children:"Cargar Archivo"}),(0,r.jsx)("input",{type:"file",onChange:e=>{let t=e.target.files;t&&d(Array.from(t))}}),(0,r.jsx)("button",{onClick:a,children:"Cerrar"}),i.length>0&&(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{children:"Archivos Arrastrados:"}),(0,r.jsx)("ul",{children:i.map((e,t)=>(0,r.jsx)("li",{children:e.name},t))})]})]})})}},47:function(e,t,a){"use strict";var r=a(7437);a(7534);var s=a(2173),l=a(2265),n=a(9641),c=a.n(n),i=a(2601);t.Z=e=>{let{rol:t}=e,[a,n]=(0,l.useState)([]),[d,o]=(0,l.useState)([]),[h,x]=(0,l.useState)(0),u=i.env.NEXT_PUBLIC_API_ENDPOINT;(0,l.useEffect)(()=>{cargarUsuarios()},[]);let cargarUsuarios=async()=>{var e;let a=localStorage.getItem("userData");null!=a&&(e=JSON.parse(a));let r=await carga(e,t);o(r),n(r)},carga=async(e,t)=>{try{let a={sessiontoken:e.token},r=await s.Z.get("".concat(u,"/users/List"),{params:{role:t},headers:a});return console.log(r.data),r.data.users}catch(e){console.log(e)}};return(0,r.jsxs)("div",{className:"w-80% mx-auto",children:[(0,r.jsx)("h1",{className:"text-5xl text-white mb-4",children:"USUARIOS"}),(0,r.jsx)("input",{type:"text",placeholder:"Filtrar por nombre",onChange:e=>{let t=e.target.value.toLowerCase(),r=a.filter(e=>(e.name+" "+e.lastName).toLowerCase().includes(t));o(r),x(0)},className:"p-2 rounded-[18px] bg-gray-200 focus:outline-none mb-4"}),(0,r.jsxs)("table",{className:"w-full",children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{className:"border-[#1e1e1e] border-[8px] p-3 bg-[#cd1919] text-white text-center",children:"NOMBRE"}),(0,r.jsx)("th",{className:"border-[#1e1e1e] border-[8px] p-3 bg-[#cd1919] text-white text-center",children:"ROL"}),(0,r.jsx)("th",{className:"border-[#1e1e1e] border-[8px] p-3 bg-[#cd1919] text-white text-center",children:"C\xc9DULA"}),(0,r.jsx)("th",{className:"border-[#1e1e1e] border-[8px] p-3 bg-[#cd1919] text-white text-center",children:"ACCIONES"})]})}),(0,r.jsx)("tbody",{children:(()=>{let e=10*h,t=e+10,a=Array.isArray(d)?d:[];return a.slice(e,t).map(e=>(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{className:"border-[#1e1e1e] border-[8px] p-3 bg-[#dfdfdf] text-black text-center",children:e.name+" "+e.lastName}),(0,r.jsx)("td",{className:"border-[#1e1e1e] border-[8px] p-3 bg-[#dfdfdf] text-black text-center",children:e.role}),(0,r.jsx)("td",{className:"border-[#1e1e1e] border-[8px] p-3 bg-[#dfdfdf] text-black text-center",children:e.cedula}),(0,r.jsxs)("td",{className:"border-[#1e1e1e] border-[8px] p-3 bg-[#dfdfdf] text-black text-center",children:[(0,r.jsx)("button",{onClick:()=>alert("Vista completa"),className:"bg-[#cd1919] text-white rounded p-2 mr-2",children:(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-eye",viewBox:"0 0 16 16",children:[(0,r.jsx)("path",{d:"M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"}),(0,r.jsx)("path",{d:"M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"})]})}),(0,r.jsx)("button",{onClick:()=>alert("Editar"),className:"bg-[#cd1919] text-white rounded p-2 mr-2",children:(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-pencil-square",viewBox:"0 0 16 16",children:[(0,r.jsx)("path",{d:"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"}),(0,r.jsx)("path",{fillRule:"evenodd",d:"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"})]})}),(0,r.jsx)("button",{onClick:()=>alert("Borrar"),className:"bg-[#cd1919] text-white rounded p-2 mr-2",children:(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-person-fill-dash",viewBox:"0 0 16 16",children:[(0,r.jsx)("path",{d:"M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M11 12h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1m0-7a3 3 0 1 1-6 0 3 3 0 0 1 6 0"}),(0,r.jsx)("path",{d:"M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4"})]})})]})]},e._id))})()})]}),(0,r.jsx)(c(),{pageCount:Math.ceil(d.length/10),onPageChange:e=>{let t=e.selected;t>=0&&t<Math.ceil(d.length/10)&&x(t)},containerClassName:"pagination flex gap-2 justify-center",activeClassName:"active",pageLinkClassName:"page-link",previousLabel:(0,r.jsx)("button",{className:"bg-[#cd1919] text-white rounded p-2",children:"Previous"}),nextLabel:(0,r.jsx)("button",{className:"bg-[#cd1919] text-white rounded p-2",children:"Next"}),pageRangeDisplayed:0,marginPagesDisplayed:0})]})}},7534:function(){},9918:function(){}},function(e){e.O(0,[126,158,971,472,560],function(){return e(e.s=5574)}),_N_E=e.O()}]);