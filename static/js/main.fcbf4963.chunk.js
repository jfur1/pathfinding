(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var i=n(0),r=n(1),o=n(9),s=n.n(o),a=(n(15),n(16),n(8)),c=n(2),u=n(3),l=n(5),d=n(4),f=(n(17),function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props,e=t.col,n=t.isFinish,r=t.isStart,o=t.isWall,s=t.onMouseDown,a=t.onMouseEnter,c=t.onMouseUp,u=t.row,l=(t.g,t.h,t.f,t.direction,t.weight,t.status,n?"node-finish":r?"node-start":o?"node-wall":"");return Object(i.jsx)("div",{id:"node-".concat(u,"-").concat(e),className:"node ".concat(l),onMouseDown:function(){return s(u,e)},onMouseEnter:function(){return a(u,e)},onMouseUp:function(){return c()}})}}]),n}(r.Component)),h=n(6);function g(t,e,n){var i=[];e.g=0;for(var r=function(t){var e,n=[],i=Object(h.a)(t);try{for(i.s();!(e=i.n()).done;){var r,o=e.value,s=Object(h.a)(o);try{for(s.s();!(r=s.n()).done;){var a=r.value;n.push(a)}}catch(c){s.e(c)}finally{s.f()}}}catch(c){i.e(c)}finally{i.f()}return n}(t);r.length;){v(r);var o=r.shift();if(!o.isWall){if(o.g===1/0)return i;if(o.isVisited=!0,i.push(o),o===n)return i;p(o,t)}}}function v(t){t.sort((function(t,e){return t.g-e.g}))}function p(t,e){var n,i=function(t,e){var n=[],i=t.col,r=t.row;r>0&&n.push(e[r-1][i]);r<e.length-1&&n.push(e[r+1][i]);i>0&&n.push(e[r][i-1]);i<e[0].length-1&&n.push(e[r][i+1]);return n.filter((function(t){return!t.isVisited}))}(t,e),r=Object(h.a)(i);try{for(r.s();!(n=r.n()).done;){var o=n.value;o.g=t.g+1,o.previousNode=t}}catch(s){r.e(s)}finally{r.f()}}function m(t){for(var e=[],n=t;null!==n;)e.unshift(n),n=n.previousNode;return e}function j(t,e){for(var n,i,r=0;r<e.length;r++)(!n||n.f>t[e[r]].f||n.f===t[e[r]].f&&n.h>t[e[r]].h)&&(n=t[e[r]],i=r);return e.splice(i,1),n}function S(t,e,n,i,r,o){var s,a=function(t,e,n){var i,r=t.split("-"),o=parseInt(r[0]),s=parseInt(r[1]),a=[];n[o-1]&&n[o-1][s]&&"wall"!==e[i="".concat((o-1).toString(),"-").concat(s.toString())].status&&a.push(i);n[o+1]&&n[o+1][s]&&"wall"!==e[i="".concat((o+1).toString(),"-").concat(s.toString())].status&&a.push(i);n[o][s-1]&&"wall"!==e[i="".concat(o.toString(),"-").concat((s-1).toString())].status&&a.push(i);n[o][s+1]&&"wall"!==e[i="".concat(o.toString(),"-").concat((s+1).toString())].status&&a.push(i);return a}(e.id,t,n),c=Object(h.a)(a);try{for(c.s();!(s=c.n()).done;){var u=s.value;r?b(e,t[u],t[i.id],t[r.id],t,n,o):b(e,t[u])}}catch(l){c.e(l)}finally{c.f()}}function b(t,e,n,i,r,o,s){var a=function(t,e){var n=t.id.split("-"),i=e.id.split("-"),r=parseInt(n[0]),o=parseInt(n[1]),s=parseInt(i[0]),a=parseInt(i[1]);if(s<r&&o===a){if("N"===t.direction)return[1,["f"],"N"];if("E"===t.direction)return[2,["l","f"],"N"];if("W"===t.direction)return[2,["r","f"],"N"];if("S"===t.direction)return[3,["r","r","f"],"N"];if("NE"===t.direction)return[1.5,null,"N"];if("SE"===t.direction)return[2.5,null,"N"];if("NW"===t.direction)return[1.5,null,"N"];if("SW"===t.direction)return[2.5,null,"N"]}else if(s>r&&o===a){if("N"===t.direction)return[3,["r","r","f"],"S"];if("E"===t.direction)return[2,["r","f"],"S"];if("W"===t.direction)return[2,["l","f"],"S"];if("S"===t.direction)return[1,["f"],"S"];if("NE"===t.direction)return[2.5,null,"S"];if("SE"===t.direction)return[1.5,null,"S"];if("NW"===t.direction)return[2.5,null,"S"];if("SW"===t.direction)return[1.5,null,"S"]}if(a<o&&r===s){if("N"===t.direction)return[2,["l","f"],"W"];if("E"===t.direction)return[3,["l","l","f"],"W"];if("W"===t.direction)return[1,["f"],"W"];if("S"===t.direction)return[2,["r","f"],"W"];if("NE"===t.direction)return[2.5,null,"W"];if("SE"===t.direction)return[2.5,null,"W"];if("NW"===t.direction)return[1.5,null,"W"];if("SW"===t.direction)return[1.5,null,"W"]}else if(a>o&&r===s){if("N"===t.direction)return[2,["r","f"],"E"];if("E"===t.direction)return[1,["f"],"E"];if("W"===t.direction)return[3,["r","r","f"],"E"];if("S"===t.direction)return[2,["l","f"],"E"];if("NE"===t.direction)return[1.5,null,"E"];if("SE"===t.direction)return[1.5,null,"E"];if("NW"===t.direction)return[2.5,null,"E"];if("SW"===t.direction)return[2.5,null,"E"]}}(t,e);e.h||(e.h=function(t,e){var n=t.id.split("-").map((function(t){return parseInt(t)})),i=e.id.split("-").map((function(t){return parseInt(t)})),r=n[0],o=i[0],s=n[1],a=i[1],c=Math.abs(r-o),u=Math.abs(s-a);return c+u}(e,i));var c=t.g+e.weight+a[0];c<e.g&&(e.g=c,e.f=e.g+e.h,e.previousNode=t,e.path=a[1],e.direction=a[2])}n(18);var y=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;return Object(c.a)(this,n),(t=e.call(this)).initGrid=function(){for(var t=[],e={},n=0;n<20;n++){for(var i=[],r=0;r<50;r++){var o,s="".concat(n,"-").concat(r);(o=N(r,n)).status=10===n&&15===r?"start":10===n&&35===r?"target":"node",i.push(o),e[s]=o}t.push(i)}return[t,e]},t.state={grid:[],nodes:{},mouseDown:!1,algoFinished:!0,currentAlgo:null,start:null,target:null},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=this.initGrid();this.setState({grid:t[0],nodes:t[1]})}},{key:"onMouseDown",value:function(t,e){var n=w(this.state.grid,this.state.nodes,t,e);this.setState({grid:n[0],nodes:n[1],mouseDown:!0})}},{key:"onMouseEnter",value:function(t,e){if(this.state.mouseDown){var n=w(this.state.grid,this.state.nodes,t,e);this.setState({grid:n[0],nodes:n[1]})}}},{key:"onMouseUp",value:function(){this.setState({mouseDown:!1})}},{key:"animateSearch",value:function(t,e){var n=this;if(!1===t||1===e.length||1===t.length)console.log("No path found."),this.algoFinished=!0,document.getElementById("startButton").disabled=!1,document.getElementById("clearGridButton").disabled=!1;else for(var i=function(i){if(i===t.length)return setTimeout((function(){n.animatePath(e)}),10*i),{v:void 0};setTimeout((function(){var e=t[i];document.getElementById("node-".concat(e.row,"-").concat(e.col)).className="node node-visited"}),10*i)},r=0;r<=t.length;r++){var o=i(r);if("object"===typeof o)return o.v}}},{key:"animatePath",value:function(t){for(var e=function(e){setTimeout((function(){var n=t[e];document.getElementById("node-".concat(n.row,"-").concat(n.col)).className="node node-shortest-path"}),25*e)},n=0;n<t.length;n++)e(n);this.algoFinished=!0,document.getElementById("startButton").disabled=!1,document.getElementById("clearGridButton").disabled=!1}},{key:"visualizeSearch",value:function(){var t=document.getElementById("startButton").innerHTML;if("Visualize Algorithm"===t)console.log("Select an algorithm!");else{console.log("Selected Algorithm:",t),this.clearGrid(),document.getElementById("startButton").disabled=!0,document.getElementById("clearGridButton").disabled=!0,this.algoFinished=!1;var e=this.state,n=e.grid,i=e.nodes,r=n[10][15],o=n[10][35],s=[],a=[];"A* Search"===t?(console.log(i),s=function(t,e,n,i,r,o){if(!e||!n||e===n)return!1;t[e.id].g=0,t[e.id].f=0,t[e.id].direction="N";var s=Object.keys(t);for(console.log("frontier:",s);s.length;){for(var a=j(t,s);"wall"===a.status&&s.length;)a=j(t,s);if(a.g===1/0)return!1;if(i.push(a),a.status="visited",a.id===n.id)return i;S(t,a,r,e,n,o)}}(i,r,o,s,n,[]),a=function(t){for(var e=[],n=t;null!==n;)e.unshift(n),n=n.previousNode;return e}(o),console.log("Astar Visited:",s),console.log("Astar Path:",a),this.animateSearch(s,a)):"Dijkstra's Algorithm"===t?(s=g(n,r,o),a=m(o),console.log("Dijkstra Visited:",s),console.log("Dijkstra Path:",a),this.animateSearch(s,a)):"Depth-First-Search"===t?(s=function(t,e,n){for(var i=[],r=[e];r.length;){var o=r.pop();if(o.id===n.id)return i;if(!o.isWall&&(o.isStart||!o.isVisited)){o.isVisited=!0,i.push(o);var s=o.col,a=o.row,c=void 0;a>0&&((c=t[a-1][s]).isVisited||(c.previousNode=o,r.push(c))),a<t.length-1&&((c=t[a+1][s]).isVisited||(c.previousNode=o,r.push(c))),s>0&&((c=t[a][s-1]).isVisited||(c.previousNode=o,r.push(c))),s<t[0].length-1&&((c=t[a][s+1]).isVisited||(c.previousNode=o,r.push(c)))}}return i}(n,r,o),a=m(o),console.log("DFS Visited:",s),console.log("DFS Path:",a),this.animateSearch(s,a)):"Breadth-First-Search"===t&&(s=function(t,e,n){for(var i=[],r=[e];r.length;){var o=r.shift();if(o.id===n.id)return i;if(!o.isWall&&(o.isStart||!o.isVisited)){o.isVisited=!0,i.push(o);var s=o.col,a=o.row,c=void 0;a>0&&((c=t[a-1][s]).isVisited||(c.previousNode=o,r.push(c))),a<t.length-1&&((c=t[a+1][s]).isVisited||(c.previousNode=o,r.push(c))),s>0&&((c=t[a][s-1]).isVisited||(c.previousNode=o,r.push(c))),s<t[0].length-1&&((c=t[a][s+1]).isVisited||(c.previousNode=o,r.push(c)))}}return i}(n,r,o),a=m(o),console.log("BFS Visited:",s),console.log("BFS Path:",a),this.animateSearch(s,a))}}},{key:"clearGrid",value:function(t){if(this.algoFinished)for(var e=0;e<20;e++)for(var n=0;n<50;n++){var i=this.state.grid[e][n];10===e&&15===n?document.getElementById("node-".concat(e,"-").concat(n)).className="node node-start":10===e&&35===n?document.getElementById("node-".concat(e,"-").concat(n)).className="node node-finish":!0===t?(document.getElementById("node-".concat(e,"-").concat(n)).className="node",i.isWall=!1):("node node-wall"!==document.getElementById("node-".concat(e,"-").concat(n)).className&&(document.getElementById("node-".concat(e,"-").concat(n)).className="node"),i.previousNode=null,i.g=1/0,i.h=0,i.f=1/0,i.isVisited=!1,i.status="node",this.state.grid[e][n]=i)}}},{key:"render",value:function(){var t=this,e=this.state,n=e.grid,r=e.mouseDown;e.algoFinished;return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{class:"board",children:[Object(i.jsx)("div",{class:"center",children:Object(i.jsx)("button",{id:"startButton",onClick:function(){return t.visualizeSearch()},children:"Visualize Algorithm"})}),Object(i.jsx)("div",{class:"center",children:Object(i.jsx)("button",{id:"clearGridButton",onClick:function(){return t.initGrid()},children:"Reset Grid"})}),Object(i.jsx)("div",{className:"grid",children:n.map((function(e,n){return Object(i.jsx)("div",{children:e.map((function(e,n){var o=e.row,s=e.col,a=e.isFinish,c=e.isStart,u=e.isWall;return Object(i.jsx)(f,{col:s,g:1/0,h:null,f:1/0,isFinish:a,isStart:c,isWall:u,mouseDown:r,onMouseDown:function(e,n){return t.onMouseDown(e,n)},onMouseEnter:function(e,n){return t.onMouseEnter(e,n)},onMouseUp:function(){return t.onMouseUp()},row:o},n)}))},n)}))})]})})}}]),n}(r.Component),N=function(t,e){return{col:t,row:e,isStart:10===e&&15===t,isFinish:10===e&&35===t,g:1/0,h:null,f:1/0,status:null,isVisited:!1,isWall:!1,previousNode:null,weight:0,id:"".concat(e,"-").concat(t)}},w=function(t,e,n,i){var r=t.slice(),o=e;if(10===n&&15===i||10===n&&35===i)return[t,e];var s=r[n][i],c=Object(a.a)(Object(a.a)({},s),{},{isWall:!s.isWall});return c.isWall?c.status="wall":c.status="node",o["".concat(n,"-").concat(i)]=c,r[n][i]=c,[r,o]},E=(n(19),function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(t){var i;return Object(c.a)(this,n),(i=e.call(this,t)).state={value:t.value},i}return Object(u.a)(n,[{key:"handleChange",value:function(t){this.setState({value:t.target.value})}},{key:"toggleDropdown",value:function(){document.getElementById("myDropdown").classList.toggle("show")}},{key:"selectAlgo",value:function(t){this.toggleDropdown(),document.getElementById("startButton").innerHTML=t}},{key:"render",value:function(){var t=this;return Object(i.jsx)("div",{class:"navbar",children:Object(i.jsxs)("div",{class:"dropdown",children:[Object(i.jsx)("button",{onClick:function(){return t.toggleDropdown()},class:"dropbtn",children:"Select an Algorithm"}),Object(i.jsxs)("div",{id:"myDropdown",class:"dropdown-content",children:[Object(i.jsx)("a",{href:"#",id:"dijkstraStart",onClick:function(){return t.selectAlgo("Dijkstra's Algorithm")},children:"Dijkstra's Algorithm"}),Object(i.jsx)("a",{href:"#",id:"astarStart",onClick:function(){return t.selectAlgo("A* Search")},children:"A* Search"}),Object(i.jsx)("a",{href:"#",id:"bfsStart",onClick:function(){return t.selectAlgo("Breadth-First-Search")},children:"BFS"}),Object(i.jsx)("a",{href:"#",id:"dfsStart",onClick:function(){return t.selectAlgo("Depth-First-Search")},children:"DFS"})]})]})})}}]),n}(r.Component));window.onclick=function(t){if(!t.target.matches(".dropbtn")){var e,n=document.getElementsByClassName("dropdown-content");for(e=0;e<n.length;e++){var i=n[e];i.classList.contains("show")&&i.classList.remove("show")}}};var O=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(E,{}),Object(i.jsx)(y,{})]})};s.a.render(Object(i.jsx)(O,{}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.fcbf4963.chunk.js.map