webpackJsonp([4],{191:function(t,a,e){"use strict";function n(t){e(353)}Object.defineProperty(a,"__esModule",{value:!0});var i=e(209),s=e(355),o=e(6),d=n,r=o(i.a,s.a,!1,d,"data-v-4d3ed805",null);a.default=r.exports},209:function(t,a,e){"use strict";var n=e(75);a.a={name:"LoginPage",data:function(){return{passwordHidden:!0,credentials:{username:"user@user.com",password:"password"},error:"",loading:!1}},methods:{login:function(){var t=this;this.loading=!0;var a={username:this.credentials.username,password:this.credentials.password};n.a.fakeLogin(a,"dashboard").then(function(a){t.loading=!1})}}}},210:function(t,a,e){t.exports=e.p+"static/img/logo.785f3ed.png"},353:function(t,a,e){var n=e(354);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e(5)("1124638f",n,!0,{})},354:function(t,a,e){a=t.exports=e(4)(!0),a.push([t.i,".my-login[data-v-4d3ed805]{background-color:#e6e6e6}.my-login__logo[data-v-4d3ed805]{max-width:46px;padding-left:12px;padding-top:4px}.my-login__logo-name img[data-v-4d3ed805]{max-width:200px;width:100%}.my-login__subheading[data-v-4d3ed805]{color:#fff;padding-top:10px;padding-bottom:20px}.my-login__card[data-v-4d3ed805]{max-width:370px;margin:0 auto}.my-login__card-actions[data-v-4d3ed805],.my-login__card-title[data-v-4d3ed805]{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}","",{version:3,sources:["/Users/baidyanath/Documents/GitHub/iJoin/src/features/login/main.vue"],names:[],mappings:"AACA,2BACE,wBAA0B,CAC3B,AACD,iCACE,eAAgB,AAChB,kBAAmB,AACnB,eAAiB,CAClB,AACD,0CACE,gBAAiB,AACjB,UAAY,CACb,AACD,uCACE,WAAY,AACZ,iBAAkB,AAClB,mBAAqB,CACtB,AACD,iCACE,gBAAiB,AACjB,aAAe,CAChB,AAMD,gFACE,wBAAyB,AACrB,qBAAsB,AAClB,sBAAwB,CACjC",file:"main.vue",sourcesContent:["\n.my-login[data-v-4d3ed805] {\n  background-color: #e6e6e6;\n}\n.my-login__logo[data-v-4d3ed805] {\n  max-width: 46px;\n  padding-left: 12px;\n  padding-top: 4px;\n}\n.my-login__logo-name img[data-v-4d3ed805] {\n  max-width: 200px;\n  width: 100%;\n}\n.my-login__subheading[data-v-4d3ed805] {\n  color: #fff;\n  padding-top: 10px;\n  padding-bottom: 20px;\n}\n.my-login__card[data-v-4d3ed805] {\n  max-width: 370px;\n  margin: 0 auto;\n}\n.my-login__card-title[data-v-4d3ed805] {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.my-login__card-actions[data-v-4d3ed805] {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}"],sourceRoot:""}])},355:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("v-container",{staticClass:"my-login",attrs:{fluid:"fluid","fill-height":"fill-height"}},[n("v-toolbar",{attrs:{color:"error",flat:"flat",dark:"dark",fixed:"fixed",app:"app",dense:"dense"}},[n("v-btn",{attrs:{icon:"icon"}},[n("img",{staticClass:"my-login__logo",attrs:{src:e(210),alt:"iJoin Logo"}})]),n("v-spacer")],1),n("v-layout",{attrs:{"justify-center":"justify-center","align-center":"align-center"}},[n("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"xs12",lg6:"lg6"}},[n("v-layout",{attrs:{row:"row",wrap:"wrap"}},[n("v-flex",{attrs:{xs12:"xs12"}},[n("div",{staticClass:"my-login__logo-name"},[n("img",{attrs:{src:e(210),alt:"iJoin"}})])]),n("v-flex",{attrs:{xs12:"xs12"}},[n("div",{staticClass:"my-login__subheading subheading"},[t._v("LOGIN")])]),n("v-flex",{attrs:{xs12:"xs12"}},[n("v-card",{staticClass:"my-login__card"},[n("v-card-title",{staticClass:"my-login__card-title",attrs:{"primary-title":"primary-title"}},[n("v-avatar",{attrs:{size:100}},[n("img",{attrs:{src:e(77),alt:"Avatar"}})])],1),n("v-card-text",[n("v-form",[n("v-text-field",{attrs:{label:"E-mail",required:"required"},model:{value:t.credentials.username,callback:function(a){t.$set(t.credentials,"username",a)},expression:"credentials.username"}}),n("v-text-field",{attrs:{label:"Password",hint:"At least 8 characters",min:"8","append-icon":t.passwordHidden?"visibility":"visibility_off","append-icon-cb":function(){return t.passwordHidden=!t.passwordHidden},type:t.passwordHidden?"password":"text",counter:""},model:{value:t.credentials.password,callback:function(a){t.$set(t.credentials,"password",a)},expression:"credentials.password"}})],1)],1),n("v-card-actions",{staticClass:"my-login__card-actions"},[n("v-btn",{attrs:{loading:t.loading,block:"block",color:"accent",dark:"dark"},on:{click:function(a){t.login()}}},[t._v("Login")])],1)],1)],1)],1)],1)],1)],1)},i=[],s={render:n,staticRenderFns:i};a.a=s}});
//# sourceMappingURL=login.5fb7cab2311919fd8ae5.js.map