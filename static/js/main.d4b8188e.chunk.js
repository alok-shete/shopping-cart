(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{19:function(e,t,a){e.exports=a(28)},24:function(e,t,a){},25:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(6),c=a.n(l),o=(a(24),a(17)),s=a(9),i=a(11),m=a(12),u=a(18),h=a(15),d=(a(8),a(7)),p=a(16),E=a(14),b=(a(25),a(1)),g=a.n(b),w=function(e){return r.a.createElement("div",{className:g()("card","text-center","col-12")},r.a.createElement("div",{className:"card-body"},r.a.createElement("img",{className:g()("card-img-top","img-fluid"),src:e.photo,alt:"CardImage"}),r.a.createElement("h5",{className:"card-title"},r.a.createElement("b",null,e.name)),r.a.createElement("b",null,r.a.createElement("p",null,"$ ",e.price)),r.a.createElement("button",{type:"button",className:e.bCart,onClick:function(){return e.addCart(e.product)}},e.mCart)))},f=function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("img",{src:e.photo,alt:"car",width:"128",height:"72"})),r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.price),r.a.createElement("td",null,r.a.createElement("button",{type:"button",className:g()("btn","btn-outline-danger"),onClick:function(){return e.rmCart(e.Product)}},r.a.createElement("b",null,r.a.createElement("i",{className:"fas fa-trash"})))))},v=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={products:[{id:1,name:"Mansory Stallone Black",price:34300,cart:!1,photo:"https://www.hdwallpapers.in/thumbs/2020/mansory_stallone_black_4k_5k_hd-t2.jpg"},{id:2,name:"Pogea Racing Zeus",price:34300,cart:!1,photo:"https://www.hdwallpapers.in/thumbs/2019/pogea_racing_zeus_2019_4k-t2.jpg"},{id:3,name:"Mitsubishi",price:34300,cart:!1,photo:"https://www.hdwallpapers.in/thumbs/2019/mitsubishi_mi_tech_concept_2019_4k_2-t2.jpg"},{id:4,name:"Polestar 2",price:34300,cart:!1,photo:"https://www.hdwallpapers.in/thumbs/2019/polestar_2_2019-t2.jpg"},{id:5,name:"Range Rover Velar",price:34300,cart:!1,photo:"https://www.hdwallpapers.in/thumbs/2019/range_rover_velar_svautobiography_dynamic_edition_2019_4k_8k-t2.jpg"},{id:6,name:"Acura NSX",price:34300,cart:!1,photo:"https://www.hdwallpapers.in/thumbs/2019/wolf_racing_ford_mustang_one_of_7_2019-t1.jpg"}],count:0,totalPrice:0,show:!1,order:!1},e.Cart=function(t){var a=0,n=0,r=Object(s.a)(e.state.products),l=r.indexOf(t);r[l]=Object(o.a)({},t),r[l].cart=!r[l].cart;for(var c=0;c<r.length;c++)r[c].cart&&(n+=1,a+=r[c].price);e.setState({products:r,count:n,totalPrice:a,order:!1})},e.handleClose=function(){e.setState({show:!1})},e.handleShow=function(){e.setState({show:!0})},e.orderPlace=function(){for(var t=Object(s.a)(e.state.products),a=0;a<t.length;a++)t[a].cart=!1;e.setState({products:t,count:0,totalPrice:0,order:!0})},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h1",null,this.state.products.id),r.a.createElement("div",null,r.a.createElement("nav",{className:g()("navbar","navbar-light","bg-light","justify-content-between")},r.a.createElement("a",{className:"navbar-brand",href:"#home"},r.a.createElement("b",null,"Shopping Cart")),r.a.createElement("form",{className:"form-inline"},r.a.createElement("input",{className:g()("form-control","mr-sm-2"),type:"search",placeholder:"Search","aria-label":"Search"}),r.a.createElement("button",{className:g()("btn","btn-outline-success","my-2","my-sm-0"),type:"submit"},"Search"),r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{id:"cart",variant:"light",onClick:this.handleShow},r.a.createElement("b",null,"Cart \xa0",r.a.createElement("span",{className:g()("badge","badge-pill","badge-success")},this.state.count))),r.a.createElement(d.a,{show:this.state.show,onHide:this.handleClose},r.a.createElement(d.a.Header,{closeButton:!0},r.a.createElement(d.a.Title,null,r.a.createElement("b",null,"Cart"))),r.a.createElement(d.a.Body,null,0!==this.state.count?r.a.createElement(E.a,{responsive:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null),r.a.createElement("th",null,"Product Name"),r.a.createElement("th",null,"Price"),r.a.createElement("th",null))),r.a.createElement("tbody",null,this.state.products.map((function(t){return t.cart?r.a.createElement(f,{name:t.name,price:t.price,photo:t.photo,rmCart:e.Cart,Product:t}):null})),r.a.createElement("tr",null,r.a.createElement("th",null),r.a.createElement("th",null),r.a.createElement("th",null,this.state.totalPrice),r.a.createElement("th",null)))):this.state.order?r.a.createElement("div",{className:g()("container","text-center")},r.a.createElement("h3",null,r.a.createElement("i",{className:g()("fa","fa-shopping-cart","fa-5x","cartIcon"),"aria-hidden":"true"}," "),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("b",null,"Order Placed"))):r.a.createElement("div",{className:g()("container","text-center")},r.a.createElement("h3",null,r.a.createElement("i",{className:g()("fa","fa-shopping-cart","fa-5x","cartIcon"),"aria-hidden":"true"}," "),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("b",null,"Cart Is Empty")))),r.a.createElement(d.a.Footer,null,0!==this.state.count?r.a.createElement("div",{className:g()("container","text-center")},r.a.createElement("button",{className:g()("btn","btn-outline-success","my-2","my-sm-0"),onClick:this.orderPlace,type:"submit"},"Place Order")):null)))))),r.a.createElement("div",null,r.a.createElement("div",{className:"card-columns"},this.state.products.map((function(t){return r.a.createElement(w,{id:t.id,name:t.name,price:t.price,photo:t.photo,addCart:e.Cart,product:t,bCart:t.cart?g()("btn","btn-outline-success"):g()("btn","btn-outline-dark"),mCart:t.cart?"In Cart":"Add To Cart"})})))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.d4b8188e.chunk.js.map