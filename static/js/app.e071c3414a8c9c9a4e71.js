webpackJsonp([5],{0:function(e,n,t){t("j1ja"),e.exports=t("NHnr")},"4tms":function(e,n){var t=32;function o(){var e=document.documentElement.clientWidth;if(e>1366){var n=e/1366;document.documentElement.style.fontSize=t*Math.min(n,1)+"px"}else{document.documentElement.style.fontSize=t*Math.min(1,1)+"px"}}o(),window.onresize=function(){o()}},Ja5F:function(e,n){},NHnr:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o={};t.d(o,"testGet",function(){return I}),t.d(o,"login",function(){return P}),t.d(o,"register",function(){return R}),t.d(o,"checkDevice",function(){return S}),t.d(o,"saveUser",function(){return x}),t.d(o,"addDevice",function(){return T}),t.d(o,"removeDevice",function(){return w}),t.d(o,"getLastDevice",function(){return A}),t.d(o,"getDeviceHistory",function(){return y}),t.d(o,"getHealthData",function(){return H}),t.d(o,"sendCommand",function(){return M}),t.d(o,"getCommandList",function(){return z}),t.d(o,"getHistoryExcdep",function(){return b}),t.d(o,"createGeofence",function(){return j}),t.d(o,"getGeofenceList",function(){return O}),t.d(o,"editGeofence",function(){return W}),t.d(o,"deleteGeofence",function(){return $}),t.d(o,"getAddress",function(){return q}),t.d(o,"getUserInfo",function(){return B}),t.d(o,"editUserInfo",function(){return F}),t.d(o,"changePassword",function(){return N}),t.d(o,"savePersonProfile",function(){return _}),t.d(o,"getPersonProfile",function(){return J}),t.d(o,"setEventRemind",function(){return K}),t.d(o,"getEventRemindList",function(){return V}),t.d(o,"deleteEventRemind",function(){return Y}),t.d(o,"getBTInfo",function(){return Z});var r={};t.d(r,"getCookie",function(){return Q}),t.d(r,"setCookie",function(){return X}),t.d(r,"delCookie",function(){return ee});var i=t("7+uW"),u={render:function(){var e=this.$createElement,n=this._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]};var c=t("VU/8")({name:"App",watch:{$route:function(e,n){}},created:function(){}},u,!1,function(e){t("Ja5F")},null,null).exports,s=t("/ocq");i.default.use(s.a);var a=new s.a({routes:[{path:"/",name:"login",component:function(){return t.e(1).then(t.bind(null,"ptcf"))}},{path:"/main",name:"main",component:function(){return t.e(0).then(t.bind(null,"hO3H"))},meta:{role:"ADMIN"},children:[{path:"/",name:"content",component:function(){return t.e(3).then(t.bind(null,"euSg"))},children:[{path:"/",name:"member",component:function(){return t.e(2).then(t.bind(null,"2uxp"))}}]}]}]}),d=t("zL8q"),f=t.n(d),p=(t("tvR6"),t("dAEq")),m=t.n(p),l=t("//Fk"),v=t.n(l),g=t("mtWM"),h=t.n(g),G=t("mw3O"),U=t.n(G),D=t("NYxO");i.default.use(D.a);var E=new D.a.Store({state:{token:null,UserId:null},getters:{token:function(e){return e.token},user:function(e){return e.user}},mutations:{getToken:function(e,n){e.token=n},getUserId:function(e,n){e.UserId=n}},actions:{}});h.a.interceptors.request.use(function(e){return"post"===e.method&&(-1===e.url.indexOf("/User/Login")&&(e.data.Token=E.getters.token),e.data=U.a.stringify(e.data,{indices:!1})),e},function(e){return v.a.reject(e)}),h.a.interceptors.response.use(function(e){return new v.a(function(n,t){e.data&&(e.config.url.indexOf("/User/Login")>-1&&e.data.AccessToken&&(E.commit("getToken",e.data.AccessToken),E.commit("getUserId",e.data.Item.UserId),localStorage.setItem("token",e.data.AccessToken),localStorage.setItem("UserId",e.data.Item.UserId)),n(e.data))})},function(e){console.log(e.response),d.Message.error("调用失败")});var C=h.a,L="http://59.110.140.92:10502",k={Login:L+"/api/User/Login",Register:L+"/api/User/Register",CheckDevice:L+"/api/Device/CheckDevice/",SaveUserGroup:L+"/api/Group/SaveUserGroup",AddDeviceToUserGroup:L+"/api/Device/AddDeviceToUserGroup/",RemoveDevice:L+"/api/AuthShare/RemoveShare",PersonDeviceList:L+"/api/Device/PersonDeviceList",History:L+"/api/Location/History",Health:L+"/api/Health/GetHealth",SendCommand:L+"/api/Command/SendCommand",CommandList:L+"/api/Command/CommandList",ExcdeptionListWhitoutCode:L+"/api/ExceptionMessage/ExcdeptionListWhitoutCode",CreateGeofence:L+"/api/Geofence/CreateGeofence",GeofenceList:L+"/api/Geofence/GeofenceList",EditGeofence:L+"/api/Geofence/EditGeofence",DeleteGeofence:L+"/api/Geofence/DeleteGeofence",Address:L+"/api/Location/Address",UserInfo:L+"/api/User/UserInfo",EditUserInfo:L+"/api/User/EditUserInfo",ChangePassword:L+"/api/User/ChangePassword",SavePersonProfile:L+"/api/Person/SavePersonProfile",GetPersonProfile:L+"/api/Person/GetPersonProfile",SetEventRemind:L+"/api/Command/SetEventRemind",EventRemindList:L+"/api/Command/EventRemindList",DeleteEventRemind:L+"/api/Command/DeleteEventRemind",BTInfo:L+"/api/Location/BTInfo"},I=function(e,n){return C.get(e,n)},P=function(e){return C.post(k.Login,e)},R=function(e){return C.post(k.Register,e)},S=function(e){return C.post(k.CheckDevice,e)},x=function(e){return C.post(k.SaveUserGroup,e)},T=function(e){return C.post(k.AddDeviceToUserGroup,e)},w=function(e){return C.post(k.RemoveDevice,e)},A=function(e){return C.post(k.PersonDeviceList,e)},y=function(e){return C.post(k.History,e)},H=function(e){return C.post(k.Health,e)},M=function(e){return C.post(k.SendCommand,e)},z=function(e){return C.post(k.CommandList,e)},b=function(e){return C.post(k.ExcdeptionListWhitoutCode,e)},j=function(e){return C.post(k.CreateGeofence,e)},O=function(e){return C.post(k.GeofenceList,e)},W=function(e){return C.post(k.EditGeofence,e)},$=function(e){return C.post(k.DeleteGeofence,e)},q=function(e){return C.post(k.Address,e)},B=function(e){return C.post(k.UserInfo,e)},F=function(e){return C.post(k.EditUserInfo,e)},N=function(e){return C.post(k.ChangePassword,e)},_=function(e){return C.post(k.SavePersonProfile,e)},J=function(e){return C.post(k.GetPersonProfile,e)},K=function(e){return C.post(k.SetEventRemind,e)},V=function(e){return C.post(k.EventRemindList,e)},Y=function(e){return C.post(k.DeleteEventRemind,e)},Z=function(e){return C.post(k.BTInfo,e)};function Q(e){var n=new RegExp("(^| )"+e+"=([^;]*)(;|$)"),t=document.cookie.match(n);return t?t[2]:null}function X(e,n,t){var o=new Date;o.setDate(o.getDate()+t),document.cookie=e+"="+escape(n)+(null==t?"":";expires="+o.toGMTString())}function ee(e){var n=new Date;n.setTime(n.getTime()-1);var t=Q(e);null!=t&&(document.cookie=e+"="+t+";expires="+n.toGMTString())}t("vryz"),t("4tms");i.default.use(f.a,{size:"small",zIndex:3e3}),i.default.config.productionTip=!1,i.default.prototype.$api=o,i.default.prototype.$cookie=r,i.default.use(m.a,{ak:"l7Gajllh0UxKe8jIE739U4Zx5Afrs3Ki"}),new i.default({el:"#app",router:a,store:E,components:{App:c},template:"<App/>"})},tvR6:function(e,n){},vryz:function(e,n){}},[0]);
//# sourceMappingURL=app.e071c3414a8c9c9a4e71.js.map