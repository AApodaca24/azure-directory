(function(e){function t(t){for(var a,s,n=t[0],l=t[1],c=t[2],m=0,d=[];m<n.length;m++)s=n[m],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&d.push(o[s][0]),o[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(d.length)d.shift()();return i.push.apply(i,c||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],a=!0,n=1;n<r.length;n++){var l=r[n];0!==o[l]&&(a=!1)}a&&(i.splice(t--,1),e=s(s.s=r[0]))}return e}var a={},o={app:0},i=[];function s(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=a,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(r,a,function(t){return e[t]}.bind(null,a));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=t,n=n.slice();for(var c=0;c<n.length;c++)t(n[c]);var u=l;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var a=r("85ec"),o=r.n(a);o.a},"1a03":function(e,t,r){"use strict";var a=r("3b05"),o=r.n(a);o.a},"27a7":function(e,t,r){},"3b05":function(e,t,r){},"439a":function(e,t,r){"use strict";var a=r("27a7"),o=r.n(a);o.a},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("v-app",[r("Nav",{attrs:{routes:e.links,isAuth:e.auth,dark:e.darkMode},on:{"set-logout":e.logoutUser,"set-theme":e.toggleTheme}}),r("v-main",[r("router-view",{attrs:{routes:e.links,isAuth:e.auth},on:{"set-auth":e.setAuth}})],1)],1)],1)},i=[],s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-app-bar",{attrs:{dark:""}},[r("v-app-bar-nav-icon",{on:{click:e.toggle}}),e.isAuth?r("v-btn",{attrs:{color:"rgb(0, 43, 92)"},on:{click:function(t){return e.$msal.signOut()}}},[e._v("Logout")]):e._e(),r("v-spacer"),r("v-toolbar-title",[e._v("myAF")])],1),r("v-navigation-drawer",{attrs:{absolute:"",temporary:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[r("v-list",{attrs:{nav:"",dense:""}},[r("v-list-item-group",e._l(e.authRoutes,(function(t,a){return r("v-list-item",{key:a,attrs:{to:t.link}},[r("v-list-item-icon",{staticClass:"pr-2"},[r("v-icon",[e._v(e._s(t.icon))])],1),r("v-list-item-title",{staticStyle:{"padding-left":"1em"}},[e._v(e._s(t.title))])],1)})),1),e.isAuth?r("v-menu",{attrs:{"offset-y":"","allow-overflow":"true","max-height":"600"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,o=t.attrs;return[e.isAuth?r("v-list-item",e._g(e._b({},"v-list-item",o,!1),a),[r("v-list-item-icon",{staticClass:"pr-2"},[r("v-icon",[e._v("bookmark")])],1),r("v-list-item-title",{staticStyle:{"padding-left":"1em"}},[e._v(" Departments menu ")])],1):e._e()]}}],null,!1,3342827364)},[r("v-list",e._l(e.deptsEnum,(function(t,a){return r("v-list-item",{key:a,on:{click:function(r){return e.navigate(t)}}},[r("v-list-item-title",[e._v(e._s(t))])],1)})),1)],1):e._e()],1),r("v-switch",{staticClass:"ml-5",attrs:{"hide-details":"",inset:"",label:"Toggle Dark Mode"},model:{value:e.$vuetify.theme.dark,callback:function(t){e.$set(e.$vuetify.theme,"dark",t)},expression:"$vuetify.theme.dark"}})],1)],1)},n=[],l=(r("4de4"),{name:"Nav",props:{routes:Array,isAuth:Boolean,dark:Boolean},data:function(){return{drawer:!1,deptsEnum:["DF","DFAN","DFAS","DFB","DFBL","DFC","DFCE","DFCS","DFEC","DFEG","DFEI","DFME","DFENG","DFF","DFIP","DFH","DFK","DFL","DFLIB","DFM","DFMI","DFMS","DFP","DFPS","DFPY","DFR","DFS"]}},methods:{toggle:function(){switch(this.drawer){case!0:this.drawer=!1;break;case!1:this.drawer=!0;break}},navigate:function(e){this.$router.push({name:"department",params:{dept:e}})}},computed:{authRoutes:function(){var e=this,t=this.routes.filter((function(t){return t.reqAuth===e.isAuth}));return t}}}),c=l,u=r("2877"),m=Object(u["a"])(c,s,n,!1,null,"16bdd834",null),d=m.exports,f={components:{Nav:d},data:function(){return{auth:this.$msal.isAuthenticated(),darkMode:!1,loggedInUser:null,links:[{title:"Home",link:"/",icon:"mdi-home",reqAuth:!1},{title:"Register",link:{name:"register"},icon:"how_to_reg",reqAuth:!1},{title:"Login",link:{name:"login"},icon:"face",reqAuth:!1},{title:"New Entry",link:{name:"newForm"},icon:"create",reqAuth:!0},{title:"Directory",link:{name:"Directory"},icon:"dashboard",reqAuth:!0}]}},created:function(){this.$vuetify.theme.dark=!0},methods:{setAuth:function(){this.$msal.signIn()},logoutUser:function(){this.auth=!1,this.loggedInUser="",this.$router.push({name:"Home"})},toggleTheme:function(){!1===this.darkMode?this.$vuetify.theme.dark=!0:this.$vuetify.theme.dark=!1}}},v=f,p=(r("034f"),Object(u["a"])(v,o,i,!1,null,null,null)),h=p.exports,g=r("8c4f"),b=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("section",{staticClass:"showcase"},[r("div",{staticClass:"card"},[r("h1",[e._v("Welcome to the Faculty Directory App")]),r("p",[e._v("Here you can view and add members to view anywhere.")]),r("div",[e.isAuth?e._e():r("v-btn",{staticClass:"ma-2",attrs:{tile:"",color:"rgb(0, 43, 92)",to:{name:"register"}}},[e._v("Register")]),e.isAuth?e._e():r("v-btn",{staticClass:"ma-2",attrs:{tile:"",color:"rgb(0, 43, 92)",to:{name:"login"}}},[e._v("Login")]),e.isAuth?r("v-btn",{staticClass:"ma-2",attrs:{tile:"",color:"rgb(0, 43, 92)",to:{name:"Directory"}}},[e._v("Directory")]):e._e(),e._v(" "),e.isAuth?r("v-btn",{staticClass:"ma-2",attrs:{tile:"",color:"rgb(0, 43, 92)"},on:{click:function(t){return e.$msal.signOut()}}},[e._v("Logout")]):e._e()],1)])])])},y=[],x={name:"Home",props:{routes:Array,isAuth:Boolean}},w=x,_=(r("74ed"),Object(u["a"])(w,b,y,!1,null,"735b8204",null)),F=_.exports,k=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"center"},[r("main",[r("router-view",{attrs:{faculty:e.faculty,active:e.activeRecord?e.activeRecord[0]:""},on:{"set-active":e.setActiveRecord,"delete-item":e.deleteActiveRecord,"navigate-to":e.navigateToUser}})],1)])},D=[],C=(r("96cf"),r("1da1")),S=r("bc3a"),E=r.n(S),$={name:"Directory",props:{isAuth:Boolean,User:Object,token:String},data:function(){return{loading:!1,error:!1,errorText:"",faculty:[],activeRecord:null,myFiles:[]}},beforeRouteUpdate:function(e,t,r){console.log(e,t),this.getData(),r()},methods:{successUpload:function(e){this.$vs.notify({color:"success",title:"Upload Success"}),console.log(e)},getData:function(){var e=this;return Object(C["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.prev=1,t.next=4,E.a.get("https://dfdirectory.azurewebsites.net/api/v1/faculty");case 4:r=t.sent,a=r.data,e.faculty=a,t.next=14;break;case 9:t.prev=9,t.t0=t["catch"](1),e.error=!0,e.errorText=t.t0,console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,9]])})))()},setActiveRecord:function(e){var t=this.faculty.filter((function(t){return e===t._id}));this.activeRecord=t,this.$router.push({name:"editForm"})},deleteActiveRecord:function(e){var t=this;E.a.delete("https://dfdirectory.azurewebsites.net/api/v1/faculty/".concat(e)).then((function(e){console.log(e),t.$router.push()})).catch((function(e){return console.log(e)})),this.getData()},navigateToUser:function(e){this.$router.push({name:"User",params:{id:e}})}},created:function(){this.getData()}},M=$,I=Object(u["a"])(M,k,D,!1,null,"5c19f697",null),R=I.exports,P=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-row",[r("v-col"),r("v-col",{attrs:{cols:"10"}},[r("v-layout",[r("v-flex",{attrs:{xs12:""}},[r("v-form",{ref:"form",on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[r("v-row",[r("v-container",[e.error?r("v-alert",{attrs:{type:"error"}},[e._v(" "+e._s(e.errorMsg)+" ")]):e._e(),r("h1",[e._v("Register")]),r("v-text-field",{attrs:{rules:e.emailRules,label:"E-mail",required:""},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}}),r("v-text-field",{attrs:{label:"Enter your password",min:"8","append-icon":e.e1?"visibility":"visibility_off",type:e.e1?"password":"text",rules:e.passwordRules,counter:"",required:""},on:{"click:append":function(){return e.e1=!e.e1}},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}}),r("v-btn",{attrs:{block:"",color:"rgb(0, 43, 92)",dark:""},on:{click:e.onSubmit}},[e._v("Register")])],1)],1),r("v-row")],1)],1)],1)],1),r("v-col")],1)],1)},A=[],U={name:"Register",data:function(){return{error:!1,errorMsg:"",form:{email:"",password:""},e1:!0,passwordRules:[function(e){return!!e||"Password is required"}],emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/.+@.+\..+/.test(e)||"E-mail must be valid"}]}},methods:{onSubmit:function(){var e=this;return Object(C["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,E.a.post("https://dfdirectory.azurewebsites.net/api/v1/register",e.form);case 3:r=t.sent,console.log(r),!0===r.data.auth?e.$router.push({name:"login"}):(e.error=!0,e.errorMsg="Some Details were entered incorrectly",e.form.email="",e.form.password=""),t.next=14;break;case 8:t.prev=8,t.t0=t["catch"](0),e.error=!0,e.errorMsg=t.t0,e.form.email="",e.form.password="";case 14:case"end":return t.stop()}}),t,null,[[0,8]])})))()}}},j=U,L=Object(u["a"])(j,P,A,!1,null,"16bb1a21",null),O=L.exports,q=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-row",[r("v-col"),r("v-col",{attrs:{cols:"10"}},[r("v-layout",[r("v-flex",{attrs:{xs12:""}},[r("v-form",{ref:"form",on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[r("v-row",[r("v-container",[e.error?r("v-alert",{attrs:{type:"error"}},[e._v(" "+e._s(e.errorMsg)+" ")]):e._e(),r("h1",[e._v("Login")]),r("v-text-field",{attrs:{rules:e.emailRules,label:"E-mail",required:""},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}}),r("v-text-field",{attrs:{label:"Enter your password",min:"8","append-icon":e.e1?"visibility":"visibility_off",type:e.e1?"password":"text",rules:e.passwordRules,counter:"",required:""},on:{"click:append":function(){return e.e1=!e.e1}},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}}),r("v-btn",{attrs:{block:"",color:"rgb(0, 43, 92)",dark:""},on:{click:e.onSubmit}},[e._v("Login")])],1)],1),r("v-row")],1)],1)],1),r("v-flex",{attrs:{xs12:""}},[r("v-container",{staticStyle:{width:"50%",margin:"0 auto","text-align":"center"}},[r("p",{staticClass:"py-2"},[e._v("OR")]),r("p",[e._v("Sign in with Microsoft")]),r("v-btn",{staticClass:"ma-2",attrs:{tile:"",dark:"",color:"rgb(0, 43, 92)"},on:{click:e.login}},[r("v-icon",{attrs:{left:""}},[e._v("mdi-microsoft")]),e._v(" Sign-In ")],1)],1)],1)],1),r("v-col")],1)],1)},B=[],G={name:"Login",data:function(){return{error:!1,response:null,errorMsg:"",form:{email:"",password:""},e1:!0,passwordRules:[function(e){return!!e||"Password is required"}],emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/.+@.+\..+/.test(e)||"E-mail must be valid"}]}},methods:{onSubmit:function(){var e=this;return Object(C["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,E.a.post("https://dfdirectory.azurewebsites.net/api/v1/login",e.form);case 3:r=t.sent,console.log(r),!0===r.data.auth?(e.$router.push({name:"Directory"}),console.log(r),e.$emit("set-auth",r.data._user)):(e.error=!0,e.errorMsg="Some Details were entered incorrectly",e.form.email="",e.form.password=""),t.next=14;break;case 8:t.prev=8,t.t0=t["catch"](0),e.error=!0,e.errorMsg=t.t0,e.form.email="",e.form.password="";case 14:case"end":return t.stop()}}),t,null,[[0,8]])})))()},login:function(){this.$emit("set-auth")}}},T=G,z=Object(u["a"])(T,q,B,!1,null,"fdf05720",null),N=z.exports,H=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"table"},[r("v-row",{attrs:{"no-gutters":""}},[r("v-col"),r("v-col",{attrs:{cols:"8"}},[r("v-layout",{staticClass:"mt-3"},[r("v-flex",{staticClass:"mx-auto",staticStyle:{width:"100%"}},[r("v-card",[r("v-container",[r("h2",[e._v("Welcome to the Directory")]),r("p",[e._v(" Here you will find a list of all the members in the directory. If you would like to add a new member, please click the add button ")]),r("p",[e._v(" If you would like to see the listings by department click on the departments menu for a list of departments ")]),r("v-select",{attrs:{items:e.deptsEnum,label:"Department",solo:"",clearable:"true"},model:{value:e.selectedDept,callback:function(t){e.selectedDept=t},expression:"selectedDept"}})],1),r("v-container",[r("v-btn",{staticClass:"ma-2",attrs:{to:{name:"newForm"},tile:"",color:"indigo",dark:""}},[e._v("Add New")])],1)],1)],1)],1),r("v-layout",{staticClass:"mt-3"},[r("v-card",{staticClass:"mx-auto",staticStyle:{width:"100%"}},[r("v-card-title",[e._v(" Members "),r("v-spacer"),r("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),r("v-data-table",{attrs:{headers:e.headers,items:e.deptFaculty,search:e.search},scopedSlots:e._u([{key:"item.action",fn:function(t){var a=t.item;return[r("v-btn",{staticClass:"mx-3",attrs:{color:"orange lighten-1",fab:"",small:""},on:{click:function(t){return e.$emit("set-active",a._id)}}},[r("v-icon",[e._v("create")])],1),r("v-btn",{staticClass:"mx-3",attrs:{color:"red accent-4",fab:"",small:"",dark:""},on:{click:function(t){return e.$emit("delete-item",a._id)}}},[r("v-icon",[e._v("delete_outline")])],1),r("v-btn",{staticClass:"mx-3",attrs:{color:"blue darken-4",fab:"",small:"",dark:""},on:{click:function(t){return e.$emit("navigate-to",a._id)}}},[r("v-icon",[e._v("launch")])],1)]}}])})],1)],1)],1),r("v-col")],1)],1)])},Y=[],J={name:"Table",props:["faculty"],data:function(){return{search:"",selectedDept:null,deptsEnum:["DF","DFAN","DFAS","DFB","DFBL","DFC","DFCE","DFCS","DFEC","DFEG","DFEI","DFME","DFENG","DFF","DFIP","DFH","DFK","DFL","DFLIB","DFM","DFMI","DFMS","DFP","DFPS","DFPY","DFR","DFS"],headers:[{text:"Department",value:"dept"},{text:"Name",value:"name",align:"start",sortable:!0},{text:"Rank/Grade",value:"rank"},{text:"Location",value:"loc"},{text:"Action",value:"action"}]}},computed:{deptFaculty:function(){var e=this;if(null===this.selectedDept||void 0===this.selectedDept)return this.faculty;var t=this.faculty.filter((function(t){return t.dept===e.selectedDept}));return t}}},K=J,W=Object(u["a"])(K,H,Y,!1,null,"5a28c283",null),Q=W.exports,V=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-row",{attrs:{"no-gutter":""}},[r("v-col"),r("v-col",{attrs:{cols:"8"}},[r("v-container",[r("v-flex",{attrs:{xs12:""}},[r("v-card",{staticStyle:{padding:"1.2rem"}},[r("h1",[e._v(" Add Member ")]),r("p",[e._v("Please see below for walking through adding a member")])])],1)],1),r("v-container",[r("v-flex",{attrs:{xs12:""}},[r("v-form",{ref:"form",attrs:{"lazy-validation":""},on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-stepper",{attrs:{vertical:""},model:{value:e.e6,callback:function(t){e.e6=t},expression:"e6"}},[r("v-stepper-step",{attrs:{complete:e.e6>1,step:"1",editable:""}},[e._v(" Basic Information "),r("small",{staticStyle:{"margin-top":"1rem"}},[e._v("Lets start out with some basic information")])]),r("v-stepper-content",{attrs:{step:"1"}},[r("v-card",{staticStyle:{"margin-bottom":"2rem"},attrs:{height:"100%"}},[r("v-select",{attrs:{items:e.category,outlined:"",label:"Faculty or Major"},model:{value:e.form.scope,callback:function(t){e.$set(e.form,"scope",t)},expression:"form.scope"}}),r("v-text-field",{attrs:{outlined:"",label:"Enter Full Name",required:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),r("v-select",{attrs:{items:e.rankEnum,outlined:"",label:"Rank/Grade"},model:{value:e.form.rank,callback:function(t){e.$set(e.form,"rank",t)},expression:"form.rank"}}),r("v-select",{attrs:{items:e.deptsEnum,outlined:"",label:"Select Department"},model:{value:e.form.dept,callback:function(t){e.$set(e.form,"dept",t)},expression:"form.dept"}}),r("v-text-field",{attrs:{label:"Title",outlined:"",required:""},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),r("v-container",[r("v-flex",[r("v-btn",{attrs:{color:"rgb(0, 43, 92)",dark:""},on:{click:function(t){e.e6=2}}},[e._v("Continue")]),r("v-btn",{attrs:{text:""}},[e._v("Cancel")])],1)],1)],1),r("v-stepper-step",{attrs:{complete:e.e6>2,step:"2",editable:""}},[e._v("Enter some contact Info")]),r("v-stepper-content",{attrs:{step:"2"}},[r("v-card",{staticStyle:{"margin-bottom":"2rem"},attrs:{height:"400px"}},[r("v-text-field",{attrs:{label:"Enter Email",rules:e.emailRules,outlined:"",required:""},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}}),r("v-text-field",{attrs:{outlined:"",label:"Enter Phone",placeholder:"Enter 10 digits no dashes",required:""},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}}),r("v-text-field",{attrs:{label:"Office Location",placeholder:"e.g., 6J-109",outlined:"",required:""},model:{value:e.form.loc,callback:function(t){e.$set(e.form,"loc",t)},expression:"form.loc"}})],1),r("v-btn",{attrs:{color:"rgb(0, 43, 92)",dark:""},on:{click:function(t){e.e6=3}}},[e._v("Continue")]),r("v-btn",{attrs:{text:""}},[e._v("Cancel")])],1),r("v-stepper-step",{attrs:{complete:e.e6>3,step:"3",editable:""}},[e._v("Now for the good stuff.")]),r("v-stepper-content",{attrs:{step:"3"}},[r("v-card",{staticStyle:{"margin-bottom":"2rem"},attrs:{height:"100%"}},[r("v-row",[r("v-col",{attrs:{xs6:""}},[r("v-textarea",{attrs:{outlined:"",name:"input-7-4",label:"Personal Bio",height:"400px"},model:{value:e.form.bio,callback:function(t){e.$set(e.form,"bio",t)},expression:"form.bio"}})],1),r("v-col",{staticStyle:{display:"flex","flex-direction":"column"},attrs:{xs6:""}},[r("div",{staticClass:"upload"},[r("h4",{staticClass:"mb-2"},[e._v("Upload your image here")]),r("Upload",{on:{"set-imgURI":e.setImageURI}})],1),r("v-combobox",{attrs:{items:e.form.hobbies,label:"Hobbies",hint:"Please enter as many as you like",multiple:"",chips:""},model:{value:e.form.hobbies,callback:function(t){e.$set(e.form,"hobbies",t)},expression:"form.hobbies"}})],1)],1)],1),r("v-flex",{staticClass:"ml-2",attrs:{row:"","justify-space-around":""}},[r("v-btn",{attrs:{color:"success",dark:""},on:{click:e.onSubmit}},[e._v("Submit")]),r("v-btn",{attrs:{text:""}},[e._v("Cancel")]),r("v-btn",{staticClass:"mr-4",attrs:{color:"error"},on:{click:e.reset}},[e._v(" Reset Form ")])],1)],1)],1)],1)],1)],1)],1),r("v-col")],1)],1)},X=[],Z=(r("b0c0"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"upload"}},[r("file-pond",{ref:"pond",attrs:{name:"image","label-idle":"Drop files here...","allow-multiple":"false",server:"https://dfdirectory.azurewebsites.net/api/v1/azure-repo",files:e.myFiles},on:{init:e.handleFilePondInit,addfile:e.handleSuccess}})],1)}),ee=[],te=r("1501"),re=r.n(te),ae=(r("4ed3"),re()()),oe={name:"Upload",data:function(){return{myFiles:[]}},methods:{handleFilePondInit:function(){console.log("FilePond Initialized")},handleSuccess:function(e,t){e?console.log(e):(console.log(t),this.$emit("set-imgURI",t))}},components:{FilePond:ae}},ie=oe,se=Object(u["a"])(ie,Z,ee,!1,null,"e7994010",null),ne=se.exports,le={name:"newForm",components:{Upload:ne},data:function(){return{e6:1,valid:!0,form:{name:"",title:"",dept:null,loc:"",email:"",phone:"",rank:null,bio:"",img:"",hobbies:[],scope:null},error:!1,errorText:"",loading:!1,selectedFile:null,deptsEnum:["DF","DFAN","DFAS","DFB","DFBL","DFC","DFCE","DFCS","DFEC","DFEG","DFEI","DFME","DFENG","DFF","DFIP","DFH","DFK","DFL","DFLIB","DFM","DFMI","DFMS","DFP","DFPS","DFPY","DFR","DFS"],classYear:["2024","2023","2022","2021"],rankEnum:["Gen.","Lt. Gen.","Maj. Gen.","Brig. Gen.","Col.","Lt. Col.","Major","Captain","2d Lt","1st. Lt.","CMSAF","CCMS","First Sgt.","CMSgt.","SMSgt.","MSgt.","TSgt.","SSgt.","SrA.","A1C","Amn","Prof.","Assoc. Prof.","Asst. Prof.","Instr.","Dr.","Mr.","Ms.","Mrs.","Civ","Ctr"],category:["faculty","major"],emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/.+@.+\..+/.test(e)||"E-mail must be valid"}]}},methods:{reset:function(){this.$refs.form.reset()},setImageURI:function(e){this.selectedFile=e.file,console.log(this.selectedFile.name),this.form.img="https://dfimages01.blob.core.windows.net/dfdirectory/".concat(this.selectedFile.name)},onSubmit:function(){var e=this;return Object(C["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.loading=!0,r=e.form.scope,E.a.post("https://dfdirectory.azurewebsites.net/api/v1/".concat(r),e.form).then((function(t){console.log(t),e.loading=!1,e.form.name="",e.form.title="",e.form.email="",e.form.phone="",e.form.hobbies=[],e.form.dept=null,e.form.loc="",e.form.rank=null,e.form.bio="",e.form.img="",e.form.scope=null,e.selectedFile=null,e.$router.push({name:"Directory"})})).catch((function(t){e.loading=!1,e.error=!0,e.errorText=t}));case 3:case"end":return t.stop()}}),t)})))()}}},ce=le,ue=(r("6d68"),Object(u["a"])(ce,V,X,!1,null,"38c3aa86",null)),me=ue.exports,de=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-row",{attrs:{"no-gutters":""}},[r("v-col"),r("v-col",{attrs:{cols:"8"}},[r("v-layout",{staticClass:"mt-9"},[r("v-container",[r("v-card",[r("v-row",[r("v-col",{attrs:{cols:"auto"}},[e.editmode?r("v-flex",[r("v-container",[r("v-avatar",{staticClass:"mx-8",attrs:{size:"200"}},[r("img",{attrs:{src:e.active.img,alt:e.active.name}})]),r("v-btn",{staticClass:"mx-2",attrs:{fab:"",dark:"",small:"",absolute:"",top:"",left:"",color:"rgb(0, 43, 92)"},on:{click:e.toggleEdit}},[r("v-icon",{attrs:{dark:""}},[e._v("mdi-pencil")])],1)],1)],1):r("v-flex",[r("v-btn",{staticClass:"mx-2",attrs:{fab:"",dark:"",small:"",absolute:"",top:"",left:"",color:"rgb(0, 43, 92)"},on:{click:e.toggleEdit}},[r("v-icon",{attrs:{dark:""}},[e._v("cancel")])],1),r("v-container",{staticStyle:{"max-width":"200px"}},[r("Upload",{on:{"set-imgURI":e.setImageURI}}),r("small",[e._v("Drag or drop your image over the window or click the window to open up the file explorer")])],1)],1)],1),r("v-col",[r("v-row",[r("v-text-field",{staticClass:"pa-2",attrs:{filled:"",label:"Enter Full Name",required:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),r("v-select",{staticClass:"pa-2 pr-6",attrs:{items:e.rankEnum,filled:"",label:"Rank/Grade"},model:{value:e.form.rank,callback:function(t){e.$set(e.form,"rank",t)},expression:"form.rank"}})],1),r("v-row",[r("v-select",{staticClass:"pa-2",attrs:{items:e.deptsEnum,filled:"",label:"Select Department"},model:{value:e.form.dept,callback:function(t){e.$set(e.form,"dept",t)},expression:"form.dept"}}),r("v-text-field",{staticClass:"pa-2 pr-6",attrs:{label:"Title",filled:"",required:""},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1)],1)],1),r("v-row",[r("v-col",[r("v-flex",{staticClass:"pa-2 pl-4"},[r("v-text-field",{attrs:{label:"Enter Email",filled:"",required:""},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}}),r("v-text-field",{attrs:{filled:"",label:"Enter Phone",placeholder:"Enter 10 digits no dashes",required:""},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}}),r("v-text-field",{attrs:{label:"Office Location",placeholder:"e.g., 6J-109",filled:"",required:""},model:{value:e.form.loc,callback:function(t){e.$set(e.form,"loc",t)},expression:"form.loc"}}),r("v-combobox",{attrs:{items:e.form.hobbies,label:"Hobbies",hint:"Please enter as many as you like",filled:"",multiple:"",chips:""},model:{value:e.form.hobbies,callback:function(t){e.$set(e.form,"hobbies",t)},expression:"form.hobbies"}})],1)],1),r("v-col",[r("v-flex",{staticClass:"pa-2 pr-4"},[r("v-textarea",{attrs:{filled:"",name:"input-7-4",label:"Personal Bio",height:"350px"},model:{value:e.form.bio,callback:function(t){e.$set(e.form,"bio",t)},expression:"form.bio"}})],1)],1)],1),e.hasGallery?r("v-row",[r("v-flex",{attrs:{xs12:""}},[r("v-container",{staticClass:"mx-5 my-1"},[r("h1",[e._v(" "+e._s(e.active.name+"'s Image Gallery")+" ")])]),r("v-container",{staticClass:"mx-5 my-1"},[r("v-flex",[r("p",[e._v(" Do you want to replace this image gallery to your profile? ")]),r("v-switch",{model:{value:e.gallery,callback:function(t){e.gallery=t},expression:"gallery"}})],1)],1)],1),r("v-flex",{staticClass:"pa-5",attrs:{xs12:""}},e._l(e.active.multiImg,(function(t,a){return r("v-col",{key:a,staticClass:"d-flex child-flex",attrs:{cols:"4"}},[r("v-card",{staticClass:"d-flex",attrs:{flat:"",tile:""}},[r("v-img",{staticClass:"grey lighten-2",attrs:{src:t,"aspect-ratio":"1"},scopedSlots:e._u([{key:"placeholder",fn:function(){return[r("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[r("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}],null,!0)})],1)],1)})),1)],1):r("v-row",[r("v-flex",{attrs:{xs12:""}},[r("v-container",{staticClass:"ma-4",attrs:{row:""}},[r("v-flex",{staticClass:"mt-5",staticStyle:{"text-align":"center",width:"2rem","font-size":"1rem"}},[e._v(" Do you want to add an image gallery to your profile? ")]),r("v-flex",[r("v-switch",{model:{value:e.gallery,callback:function(t){e.gallery=t},expression:"gallery"}})],1)],1)],1)],1),e.gallery?r("v-row",[r("v-flex",[r("v-container",{staticClass:"mx-auto ma-2",staticStyle:{width:"80%"}},[r("p",[e._v(" Add images to the grey area below. Upload as many as you like up to 10. These images will then display in your profile page. ")])]),r("v-container",{staticClass:"mx-auto ma-2",staticStyle:{width:"80%"}},[r("multiUpload",{on:{"set-multiImgURI":e.setMultiImageURI}})],1)],1)],1):e._e(),r("v-row",[r("v-flex",{staticClass:"mx-5 mb-4"},[r("v-btn",{attrs:{block:"",color:"success",dark:""},on:{click:e.onSubmit}},[e._v("Submit")])],1)],1)],1)],1)],1)],1),r("v-col")],1)],1)},fe=[],ve=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"multiUpload"}},[r("file-pond",{ref:"pond",attrs:{name:"image","label-idle":"Drop files here...","allow-multiple":"true",server:"https://dfdirectory.azurewebsites.net/api/v1/azure-repo",files:e.myFiles},on:{init:e.handleFilePondInit,processfile:e.handleFile}})],1)},pe=[],he=re()(),ge={name:"multiUpload",data:function(){return{myFiles:[]}},methods:{handleFilePondInit:function(){console.log("FilePond Initialized")},handleFile:function(e,t){e?console.log(e,t):(console.log(t),this.$emit("set-multiImgURI",t))}},components:{FilePond:he}},be=ge,ye=Object(u["a"])(be,ve,pe,!1,null,"6a3805d6",null),xe=ye.exports,we={name:"editForm",props:["faculty","active"],components:{Upload:ne,multiUpload:xe},data:function(){return{editmode:!0,gallery:!1,form:{name:this.active.name,title:this.active.title,dept:this.active.dept,loc:this.active.loc,email:this.active.email,phone:this.active.phone,rank:this.active.rank,bio:this.active.bio,img:this.active.img,hobbies:this.active.hobbies,scope:this.active.scope,multiImg:[]},error:!1,errorText:"",loading:!1,selectedFile:null,deptsEnum:["DF","DFAN","DFAS","DFB","DFBL","DFC","DFCE","DFCS","DFEC","DFEG","DFEI","DFME","DFENG","DFF","DFIP","DFH","DFK","DFL","DFLIB","DFM","DFMI","DFMS","DFP","DFPS","DFPY","DFR","DFS"],classYear:["2024","2023","2022","2021"],rankEnum:["Gen.","Lt. Gen.","Maj. Gen.","Brig. Gen.","Col.","Lt. Col.","Major","Captain","2d Lt","1st. Lt.","CMSAF","CCMS","First Sgt.","CMSgt.","SMSgt.","MSgt.","TSgt.","SSgt.","SrA.","A1C","Amn","Prof.","Assoc. Prof.","Asst. Prof.","Instr.","Dr.","Mr.","Ms.","Mrs.","Civ","Ctr"],scope:["Faculty","Major"]}},methods:{setMultiImageURI:function(e){this.selectedFile=e.file,console.log(this.selectedFile.name);var t="https://dfimages01.blob.core.windows.net/dfdirectory/".concat(this.selectedFile.name);this.form.multiImg.push(t)},setImageURI:function(e){this.selectedFile=e.file,console.log(this.selectedFile.name),this.form.img="https://dfimages01.blob.core.windows.net/dfdirectory/".concat(this.selectedFile.name)},toggleEdit:function(){switch(this.editmode){case!0:this.editmode=!1;break;case!1:this.editmode=!0;break}},onSubmit:function(){var e=this;return Object(C["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.loading=!0,r=e.active._id,E.a.put("https://dfdirectory.azurewebsites.net/api/v1/faculty/".concat(r),e.form).then((function(t){console.log(t),e.loading=!1,e.form.name="",e.form.dept=null,e.form.loc="",e.form.rank=null,e.form.bio="",e.form.img="",e.selectedFile=null,e.multiImg=[],e.$router.push({name:"Directory"})})).catch((function(t){e.loading=!1,e.error=!0,e.errorText=t}));case 3:case"end":return t.stop()}}),t)})))()}},computed:{hasGallery:function(){return this.active.multiImg.length>0}}},_e=we,Fe=(r("1a03"),Object(u["a"])(_e,de,fe,!1,null,"9a81238a",null)),ke=Fe.exports,De=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card-wrapper"},[r("v-row",[r("v-col",{staticClass:"mx-auto",staticStyle:{"min-height":"100vh",width:"100%"},attrs:{cols:"10"}},[r("v-container",[r("v-row",[r("v-flex",{attrs:{xs12:""}},[r("v-text-field",{staticClass:"px-5 pt-2",attrs:{outlined:"",label:"Search name"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)],1),r("div",{staticClass:"text-center"},[r("v-pagination",{attrs:{length:e.pageCount,color:"#0333b2"},on:{next:function(e){this.currentPage++},previous:function(e){this.currentPage--}},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1),r("v-flex",{staticClass:"pa-5",staticStyle:{"min-width":"100",margin:"0 auto","align-items":"center"},attrs:{row:"",wrap:"","justify-center":""}},e._l(e.filteredData,(function(t){return r("v-card",{key:t.id,staticClass:"ma-5",attrs:{"max-width":"250"}},[r("v-list-item",[r("v-list-item-content",[r("v-list-item-title",{staticClass:"headline"},[r("small",{staticStyle:{"font-size":".8rem","letter-spacing":".3rem","text-transform":"uppercase"}},[e._v(e._s(t.rank))]),r("br"),e._v(" "+e._s(t.name))]),r("v-list-item-subtitle",[e._v(e._s(t.title))])],1)],1),r("v-img",{attrs:{src:t.img,height:"300"}}),r("v-list-item",{attrs:{"three-line":""}},[r("v-list-item-content",[r("v-list-item-title",[e._v(e._s(t.email))]),r("v-list-item-subtitle",[e._v(" "+e._s(t.phone)+" ")]),r("v-list-item-subtitle",[e._v(" "+e._s(t.loc)+" ")])],1)],1),r("v-card-actions",{staticStyle:{"justify-content":"center"}},[r("v-btn",{attrs:{tile:"",large:"",to:{name:"User",params:{id:t._id}}}},[r("v-icon",{staticClass:"mr-2",attrs:{color:"#0333b2"}},[e._v("launch")]),e._v(" See More ")],1)],1)],1)})),1)],1)],1)],1)],1)},Ce=[],Se=(r("caad"),r("fb6a"),r("d3b7"),r("ac1f"),r("25f0"),r("2532"),r("841c"),{name:"Card",props:{faculty:Array},data:function(){return{dept:this.$route.params.dept,perPage:5,currentPage:1,search:"",filtered:[]}},beforeRouteUpdate:function(e,t,r){console.log(e,t),this.dept=e.params.dept,r()},methods:{launchUser:function(e){this.$router.push({name:"User",params:{id:e}})}},computed:{pageCount:function(){var e=this.filteredData.length,t=this.perPage;return Math.ceil(e/t)},filteredData:function(){var e=this,t=this.faculty.filter((function(t){return t.dept===e.dept}));if(this.search.length>0){var r=t.filter((function(t){return t.name.toLowerCase().includes(e.search.toLowerCase())}));return r}var a=(this.currentPage-1)*this.perPage,o=a+this.perPage;return t.slice(a,o)},randomColor:function(){return"#"+(16777216+16777215*Math.random()).toString(16).substr(1,6)}}}),Ee=Se,$e=Object(u["a"])(Ee,De,Ce,!1,null,"d3588d92",null),Me=$e.exports,Ie=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"user"},[r("v-row",{attrs:{"no-gutter":""}},[r("v-col"),r("v-col",{staticClass:"mx-auto",attrs:{cols:"8"}},[r("v-layout",[r("v-flex",{attrs:{xs12:""}},[r("v-card",[r("v-btn",{staticClass:"mx-2",attrs:{fab:"",dark:"",small:"",absolute:"",right:"",color:"primary"},on:{click:e.goBack}},[r("v-icon",{attrs:{dark:""}},[e._v("keyboard_backspace")])],1),r("v-row",{staticClass:"justify-center"},[r("v-flex",[r("v-container",[r("v-img",{attrs:{src:e.user.img,alt:e.user.name,"aspect-ratio":"1",contain:""}})],1)],1),r("v-flex",[r("v-container",{staticStyle:{padding:"2rem"}},[r("small",{staticStyle:{"letter-spacing":".2rem","text-transform":"uppercase"}},[e._v(e._s(e.user.rank))]),r("h2",[e._v(e._s(e.user.name))]),r("h4",[e._v(e._s(e.user.title))]),r("br"),r("span",[e._v(e._s(e.user.email))]),r("br"),r("span",[e._v(e._s(e.user.phone))]),r("br"),r("span",[e._v(e._s(e.user.loc))])])],1)],1),r("v-row",[r("v-container",[r("div",{staticClass:"px-10",staticStyle:{"line-height":"2rem","letter-spacing":"1px","font-weight":"700"},domProps:{innerHTML:e._s(e.user.bio)}})])],1),r("v-row",{staticStyle:{padding:"1rem 0 2rem 2rem"}},e._l(e.user.hobbies,(function(t,a){return r("v-chip",{key:a,staticStyle:{margin:"0 .2rem"}},[e._v(" "+e._s(t)+" ")])})),1),r("v-row",[e.user.multiImg.length>0?r("v-container",[r("h1",{staticClass:"pl-5"},[e._v(e._s(e.user.name+"'s Gallery"))])]):e._e()],1),r("v-row",[e.user.multiImg.length>0?r("v-container",{attrs:{fluid:""}},[r("v-row",e._l(e.user.multiImg,(function(t,a){return r("v-col",{key:a,staticClass:"d-flex child-flex",attrs:{cols:"4"}},[r("v-card",{staticClass:"d-flex",attrs:{flat:"",tile:""}},[r("v-img",{staticClass:"grey lighten-2",attrs:{src:t,"aspect-ratio":"1"},scopedSlots:e._u([{key:"placeholder",fn:function(){return[r("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[r("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}],null,!0)})],1)],1)})),1)],1):e._e()],1)],1)],1)],1)],1),r("v-col")],1)],1)},Re=[],Pe={name:"User",props:{faculty:Array},data:function(){return{id:this.$route.params.id}},beforeRouteUpdate:function(e,t,r){console.log(e,t),this.id=e.params.id,r()},computed:{user:function(){var e=this,t=this.faculty.filter((function(t){return t._id===e.id}));return t[0]}},methods:{goBack:function(){this.$router.go(-1)},navigateto:function(){this.$router.push({name:"department",params:{dept:this.user.dept}})}}},Ae=Pe,Ue=(r("439a"),Object(u["a"])(Ae,Ie,Re,!1,null,"210c4259",null)),je=Ue.exports;a["default"].use(g["a"]);var Le=[{path:"/",name:"Home",component:F},{path:"/directory",component:R,children:[{path:"",name:"Directory",component:Q},{path:"user/:id",name:"User",component:je},{path:":dept",name:"department",component:Me},{path:"new",name:"newForm",component:me},{path:"edit",name:"editForm",component:ke}]},{path:"/register",name:"register",component:O},{path:"/login",name:"login",component:N}],Oe=new g["a"]({mode:"history",base:"/",routes:Le}),qe=Oe,Be=r("ce5b"),Ge=r.n(Be);r("bf40");a["default"].use(Ge.a);var Te={},ze=new Ge.a(Te),Ne=r("5a75"),He=r.n(Ne),Ye=(r("c789"),r("2f62"));a["default"].use(Ye["a"]);var Je=new Ye["a"].Store({state:{},mutations:{},actions:{},modules:{}});a["default"].use(He.a,{auth:{clientId:"1842986c-51df-4ca7-96d7-58a267b19a04",postLogoutRedirectUri:"https://dfdirectory.azurewebsites.net/",redirectUri:"https://dfdirectory.azurewebsites.net/",navigateToLoginRequestUrl:!1},framework:{globalMixin:!0}}),a["default"].config.productionTip=!1,new a["default"]({router:qe,vuetify:ze,store:Je,render:function(e){return e(h)}}).$mount("#app")},"6d68":function(e,t,r){"use strict";var a=r("bb9c"),o=r.n(a);o.a},"74ed":function(e,t,r){"use strict";var a=r("d5bf"),o=r.n(a);o.a},"85ec":function(e,t,r){},bb9c:function(e,t,r){},d5bf:function(e,t,r){}});
//# sourceMappingURL=app.6b1bae62.js.map