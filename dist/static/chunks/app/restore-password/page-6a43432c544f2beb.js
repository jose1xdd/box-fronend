(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[821],{5102:function(e,a,s){Promise.resolve().then(s.bind(s,6731))},6731:function(e,a,s){"use strict";s.r(a),s.d(a,{default:function(){return RestorePassword}});var t=s(7437),n=s(8962),r=s(243),o=s(1312),d=s(2265);function RestorePassword(){let[e,a]=(0,d.useState)({password1:"",password2:""}),[s,l]=(0,d.useState)(!0),[i,c]=(0,d.useState)({password1:!1,password2:!1}),[p,u]=(0,d.useState)(!1),[m,w]=(0,d.useState)({title:"",message:"",imagen:""});function handleInput(e){let{name:s,value:t}=e.target;a(e=>({...e,[s]:t})),c(e=>({...e,[s]:!1}))}function handleModalClose(){u(!1)}function handleSubmit(){let s=["password1","password2"].some(a=>""===e[a].trim());if(s){c({password1:""===e.password1.trim(),password2:""===e.password2.trim()});return}if(c({password1:!1,password2:!1}),e.password1===e.password2){let a=n.findIndex(e=>"Kevin Tarazona"===e.Nombre);-1!==a&&(alert("indice"+a+"\nContrase\xf1a antigua: "+n[a].password+"\nNueva contrase\xf1a: "+e.password1),n[a].password=e.password1,w({title:"Contrase\xf1a cambiada correctamente",message:"Has cambiado correctamente la contrase\xf1a.",imagen:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"}),u(!0))}else l(!1),setTimeout(()=>{l(!0),a({password1:"",password2:""})},2e3)}return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o.l,{className:"flex justify-center flex-col space-y-4",title1:"",title2:"",title3:"Cambia tu contrase\xf1a",description:"",onSubmit:handleSubmit,children:[i.password1&&(0,t.jsx)("p",{className:"text-red-600 text-center mb-2",children:"El campo no puede estar vac\xedo"}),(0,t.jsx)(o.l.Input,{className:i.password1?"border-red-500":"",label:"",name:"password1",placeholder:"Ingresa tu nueva contrase\xf1a...",onChange:handleInput,value:e.password1,type:"password"}),i.password2&&(0,t.jsx)("p",{className:"text-red-600 text-center mb-2",children:"El campo no puede estar vac\xedo"}),(0,t.jsx)(o.l.Input,{className:i.password2?"border-red-500":"",label:"",name:"password2",placeholder:"Confirma tu contrase\xf1a...",onChange:handleInput,value:e.password2,type:"password"}),!s&&(0,t.jsx)("p",{className:"text-red-600 text-center mt-2",children:"Las contrase\xf1as no coinciden"}),(0,t.jsx)("div",{className:"flex justify-center mt-4",children:(0,t.jsx)(o.l.SubmitButton,{buttonText:"Cambiar contrase\xf1a",handleButton:handleSubmit})})]}),(0,t.jsx)(r.u,{isOpen:p,onClose:handleModalClose,title:m.title,imagen:m.imagen,children:(0,t.jsx)("p",{children:m.message})})]})}}},function(e){e.O(0,[326,520,971,472,560],function(){return e(e.s=5102)}),_N_E=e.O()}]);