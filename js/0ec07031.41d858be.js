(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["0ec07031"],{"0891":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-card",[a("modal-header",[t._v("Add Task")]),a("form",{on:{submit:function(e){return e.preventDefault(),t.submitForm()}}},[a("q-card-section",[a("modal-task-name",{ref:"modalTaskName",attrs:{name:t.taskToSubmit.name},on:{"update:name":function(e){return t.$set(t.taskToSubmit,"name",e)}}}),a("modal-due-date",{attrs:{dueDate:t.taskToSubmit.dueDate},on:{clear:t.clearDueDate,"update:dueDate":function(e){return t.$set(t.taskToSubmit,"dueDate",e)},"update:due-date":function(e){return t.$set(t.taskToSubmit,"dueDate",e)}}}),t.taskToSubmit.dueDate?a("modal-due-time",{attrs:{dueTime:t.taskToSubmit.dueTime},on:{"update:dueTime":function(e){return t.$set(t.taskToSubmit,"dueTime",e)},"update:due-time":function(e){return t.$set(t.taskToSubmit,"dueTime",e)}}}):t._e()],1),a("modal-buttons")],1)],1)},r=[],n=(a("8e6e"),a("8a81"),a("ac6a"),a("cadf"),a("06db"),a("456d"),a("c47a")),o=a.n(n),i=a("2f62"),c=a("a8f3");function u(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?u(a,!0).forEach((function(e){o()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):u(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var d={mixins:[c["a"]],data:function(){return{taskToSubmit:{name:"",dueDate:"",dueTime:"",completed:!1}}},methods:l({},Object(i["b"])("tasks",["addTask"]),{submitTask:function(){console.log("submitTask"),console.log(this.taskToSubmit),this.addTask(this.taskToSubmit),this.$emit("close")}})},p=d,f=a("2877"),m=Object(f["a"])(p,s,r,!1,null,null,null);e["default"]=m.exports},"10d0":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",[a("div",{staticClass:"q-pa-md absolute full-width full-height column"},[t.tasksLoaded?[a("div",{staticClass:"row q-mb-sm"},[a("search"),a("sort")],1),!t.search||Object.keys(t.tasksTodo).length||Object.keys(t.tasksCompleted).length?t._e():a("p",[t._v("\n        No search results.\n      ")]),a("q-scroll-area",{staticClass:"q-scroll-area-tasks col"},[t.search||Object.keys(t.tasksTodo).length?t._e():a("no-tasks"),Object.keys(t.tasksTodo).length?a("tasks-todo",{attrs:{tasksTodo:t.tasksTodo}}):t._e(),Object.keys(t.tasksCompleted).length?a("tasks-completed",{staticClass:"q-mb-xl",attrs:{tasksCompleted:t.tasksCompleted}}):t._e()],1),a("div",{staticClass:"absolute-bottom \n                  text-center \n                  q-mb-sm\n                  no-pointer-events"},[a("q-btn",{staticClass:"all-pointer-events",attrs:{round:"",color:"primary",size:"24px",icon:"add"},on:{click:function(e){t.showAddTask=!0}}})],1)]:[a("span",{staticClass:"absolute-center"},[a("q-spinner-grid",{attrs:{color:"primary",size:"3em"}})],1)]],2),a("q-dialog",{model:{value:t.showAddTask,callback:function(e){t.showAddTask=e},expression:"showAddTask"}},[a("add-task",{on:{close:function(e){t.showAddTask=!1}}})],1)],1)},r=[],n=(a("8e6e"),a("8a81"),a("ac6a"),a("cadf"),a("06db"),a("456d"),a("c47a")),o=a.n(n),i=a("2f62");function c(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function u(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(a,!0).forEach((function(e){o()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):c(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var l={data:function(){return{showAddTask:!1}},computed:u({},Object(i["c"])("tasks",["tasksTodo","tasksCompleted"]),{},Object(i["d"])("tasks",["search","tasksLoaded"])),mounted:function(){var t=this;this.$root.$on("showAddTask",(function(){t.showAddTask=!0}))},components:{task:a("1730").default,"no-tasks":a("734f").default,"tasks-todo":a("1f87").default,"tasks-completed":a("1f0c").default,"add-task":a("0891").default,search:a("227f").default,sort:a("68c5").default}},d=l,p=(a("8818"),a("2877")),f=Object(p["a"])(d,s,r,!1,null,"0ea527cf",null);e["default"]=f.exports},"13e4":function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));var s={inserted:function(t){var e=t.querySelector(".q-field__native");e.addEventListener("focus",(function(){e.value.length&&e.select()}))}}},1730:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-item",{directives:[{name:"touch-hold",rawName:"v-touch-hold:500.mouse",value:t.showEditTaskModal,expression:"showEditTaskModal",arg:"500",modifiers:{mouse:!0}},{name:"ripple",rawName:"v-ripple"}],class:t.task.completed?"bg-green-1":"bg-orange-1",attrs:{clickable:""},on:{click:function(e){return t.updateTask({id:t.id,updates:{completed:!t.task.completed}})}}},[a("q-item-section",{attrs:{side:"",top:""}},[a("q-checkbox",{staticClass:"no-pointer-events",model:{value:t.task.completed,callback:function(e){t.$set(t.task,"completed",e)},expression:"task.completed"}})],1),a("q-item-section",[a("q-item-label",{class:{"text-strikethrough":t.task.completed},domProps:{innerHTML:t._s(t.$options.filters.searchHighlight(t.task.name,t.search))}})],1),t.task.dueDate?a("q-item-section",{attrs:{side:""}},[a("div",{staticClass:"row"},[a("div",{staticClass:"column justify"},[a("q-icon",{staticClass:"q-mr-xs",attrs:{name:"event",size:"18px"}})],1),a("div",{staticClass:"column"},[a("q-item-label",{staticClass:"row justify-end",attrs:{caption:""}},[t._v(t._s(t._f("niceDate")(t.task.dueDate))+"\n        ")]),a("q-item-label",{staticClass:"row justify-end",attrs:{caption:""}},[a("small",[t._v(t._s(t.taskDueTime))])])],1)])]):t._e(),a("q-item-section",{attrs:{side:""}},[a("div",{staticClass:"row"},[a("q-btn",{attrs:{dense:"",flat:"",round:"",color:"primary",icon:"edit"},on:{click:function(e){return e.stopPropagation(),t.showEditTaskModal(e)}}}),a("q-btn",{attrs:{dense:"",flat:"",round:"",color:"negative",icon:"delete"},on:{click:function(e){e.stopPropagation(),t.confirm=!0}}})],1)]),a("q-dialog",{attrs:{persistent:""},model:{value:t.confirm,callback:function(e){t.confirm=e},expression:"confirm"}},[a("q-card",[a("q-card-section",{staticClass:"row items-center"},[a("q-avatar",{attrs:{icon:"warning",color:"negative","text-color":"white"}}),a("span",{staticClass:"q-ml-sm"},[t._v('Are you sure you want to delete the task "'+t._s(t.task.name)+'"?')])],1),a("q-card-actions",{attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Cancel",color:"negative"}}),a("q-btn",{attrs:{flat:"",label:"Confirm",color:"positive"},on:{click:function(e){return e.stopPropagation(),t.promtToDelete(t.id)}}})],1)],1)],1),a("q-ajax-bar",{ref:"bar",attrs:{position:"top",color:"green",size:"10px","skip-hijack":""}}),a("q-dialog",{model:{value:t.showEditTask,callback:function(e){t.showEditTask=e},expression:"showEditTask"}},[a("edit-task",{attrs:{task:t.task,id:t.id},on:{close:function(e){t.showEditTask=!1}}})],1)],1)},r=[],n=(a("8e6e"),a("8a81"),a("ac6a"),a("cadf"),a("06db"),a("456d"),a("a481"),a("3b2b"),a("c47a")),o=a.n(n),i=a("2f62"),c=a("bd4c");function u(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?u(a,!0).forEach((function(e){o()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):u(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var d={props:["task","id"],data:function(){return{confirm:!1,showEditTask:!1}},computed:l({},Object(i["d"])("tasks",["search"]),{},Object(i["c"])("settings",["settings"]),{taskDueTime:function(){return this.settings.show12HourTimeFormat?c["b"].formatDate("".concat(this.task.dueDate," ").concat(this.task.dueTime),"h:mm A"):this.task.dueTime}}),methods:l({},Object(i["b"])("tasks",["updateTask","deleteTask"]),{showEditTaskModal:function(){this.showEditTask=!0},promtToDelete:function(t){var e=this,a=this.$refs.bar;a.start(),this.timer=setTimeout((function(){e.$refs.bar&&(e.deleteTask(t),e.confirm=!1,e.$refs.bar.stop())}),1e3*Math.random()+1e3)}}),filters:{niceDate:function(t){return c["b"].formatDate(t,"MMM D, YYYY")},searchHighlight:function(t,e){var a=new RegExp(e,"ig");return e?t.replace(a,(function(t){return'<span class="bg-yellow-6">'.concat(t,"</span>")})):t}},components:{"edit-task":a("21de").default}},p=d,f=a("2877"),m=Object(f["a"])(p,s,r,!1,null,null,null);e["default"]=m.exports},"1c83":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row q-mb-sm"},[a("q-input",{staticClass:"col",attrs:{outlined:"",label:"Due time",value:t.dueTime},on:{input:function(e){return t.$emit("update:dueTime",e)}},scopedSlots:t._u([{key:"append",fn:function(){return[""!==t.dueTime?a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"close"},on:{click:function(e){return t.$emit("update:dueTime","")}}}):t._e(),a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"access_time"}},[a("q-popup-proxy",[a("q-time",{attrs:{value:t.dueTime},on:{input:function(e){return t.$emit("update:dueTime",e)}}})],1)],1)]},proxy:!0}])})],1)},r=[],n={props:["dueTime"]},o=n,i=a("2877"),c=Object(i["a"])(o,s,r,!1,null,null,null);e["default"]=c.exports},"1cd5":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-card-actions",{attrs:{align:"right"}},[a("q-btn",{attrs:{label:"Save",color:"primary",type:"submit"}})],1)},r=[],n={},o=n,i=a("2877"),c=Object(i["a"])(o,s,r,!1,null,null,null);e["default"]=c.exports},"1f0c":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{appear:"","enter-active-class":"animated zoomIn","leave-active-class":"animated zoomOut absolute-bottom"}},[a("div",{class:{"q-mt-lg":!t.settings.showTasksInOneList}},[t.settings.showTasksInOneList?t._e():a("list-header",{attrs:{bgColor:"bg-green-4"}},[t._v("Completed")]),a("q-list",{attrs:{separator:"",bordered:""}},t._l(t.tasksCompleted,(function(t,e){return a("task",{key:e,attrs:{task:t,id:e}})})),1)],1)])},r=[],n=(a("8e6e"),a("8a81"),a("ac6a"),a("cadf"),a("06db"),a("456d"),a("c47a")),o=a.n(n),i=a("2f62");function c(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function u(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(a,!0).forEach((function(e){o()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):c(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var l={props:["tasksCompleted"],computed:u({},Object(i["c"])("settings",["settings"])),components:{task:a("1730").default,"list-header":a("2831").default}},d=l,p=a("2877"),f=Object(p["a"])(d,s,r,!1,null,null,null);e["default"]=f.exports},"1f87":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{appear:"","enter-active-class":"animated zoomIn","leave-active-class":"animated zoomOut absolute-top"}},[a("div",[t.settings.showTasksInOneList?t._e():a("list-header",{attrs:{bgColor:"bg-orange-4"}},[t._v("Todo")]),a("q-list",{attrs:{separator:"",bordered:""}},t._l(t.tasksTodo,(function(t,e){return a("task",{key:e,attrs:{task:t,id:e}})})),1)],1)])},r=[],n=(a("8e6e"),a("8a81"),a("ac6a"),a("cadf"),a("06db"),a("456d"),a("c47a")),o=a.n(n),i=a("2f62");function c(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function u(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(a,!0).forEach((function(e){o()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):c(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var l={props:["tasksTodo"],computed:u({},Object(i["c"])("settings",["settings"])),components:{task:a("1730").default,"list-header":a("2831").default}},d=l,p=a("2877"),f=Object(p["a"])(d,s,r,!1,null,null,null);e["default"]=f.exports},2154:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row q-mb-sm"},[a("q-input",{attrs:{outlined:"",label:"Due date",value:t.dueDate},on:{input:function(e){return t.$emit("update:dueDate",e)}},scopedSlots:t._u([{key:"append",fn:function(){return[""!==t.dueDate?a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"close"},on:{click:function(e){return t.$emit("clear")}}}):t._e(),a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[a("q-popup-proxy",[a("q-date",{attrs:{value:t.dueDate},on:{input:function(e){return t.$emit("update:dueDate",e)}}})],1)],1)]},proxy:!0}])})],1)},r=[],n={props:["dueDate"]},o=n,i=a("2877"),c=Object(i["a"])(o,s,r,!1,null,null,null);e["default"]=c.exports},"21de":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-card",[a("modal-header",[t._v("Edit Task")]),a("form",{on:{submit:function(e){return e.preventDefault(),t.submitForm()}}},[a("q-card-section",[a("modal-task-name",{ref:"modalTaskName",attrs:{name:t.taskToSubmit.name},on:{"update:name":function(e){return t.$set(t.taskToSubmit,"name",e)}}}),a("modal-due-date",{attrs:{dueDate:t.taskToSubmit.dueDate},on:{clear:t.clearDueDate,"update:dueDate":function(e){return t.$set(t.taskToSubmit,"dueDate",e)},"update:due-date":function(e){return t.$set(t.taskToSubmit,"dueDate",e)}}}),t.taskToSubmit.dueDate?a("modal-due-time",{attrs:{dueTime:t.taskToSubmit.dueTime},on:{"update:dueTime":function(e){return t.$set(t.taskToSubmit,"dueTime",e)},"update:due-time":function(e){return t.$set(t.taskToSubmit,"dueTime",e)}}}):t._e()],1),a("modal-buttons")],1)],1)},r=[],n=(a("8e6e"),a("8a81"),a("ac6a"),a("cadf"),a("06db"),a("456d"),a("f751"),a("c47a")),o=a.n(n),i=a("2f62"),c=a("a8f3");function u(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?u(a,!0).forEach((function(e){o()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):u(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var d={props:["task","id"],mixins:[c["a"]],data:function(){return{taskToSubmit:{}}},methods:l({},Object(i["b"])("tasks",["updateTask"]),{submitTask:function(){var t={id:this.id,updates:this.taskToSubmit};this.updateTask(t),this.$emit("close")}}),mounted:function(){this.taskToSubmit=Object.assign({},this.task)}},p=d,f=a("2877"),m=Object(f["a"])(p,s,r,!1,null,null,null);e["default"]=m.exports},"227f":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-input",{directives:[{name:"select-all",rawName:"v-select-all"}],staticClass:"col",attrs:{outlined:"",label:"Search"},on:{keyup:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"]))return null;t.searchField=""}},scopedSlots:t._u([{key:"append",fn:function(){return[""!==t.searchField?a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"close"},on:{click:function(e){t.searchField=""}}}):t._e(),a("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:t.searchField,callback:function(e){t.searchField=e},expression:"searchField"}})},r=[],n=(a("8e6e"),a("8a81"),a("ac6a"),a("cadf"),a("06db"),a("456d"),a("386d"),a("c47a")),o=a.n(n),i=a("2f62"),c=a("13e4");function u(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?u(a,!0).forEach((function(e){o()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):u(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var d={computed:l({},Object(i["d"])("tasks",["search"]),{searchField:{get:function(){return this.search},set:function(t){this.setSearch(t)}}}),methods:l({},Object(i["b"])("tasks",["setSearch"])),directives:{selectAll:c["a"]}},p=d,f=a("2877"),m=Object(f["a"])(p,s,r,!1,null,null,null);e["default"]=m.exports},2831:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-banner",{staticClass:"list-header text-white bg-green-4 text-center",class:t.bgColor,attrs:{dense:"","inline-actions":""}},[a("span",{staticClass:"text-bold text-subtitle1"},[t._t("default")],2)])},r=[],n={props:["bgColor"]},o=n,i=(a("b0f2"),a("2877")),c=Object(i["a"])(o,s,r,!1,null,null,null);e["default"]=c.exports},"3cdb":function(t,e,a){},"5e2b":function(t,e,a){},"64c0":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row q-mb-md"},[a("q-input",{directives:[{name:"select-all",rawName:"v-select-all"}],ref:"name",staticClass:"col",attrs:{outlined:"",value:t.name,rules:[function(t){return!!t||"Task name is required"}],autofocus:"",label:"Task name"},on:{input:function(e){return t.$emit("update:name",e)}},scopedSlots:t._u([{key:"append",fn:function(){return[""!==t.name?a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"close"},on:{click:function(e){return t.$emit("update:name","")}}}):t._e()]},proxy:!0}])})],1)},r=[],n=a("13e4"),o={props:["name"],directives:{selectAll:n["a"]}},i=o,c=a("2877"),u=Object(c["a"])(i,s,r,!1,null,null,null);e["default"]=u.exports},"68c5":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-select",{staticClass:"col-1.5 q-ml-sm",attrs:{label:"Sort","transition-show":"flip-up","transition-hide":"flip-down","emit-value":"","map-options":"",filled:"",options:t.options,"stack-label":""},model:{value:t.sortBy,callback:function(e){t.sortBy=e},expression:"sortBy"}})},r=[],n=(a("8e6e"),a("8a81"),a("ac6a"),a("cadf"),a("06db"),a("456d"),a("55dd"),a("c47a")),o=a.n(n),i=a("2f62");function c(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function u(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(a,!0).forEach((function(e){o()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):c(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var l={data:function(){return{model:null,options:[{label:"Name",value:"name"},{label:"Due Date",value:"dueDate"}]}},computed:u({},Object(i["d"])("tasks",["sort"]),{sortBy:{get:function(){return this.sort},set:function(t){this.setSort(t)}}}),methods:u({},Object(i["b"])("tasks",["setSort"]))},d=l,p=a("2877"),f=Object(p["a"])(d,s,r,!1,null,null,null);e["default"]=f.exports},"734f":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{appear:"","enter-active-class":"animated zoomIn","leave-active-class":"animated zoomOut"}},[a("q-banner",{staticClass:"bg-grey-3",scopedSlots:t._u([{key:"avatar",fn:function(){return[a("q-icon",{attrs:{name:"check",color:"primary"}})]},proxy:!0},{key:"action",fn:function(){return[a("q-btn",{attrs:{flat:"",color:"primary",label:"Add Task"},on:{click:function(e){return t.$root.$emit("showAddTask")}}})]},proxy:!0}])},[t._v("\n    No tasks to be completed.\n    ")])],1)},r=[],n={},o=n,i=a("2877"),c=Object(i["a"])(o,s,r,!1,null,null,null);e["default"]=c.exports},8818:function(t,e,a){"use strict";var s=a("5e2b"),r=a.n(s);r.a},"89e3":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-card-section",{staticClass:"row"},[a("div",{staticClass:"text-h6"},[t._t("default")],2),a("q-space"),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",round:"",dense:"",icon:"close"}})],1)},r=[],n={},o=n,i=a("2877"),c=Object(i["a"])(o,s,r,!1,null,null,null);e["default"]=c.exports},a8f3:function(t,e,a){"use strict";a("7f7f");e["a"]={methods:{submitForm:function(){this.$refs.modalTaskName.$refs.name.validate(),this.$refs.modalTaskName.$refs.name.hasError||this.submitTask(this.taskToSubmit)},clearDueDate:function(){this.taskToSubmit.dueDate="",this.taskToSubmit.dueTime=""}},components:{"modal-header":a("89e3").default,"modal-task-name":a("64c0").default,"modal-due-date":a("2154").default,"modal-due-time":a("1c83").default,"modal-buttons":a("1cd5").default}}},b0f2:function(t,e,a){"use strict";var s=a("3cdb"),r=a.n(s);r.a}}]);