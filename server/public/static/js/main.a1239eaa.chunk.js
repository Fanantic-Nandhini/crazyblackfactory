(this.webpackJsonpprojfrontend=this.webpackJsonpprojfrontend||[]).push([[0],{12:function(e,t,a){},21:function(e,t,a){},26:function(e,t,a){e.exports=a(51)},34:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(3),o=a(4),l=a(2),s=(a(12),"https://nandhini.herokuapp.com"),i=function(){return"undefined"!=typeof window&&(!!localStorage.getItem("jwt")&&JSON.parse(localStorage.getItem("jwt")))},m=function(e,t){return e.location.pathname===t?{color:"#2ecc72"}:{color:"#FFFFFF"}},u=Object(o.g)((function(e){var t=e.history;return c.a.createElement("div",null,c.a.createElement("ul",{className:"nav nav-tabs bg-dark"},c.a.createElement("li",{className:"nav-item"},c.a.createElement(r.b,{style:m(t,"/"),className:"nav-link",to:"/"},"Home")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(r.b,{style:m(t,"/cart"),className:"nav-link",to:"/cart"},"Cart")),i()&&0===i().user.role&&c.a.createElement("li",{className:"nav-item"},c.a.createElement(r.b,{style:m(t,"/user/dashboard"),className:"nav-link",to:"/user/dashboard"},"Profile")),i()&&1===i().user.role&&c.a.createElement("li",{className:"nav-item"},c.a.createElement(r.b,{style:m(t,"/admin/dashboard"),className:"nav-link",to:"/admin/dashboard"},"Admin. Dashboard")),!i()&&c.a.createElement(n.Fragment,null,c.a.createElement("li",{className:"nav-item"},c.a.createElement(r.b,{style:m(t,"/signup"),className:"nav-link",to:"/signup"},"Sign Up")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(r.b,{style:m(t,"/signin"),className:"nav-link",to:"/signin"},"Sign In"))),i()&&c.a.createElement("li",null,c.a.createElement("span",{className:"nav-link text-warning",onClick:function(){!function(e){if("undefined"!==typeof window)localStorage.removeItem("jwt"),e(),fetch("".concat(s,"/signout"),{method:"GET"}).then((function(e){return console.log("signout success")})).catch((function(e){return console.log(e)}))}((function(){t.push("/")}))}},"Signout"))))})),d=function(e){var t=e.title,a=void 0===t?"My Title":t,n=e.description,r=void 0===n?"My desription":n,o=e.className,l=void 0===o?"bg-dark text-white p-4":o,s=e.children;return c.a.createElement("div",null,c.a.createElement(u,null),c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"bg-dark text-white text-center"},c.a.createElement("h2",{className:"title display-4"},a),c.a.createElement("p",{className:"description lead"},r)),c.a.createElement("div",{className:l},s)))},p=function(e){var t=e.product,a=t?"".concat(s,"/product/photo/").concat(t._id):"https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";return c.a.createElement("div",{className:"rounded border border-success p-2"},c.a.createElement("img",{src:a,alt:"photo",style:{maxHeight:"100%",maxWidth:"100%"},className:"mb-3 rounded"}))},f=a(1),h=function(e){var t=e.product,a=e.addtoCart,r=void 0===a||a,s=e.removeFromCart,i=void 0!==s&&s,m=e.setReload,u=void 0===m?function(e){return e}:m,d=e.reload,h=void 0===d?void 0:d,E=Object(n.useState)(!1),b=Object(l.a)(E,2),g=b[0],N=b[1],v=Object(n.useState)(t.count),y=Object(l.a)(v,2),j=(y[0],y[1],t?t.name:"A photo from pexels"),O=t?t.description:"Default description",w=t?t.price:"DEFAULT",S=function(){!function(e,t){var a=[];void 0!==typeof window&&(localStorage.getItem("cart")&&(a=JSON.parse(localStorage.getItem("cart"))),a.push(Object(f.a)(Object(f.a)({},e),{},{count:1})),localStorage.setItem("cart",JSON.stringify(a)),t())}(t,(function(){return N(!0)}))};return c.a.createElement("div",{className:"card text-white bg-dark border border-info "},c.a.createElement("div",{className:"card-header lead"},j),c.a.createElement("div",{className:"card-body"},function(e){if(e)return c.a.createElement(o.a,{to:"/cart"})}(g),c.a.createElement(p,{product:t}),c.a.createElement("p",{className:"lead bg-success font-weight-normal text-wrap"},O),c.a.createElement("p",{className:"btn btn-success rounded  btn-sm px-4"},"$ ",w),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12"},function(e){return e&&c.a.createElement("button",{onClick:S,className:"btn btn-block btn-outline-success mt-2 mb-2"},"Add to Cart")}(r)),c.a.createElement("div",{className:"col-12"},function(e){return e&&c.a.createElement("button",{onClick:function(){!function(e){var t=[];void 0!==typeof window&&(localStorage.getItem("cart")&&(t=JSON.parse(localStorage.getItem("cart"))),t.map((function(a,n){a._id===e&&t.splice(n,1)})),localStorage.setItem("cart",JSON.stringify(t)))}(t._id),u(!h)},className:"btn btn-block btn-outline-danger mt-2 mb-2"},"Remove from cart")}(i)))))},E=function(){return fetch("".concat(s,"/products"),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))};function b(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(!1),s=Object(l.a)(o,2),i=(s[0],s[1]);return Object(n.useEffect)((function(){E().then((function(e){e.error&&i(e.error),r(e)}))}),[]),c.a.createElement(d,{title:"Welcome to CrazyBlack Factory",description:c.a.createElement("div",null,c.a.createElement("i",{class:"fa fa-check","aria-hidden":"true"}),"\xa0Unique Designs\xa0",c.a.createElement("i",{class:"fa fa-check","aria-hidden":"true"}),"\xa0Variety of Collections\xa0",c.a.createElement("i",{class:"fa fa-check","aria-hidden":"true"}),"\xa0Casual Wear\xa0",c.a.createElement("i",{class:"fa fa-check","aria-hidden":"true"}),"\xa0Stylish Outcomes\xa0")},c.a.createElement("div",{className:"row text-center"},c.a.createElement("h1",{className:"text-white text-center"},"T-Shirts"),c.a.createElement("div",{className:"row"},a.map((function(e,t){return c.a.createElement("div",{key:t,className:"col-4 mb-4"},c.a.createElement(h,{product:e}))})))))}var g=a(8),N=function(){var e=Object(n.useState)({name:"",email:"",password:"",error:"",success:!1}),t=Object(l.a)(e,2),a=t[0],o=t[1],i=a.name,m=a.email,u=a.password,p=a.error,h=a.success,E=function(e){return function(t){o(Object(f.a)(Object(f.a)({},a),{},Object(g.a)({error:!1},e,t.target.value)))}},b=function(e){var t;e.preventDefault(),o(Object(f.a)(Object(f.a)({},a),{},{error:!1})),(t={name:i,email:m,password:u},fetch("".concat(s,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))).then((function(e){e.error?o(Object(f.a)(Object(f.a)({},a),{},{error:e.error,success:!1})):o(Object(f.a)(Object(f.a)({},a),{},{name:"",email:"",password:"",error:"",success:!0}))})).catch(console.log("Error in signup"))};return c.a.createElement(d,{title:"Sign Up",description:"New User? No worries signup here!!"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6 offset-sm-3 text-left"},c.a.createElement("div",{className:"alert alert-success",style:{display:h?"":"none"}},"New account was created successfully. Please",c.a.createElement(r.b,{to:"/signin"},"Login Here")))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6 offset-sm-3 text-left"},c.a.createElement("div",{className:"alert alert-danger",style:{display:p?"":"none"}},p))),c.a.createElement("div",{class:"d-flex flex-row justify-content-center"},c.a.createElement("div",{className:"form-signup"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6 offset-sm-3"},c.a.createElement("form",null,c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"text-light"},"Name"),c.a.createElement("input",{className:"form-control",onChange:E("name"),type:"text",value:i,placeholder:"Name"})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"text-light"},"Email"),c.a.createElement("input",{className:"form-control",onChange:E("email"),type:"email",value:m,placeholder:"Email"})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"text-light"},"Password"),c.a.createElement("input",{onChange:E("password"),className:"form-control",type:"password",value:u,placeholder:"Password"})),c.a.createElement("button",{onClick:b,className:"btn btn-success btn-block"},"Sign Up")))))))},v=function(){var e=Object(n.useState)({email:"",password:"",error:"",loading:!1,didRedirect:!1}),t=Object(l.a)(e,2),a=t[0],r=t[1],m=a.email,u=a.password,p=a.error,h=a.loading,E=a.didRedirect,b=i().user,N=function(e){return function(t){r(Object(f.a)(Object(f.a)({},a),{},Object(g.a)({error:!1},e,t.target.value)))}},v=function(e){e.preventDefault(),r(Object(f.a)(Object(f.a)({},a),{},{error:!1,loading:!0})),function(e){return fetch("".concat(s,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}({email:m,password:u}).then((function(e){e.error?r(Object(f.a)(Object(f.a)({},a),{},{error:e.error,loading:!1})):function(e,t){"undefined"!==typeof window&&(localStorage.setItem("jwt",JSON.stringify(e)),t())}(e,(function(){r(Object(f.a)(Object(f.a)({},a),{},{didRedirect:!0}))}))})).catch(console.log("signin request failed"))};return c.a.createElement(d,{title:"Sign In",description:"Please Signin with your username and password!!"},h&&c.a.createElement("div",{className:"alert alert-info"},c.a.createElement("h2",null,"Loading...")),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6 offset-sm-3 text-left"},c.a.createElement("div",{className:"alert alert-danger",style:{display:p?"":"none"}},p))),c.a.createElement("div",{class:"d-flex flex-row justify-content-center"},c.a.createElement("div",{className:"form-signin"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6 offset-sm-3"},c.a.createElement("form",null,c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"text-light"},"Email"),c.a.createElement("input",{onChange:N("email"),value:m,className:"form-control",type:"email",placeholder:"Email"})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"text-light"},"Password"),c.a.createElement("input",{onChange:N("password"),value:u,className:"form-control",type:"password",placeholder:"Password"})),c.a.createElement("button",{onClick:v,className:"btn btn-success btn-block"},"Sign In")))))),E?b&&1===b.role?c.a.createElement(o.a,{to:"/admin/dashboard"}):c.a.createElement(o.a,{to:"/user/dashboard"}):i()?c.a.createElement(o.a,{to:"/"}):void 0)},y=a(13),j=function(e){var t=e.component,a=Object(y.a)(e,["component"]);return c.a.createElement(o.b,Object.assign({},a,{render:function(e){return i()&&1===i().user.role?c.a.createElement(t,e):c.a.createElement(o.a,{to:{pathname:"/signin",state:{from:e.location}}})}}))},O=function(e){var t=e.component,a=Object(y.a)(e,["component"]);return c.a.createElement(o.b,Object.assign({},a,{render:function(e){return i()?c.a.createElement(t,e):c.a.createElement(o.a,{to:{pathname:"/signin",state:{from:e.location}}})}}))},w=(a(32),a(34),function(){var e=i(),t=e.user,a=e.token,r=Object(n.useState)([]),o=Object(l.a)(r,2),m=o[0],u=o[1],p=[],h=function(){(function(e,t){return fetch("".concat(s,"/orders/user/").concat(e),{method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer ".concat(t)}}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))})(t._id,a).then((function(e){e.error?console.log(e.error):e&&e[0]&&e[0].purchases&&u(Object(f.a)({},e[0].purchases))}))};return Object(n.useEffect)((function(){h()}),[]),c.a.createElement(d,{title:"Hello ".concat(t.name),description:"your account Info"},c.a.createElement("div",{className:"row text-center"},c.a.createElement("div",{className:"row shopping"},c.a.createElement("i",{class:"fa fa-shopping-cart fa-4x","aria-hidden":"true"}),"\xa0",c.a.createElement("h1",{className:"heading"},"Your Purchased Items"),function(){for(var e=0;e<Object.keys(m).length;e++)p.push(m&&m[e])}()),c.a.createElement("div",{className:"col-sm-6 offset-3"},c.a.createElement("table",{class:"table table-dark"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{scope:"col"},"Items"),c.a.createElement("th",{scope:"col"},"Price"),c.a.createElement("th",{scope:"col"},"Quantity"),c.a.createElement("th",{scope:"col"},"Status"))),c.a.createElement("tbody",null,p.map((function(e){return c.a.createElement("tr",null,c.a.createElement("td",null,e.name),c.a.createElement("td",null,"$",e.amount),c.a.createElement("td",null,"1"),c.a.createElement("td",null,c.a.createElement("span",{class:"badge badge-success"},"Received")))})))))))}),S=function(){var e=i().user,t=e.name,a=e.email;e.role;return c.a.createElement(d,{title:"Welcome to admin area",description:"Manage all of your products here",className:"container bg-success p-4"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-3"},c.a.createElement("div",{className:"card"},c.a.createElement("h4",{className:"card-header bg-dark text-white"}," Admin Navigation"),c.a.createElement("ol",{className:"list-group"},c.a.createElement("li",{className:"list-group-item"},c.a.createElement(r.b,{to:"/admin/create/category",className:"nav-link text-success"},"Create Categories")),c.a.createElement("li",{className:"list-group-item"},c.a.createElement(r.b,{to:"/admin/categories",className:"nav-link text-success"},"Manage Categories")),c.a.createElement("li",{className:"list-group-item"},c.a.createElement(r.b,{to:"/admin/create/product",className:"nav-link text-success"},"Create Products")),c.a.createElement("li",{className:"list-group-item"},c.a.createElement(r.b,{to:"/admin/products",className:"nav-link text-success"},"Manage Products")),c.a.createElement("li",{className:"list-group-item"},c.a.createElement(r.b,{to:"/admin/orders",className:"nav-link text-success"},"Manage Orders"))))),c.a.createElement("div",{className:"col-9"},c.a.createElement("div",{className:"card mb-4"},c.a.createElement("h4",{className:"card-header"},"Admin Information"),c.a.createElement("ol",{className:"list-group"},c.a.createElement("li",{className:"list-group-item"},c.a.createElement("span",{className:"badge badge-success mr-2"},"Name:"),t),c.a.createElement("li",{className:"list-group-item"},c.a.createElement("span",{className:"badge badge-success mr-2"},"E-mail:"),a),c.a.createElement("li",{className:"list-group-item"},c.a.createElement("span",{className:"badge badge-danger mr-2"},"Admin Area")))))))},k=function(){return fetch("".concat(s,"/categories"),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},x=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],o=t[1],m=Object(n.useState)(!1),u=Object(l.a)(m,2),p=u[0],f=u[1],h=Object(n.useState)(!1),E=Object(l.a)(h,2),b=E[0],g=E[1],N=i(),v=N.user,y=N.token,j=function(e){f(""),o(e.target.value)},O=function(e){e.preventDefault(),f(""),g(!1),function(e,t,a){return fetch("".concat(s,"/category/create/").concat(e),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify(a)}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}(v._id,y,{name:a}).then((function(e){e.error?f(!0):(f(""),g(!0))}))};return c.a.createElement(d,{title:"Create a category here",description:"Add a new category for new tshirts",className:"container bg-info p-4"},c.a.createElement("div",{className:"row bg-white rounded"},c.a.createElement("div",{className:"col-md-8 offset-md-2"},function(){if(b)return c.a.createElement("h4",{className:"text-success"},"Category created successfully")}(),function(){if(p)return c.a.createElement("h4",{className:"text-danger"},"Failed to create category")}(),c.a.createElement("form",null,c.a.createElement("div",{className:"form-group"},c.a.createElement("p",{className:"lead"},"Enter the category"),c.a.createElement("input",{type:"text",className:"form-control my-3",onChange:j,value:a,autoFocus:!0,required:!0,placeholder:"For Ex. Summer"}),c.a.createElement("button",{onClick:O,className:"btn btn-outline-info"},"Create Category"))),c.a.createElement("div",{className:"mt-5"},c.a.createElement(r.b,{className:"btn btn-sm btn-success mb-3",to:"/admin/dashboard"},"Admin Home")))))},C=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],o=t[1],m=i(),u=m.user,p=m.token,f=function(){k().then((function(e){e.error?console.log(e.error):o(e)}))};Object(n.useEffect)((function(){f()}),[]);var h=function(e){(function(e,t,a){return fetch("".concat(s,"/category/").concat(e,"/").concat(t),{method:"DELETE",headers:{Accept:"application/json",Authorization:"Bearer ".concat(a)}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))})(e,u._id,p).then((function(e){e.error?console.log(e.error):f()}))};return c.a.createElement(d,{title:"Welcome admin",description:"Manage products here"},c.a.createElement("h2",{className:"mb-4"},"All Categories"),c.a.createElement(r.b,{className:"btn btn-info",to:"/admin/dashboard"},c.a.createElement("span",{className:""},"Admin Home")),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12"},c.a.createElement("h2",{className:"text-center text-white my-3"},"Categories of your product!!!"),a.map((function(e,t){return c.a.createElement("div",{key:t,className:"row text-center mb-2 "},c.a.createElement("div",{className:"col-4"},c.a.createElement("h3",{className:"text-white text-left"},e.name)),c.a.createElement("div",{className:"col-4"},c.a.createElement(r.b,{className:"btn btn-success",to:"/admin/category/update/".concat(e._id)},c.a.createElement("span",{className:""},"Update"))),c.a.createElement("div",{className:"col-4"},c.a.createElement("button",{onClick:function(){h(e._id)},className:"btn btn-danger"},"Delete")))})))))},A=function(){var e=i(),t=e.user,a=e.token,o=Object(n.useState)({name:"",description:"",price:"",stock:"",photo:"",categories:[],category:"",loading:!1,error:"",createdProduct:"",getaRedirect:!1,formData:""}),m=Object(l.a)(o,2),u=m[0],p=m[1],h=u.name,E=u.description,b=u.price,N=u.stock,v=u.categories,y=(u.category,u.loading,u.error,u.createdProduct),j=(u.getaRedirect,u.formData);Object(n.useEffect)((function(){k().then((function(e){p(Object(f.a)(Object(f.a)({},u),{},{categories:e,formData:new FormData}))}))}),[]);var O=function(e){e.preventDefault(),p(Object(f.a)(Object(f.a)({},u),{},{error:"",loading:!0})),function(e,t,a){return fetch("".concat(s,"/product/create/").concat(e),{method:"POST",headers:{Accept:"application/json",Authorization:"Bearer ".concat(t)},body:a}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}(t._id,a,j).then((function(e){e.error?p(Object(f.a)(Object(f.a)({},u),{},{error:e.error})):p(Object(f.a)(Object(f.a)({},u),{},{name:"",description:"",price:"",photo:"",stock:"",loading:!1,createdProduct:e.name}))}))},w=function(e){return function(t){var a="photo"===e?t.target.files[0]:t.target.value;j.set(e,a),p(Object(f.a)(Object(f.a)({},u),{},Object(g.a)({},e,a)))}};return c.a.createElement(d,{title:"Add a product here!",description:"Welcome to product creation section",className:"container bg-info p-4"},c.a.createElement(r.b,{to:"/admin/dashboard",className:"btn btn-md btn-dark mb-3"},"Admin Home"),c.a.createElement("div",{className:"row bg-dark text-white rounded"},c.a.createElement("div",{className:"col-md-8 offset-md-2"},c.a.createElement("div",{className:"alert alert-success mt-3",style:{display:y?"":"none"}},c.a.createElement("h4",null,y," created successfully")),c.a.createElement("form",null,c.a.createElement("span",null,"Post photo"),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"btn btn-block btn-success"},c.a.createElement("input",{onChange:w("photo"),type:"file",name:"photo",accept:"image",placeholder:"choose a file"}))),c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{onChange:w("name"),name:"photo",className:"form-control",placeholder:"Name",value:h})),c.a.createElement("div",{className:"form-group"},c.a.createElement("textarea",{onChange:w("description"),name:"photo",className:"form-control",placeholder:"Description",value:E})),c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{onChange:w("price"),type:"number",className:"form-control",placeholder:"Price",value:b})),c.a.createElement("div",{className:"form-group"},c.a.createElement("select",{onChange:w("category"),className:"form-control",placeholder:"Category"},c.a.createElement("option",null,"Select"),v&&v.map((function(e,t){return c.a.createElement("option",{key:t,value:e._id},e.name)})))),c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{onChange:w("stock"),type:"number",className:"form-control",placeholder:"Stock",value:N})),c.a.createElement("button",{type:"submit",onClick:O,className:"btn btn-outline-success mb-3"},"Create Product")))))},P=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],o=t[1],m=i(),u=m.user,p=m.token,f=function(){fetch("".concat(s,"/products"),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)})).then((function(e){e.error?console.log(e.error):o(e)}))};Object(n.useEffect)((function(){f()}),[]);var h=function(e){(function(e,t,a){return fetch("".concat(s,"/product/").concat(e,"/").concat(t),{method:"DELETE",headers:{Accept:"application/json",Authorization:"Bearer ".concat(a)}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))})(e,u._id,p).then((function(e){e.error?console.log(e.error):f()}))};return c.a.createElement(d,{title:"Welcome admin",description:"Manage products here"},c.a.createElement("h2",{className:"mb-4"},"All products:"),c.a.createElement(r.b,{className:"btn btn-info",to:"/admin/dashboard"},c.a.createElement("span",{className:""},"Admin Home")),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12"},c.a.createElement("h2",{className:"text-center text-white my-3"},"Products!!!"),a.map((function(e,t){return c.a.createElement("div",{key:t,className:"row text-center mb-2 "},c.a.createElement("div",{className:"col-4"},c.a.createElement("h3",{className:"text-white text-left"},e.name)),c.a.createElement("div",{className:"col-4"},c.a.createElement(r.b,{className:"btn btn-success",to:"/admin/product/update/".concat(e._id)},c.a.createElement("span",{className:""},"Update"))),c.a.createElement("div",{className:"col-4"},c.a.createElement("button",{onClick:function(){h(e._id)},className:"btn btn-danger"},"Delete")))})))))},T=function(e){var t=e.match,a=i(),o=a.user,m=a.token,u=Object(n.useState)({name:"",description:"",price:"",stock:"",photo:"",categories:[],category:"",loading:!1,error:"",createdProduct:"",getaRedirect:!1,formData:""}),p=Object(l.a)(u,2),h=p[0],E=p[1],b=h.name,N=h.description,v=h.price,y=h.stock,j=h.categories,O=(h.category,h.loading,h.error,h.createdProduct),w=(h.getaRedirect,h.formData),S=function(e){(function(e){return fetch("".concat(s,"/product/").concat(e),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))})(e).then((function(e){e.error?E(Object(f.a)(Object(f.a)({},h),{},{error:e.error})):(E(Object(f.a)(Object(f.a)({},h),{},{name:e.name,description:e.description,price:e.price,category:e.category._id,stock:e.stock,formData:new FormData})),x())}))},x=function(){k().then((function(e){e.error?E(Object(f.a)(Object(f.a)({},h),{},{error:e.error})):E({categories:e,formData:new FormData})}))};Object(n.useEffect)((function(){S(t.params.productId)}),[]);var C=function(e){e.preventDefault(),E(Object(f.a)(Object(f.a)({},h),{},{error:"",loading:!0})),function(e,t,a,n){return fetch("".concat(s,"/product/").concat(e,"/").concat(t),{method:"PUT",headers:{Accept:"application/json",Authorization:"Bearer ".concat(a)},body:n}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}(t.params.productId,o._id,m,w).then((function(e){e.error?E(Object(f.a)(Object(f.a)({},h),{},{error:e.error})):E(Object(f.a)(Object(f.a)({},h),{},{name:"",description:"",price:"",photo:"",stock:"",loading:!1,createdProduct:e.name}))}))},A=function(e){return function(t){var a="photo"===e?t.target.files[0]:t.target.value;w.set(e,a),E(Object(f.a)(Object(f.a)({},h),{},Object(g.a)({},e,a)))}};return c.a.createElement(d,{title:"Add a product here!",description:"Welcome to product creation section",className:"container bg-info p-4"},c.a.createElement(r.b,{to:"/admin/dashboard",className:"btn btn-md btn-dark mb-3"},"Admin Home"),c.a.createElement("div",{className:"row bg-dark text-white rounded"},c.a.createElement("div",{className:"col-md-8 offset-md-2"},c.a.createElement("div",{className:"alert alert-success mt-3",style:{display:O?"":"none"}},c.a.createElement("h4",null,O," Updated successfully")),c.a.createElement("form",null,c.a.createElement("span",null,"Post photo"),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"btn btn-block btn-success"},c.a.createElement("input",{onChange:A("photo"),type:"file",name:"photo",accept:"image",placeholder:"choose a file"}))),c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{onChange:A("name"),name:"photo",className:"form-control",placeholder:"Name",value:b})),c.a.createElement("div",{className:"form-group"},c.a.createElement("textarea",{onChange:A("description"),name:"photo",className:"form-control",placeholder:"Description",value:N})),c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{onChange:A("price"),type:"number",className:"form-control",placeholder:"Price",value:v})),c.a.createElement("div",{className:"form-group"},c.a.createElement("select",{onChange:A("category"),className:"form-control",placeholder:"Category"},c.a.createElement("option",null,"Select"),j&&j.map((function(e,t){return c.a.createElement("option",{key:t,value:e._id},e.name)})))),c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{onChange:A("stock"),type:"number",className:"form-control",placeholder:"Stock",value:y})),c.a.createElement("button",{type:"submit",onClick:C,className:"btn btn-outline-success mb-3"},"Update Product")))))},I=function(e){var t=e.match,a=Object(n.useState)({name:""}),o=Object(l.a)(a,2),m=o[0],u=o[1],p=Object(n.useState)(!1),f=Object(l.a)(p,2),h=(f[0],f[1]),E=Object(n.useState)(!1),b=Object(l.a)(E,2),g=b[0],N=b[1],v=i(),y=v.user,j=v.token,O=function(e){h(""),u(e.target.value)},w=function(e){e.preventDefault(),h(""),N(!1),function(e,t,a,n){return fetch("".concat(s,"/category/").concat(e,"/").concat(t),{method:"PUT",headers:{Accept:"application/json",Authorization:"Bearer ".concat(a),"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}(t.params.categoryId,y._id,j,{name:m}).then((function(e){e.error?h(!0):(h(""),N(!0),u(e.name))}))};Object(n.useEffect)((function(){S(t.params.categoryId)}),[]);var S=function(e){(function(e){return fetch("".concat(s,"/category/").concat(e),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))})(e).then((function(e){e.error?h({error:e.error}):u(e.name)}))};return c.a.createElement(d,{title:"Create a category here",description:"Add a new category for new tshirts",className:"container bg-info p-4"},c.a.createElement("div",{className:"row bg-white rounded"},c.a.createElement("div",{className:"col-md-8 offset-md-2"},function(){if(g)return c.a.createElement("h4",{className:"text-success"},"Category Updated successfully")}(),c.a.createElement("form",null,c.a.createElement("div",{className:"form-group"},c.a.createElement("p",{className:"lead"},"Enter the category"),c.a.createElement("input",{type:"text",className:"form-control my-3",onChange:O,value:m,autoFocus:!0,required:!0,placeholder:"For Ex. Summer"}),c.a.createElement("button",{onClick:w,className:"btn btn-outline-info"},"Update Category"))),c.a.createElement("div",{className:"mt-5"},c.a.createElement(r.b,{className:"btn btn-sm btn-success mb-3",to:"/admin/dashboard"},"Admin Home")))))},D=(a(21),a(24)),z=a.n(D),F=function(e){var t=e.products,a=e.setReload,r=void 0===a?function(e){return e}:a,o=e.reload,m=void 0===o?void 0:o,u=(e.close,Object(n.useState)({loading:!1,success:!1,clientToken:null,error:"",instance:{}})),d=Object(l.a)(u,2),p=d[0],h=d[1],E=i()&&i().user._id,b=i()&&i().token,g=function(e,t){(function(e,t){return fetch("".concat(s,"/payment/gettoken/").concat(e),{method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer ".concat(t)}}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))})(e,t).then((function(e){if(e.error)h(Object(f.a)(Object(f.a)({},e),{},{error:e.error}));else{var t=e.clientToken;h({clientToken:t})}}))};Object(n.useEffect)((function(){g(E,b)}),[]);var N=function(){h({loading:!0});p.instance.requestPaymentMethod().then((function(e){var a={paymentMethodNonce:e.nonce,amount:v()};(function(e,t,a){return fetch("".concat(s,"/payment/braintree/").concat(e),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify(a)}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))})(E,b,a).then((function(e){h(Object(f.a)(Object(f.a)({},p),{},{success:e.success,loading:!1}));var a={products:t,transaction_id:e.transaction.id,amount:e.transaction.amount};!function(e,t,a){fetch("".concat(s,"/order/create/").concat(e),{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify({order:a})}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))}(E,b,a),alert("Payment done Successfully"),function(e){if(void 0!==typeof window){localStorage.removeItem("cart");localStorage.setItem("cart",JSON.stringify([])),e()}}((function(){console.log("cart empty")})),r(!m)})).catch((function(e){h({loading:!1,success:!1})}))}))},v=function(){var e=0;return t.map((function(t){e+=t.price})),e};return c.a.createElement("div",{className:"paymentInfo"},i()?c.a.createElement("div",null,null!==p.clientToken&&t.length>0?c.a.createElement("div",{className:"paymentInfo"},c.a.createElement("p",{className:"text-center"},"Your bill amount is $",v(),c.a.createElement("br",null),"Please Use 378282246310005 as card number and expiry date as 12/21"),c.a.createElement(z.a,{options:{authorization:p.clientToken},onInstance:function(e){return p.instance=e}}),c.a.createElement("button",{type:"button",className:"btn btn-block btn-success",onClick:N},"Buy")):c.a.createElement("h3",{className:"text-center"},"Please login")):c.a.createElement("p",{className:"text-center"},"Please login for further payment procedure"))},_=a(25),q=function(e,t){var a=Object(n.useState)({}),c=Object(l.a)(a,2),r=c[0],o=c[1],s=Object(n.useState)({}),i=Object(l.a)(s,2),m=i[0],u=i[1],d=Object(n.useState)(!1),p=Object(l.a)(d,2),h=p[0],E=p[1];Object(n.useEffect)((function(){0===Object.keys(m).length&&h&&e()}),[m]);return{handleChange:function(e){e.persist(),o((function(t){return Object(f.a)(Object(f.a)({},t),{},Object(g.a)({},e.target.name,e.target.value))}))},handleSubmit:function(e){e&&e.preventDefault(),u(t(r)),E(!0)},values:r,errors:m}};function J(e){var t={};return e.fullname?/[^a-zA-Z\-\/]/i.test(e.fullname)&&(t.fullname="Name is invalid"):t.fullname="Name is required",e.city?/[^a-zA-Z\-\/]/i.test(e.city)&&(t.city="City is invalid"):t.city="City is required",e.state?/[^a-zA-Z\-\/]/i.test(e.state)&&(t.state="State is invalid"):t.state="State is required",e.zip?e.zip.length>6&&(t.zip="Zip must contains atleast 5 numbers"):t.zip="Zip is required",e.address||(t.address="Address is required"),e.email?/\S+@\S+\.\S+/.test(e.email)||(t.email="Email address is invalid"):t.email="Email address is required",e.phonenumber?e.phonenumber.length>10&&(t.phonenumber="Phone number must be 10 numbers"):t.phonenumber="Phone number is required",t}var U=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(!1),s=Object(l.a)(o,2),i=s[0],m=s[1],u=Object(n.useState)(!0),p=Object(l.a)(u,2),f=p[0],E=p[1],b=q((function(){console.log("No errors, submit callback called!"),g||void 0!==N.length?(E(!1),alert("Your Info is successfully submitted. Please proceed for payment")):E(!0)}),J),g=b.values,N=b.errors,v=b.handleChange,y=b.handleSubmit;Object(n.useEffect)((function(){r(function(){if(void 0!==typeof window&&localStorage.getItem("cart"))return JSON.parse(localStorage.getItem("cart"))}())}),[i]);return c.a.createElement(d,{title:"Your cart products",description:"Ready to checkout"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-6"},a.length>0?function(e){return c.a.createElement("div",null,c.a.createElement("h2",null,"Your products"),e.map((function(e,t){return c.a.createElement(h,{key:t,product:e,removeFromCart:!0,addtoCart:!1,setReload:m,reload:i})})))}(a):c.a.createElement("h4",{className:"text-center"},"No products found. Please login or add some products.")),c.a.createElement("div",{className:"col-6"},a.length>0?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"shipment-form"},c.a.createElement("form",{onSubmit:y,noValidate:!0},c.a.createElement("h2",{className:"detls"},"Delievery Details"),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{for:!0},"Full Name"),c.a.createElement("input",{name:"fullname",onChange:v,value:g.fullname||"",className:"form-control",type:"text",placeholder:"Name"}),N.fullname&&c.a.createElement("p",{className:"help-is-danger"},N.fullname)),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{for:!0},"Address"),c.a.createElement("input",{name:"address",onChange:v,value:g.address||"",className:"form-control",type:"text",placeholder:"Address"}),N.address&&c.a.createElement("p",{className:"help-is-danger"},N.address)),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{for:!0},"Phone Number"),c.a.createElement("input",{name:"phonenumber",onChange:v,value:g.phonenumber||"",className:"form-control",type:"number",placeholder:"Mobile number"}),N.phonenumber&&c.a.createElement("p",{className:"help-is-danger"},N.phonenumber)),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{for:!0},"E-Mail"),c.a.createElement("input",{className:"form-control",type:"email",name:"email",onChange:v,value:g.email||"",required:!0,placeholder:"Email"}),N.email&&c.a.createElement("p",{className:"help-is-danger"},N.email)),c.a.createElement("div",{class:"form-row"},c.a.createElement("div",{class:"col-4"},c.a.createElement("input",{type:"text",class:"form-control",placeholder:"City",name:"city",onChange:v,value:g.city||"",required:!0}),N.city&&c.a.createElement("p",{className:"help-is-danger"},N.city)),c.a.createElement("div",{class:"col"},c.a.createElement("input",{type:"text",class:"form-control",placeholder:"State",name:"state",onChange:v,value:g.state||"",required:!0}),N.state&&c.a.createElement("p",{className:"help-is-danger"},N.state)),c.a.createElement("div",{class:"col"},c.a.createElement("input",{type:"number",class:"form-control",placeholder:"Zip",name:"zip",onChange:v,value:g.zip||"",required:!0}),N.zip&&c.a.createElement("p",{className:"help-is-danger"},N.zip))),c.a.createElement("div",{className:"submit"},c.a.createElement("button",{className:"btn btn-success",type:"submit"},"Submit Information"),"\xa0",c.a.createElement(_.a,{modal:!0,trigger:c.a.createElement("button",{className:"btn btn-success",type:"button",disabled:f},"Proceed for Payment")},(function(e){return c.a.createElement(F,{products:a,setReload:m,close:e})})))))):c.a.createElement("h4",{className:"text-center"}))))},R=function(){return c.a.createElement(r.a,null,c.a.createElement(o.d,null,c.a.createElement(o.b,{path:"/",exact:!0,component:b}),c.a.createElement(o.b,{path:"/signup",exact:!0,component:N}),c.a.createElement(o.b,{path:"/signin",exact:!0,component:v}),c.a.createElement(o.b,{path:"/cart",exact:!0,component:U}),c.a.createElement(O,{path:"/user/dashboard",exact:!0,component:w}),c.a.createElement(O,{path:"/user/payment",exact:!0,component:F}),c.a.createElement(j,{path:"/admin/dashboard",exact:!0,component:S}),c.a.createElement(j,{path:"/admin/create/category",exact:!0,component:x}),c.a.createElement(j,{path:"/admin/categories",exact:!0,component:C}),c.a.createElement(j,{path:"/admin/category/update/:categoryId",exact:!0,component:I}),c.a.createElement(j,{path:"/admin/create/product",exact:!0,component:A}),c.a.createElement(j,{path:"/admin/products",exact:!0,component:P}),c.a.createElement(j,{path:"/admin/product/update/:productId",exact:!0,component:T})))},B=a(16);a.n(B).a.render(c.a.createElement(R,null),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.a1239eaa.chunk.js.map