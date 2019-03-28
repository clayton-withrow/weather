(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,n){e.exports=n(40)},29:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(21),c=n.n(i),o=(n(29),n(11)),l=n(10),u=function(){return r.a.createElement("header",null,r.a.createElement("ul",{className:"main-nav"},r.a.createElement("li",null,r.a.createElement(o.b,{exact:!0,to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(o.b,{exact:!0,to:"/Current"},"Current")),r.a.createElement("li",null,r.a.createElement(o.b,{path:!0,to:"/Search"},"Search")),r.a.createElement("li",null,r.a.createElement(o.b,{path:!0,to:"/Contact"},"Contact"))))},s=n(5),m=n(6),h=n(8),d=n(7),p=n(9),y=function(e){function t(){return Object(s.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{align:"center"},"Weather App"),r.a.createElement("h3",{align:"center"},"Code Louisville - JavaScript/React Project"))}}]),t}(r.a.Component),v=n(13),f=n.n(v),b=n(14);var E=function(e){return r.a.createElement("div",null,e.city&&e.country&&r.a.createElement("p",null,"Location: ",e.city,", ",e.country),e.temperature&&r.a.createElement("p",null,"Temperature: ",(t=e.temperature,Math.round(9*(t-273.15)/5+32))),e.humidity&&r.a.createElement("p",null,"Humidity: ",e.humidity),e.description&&r.a.createElement("p",null,"Conditions: ",e.description),e.error&&r.a.createElement("p",null,e.error));var t},g=function(e){return r.a.createElement("button",{align:"center",onClick:e.getWeather,disabled:e.loading},e.loading?"Please Allow Access to Location":"Click for Weather in current Location")},w="77770f5e783b278efb85bb2f676b854d",j=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).getLocation=function(){return new Promise(function(e,t){navigator.geolocation.getCurrentPosition(e,t)})},n.getWeather=function(){var e=Object(b.a)(f.a.mark(function e(t){var a,r;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://api.openweathermap.org/data/2.5/weather?lat=".concat(n.state.latitude,"&lon=").concat(n.state.longitude,"&APPID=").concat(w));case 2:return a=e.sent,e.next=5,a.json();case 5:r=e.sent,n.setState({temperature:r.main.temp,city:r.name,country:r.sys.country,humidity:r.main.humidity,description:r.weather[0].description,error:""});case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.state={temperature:void 0,city:void 0,country:void 0,humidity:void 0,description:void 0,error:void 0,loading:!0},n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){var e=this;this.getLocation().then(function(t){var n=t.coords.latitude,a=t.coords.longitude;e.setState({latitude:n,longitude:a,loading:!1})})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(g,{getWeather:this.getWeather,loading:this.state.loading}),r.a.createElement(E,{temperature:this.state.temperature,city:this.state.city,country:this.state.country,humidity:this.state.humidity,description:this.state.description,error:this.state.error}))}}]),t}(r.a.Component),O=function(e){return r.a.createElement("form",{onSubmit:e.getWeather},r.a.createElement("input",{type:"text",name:"city",placeholder:"City"}),r.a.createElement("input",{type:"text",name:"country",placeholder:"Country"}),r.a.createElement("button",null,"Submit"))},C="77770f5e783b278efb85bb2f676b854d",k=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={temperature:void 0,city:void 0,country:void 0,humidity:void 0,description:void 0,error:void 0},n.getWeather=function(){var e=Object(b.a)(f.a.mark(function e(t){var a,r,i,c;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=t.target.elements.city.value,r=t.target.elements.country.value,e.next=5,fetch("http://api.openweathermap.org/data/2.5/weather?q=".concat(a,",").concat(r,"&APPID=").concat(C));case 5:if(i=e.sent,!a||!r){e.next=14;break}return e.next=9,i.json();case 9:c=e.sent,console.log(c),n.setState({temperature:c.main.temp,city:c.name,country:c.sys.country,humidity:c.main.humidity,description:c.weather[0].description,error:""}),e.next=15;break;case 14:n.setState({temperature:void 0,city:void 0,country:void 0,humidity:void 0,description:void 0,error:"Please enter values."});case 15:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(O,{getWeather:this.getWeather}),r.a.createElement(E,{temperature:this.state.temperature,city:this.state.city,country:this.state.country,humidity:this.state.humidity,description:this.state.description,error:this.state.error}))}}]),t}(r.a.Component),x=function(e){function t(){return Object(s.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{align:"center"},"Clayton Withrow"),r.a.createElement("h1",{align:"center"},r.a.createElement("a",{href:"mailto: cwithrow@gmail.com"},"cwithrow@gmail.com")),r.a.createElement("h1",{align:"center"},r.a.createElement("a",{href:"https://github.com/clayton-withrow"},"Github")),r.a.createElement("h1",{align:"center"},r.a.createElement("a",{href:"https://www.linkedin.com/in/clayton-withrow/"},"LinkedIn")))}}]),t}(r.a.Component),W=function(){return r.a.createElement(o.a,null,r.a.createElement("div",{className:"container"},r.a.createElement(u,null),r.a.createElement(l.a,{exact:!0,path:"/",component:y}),r.a.createElement(l.a,{path:"/Current",component:j}),r.a.createElement(l.a,{path:"/Search",component:k}),r.a.createElement(l.a,{path:"/Contact",component:x})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,1,2]]]);
//# sourceMappingURL=main.2f16378f.chunk.js.map