(this["webpackJsonpreact-frontend"]=this["webpackJsonpreact-frontend"]||[]).push([[0],{102:function(e,t,n){},103:function(e,t,n){e.exports=n.p+"media/logo.25bf045c.svg"},104:function(e,t,n){},227:function(e,t,n){"use strict";n.r(t);var a=n(3),o=n.n(a),r=n(90),i=n.n(r),c=(n(102),n(91)),s=n(92),l=n(95),u=n(93),d=n(96),m=(n(103),n(104),n(94)),h=(window.location.origin,function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={error:null,isLoaded:!1,data:[]},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("http://127.0.0.1:3000/api/crimes").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,data:t})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){var e=this.state,t=e.error,n=e.isLoaded,a=e.data;return t?o.a.createElement("div",null,"Error: ",t.message):n?o.a.createElement("div",{className:"App"},o.a.createElement(m.BarChart,{data:[{x:"A",y:20},{x:"B",y:30},{x:"C",y:40},{x:"D",y:20},{x:"E",y:40},{x:"F",y:25},{x:"G",y:5}]}),o.a.createElement("p",null,"My Token = ",window.token),o.a.createElement("ul",null,a.map((function(e){return o.a.createElement("li",{key:e.post},e.crimedate," ",e.crimetime)})))):o.a.createElement("div",null,"Loading...")}}]),t}(o.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},97:function(e,t,n){e.exports=n(227)}},[[97,1,2]]]);
//# sourceMappingURL=main.55257687.chunk.js.map