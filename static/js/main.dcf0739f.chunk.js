(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,,,,,,,function(t,n,e){},function(t,n,e){},function(t,n,e){},function(t,n,e){},,function(t,n,e){},function(t,n,e){"use strict";e.r(n);var i=e(0),r=e(1),o=e(9),a=e.n(o),s=(e(15),e(16),e(7)),c=e(2),u=e(3),l=e(5),d=e(4),f=(e(17),function(t){Object(l.a)(e,t);var n=Object(d.a)(e);function e(){return Object(c.a)(this,e),n.apply(this,arguments)}return Object(u.a)(e,[{key:"render",value:function(){var t=this.props,n=t.col,e=t.isFinish,r=t.isStart,o=t.isWall,a=t.onMouseDown,s=t.onMouseEnter,c=t.onMouseUp,u=t.row,l=(t.g,t.h,t.f,t.direction,t.weight,t.status,e?"node-finish":r?"node-start":o?"node-wall":"");return Object(i.jsx)("div",{id:"node-".concat(u,"-").concat(n),className:"node ".concat(l),onMouseDown:function(){return a(u,n)},onMouseEnter:function(){return s(u,n)},onMouseUp:function(){return c()}})}}]),e}(r.Component)),h=e(6);function v(t,n,e){var i=[];n.g=0;for(var r=function(t){var n,e=[],i=Object(h.a)(t);try{for(i.s();!(n=i.n()).done;){var r,o=n.value,a=Object(h.a)(o);try{for(a.s();!(r=a.n()).done;){var s=r.value;e.push(s)}}catch(c){a.e(c)}finally{a.f()}}}catch(c){i.e(c)}finally{i.f()}return e}(t);r.length;){g(r);var o=r.shift();if(!o.isWall){if(o.g===1/0)return i;if(o.isVisited=!0,i.push(o),o===e)return i;p(o,t)}}}function g(t){t.sort((function(t,n){return t.g-n.g}))}function p(t,n){var e,i=function(t,n){var e=[],i=t.col,r=t.row;r>0&&e.push(n[r-1][i]);r<n.length-1&&e.push(n[r+1][i]);i>0&&e.push(n[r][i-1]);i<n[0].length-1&&e.push(n[r][i+1]);return e.filter((function(t){return!t.isVisited}))}(t,n),r=Object(h.a)(i);try{for(r.s();!(e=r.n()).done;){var o=e.value;o.g=t.g+1,o.previousNode=t}}catch(a){r.e(a)}finally{r.f()}}function m(t,n){for(var e,i,r=0;r<n.length;r++)(!e||e.f>t[n[r]].f||e.f===t[n[r]].f&&e.h>t[n[r]].h)&&(e=t[n[r]],i=r);return n.splice(i,1),e}function b(t,n,e,i,r,o){var a,s=function(t,n,e){var i,r=t.split("-"),o=parseInt(r[0]),a=parseInt(r[1]),s=[];e[o-1]&&e[o-1][a]&&"wall"!==n[i="".concat((o-1).toString(),"-").concat(a.toString())].status&&s.push(i);e[o+1]&&e[o+1][a]&&"wall"!==n[i="".concat((o+1).toString(),"-").concat(a.toString())].status&&s.push(i);e[o][a-1]&&"wall"!==n[i="".concat(o.toString(),"-").concat((a-1).toString())].status&&s.push(i);e[o][a+1]&&"wall"!==n[i="".concat(o.toString(),"-").concat((a+1).toString())].status&&s.push(i);return s}(n.id,t,e),c=Object(h.a)(s);try{for(c.s();!(a=c.n()).done;){var u=a.value;r?j(n,t[u],t[i.id],t[r.id],t,e,o):j(n,t[u])}}catch(l){c.e(l)}finally{c.f()}}function j(t,n,e,i,r,o,a){var s=function(t,n){var e=t.id.split("-"),i=n.id.split("-"),r=parseInt(e[0]),o=parseInt(e[1]),a=parseInt(i[0]),s=parseInt(i[1]);if(a<r&&o===s){if("N"===t.direction)return[1,["f"],"N"];if("E"===t.direction)return[2,["l","f"],"N"];if("W"===t.direction)return[2,["r","f"],"N"];if("S"===t.direction)return[3,["r","r","f"],"N"];if("NE"===t.direction)return[1.5,null,"N"];if("SE"===t.direction)return[2.5,null,"N"];if("NW"===t.direction)return[1.5,null,"N"];if("SW"===t.direction)return[2.5,null,"N"]}else if(a>r&&o===s){if("N"===t.direction)return[3,["r","r","f"],"S"];if("E"===t.direction)return[2,["r","f"],"S"];if("W"===t.direction)return[2,["l","f"],"S"];if("S"===t.direction)return[1,["f"],"S"];if("NE"===t.direction)return[2.5,null,"S"];if("SE"===t.direction)return[1.5,null,"S"];if("NW"===t.direction)return[2.5,null,"S"];if("SW"===t.direction)return[1.5,null,"S"]}if(s<o&&r===a){if("N"===t.direction)return[2,["l","f"],"W"];if("E"===t.direction)return[3,["l","l","f"],"W"];if("W"===t.direction)return[1,["f"],"W"];if("S"===t.direction)return[2,["r","f"],"W"];if("NE"===t.direction)return[2.5,null,"W"];if("SE"===t.direction)return[2.5,null,"W"];if("NW"===t.direction)return[1.5,null,"W"];if("SW"===t.direction)return[1.5,null,"W"]}else if(s>o&&r===a){if("N"===t.direction)return[2,["r","f"],"E"];if("E"===t.direction)return[1,["f"],"E"];if("W"===t.direction)return[3,["r","r","f"],"E"];if("S"===t.direction)return[2,["l","f"],"E"];if("NE"===t.direction)return[1.5,null,"E"];if("SE"===t.direction)return[1.5,null,"E"];if("NW"===t.direction)return[2.5,null,"E"];if("SW"===t.direction)return[2.5,null,"E"]}}(t,n);n.h||(n.h=function(t,n){var e=t.id.split("-").map((function(t){return parseInt(t)})),i=n.id.split("-").map((function(t){return parseInt(t)})),r=e[0],o=i[0],a=e[1],s=i[1],c=Math.abs(r-o),u=Math.abs(a-s);return c+u}(n,i));var c=t.g+n.weight+s[0];c<n.g&&(n.g=c,n.f=n.g+n.h,n.previousNode=t,n.path=s[1],n.direction=s[2])}e(18),e(19);var S=10,E=15,w=10,y=35,N=function(t){Object(l.a)(e,t);var n=Object(d.a)(e);function e(){var t;return Object(c.a)(this,e),(t=n.call(this)).initGrid=function(){for(var t=[],n={},e=0;e<20;e++){for(var i=[],r=0;r<50;r++){var o,a="".concat(e,"-").concat(r);(o=O(r,e)).status=e===S&&r===E?"start":e===w&&r===y?"target":"node",i.push(o),n[a]=o}t.push(i)}return[t,n]},t.state={grid:[],nodes:{},mouseDown:!1,algoFinished:!0,currentAlgo:null,start:null,target:null},t}return Object(u.a)(e,[{key:"componentDidMount",value:function(){var t=this.initGrid();this.setState({grid:t[0],nodes:t[1]})}},{key:"onMouseDown",value:function(t,n){var e=W(this.state.grid,t,n),i=B(this.state.nodes,t,n);this.setState({grid:e,nodes:i,mouseDown:!0})}},{key:"onMouseEnter",value:function(t,n){if(this.state.mouseDown){var e=W(this.state.grid,t,n),i=B(this.state.nodes,t,n);this.setState({grid:e,nodes:i})}}},{key:"onMouseUp",value:function(){this.setState({mouseDown:!1})}},{key:"animateSearch",value:function(t,n){var e=this;!1===t&&(console.log("No path found."),this.algoFinished=!0,document.getElementById("startButton").disabled=!1,document.getElementById("clearGridButton").disabled=!1);for(var i=function(i){if(i===t.length)return setTimeout((function(){e.animatePath(n)}),10*i),{v:void 0};setTimeout((function(){var n=t[i];document.getElementById("node-".concat(n.row,"-").concat(n.col)).className="node node-visited"}),10*i)},r=0;r<=t.length;r++){var o=i(r);if("object"===typeof o)return o.v}}},{key:"animatePath",value:function(t){for(var n=function(n){setTimeout((function(){var e=t[n];document.getElementById("node-".concat(e.row,"-").concat(e.col)).className="node node-shortest-path"}),35*n)},e=0;e<t.length;e++)n(e);this.algoFinished=!0,document.getElementById("startButton").disabled=!1,document.getElementById("clearGridButton").disabled=!1}},{key:"visualizeSearch",value:function(){var t=document.getElementById("startButton").innerHTML;document.getElementById("startButton").disabled=!0,document.getElementById("clearGridButton").disabled=!0,console.log(t),this.algoFinished=!1;var n=this.state,e=n.grid,i=n.nodes,r=e[10][15],o=e[10][35],a=[],s=[];"A* Search"===t?(console.log(i),a=function(t,n,e,i,r,o){if(!n||!e||n===e)return!1;t[n.id].g=0,t[n.id].f=0,t[n.id].direction="N";var a=Object.keys(t);for(console.log("frontier:",a);a.length;){for(var s=m(t,a);"wall"===s.status&&a.length;)s=m(t,a);if(s.g===1/0)return!1;if(i.push(s),s.status="visited",s.id===e.id)return i;b(t,s,r,n,e,o)}}(i,r,o,a,e,[]),s=function(t){for(var n=[],e=t;null!==e;)n.unshift(e),e=e.previousNode;return n}(o),console.log("Visited:",a),console.log("Path:",s),this.animateSearch(a,s)):"Dijkstra's Algorithm"===t&&(a=v(e,r,o),s=function(t){for(var n=[],e=t;null!==e;)n.unshift(e),e=e.previousNode;return n}(o),this.animateSearch(a,s))}},{key:"clearGrid",value:function(){if(this.algoFinished){var t=this.initGrid();this.setState({grid:t[0],nodes:t[1]});for(var n=0;n<20;n++)for(var e=0;e<50;e++)document.getElementById("node-".concat(n,"-").concat(e)).className=n===S&&e===E?"node node-start":n===w&&e===y?"node node-finish":"node"}}},{key:"render",value:function(){var t=this,n=this.state,e=n.grid,r=n.mouseDown;n.algoFinished;return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{class:"board",children:[Object(i.jsx)("div",{class:"center",children:Object(i.jsx)("button",{id:"startButton",onClick:function(){return t.visualizeSearch()},children:"Visualize Algorithm"})}),Object(i.jsx)("div",{class:"center",children:Object(i.jsx)("button",{id:"clearGridButton",onClick:function(){return t.clearGrid()},children:"Clear Grid"})}),Object(i.jsx)("div",{className:"grid",children:e.map((function(n,e){return Object(i.jsx)("div",{children:n.map((function(n,e){var o=n.row,a=n.col,s=n.isFinish,c=n.isStart,u=n.isWall;return Object(i.jsx)(f,{col:a,g:1/0,h:null,f:1/0,isFinish:s,isStart:c,isWall:u,mouseDown:r,onMouseDown:function(n,e){return t.onMouseDown(n,e)},onMouseEnter:function(n,e){return t.onMouseEnter(n,e)},onMouseUp:function(){return t.onMouseUp()},row:o},e)}))},e)}))})]})})}}]),e}(r.Component),O=function(t,n){return{col:t,row:n,isStart:n===S&&t===E,isFinish:n===w&&t===y,g:1/0,h:null,f:1/0,status:null,isVisited:!1,isWall:!1,previousNode:null,weight:0,id:"".concat(n,"-").concat(t)}},W=function(t,n,e){var i=t.slice(),r=i[n][e];if(n===S&&e===E||n===w&&e===y)return t;var o=Object(s.a)(Object(s.a)({},r),{},{isWall:!r.isWall});return i[n][e]=o,i},B=function(t,n,e){if(n===S&&e===E||n===w&&e===y)return t;var i=t,r=t["".concat(n,"-").concat(e)],o=Object(s.a)(Object(s.a)({},r),{},{isWall:!r.isWall});return o.isWall&&(o.status="wall"),i["".concat(n,"-").concat(e)]=o,i};e(20),r.Component;window.onclick=function(t){if(!t.target.matches(".dropbtn")){var n,e=document.getElementsByClassName("dropdown-content");for(n=0;n<e.length;n++){var i=e[n];i.classList.contains("show")&&i.classList.remove("show")}}};var I=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)(N,{})})};a.a.render(Object(i.jsx)(I,{}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.dcf0739f.chunk.js.map