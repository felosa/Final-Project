(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,t,n){e.exports=n(66)},37:function(e,t,n){},38:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(27),s=n.n(l),o=(n(37),n(6)),u=n(8),c=n(10),i=n(9),h=n(11),m=(n(38),n(13)),g=n(28),p=n(29),d=n.n(p),f=function e(){var t=this;Object(o.a)(this,e),this.signup=function(e,n,a,r,l,s,o){return t.service.post("/signup",{username:e,password:n,lang:a,country:r,description:l,genre:s,year:o}).then(function(e){return e.data}).catch(function(e){return console.error(e)})},this.login=function(e,n){return console.log(e,n),t.service.post("/login",{username:e,password:n}).then(function(e){return e.data}).catch(function(e){return console.error(e)})},this.loggedin=function(){return t.service.get("/currentUser").then(function(e){return e.data})},this.logout=function(){return t.service.get("/logout").then(function(e){return e.data})},this.service=d.a.create({baseURL:"".concat("\u200bhttps://travelershare.herokuapp.com/api","/auth"),withCredentials:!0})},v=n(7),b=n(12),E=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(c.a)(this,Object(i.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=n.state.user,a=t.username,r=t.password,l=t.lang,s=t.country,o=t.description,u=t.genre,c=t.year;console.log(a,r),n.service.signup(a,r,l,s,o,u,c).then(function(){console.log(a),n.setState({username:"",password:"",lang:"",country:"",description:"",genre:"",year:1990,redirect:!0})}).catch(function(e){return console.log(e)})},n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState({user:Object(g.a)({},n.state.user,Object(m.a)({},a,r))})},n.state={user:{username:"",password:"",lang:"",country:"",description:"",genre:"",year:1990,redirect:!1}},n.service=new f,n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return this.state.redirect?r.a.createElement(b.a,{to:"/login"}):r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("label",null,"Username:"),r.a.createElement("input",{type:"text",name:"username",value:this.state.username,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",null,"Password:"),r.a.createElement("input",{type:"password",name:"password",value:this.state.password,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",null,"Languaje:"),r.a.createElement("input",{type:"text",name:"lang",value:this.state.lang,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",null,"Description:"),r.a.createElement("input",{type:"text",name:"description",value:this.state.description,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",null,"Country:"),r.a.createElement("input",{type:"text",name:"country",value:this.state.country,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",null,"Genre:"),r.a.createElement("input",{type:"text",name:"genre",value:this.state.genre,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",null,"Year:"),r.a.createElement("input",{type:"number",name:"year",value:this.state.year,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"submit",value:"Signup"})),r.a.createElement("p",null,"Already have account?",r.a.createElement(v.b,{to:"/login"}," Login")))}}]),t}(a.Component),w=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(c.a)(this,Object(i.a)(t).call(this,e))).state={loggedInUser:null},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("main",null,r.a.createElement("header",{className:"profile-header text-center p-3 pt-5"},r.a.createElement("div",{className:"user-greeting pt-5"},r.a.createElement("h2",null,r.a.createElement("span",null,"Hello, this is your profile"))))))}}]),t}(a.Component),y=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(c.a)(this,Object(i.a)(t).call(this,e))).handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(m.a)({},a,r))},n.state={username:"",password:"",error:"",redirect:!1},n.service=new f,n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"handleFormSubmit",value:function(e){var t=this;e.preventDefault();var n=this.state.username,a=this.state.password;this.service.login(n,a).then(function(e){console.log(e),console.log(t.props),e?t.setState({redirect:!0,username:"",password:""},function(){return t.props.setUser(e)}):t.setState({username:"",password:""})})}},{key:"render",value:function(){var e=this;return this.state.redirect?r.a.createElement(b.a,{to:"/profile"}):r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(t){return e.handleFormSubmit(t)}},r.a.createElement("label",null,"Username:"),r.a.createElement("input",{type:"text",name:"username",value:this.state.username,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("label",null,"Password:"),r.a.createElement("input",{type:"password",name:"password",value:this.state.password,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"submit",value:"Login"})),r.a.createElement("p",null,"Don't have account?",r.a.createElement(v.b,{to:"/signup"}," Signup")))}}]),t}(a.Component),C=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(c.a)(this,Object(i.a)(t).call(this,e))).fetchUser=function(){n.service.loggedin().then(function(e){console.log(e),n.setState({loggedInUser:e})}).catch(function(e){return n.setState({loggedInUser:!1})})},n.setTheUser=function(e){n.setState({loggedInUser:e})},n.state={loggedInUser:null},n.service=new f,n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return this.state.loggedInUser?r.a.createElement("div",null,r.a.createElement("p",null,"estas logueado"),r.a.createElement(b.d,null,r.a.createElement(b.b,{user:this.state.loggedInUser,exact:!0,path:"/profile",component:w}))):r.a.createElement("div",null,r.a.createElement("p",null,"no estas logueado"),r.a.createElement(b.d,null,r.a.createElement(b.b,{exact:!0,path:"/signup",render:function(){return r.a.createElement(E,{setUser:e.setTheUser,userInSession:e.state.loggedInUser})}}),r.a.createElement(b.b,{exact:!0,path:"/login",render:function(){return r.a.createElement(y,{setUser:e.setTheUser,userInSession:e.state.loggedInUser})}})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(v.a,null,r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[32,1,2]]]);
//# sourceMappingURL=main.7c0ad38c.chunk.js.map