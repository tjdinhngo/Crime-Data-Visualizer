(this["webpackJsonpreact-frontend"]=this["webpackJsonpreact-frontend"]||[]).push([[0],{115:function(e,t,n){e.exports=n(263)},120:function(e,t,n){},121:function(e,t,n){e.exports=n.p+"media/logo.25bf045c.svg"},122:function(e,t,n){},263:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(77),i=n.n(o),c=(n(120),n(109)),l=n(110),s=n(113),d=n(111),u=n(114),m=(n(121),n(122),n(123),n(31)),h=function(e){var t=e.data.map((function(e){return{x:e.crimetime,y:e.crimetime.length}}));return r.a.createElement(m.e,{xType:"ordinal",xDistance:100,width:1e3,height:500},r.a.createElement(m.c,null),r.a.createElement(m.a,null),r.a.createElement(m.d,{title:"Period of time(Date and time)"}),r.a.createElement(m.f,{title:"Number of Crimes"}),r.a.createElement(m.b,{data:t,style:{stroke:"violet",strokeWidth:3}}))},f=(window.location.origin,function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={error:null,isLoaded:!1,data:[]},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("http://127.0.0.1:3000/api/crimes").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,data:t})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){var e=this.state,t=e.error,n=e.isLoaded,a=e.data;return t?r.a.createElement("div",null,"Error: ",t.message):n?r.a.createElement("div",{className:"App"},r.a.createElement(h,{data:a})):r.a.createElement("div",null,"Loading...")}}]),t}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[115,1,2]]]);
//# sourceMappingURL=main.d1d7e372.chunk.js.map