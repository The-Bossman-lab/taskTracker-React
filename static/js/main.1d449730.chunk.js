(this["webpackJsonptask-tracker"]=this["webpackJsonptask-tracker"]||[]).push([[0],{22:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(8),s=n.n(r),i=(n(22),n(17)),l=n(7),o=n(10),d=n(1),j=function(e){var t=e.btnClick;return Object(d.jsxs)("div",{className:"header",children:[Object(d.jsx)("h1",{children:" Task tracker "}),Object(d.jsx)("button",{onClick:t,className:"btn btn-primary",children:"Add"})]})},b=n(9),u=function(e){var t=e.task,n=e.onDelete,c=e.onBell;return Object(d.jsxs)("div",{className:"task",children:[Object(d.jsxs)("h3",{children:[t.text,Object(d.jsxs)("div",{className:"icons",children:[!0===t.reminder?Object(d.jsx)(b.b,{className:"bell-icon",onClick:function(){return c(t.id)}}):Object(d.jsx)(b.a,{className:"bell-icon",onClick:function(){return c(t.id)}}),Object(d.jsx)(b.c,{style:{cursor:"pointer",color:"red"},className:"delete-icon icon",onClick:function(){return n(t.id)}})]})]}),Object(d.jsx)("p",{children:t.day})]})},O=function(e){var t=e.tasks,n=e.onDelete,c=e.onBell;return Object(d.jsx)(d.Fragment,{children:t.map((function(e){return Object(d.jsx)(u,{task:e,onDelete:n,onBell:c},e.id)}))})},m=n(31),h=(n(24),function(e){var t=e.onAdd,n=Object(c.useState)({}),a=Object(o.a)(n,2),r=a[0],s=a[1],i=Object(c.useState)(!0),j=Object(o.a)(i,2),b=j[0],u=j[1];return Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r.text?(t(r),s({})):u(!1)},children:[b?"":Object(d.jsx)("div",{className:"alert alert-danger",role:"alert",children:"Please add a task!"}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{children:"Task"}),Object(d.jsx)("input",{type:"text",className:"form-control",placeholder:"Add Task",value:r.text,onChange:function(e){var t=e.target.value;s(Object(l.a)(Object(l.a)({},r),{},{text:t}))}})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"example-datetime-local-input",children:"Date and time"}),Object(d.jsx)("input",{className:"form-control",type:"datetime-local",onChange:function(e){var t=new Date(e.target.value).toString().slice(0,24);s(Object(l.a)(Object(l.a)({},r),{},{day:t}))}})]}),Object(d.jsxs)("div",{className:"form-check",children:[Object(d.jsx)("input",{type:"checkbox",className:"form-check-input",checked:r.reminder,onChange:function(e){var t=e.currentTarget.checked;s(Object(l.a)(Object(l.a)({},r),{},{reminder:t}))}}),Object(d.jsx)("label",{className:"form-check-label",children:"Set Reminder"})]}),Object(d.jsx)("input",{style:{marginTop:"10px"},type:"submit",className:"btn btn-primary btn-block",value:"Add New Task"})]})}),x=function(e){var t=e.modalShow,n=e.onHide,c=e.onAdd;return Object(d.jsxs)(m.a,{show:t,size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(d.jsxs)(m.a.Header,{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[Object(d.jsx)(m.a.Title,{id:"contained-modal-title-vcenter",children:"Add New Task"}),Object(d.jsx)(b.c,{onClick:function(){return n()},style:{cursor:"pointer"}})]}),Object(d.jsx)(m.a.Body,{children:Object(d.jsx)(h,{onAdd:c})})]})};var f=function(){var e=Object(c.useState)(localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[]),t=Object(o.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!1),s=Object(o.a)(r,2),b=s[0],u=s[1];return Object(c.useEffect)((function(){localStorage.setItem("tasks",JSON.stringify(n))}),[n]),Object(d.jsxs)("div",{className:"conteiner",children:[Object(d.jsx)(j,{btnClick:function(){u(!0)}}),n.length>0?Object(d.jsx)(O,{onBell:function(e){a(n.map((function(t){return t.id===e?Object(l.a)(Object(l.a)({},t),{},{reminder:!t.reminder}):t})))},onDelete:function(e){return a(n.filter((function(t){return t.id!==e})))},tasks:n}):"No Tasks",Object(d.jsx)(x,{onAdd:function(e){var t=Math.floor(1e4*Math.random())+1,c=Object(l.a)({id:t},e);a([].concat(Object(i.a)(n),[c])),u(!1)},modalShow:b,onHide:function(){return u(!1)}})]})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,32)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root")),k()}},[[28,1,2]]]);
//# sourceMappingURL=main.1d449730.chunk.js.map