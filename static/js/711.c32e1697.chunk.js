"use strict";(self.webpackChunkreact_app=self.webpackChunkreact_app||[]).push([[711],{5304:function(e,a,s){s.d(a,{Z:function(){return t}});var n=s(2791),c=s(4164),i=s(184);function t(e){return(0,i.jsxs)(n.Fragment,{children:[c.createPortal((0,i.jsx)("div",{className:"backdrop",onClick:e.close}),document.getElementById("popup")),c.createPortal((0,i.jsxs)("div",{className:"popup-container animated fadeIn",children:[e.children,(0,i.jsx)("span",{className:"popup-close",onClick:e.close,children:"\xd7"})]}),document.getElementById("popup"))]})}},2119:function(e,a,s){s.d(a,{Z:function(){return x}});var n=s(9439),c=s(2791),i=s(7689),t=s(3197),l=s(1087),r=s(5304),d=s(184);function o(e){return(0,d.jsx)(r.Z,{close:e.close,children:(0,d.jsxs)("div",{className:"product-detail flex flex--gap",children:[(0,d.jsx)("div",{className:"col--6",children:(0,d.jsx)("div",{className:"cover",children:(0,d.jsx)("img",{src:t.bu+e.data.images[0],alt:e.data.name})})}),(0,d.jsxs)("div",{className:"col--6 pd",children:[(0,d.jsx)("h2",{children:e.data.name}),(0,d.jsx)("p",{children:new Intl.NumberFormat("de-DE").format(e.data.price)+" VN\u0110"}),(0,d.jsx)("p",{children:e.data.title}),(0,d.jsx)("div",{className:"gap--20"}),(0,d.jsx)("div",{children:(0,d.jsxs)(l.rU,{className:"btn black btn--icon pi--30",to:t.pt+"/"+e.data._id+"/"+encodeURIComponent(e.data.name.replaceAll(" ","-")),children:[(0,d.jsx)("i",{className:"fa fa-shopping-cart"})," Xem chi ti\u1ebft s\u1ea3n ph\u1ea9m"]})})]})]})})}var m=s(9434),u=s(2592),h=s(8174);function p(e){var a=(0,c.useState)(!1),s=(0,n.Z)(a,2),l=s[0],r=s[1],p=(0,i.s0)(),x=(0,m.I0)(),j=function(){window.innerWidth>992&&e.preview?r((function(e){return!e})):p(t.pt+"/"+e.data._id+"/"+encodeURIComponent(e.data.name.replaceAll(" ","-")))};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{className:"product",children:[(0,d.jsx)("div",{className:"cover product-image ".concat(e.onload?"skeleton":""),children:!e.onload&&(0,d.jsx)("img",{src:t.bu+e.data.images[0],alt:e.data.name,onClick:j})}),(0,d.jsx)("h2",{children:e.onload?"\u0110ang t\u1ea3i...":e.data.name}),(0,d.jsx)("p",{children:e.onload?"-":new Intl.NumberFormat("de-DE").format(e.data.price)+" VN\u0110"}),(0,d.jsx)("div",{className:"align--center",children:!e.onload&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("button",{className:"btn black btn--icon btn--sm pi--30",onClick:function(){x((0,u.jX)({id:e.data._id,img:t.bu+e.data.images[0],name:e.data.name,price:e.data.price,amount:1})),h.Am.success("\u0110\xe3 th\xeam v\xe0o gi\u1ecf h\xe0ng!")},children:"Th\xeam v\xe0o gi\u1ecf h\xe0ng"}),(0,d.jsx)("div",{className:"gap--10"})]})})]}),l&&(0,d.jsx)(o,{data:e.data,close:j})]})}function x(e){var a=3;return e.column>=6&&(a=2),5===e.column&&(a="20p"),e.column<5&&(a=12/e.column),(0,d.jsxs)("div",{className:"flex flex--gap products",children:[e.items.length>0&&e.items.map((function(s,n){return(0,d.jsx)("div",{className:"col-lg-".concat(a," col-sm-12"),children:(0,d.jsx)(p,{onload:e.onload,data:s,preview:e.preview})},n)})),0===e.items.length&&(0,d.jsx)("div",{className:"col pd align--center",children:"Kh\xf4ng c\xf3 s\u1ea3n ph\u1ea9m n\xe0o!"})]})}},8711:function(e,a,s){s.r(a),s.d(a,{default:function(){return p}});var n=s(9439),c=s(2791),i=s(1243),t=s(3197),l=s(8174),r=s(7689),d=s(9434),o=s(2592),m=s(184);function u(e){var a=(0,c.useState)(0),s=(0,n.Z)(a,2),i=s[0],t=s[1];return(0,m.jsxs)("div",{className:"flex flex--gap slideshow",children:[(0,m.jsx)("div",{className:"col--min",children:(0,m.jsx)("ul",{className:"slideshow__list",children:e.items.length>0&&e.items.map((function(e,a){return(0,m.jsx)("li",{onClick:function(){return function(e){t(e)}(a)},children:(0,m.jsx)("img",{src:e})},a)}))})}),(0,m.jsx)("div",{className:"col",children:(0,m.jsx)("div",{className:"slideshow__preview",children:(0,m.jsx)("img",{src:e.items[i],alt:""})})})]})}var h=s(2119);function p(){var e=(0,d.I0)(),a=i.Z.create({baseURL:t.MK}),s=(0,r.UO)().id,p=(0,c.useState)(1),x=(0,n.Z)(p,2),j=x[0],g=x[1],f=(0,c.useState)(null),v=(0,n.Z)(f,2),N=v[0],b=v[1],k=(0,c.useState)([null,null,null,null]),w=(0,n.Z)(k,2),C=w[0],Z=w[1],_=(0,c.useState)(!0),y=(0,n.Z)(_,2),I=y[0],S=y[1],A=function(e){e.response&&e.response.data?l.Am.error(e.response.data.errors[0]):l.Am.error("K\u1ebft n\u1ed1i m\xe1y ch\u1ee7 th\u1ea5t b\u1ea1i, vui l\xf2ng th\u1eed l\u1ea1i")};(0,c.useEffect)((function(){a.get("/product?id="+s).then((function(e){b((function(a){return e.data.data[0]})),a.get("/products?category="+e.data.data[0].category).then((function(e){S(!1),Z((function(a){return e.data.data}))})).catch((function(e){return A(e)}))})).catch((function(e){return A(e)}))}),[s]);return(0,m.jsx)("main",{children:(0,m.jsxs)("div",{className:"container",style:{backgroundColor:"#fff"},children:[(0,m.jsx)("div",{className:"gap--50"}),(0,m.jsxs)("div",{className:"flex flex--gap",children:[(0,m.jsx)("div",{className:"col-sm-12 col-lg-6",children:N&&N.images&&(0,m.jsx)(u,{items:N.images.map((function(e){return t.bu+e}))})}),(0,m.jsx)("div",{className:"col-sm-12 col-lg-6",children:N&&(0,m.jsxs)("div",{className:"detailpage-detail",children:[(0,m.jsx)("h2",{children:N.name}),(0,m.jsx)("div",{className:"gap--10"}),(0,m.jsx)("h4",{children:new Intl.NumberFormat("de-DE").format(N.price)+" VN\u0110"}),(0,m.jsx)("div",{className:"gap--20"}),(0,m.jsx)("div",{className:"break-word",children:N.title}),(0,m.jsx)("div",{className:"gap--20"}),(0,m.jsx)("div",{children:(0,m.jsxs)("h5",{children:["Danh m\u1ee5c: ",N.category]})}),(0,m.jsx)("div",{className:"gap--20"}),(0,m.jsxs)("div",{className:"flex y--center",children:[(0,m.jsxs)("div",{className:"quantity",children:[(0,m.jsx)("span",{children:"S\u1ed1 l\u01b0\u1ee3ng"}),(0,m.jsx)("button",{onClick:function(){j>1&&g((function(e){return e-1}))},children:(0,m.jsx)("i",{className:"fa fa-caret-left"})}),(0,m.jsx)("span",{children:j}),(0,m.jsx)("button",{onClick:function(){g((function(e){return e+1}))},children:(0,m.jsx)("i",{className:"fa fa-caret-right"})})]}),(0,m.jsxs)("button",{className:"btn black btn--icon pi--30",onClick:function(){e((0,o.jX)({id:N._id,img:t.bu+N.images[0],name:N.name,price:N.price,amount:j})),l.Am.success("\u0110\xe3 th\xeam "+N.name+" v\xe0o gi\u1ecf h\xe0ng!")},children:[(0,m.jsx)("i",{className:"fa fa-shopping-cart"})," Th\xeam v\xe0o gi\u1ecf h\xe0ng"]})]})]})})]}),(0,m.jsx)("div",{className:"gap--20"}),(0,m.jsx)("div",{style:{borderTop:"1px solid #ddd"}}),(0,m.jsx)("div",{className:"gap--20"}),(0,m.jsx)("h5",{className:"pi--10",children:"Th\xf4ng tin s\u1ea3n ph\u1ea9m"}),(0,m.jsx)("div",{className:"gap"}),(0,m.jsx)("div",{className:"break-word pi--20",children:N?N.desc:""}),(0,m.jsx)("div",{className:"gap--50"}),(0,m.jsx)("h5",{className:"pi--10",children:"S\u1ea3n ph\u1ea9m t\u01b0\u01a1ng t\u1ef1"}),(0,m.jsx)("div",{className:"gap"}),(0,m.jsx)(h.Z,{items:null!==C[0]?C.filter((function(e){return e._id!==s})):C,column:4,onload:I}),(0,m.jsx)("div",{className:"gap--50"})]})})}}}]);
//# sourceMappingURL=711.c32e1697.chunk.js.map