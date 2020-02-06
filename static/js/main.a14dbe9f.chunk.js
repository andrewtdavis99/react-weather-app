(this["webpackJsonpreact-weather-app"]=this["webpackJsonpreact-weather-app"]||[]).push([[0],{10:function(e,t,a){e.exports=a(21)},15:function(e,t,a){},17:function(e,t,a){},20:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),s=a.n(c),i=(a(15),a(1)),o=a.n(i),l=a(4),m=a(5),h=a(6),u=a(8),p=a(7),d=a(9);a(17),a(18);var w=function(e){return r.a.createElement("div",{className:"container text-warning"},r.a.createElement("div",{className:"cards pt-4"},r.a.createElement("h1",null,e.city),r.a.createElement("h5",{className:"py-4"},r.a.createElement("i",{className:"wi ".concat(e.weatherIcon," display-1")})),e.temp_celsius?r.a.createElement("h1",{className:"py-2"},e.temp_celsius,"\xb0"):null,function(e,t){if(e&&t)return r.a.createElement("h3",null,r.a.createElement("span",{className:"px-4"},e,"\xb0"),r.a.createElement("span",{className:"px-4"},t,"\xb0"))}(e.temp_min,e.temp_max),r.a.createElement("h4",{className:"py-3"},e.description)))};a(19),a(20);var f=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",null,e.error?r.a.createElement("div",{className:"alert alert-danger mx-5",role:"alert"},"Please Enter City and Country"):null),r.a.createElement("form",{onSubmit:e.loadWeather},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3 offset-md-2"},r.a.createElement("input",{type:"text",className:"form-control",name:"city",autoComplete:"off",placeholder:"city"})),r.a.createElement("div",{className:"col-md-3"},r.a.createElement("input",{type:"text",className:"form-control",name:"country",autoComplete:"off",placeholder:"country"})),r.a.createElement("div",{className:"col-md-3 mt-md-0 text-md-left"},r.a.createElement("button",{className:"btn btn-warning"},"Get Weather")))))},v=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(u.a)(this,Object(p.a)(t).call(this))).getWeather=function(){var t=Object(l.a)(o.a.mark((function t(a){var n,r,c,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),n=a.target.elements.city.value,r=a.target.elements.country.value,!n||!r){t.next=15;break}return t.next=6,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(n,",").concat(r,",uk&appid=").concat("57de46e6eebd17855f92c348aef7147a"));case 6:return c=t.sent,t.next=9,c.json();case 9:s=t.sent,console.log(s),e.setState({city:"".concat(s.name,", ").concat(s.sys.country),celsius:e.calCalsius(s.main.temp),temp_min:e.calCalsius(s.main.temp_min),temp_max:e.calCalsius(s.main.temp_max),description:s.weather[0].description,error:!1}),e.get_WeatherIcon(e.weatherIcon,s.weather[0].id),t.next=16;break;case 15:e.setState({error:!0});case 16:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.state={city:void 0,country:void 0,icon:void 0,main:void 0,celsius:void 0,temp_max:void 0,temp_min:void 0,description:"",error:!1},e.weatherIcon={Thunderstorm:"wi-thunderstorm",Drizzle:"wi-sleet",Rain:"wi-storm-showers",Snow:"wi-snow",Atmosphere:"wi-fog",Clear:"wi-day-sunny",Clouds:"wi-day-fog"},e}return Object(d.a)(t,e),Object(h.a)(t,[{key:"calCalsius",value:function(e){return Math.floor(e-273.15)}},{key:"get_WeatherIcon",value:function(e,t){switch(!0){case t>=200&&t<=232:this.setState({icon:this/this.weatherIcon.Thunderstorm});break;case t>=300&&t<=331:this.setState({icon:this.weatherIcon.Drizzle});break;case t>=500&&t<=531:this.setState({icon:this.weatherIcon.Rain});break;case t>=600&&t<=622:this.setState({icon:this.weatherIcon.Snow});break;case t>=701&&t<=781:this.setState({icon:this.weatherIcon.Atmosphere});break;case 800===t:this.setState({icon:this.weatherIcon.Clear});break;case t>=801&&t<=804:this.setState({icon:this.weatherIcon.Clouds});break;default:this.setState({Icon:this.weatherIcon.Clouds})}}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f,{loadWeather:this.getWeather,error:this.state.error}),r.a.createElement(w,{city:this.state.city,country:this.state.country,temp_celsius:this.state.celsius,temp_min:this.state.temp_min,temp_max:this.state.temp_max,description:this.state.description,weatherIcon:this.state.icon}))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.a14dbe9f.chunk.js.map