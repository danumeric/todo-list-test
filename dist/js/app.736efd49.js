(function(){"use strict";var e={3716:function(e,t,a){var s=a(9242),o=a(3396);function n(e,t){const a=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(a)}var d=a(89);const r={},i=(0,d.Z)(r,[["render",n]]);var c=i,l=a(2483);const u={key:0,class:"wrapper-add-task"},p={class:"container"};function _(e,t,a,s,n,d){const r=(0,o.up)("AddTaskComp"),i=(0,o.up)("HeaderComp"),c=(0,o.up)("TableTasksComp");return(0,o.wg)(),(0,o.iD)(o.HY,null,[n.isShowAddTask?((0,o.wg)(),(0,o.iD)("div",u,[(0,o.Wm)(r,{onToggleAddTask:t[0]||(t[0]=e=>d.closeModal(e))})])):(0,o.kq)("",!0),(0,o._)("div",p,[(0,o.Wm)(i,{onToggleAddTask:t[1]||(t[1]=e=>d.openModal(e))}),(0,o.Wm)(c)])],64)}var f=a(7139),h=a.p+"img/uncover-ico.c0c8d5b9.svg";const D=e=>((0,o.dD)("data-v-f9ef1a92"),e=e(),(0,o.Cn)(),e),v={class:"header"},k={class:"header__flex-cont"},g=D((()=>(0,o._)("h1",{class:"header__caption"},"To do list",-1))),w=D((()=>(0,o._)("div",{class:"header__cross"},null,-1))),m=D((()=>(0,o._)("div",{class:"header__cross_rotated"},null,-1))),T=[w,m],y={class:"header__flex-cont header__flex-cont_second"},b={class:"header__search"},S=D((()=>(0,o._)("div",{class:"header__sort"},"Сортировать по:",-1))),B={class:"header__dropdown-wrapper"},x={class:"header__sorted-by"},C={key:0,class:"header__dropdown"},O=D((()=>(0,o._)("img",{src:h,alt:"uncover"},null,-1))),A=[O];function M(e,t,a,n,d,r){return(0,o.wg)(),(0,o.iD)("div",v,[(0,o._)("div",k,[g,(0,o._)("div",{onClick:t[0]||(t[0]=(...e)=>r.showAddTask&&r.showAddTask(...e)),class:"header__add"},T)]),(0,o._)("div",y,[(0,o._)("form",b,[(0,o.wy)((0,o._)("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=e=>d.filterText=e),placeholder:"Поиск ID, Имени, статуса или даты"},null,512),[[s.nr,d.filterText]])]),S,(0,o._)("div",B,[(0,o._)("div",x,(0,f.zw)(r.shownSortedBy),1),d.isShowDropdown?((0,o.wg)(),(0,o.iD)("div",C,[(0,o._)("div",{onClick:t[2]||(t[2]=(...e)=>r.changeSortedBy&&r.changeSortedBy(...e)),class:"header__sorted-by header__sorted-by_menu"},(0,f.zw)(r.dropdownSortedBy),1)])):(0,o.kq)("",!0)]),(0,o._)("div",{class:"header__uncover",onClick:t[3]||(t[3]=(...e)=>r.toggleDropdown&&r.toggleDropdown(...e))},A)])])}var I=a(65),j={name:"HeaderComp",data(){return{filterText:"",isShowDropdown:!1}},emits:["toggleAddTask"],methods:{...(0,I.OI)(["updateFilterText","updateSortedBy"]),toggleDropdown(){this.isShowDropdown=!this.isShowDropdown},showAddTask(){this.$emit("toggleAddTask",!0)},changeSortedBy(){return"byDate"===this.getSortedBy?(this.isShowDropdown=!1,void this.updateSortedBy("byStatus")):"byStatus"===this.getSortedBy?(this.isShowDropdown=!1,void this.updateSortedBy("byDate")):void 0}},computed:{...(0,I.Se)(["getSortedBy"]),shownSortedBy:function(){return"byDate"===this.getSortedBy?"Дата":"byStatus"===this.getSortedBy?"Статус":"Error in set sort"},dropdownSortedBy:function(){return"byDate"===this.getSortedBy?"Статус":"byStatus"===this.getSortedBy?"Дата":"Error in set sort"}},watch:{filterText:function(){this.updateFilterText(this.filterText)}}};const F=(0,d.Z)(j,[["render",M],["__scopeId","data-v-f9ef1a92"]]);var W=F;const Z=(0,o.uE)('<div class="table-head" data-v-9fd1f868><div class="table-head__capture" data-v-9fd1f868></div><div class="table-head__capture" data-v-9fd1f868><span data-v-9fd1f868>Описание</span></div><div class="table-head__capture" data-v-9fd1f868><span data-v-9fd1f868>Статус</span></div><div class="table-head__capture" data-v-9fd1f868><span data-v-9fd1f868>Дата</span></div></div>',1),E={class:"table-body"};function H(e,t,a,s,n,d){const r=(0,o.up)("TaskComp");return(0,o.wg)(),(0,o.iD)(o.HY,null,[Z,(0,o._)("div",E,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.getFilteredTasks,(e=>((0,o.wg)(),(0,o.iD)("div",{class:"table-body__row",key:e.id},[(0,o.Wm)(r,{task:e},null,8,["task"])])))),128))])],64)}const z={class:"task__text"},$={class:"task__text"};function N(e,t,a,s,n,d){return(0,o.wg)(),(0,o.iD)("div",{class:(0,f.C_)(["task",d.classOfTask])},[(0,o._)("div",{class:"task__checkbox",onClick:t[0]||(t[0]=e=>this.changeDone(a.task.id))}),(0,o._)("div",z,[(0,o._)("span",null,(0,f.zw)(a.task.description),1)]),(0,o._)("div",{class:(0,f.C_)(["task__text",d.classOfStatus])},[(0,o._)("span",null,(0,f.zw)(a.task.isDone?"Выполнено":"В работе"),1)],2),(0,o._)("div",$,[(0,o._)("span",null,(0,f.zw)(a.task.creationDateStr),1)])],2)}var Y={name:"TaskComp",data(){return{}},props:{task:Object},methods:{...(0,I.OI)(["changeDone"])},computed:{classOfTask:function(){return this.task.isDone?"task_performed":"task_unperformed"},classOfStatus:function(){return this.task.isDone?"task__text_performed":"task__text_unperformed"}}};const q=(0,d.Z)(Y,[["render",N],["__scopeId","data-v-54fb0e7c"]]);var P=q,V={name:"TableTasksComp",components:{TaskComp:P},computed:{...(0,I.Se)(["getFilteredTasks"])}};const L=(0,d.Z)(V,[["render",H],["__scopeId","data-v-9fd1f868"]]);var R=L;const U=e=>((0,o.dD)("data-v-2ab5cbd6"),e=e(),(0,o.Cn)(),e),K={class:"add-task"},G={class:"add-task__header"},J=U((()=>(0,o._)("h2",{class:"add-task__capture"},"Создать новую задачу",-1))),Q=U((()=>(0,o._)("label",{class:"add-task__label",for:"descr"},"Описание",-1))),X=U((()=>(0,o._)("input",{type:"submit",class:"add-task__create-button",value:"Создать"},null,-1)));function ee(e,t,a,n,d,r){return(0,o.wg)(),(0,o.iD)("div",K,[(0,o._)("div",G,[J,(0,o._)("button",{onClick:t[0]||(t[0]=e=>r.hideAddTask()),class:"add-task__close"})]),(0,o._)("form",{onSubmit:t[2]||(t[2]=(...e)=>this.addTask&&this.addTask(...e)),class:"add-task__form"},[Q,(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>d.descrNewTask=e),required:"",class:"add-task__input",type:"text",id:"descr",placeholder:"Введите описание"},null,512),[[s.nr,d.descrNewTask]]),X],32)])}var te={data(){return{descrNewTask:""}},emits:["toggleAddTask"],methods:{...(0,I.OI)(["addTasksDB"]),hideAddTask(){this.$emit("toggleAddTask",!1)},addTask(e){e.preventDefault(),this.addTasksDB(this.descrNewTask),this.hideAddTask()}}};const ae=(0,d.Z)(te,[["render",ee],["__scopeId","data-v-2ab5cbd6"]]);var se=ae,oe={name:"MainView",data(){return{isShowAddTask:!1}},components:{HeaderComp:W,TableTasksComp:R,AddTaskComp:se},methods:{openModal(e){const t=document.documentElement.clientWidth;this.isShowAddTask=e,document.body.style.overflow="hidden";const a=document.documentElement.clientWidth;t<a&&(document.body.style.paddingRight=a-t+"px")},closeModal(e){this.isShowAddTask=e,document.body.style.overflow="visible",document.body.style.paddingRight="0px"}}};const ne=(0,d.Z)(oe,[["render",_],["__scopeId","data-v-731f83b2"]]);var de=ne;const re=[{path:"/",name:"main",component:de}],ie=(0,l.p7)({history:(0,l.PO)("/"),routes:re});var ce=ie,le=(a(6699),{state:{tasksDB:[{id:0,isDone:!0,description:"Размещение новостей на сайте",creationDate:new Date("2022-04-22").getTime()},{id:1,isDone:!1,description:"Внедрить Wi-fi для читателей",creationDate:new Date("2022-03-25").getTime()},{id:2,isDone:!0,description:"Отредактировать раздел “Доступная среда”",creationDate:new Date("2022-03-15").getTime()},{id:3,isDone:!1,description:"Презентация “Информационные технологии”",creationDate:new Date("2022-03-15").getTime()},{id:4,isDone:!1,description:"Счётчики — внедрить дизайн",creationDate:new Date("2022-03-09").getTime()},{id:5,isDone:!1,description:"Сверстать новый layout",creationDate:new Date("2022-03-07").getTime()},{id:6,isDone:!0,description:"Скролл в новостях",creationDate:new Date("2022-03-01").getTime()},{id:7,isDone:!1,description:"Форма сброса пароля",creationDate:new Date("2022-02-25").getTime()},{id:8,isDone:!0,description:"Внедрение модуля Chat",creationDate:new Date("2022-02-20").getTime()}],filterText:"",sortedBy:"byDate"},getters:{getSortedBy(e){return e.sortedBy},getFilteredTasks(e){const t=e.tasksDB.slice();for(let o of t){const e=new Date(o.creationDate),t=e.getFullYear(),a=+e.getMonth()<10?"0"+(+e.getMonth()+1):+e.getMonth()+1,s=+e.getDate()<10?"0"+e.getDate():e.getDate();o.creationDateStr=`${s}.${a}.${t}`}const a=t.filter((t=>!e.filterText||(!!t.description.toLowerCase().includes(e.filterText.toLowerCase())||void 0))),s=a.sort(((t,a)=>{if("byStatus"===e.sortedBy){if(t.isDone<a.isDone)return-1;if(t.isDone>a.isDone)return 1;if(t.isDone===a.isDone){if(t.creationDate<a.creationDate)return 1;if(t.creationDate>a.creationDate)return-1}}if("byDate"===e.sortedBy){if(t.creationDate<a.creationDate)return 1;if(t.creationDate>a.creationDate)return-1}}));return s}},mutations:{addTasksDB(e,t){const a=+e.tasksDB[e.tasksDB.length-1].id+1;e.tasksDB.push({id:a,isDone:!1,description:t,creationDate:(new Date).getTime()})},changeDone(e,t){const a=e.tasksDB.find((e=>e.id===t));a.isDone=!a.isDone},updateFilterText(e,t){e.filterText=t},updateSortedBy(e,t){e.sortedBy=t}},actions:{}}),ue=a(2415),pe=(0,I.MT)({modules:{tasks:le},plugins:[(0,ue.Z)()]});(0,s.ri)(c).use(pe).use(ce).mount("#app")}},t={};function a(s){var o=t[s];if(void 0!==o)return o.exports;var n=t[s]={exports:{}};return e[s](n,n.exports,a),n.exports}a.m=e,function(){var e=[];a.O=function(t,s,o,n){if(!s){var d=1/0;for(l=0;l<e.length;l++){s=e[l][0],o=e[l][1],n=e[l][2];for(var r=!0,i=0;i<s.length;i++)(!1&n||d>=n)&&Object.keys(a.O).every((function(e){return a.O[e](s[i])}))?s.splice(i--,1):(r=!1,n<d&&(d=n));if(r){e.splice(l--,1);var c=o();void 0!==c&&(t=c)}}return t}n=n||0;for(var l=e.length;l>0&&e[l-1][2]>n;l--)e[l]=e[l-1];e[l]=[s,o,n]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var s in t)a.o(t,s)&&!a.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.p="/"}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,s){var o,n,d=s[0],r=s[1],i=s[2],c=0;if(d.some((function(t){return 0!==e[t]}))){for(o in r)a.o(r,o)&&(a.m[o]=r[o]);if(i)var l=i(a)}for(t&&t(s);c<d.length;c++)n=d[c],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(l)},s=self["webpackChunktodo_list_test"]=self["webpackChunktodo_list_test"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=a.O(void 0,[998],(function(){return a(3716)}));s=a.O(s)})();
//# sourceMappingURL=app.736efd49.js.map