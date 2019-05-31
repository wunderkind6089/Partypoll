(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){e.exports=a(24)},21:function(e,t,a){},22:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(12),c=a.n(s),o=(a(11),a(8)),l=a(13),i=a(14),u={angular:0,react:0,vuejs:0},h=(a(21),a(1)),g=a(2),m=a(4),v=a(3),d=a(5),p=(a(7),function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(m.a)(this,Object(v.a)(t).call(this))).state={date:new Date},e}return Object(d.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"tr"},r.a.createElement("h6",{className:"light-red"}," Poll Start: ",this.state.date.toLocaleTimeString()))}}]),t}(n.Component)),b=function(){return{type:"VOTE_ANGULAR"}},E=function(){return{type:"VOTE_REACT"}},j=function(){return{type:"VOTE_VUEJS"}},f=(a(22),function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(m.a)(this,Object(v.a)(t).call(this,e))).handleVoteAngular=function(){a.store.dispatch(b())},a.handleVoteReact=function(){a.store.dispatch(E())},a.handleVoteVueJs=function(){a.store.dispatch(j())},a.store=a.props.store,a}return Object(d.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"jumbotron pointer",style:{textAlign:"center"}},r.a.createElement("img",{src:"http://newsexpressngr.com/images/news/PVCs_photo.jpg",height:"96",alt:"PErmanent voters Card"}),r.a.createElement("h2",null,"Nigeria Parties Poll 2019?"),r.a.createElement("h4",null,"Click on the Parties below to vote!"),r.a.createElement("br",null),r.a.createElement("div",{className:"row",tc:!0,ma6:!0},r.a.createElement("div",{className:"col-xs-offset-3 col-xs-2"},r.a.createElement("img",{className:"grow",src:"https://pbs.twimg.com/media/D2F_OgxXQAYjZC8.jpg",height:"96",alt:"Angular",onClick:this.handleVoteAngular})),r.a.createElement("div",{className:"col-xs-2"},r.a.createElement("img",{className:"grow",src:"https://www.von.gov.ng/wp-content/uploads/2018/05/apc-vb-1.png",height:"96",alt:"React",onClick:this.handleVoteReact})),r.a.createElement("div",{className:"col-xs-2"},r.a.createElement("img",{className:"grow",src:"https://hdtv5zdsx37feh5z-zippykid.netdna-ssl.com/wp-content/uploads/2017/08/Accord-Party-logo.jpg",height:"96",alt:"Vue.js",onClick:this.handleVoteVueJs})))))}}]),t}(n.Component)),O=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(m.a)(this,Object(v.a)(t).call(this,e))).state={hasError:!1},a}return Object(d.a)(t,e),Object(g.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Oooops."):this.props.children}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var w=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(m.a)(this,Object(v.a)(t).call(this,e))).store=a.props.store,a}return Object(d.a)(t,e),Object(g.a)(t,[{key:"votesAngularInPercent",value:function(){return this.store.getState().angular?this.store.getState().angular/(this.store.getState().angular+this.store.getState().react+this.store.getState().vuejs)*100:0}},{key:"votesReactInPercent",value:function(){return this.store.getState().react?this.store.getState().react/(this.store.getState().react+this.store.getState().angular+this.store.getState().vuejs)*100:0}},{key:"votesVueJsInPercent",value:function(){return this.store.getState().vuejs?this.store.getState().vuejs/(this.store.getState().vuejs+this.store.getState().angular+this.store.getState().react)*100:0}},{key:"votesAngularInPercentStyle",value:function(){return{width:this.votesAngularInPercent()+"%"}}},{key:"votesReactInPercentStyle",value:function(){return{width:this.votesReactInPercent()+"%"}}},{key:"votesVueJsInPercentStyle",value:function(){return{width:this.votesVueJsInPercent()+"%"}}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("span",{className:"label label-danger"},"PDP: ",this.votesAngularInPercent().toFixed(2)+"%"),r.a.createElement("div",{className:"progress progress-striped active"},r.a.createElement("div",{className:"progress-bar progress-bar-danger",style:this.votesAngularInPercentStyle()})),r.a.createElement("span",{className:"label label-info"},"APC: ",this.votesReactInPercent().toFixed(2)+"%"),r.a.createElement("div",{className:"progress progress-striped active"},r.a.createElement("div",{className:"progress-bar progress-bar-info",style:this.votesReactInPercentStyle()})),r.a.createElement("span",{className:"label label-success"},"ACCORD: ",this.votesVueJsInPercent().toFixed(2)+"%"),r.a.createElement("div",{className:"progress progress-striped active"},r.a.createElement("div",{className:"progress-bar progress-bar-success",style:this.votesVueJsInPercentStyle()})))}}]),t}(n.Component),y=Object(l.createLogger)(),S=Object(o.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u;switch((arguments.length>1?arguments[1]:void 0).type){case"VOTE_ANGULAR":return console.log("Your Choice is Angular!"),Object.assign({},e,{angular:e.angular+1});case"VOTE_REACT":return console.log("Your Choice is React!"),Object.assign({},e,{react:e.react+1});case"VOTE_VUEJS":return console.log("Your Choice is Vue!"),Object.assign({},e,{vuejs:e.vuejs+1});default:return e}},Object(o.a)(i.a,y));function P(){c.a.render(r.a.createElement("div",{className:"container bg-lightest-blue"},r.a.createElement(p,null),r.a.createElement(O,null,r.a.createElement(f,{store:S}),r.a.createElement("hr",null),r.a.createElement(w,{store:S}))),document.getElementById("root"))}S.subscribe(P),P(),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,1,2]]]);
//# sourceMappingURL=main.e2daba83.chunk.js.map