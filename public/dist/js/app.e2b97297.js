(function(e){function t(t){for(var r,a,i=t[0],s=t[1],u=t[2],l=0,p=[];l<i.length;l++)a=i[l],o[a]&&p.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);d&&d(t);while(p.length)p.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(r=!1)}r&&(c.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},c=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var d=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("64a9"),o=n.n(r);o.a},4864:function(e,t,n){"use strict";var r=n("e191"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"container"},[n("AddTodo"),n("FilterTodos"),n("Todos")],1)])},c=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h3",[e._v("Todos")]),e._m(0),n("div",{staticClass:"todos"},e._l(e.allTodos,function(t){return n("div",{key:t.id,staticClass:"todo",class:{"is-complete":t.completed},on:{click:function(n){return e.markAsCompleted(t)}}},[e._v("\n      "+e._s(t.title)+"\n      "),n("i",{staticClass:"fas fa-trash-alt",on:{click:function(n){return e.deleteTodo(t.id)}}})])}),0)])},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"legend"},[n("span",[e._v("Click a task to mark as complete")]),n("span",[n("span",{staticClass:"incomplete-box"}),e._v(" = Incomplete\n    ")]),n("span",[n("span",{staticClass:"complete-box"}),e._v(" = Complete\n    ")])])}],s=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),u=n("2f62");function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(n,!0).forEach(function(t){Object(s["a"])(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var p={name:"Todos",methods:l({},Object(u["b"])(["fetchTodos","deleteTodo","updateTodo"]),{markAsCompleted:function(e){var t={id:e.id,title:e.title,completed:!e.completed};this.updateTodo(t)}}),computed:Object(u["c"])(["allTodos"]),created:function(){this.fetchTodos()}},f=p,v=(n("90aa"),n("2877")),m=Object(v["a"])(f,a,i,!1,null,"2b044052",null),h=m.exports,b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h3",[e._v("Add Todo")]),n("div",{staticClass:"add"},[n("form",{on:{submit:e.onSubmit}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"title"}],attrs:{type:"text",placeholder:"Add Todo..."},domProps:{value:e.title},on:{input:function(t){t.target.composing||(e.title=t.target.value)}}}),n("input",{attrs:{type:"submit",value:"Submit"}})])])])},O=[];function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(n,!0).forEach(function(t){Object(s["a"])(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var j={name:"AddTodo",data:function(){return{title:""}},methods:g({},Object(u["b"])(["addTodo"]),{onSubmit:function(e){e.preventDefault(),this.addTodo(this.title),this.title=""}})},w=j,T=(n("5f04"),Object(v["a"])(w,b,O,!1,null,"4f55d309",null)),k=T.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v("\n  Filter Todos:\n  "),n("select",{on:{change:function(t){return e.filterTodos(t)}}},[n("option",{attrs:{value:"200"}},[e._v("200")]),n("option",{attrs:{value:"100"}},[e._v("100")]),n("option",{attrs:{value:"50"}},[e._v("50")]),n("option",{attrs:{value:"20"}},[e._v("20")]),n("option",{attrs:{value:"10"}},[e._v("10")]),n("option",{attrs:{value:"5"}},[e._v("5")])]),n("label",{attrs:{for:"checkbox"}},[e._v("Completed")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.checked,expression:"checked"}],attrs:{type:"checkbox",id:"checkbox"},domProps:{checked:Array.isArray(e.checked)?e._i(e.checked,null)>-1:e.checked},on:{click:e.onCheck,change:function(t){var n=e.checked,r=t.target,o=!!r.checked;if(Array.isArray(n)){var c=null,a=e._i(n,c);r.checked?a<0&&(e.checked=n.concat([c])):a>-1&&(e.checked=n.slice(0,a).concat(n.slice(a+1)))}else e.checked=o}}})])},P=[];function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(n,!0).forEach(function(t){Object(s["a"])(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var S={name:"FilterTodos",data:function(){return{checked:!1}},methods:C({},Object(u["b"])(["filterTodos","fetchTodos","filterCompleted"]),{onCheck:function(){this.checked,this.checked,this.checked?this.fetchTodos():this.filterCompleted()}})},D=S,R=(n("4864"),Object(v["a"])(D,_,P,!1,null,null,null)),A=R.exports,E={name:"app",components:{Todos:h,AddTodo:k,FilterTodos:A}},$=E,F=(n("034f"),Object(v["a"])($,o,c,!1,null,null,null)),I=F.exports,M=n("8c4f");r["a"].use(M["a"]);var J=new M["a"]({mode:"history",base:"/",routes:[]}),N=(n("20d6"),n("96cf"),n("3b8d")),L=n("bc3a"),U=n.n(L),q={todos:[]},z={allTodos:function(e){return e.todos}},B={fetchTodos:function(){var e=Object(N["a"])(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:n=t.commit,U.a.get("/api/todos").then(function(e){n("setTodos",e.data)});case 2:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}(),addTodo:function(){var e=Object(N["a"])(regeneratorRuntime.mark(function e(t,n){var r,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:r=t.commit,o={title:n,completed:!1},U.a.post("/api/todos",o).then(function(e){r("newTodo",e.data)});case 3:case"end":return e.stop()}},e)}));function t(t,n){return e.apply(this,arguments)}return t}(),deleteTodo:function(){var e=Object(N["a"])(regeneratorRuntime.mark(function e(t,n){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.next=3,U.a.delete("/api/todos/".concat(n));case 3:r("removeTodo",n);case 4:case"end":return e.stop()}},e)}));function t(t,n){return e.apply(this,arguments)}return t}(),filterTodos:function(){var e=Object(N["a"])(regeneratorRuntime.mark(function e(t,n){var r,o,c;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,o=parseInt(n.target.options[n.target.options.selectedIndex].innerText),e.next=4,U.a.get("/api/todos/limit/".concat(o));case 4:c=e.sent,r("setTodos",c.data);case 6:case"end":return e.stop()}},e)}));function t(t,n){return e.apply(this,arguments)}return t}(),updateTodo:function(){var e=Object(N["a"])(regeneratorRuntime.mark(function e(t,n){var r,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.next=3,U.a.patch("/api/todos/".concat(n.id),n);case 3:o=e.sent,console.log(o.data),r("updateTodo",o.data);case 6:case"end":return e.stop()}},e)}));function t(t,n){return e.apply(this,arguments)}return t}(),filterCompleted:function(){var e=Object(N["a"])(regeneratorRuntime.mark(function e(t){var n,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,U.a.get("/api/todos/completed");case 3:r=e.sent,n("setTodos",r.data);case 5:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},G={setTodos:function(e,t){return e.todos=t},newTodo:function(e,t){return e.todos.unshift(t)},removeTodo:function(e,t){return e.todos=e.todos.filter(function(e){return e.id!==t})},updateTodo:function(e,t){var n=e.todos.findIndex(function(e){return e.id===t.id});-1!==n&&e.todos.splice(n,1,t)}},H={state:q,getters:z,actions:B,mutations:G};r["a"].use(u["a"]);var K=new u["a"].Store({modules:{todos:H}});r["a"].config.productionTip=!1,U.a.defaults.baseURL="/",new r["a"]({store:K,router:J,render:function(e){return e(I)}}).$mount("#app")},"5f04":function(e,t,n){"use strict";var r=n("eb9d"),o=n.n(r);o.a},"64a9":function(e,t,n){},"90aa":function(e,t,n){"use strict";var r=n("deeb"),o=n.n(r);o.a},deeb:function(e,t,n){},e191:function(e,t,n){},eb9d:function(e,t,n){}});
//# sourceMappingURL=app.e2b97297.js.map