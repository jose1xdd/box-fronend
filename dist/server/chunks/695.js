exports.id=695,exports.ids=[695],exports.modules={3626:(e,r,a)=>{"use strict";a.d(r,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var t=a(784),s=a(9885),n=a(8680),l=a.n(n);a(921);let __WEBPACK_DEFAULT_EXPORT__=({isOpen:e,onClose:r})=>{let[a,n]=(0,s.useState)(!1),[o,i]=(0,s.useState)([]);return t.jsx(l(),{isOpen:e,onRequestClose:r,contentLabel:"Modal",className:a?"dragging react-modal":"react-modal",children:(0,t.jsxs)("div",{onDragEnter:e=>{e.preventDefault(),n(!0)},onDragOver:e=>{e.preventDefault(),n(!0)},onDragLeave:()=>{n(!1)},onDrop:e=>{e.preventDefault(),n(!1);let r=Array.from(e.dataTransfer.files);i(r)},className:"drop-zone",children:[t.jsx("h2",{children:"Cargar Archivo"}),t.jsx("input",{type:"file",onChange:e=>{let r=e.target.files;r&&i(Array.from(r))}}),t.jsx("button",{onClick:r,children:"Cerrar"}),o.length>0&&(0,t.jsxs)("div",{children:[t.jsx("h3",{children:"Archivos Arrastrados:"}),t.jsx("ul",{children:o.map((e,r)=>t.jsx("li",{children:e.name},r))})]})]})})}},921:()=>{}};