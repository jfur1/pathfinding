(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){"use strict";i.r(e);var n=i(0),s=i(2),a=i(10),r=i.n(a),o=(i(16),i(17),i(9)),c=i(1),l=i(3),u=i(4),d=i(7),h=i(6),f=i(5),v=(i(18),function(t){Object(h.a)(i,t);var e=Object(f.a)(i);function i(){return Object(l.a)(this,i),e.apply(this,arguments)}return Object(u.a)(i,[{key:"render",value:function(){var t=this.props,e=t.col,i=t.isFinish,s=t.isStart,a=t.isWall,r=t.onMouseDown,o=t.onMouseEnter,c=t.onMouseUp,l=t.row,u=(t.g,t.h,t.f,t.direction,t.weight,t.status,i?"node-finish":s?"node-start":a?"node-wall":"");return Object(n.jsx)("div",{id:"node-".concat(l,"-").concat(e),className:"node ".concat(u),onMouseDown:function(){return r(l,e)},onMouseEnter:function(){return o(l,e)},onMouseUp:function(){return c()}})}}]),i}(s.Component));function N(t,e,i){var n=[];e.g=0;for(var s=function(t){var e,i=[],n=Object(c.a)(t);try{for(n.s();!(e=n.n()).done;){var s,a=e.value,r=Object(c.a)(a);try{for(r.s();!(s=r.n()).done;){var o=s.value;i.push(o)}}catch(l){r.e(l)}finally{r.f()}}}catch(l){n.e(l)}finally{n.f()}return i}(t);s.length;){O(s);var a=s.shift();if(!a.isWall){if(a.g===1/0)return n;if(a.isVisited=!0,n.push(a),a===i)return n;g(a,t)}}}function O(t){t.sort((function(t,e){return t.g-e.g}))}function g(t,e){var i,n=function(t,e){var i=[],n=t.col,s=t.row;s>0&&i.push(e[s-1][n]);s<e.length-1&&i.push(e[s+1][n]);n>0&&i.push(e[s][n-1]);n<e[0].length-1&&i.push(e[s][n+1]);return i.filter((function(t){return!t.isVisited}))}(t,e),s=Object(c.a)(n);try{for(s.s();!(i=s.n()).done;){var a=i.value;a.g=t.g+1,a.previousNode=t}}catch(r){s.e(r)}finally{s.f()}}function b(t,e){for(var i,n,s=0;s<e.length;s++)(!i||i.f>t[e[s]].f||i.f===t[e[s]].f&&i.h>t[e[s]].h)&&(i=t[e[s]],n=s);return e.splice(n,1),i}function p(t,e,i,n,s,a){var r,o=function(t,e,i){var n,s=t.split("-"),a=parseInt(s[0]),r=parseInt(s[1]),o=[];i[a-1]&&i[a-1][r]&&"wall"!==e[n="".concat((a-1).toString(),"-").concat(r.toString())].status&&o.push(n);i[a+1]&&i[a+1][r]&&"wall"!==e[n="".concat((a+1).toString(),"-").concat(r.toString())].status&&o.push(n);i[a][r-1]&&"wall"!==e[n="".concat(a.toString(),"-").concat((r-1).toString())].status&&o.push(n);i[a][r+1]&&"wall"!==e[n="".concat(a.toString(),"-").concat((r+1).toString())].status&&o.push(n);return o}(e.id,t,i),l=Object(c.a)(o);try{for(l.s();!(r=l.n()).done;){var u=r.value;s?m(e,t[u],t[n.id],t[s.id],t,i,a):m(e,t[u])}}catch(d){l.e(d)}finally{l.f()}}function m(t,e,i,n,s,a,r){var o=function(t,e){var i=t.id.split("-"),n=e.id.split("-"),s=parseInt(i[0]),a=parseInt(i[1]),r=parseInt(n[0]),o=parseInt(n[1]);if(r<s&&a===o){if("N"===t.direction)return[1,["f"],"N"];if("E"===t.direction)return[2,["l","f"],"N"];if("W"===t.direction)return[2,["r","f"],"N"];if("S"===t.direction)return[3,["r","r","f"],"N"];if("NE"===t.direction)return[1.5,null,"N"];if("SE"===t.direction)return[2.5,null,"N"];if("NW"===t.direction)return[1.5,null,"N"];if("SW"===t.direction)return[2.5,null,"N"]}else if(r>s&&a===o){if("N"===t.direction)return[3,["r","r","f"],"S"];if("E"===t.direction)return[2,["r","f"],"S"];if("W"===t.direction)return[2,["l","f"],"S"];if("S"===t.direction)return[1,["f"],"S"];if("NE"===t.direction)return[2.5,null,"S"];if("SE"===t.direction)return[1.5,null,"S"];if("NW"===t.direction)return[2.5,null,"S"];if("SW"===t.direction)return[1.5,null,"S"]}if(o<a&&s===r){if("N"===t.direction)return[2,["l","f"],"W"];if("E"===t.direction)return[3,["l","l","f"],"W"];if("W"===t.direction)return[1,["f"],"W"];if("S"===t.direction)return[2,["r","f"],"W"];if("NE"===t.direction)return[2.5,null,"W"];if("SE"===t.direction)return[2.5,null,"W"];if("NW"===t.direction)return[1.5,null,"W"];if("SW"===t.direction)return[1.5,null,"W"]}else if(o>a&&s===r){if("N"===t.direction)return[2,["r","f"],"E"];if("E"===t.direction)return[1,["f"],"E"];if("W"===t.direction)return[3,["r","r","f"],"E"];if("S"===t.direction)return[2,["l","f"],"E"];if("NE"===t.direction)return[1.5,null,"E"];if("SE"===t.direction)return[1.5,null,"E"];if("NW"===t.direction)return[2.5,null,"E"];if("SW"===t.direction)return[2.5,null,"E"]}}(t,e);e.h||(e.h=function(t,e){var i=t.id.split("-").map((function(t){return parseInt(t)})),n=e.id.split("-").map((function(t){return parseInt(t)})),s=i[0],a=n[0],r=i[1],o=n[1],c=Math.abs(s-a),l=Math.abs(r-o);return c+l}(e,n));var c=t.g+e.weight+o[0];c<e.g&&(e.g=c,e.f=e.g+e.h,e.previousNode=t,e.path=o[1],e.direction=o[2])}i(19);var S=function(t){Object(h.a)(i,t);var e=Object(f.a)(i);function i(){var t;return Object(l.a)(this,i),(t=e.call(this)).initGrid=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.state.N_ROWS,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.state.N_COLS,n=[],s=0;s<e;s++){for(var a=[],r=0;r<i;r++)a.push(t.newNode(a,r));n.push(a)}return n},t.newNode=function(e,i){return{row:e,col:i,isStart:e===t.state.START_NODE_ROW&&i===t.state.START_NODE_COL,isFinish:e===t.state.FINISH_NODE_ROW&&i===t.state.FINISH_NODE_COL,distance:1/0,heuristic:Math.abs(t.state.FINISH_NODE_ROW-e)+Math.abs(t.state.FINISH_NODE_COL-i),isVisited:!1,isWall:!1,previousNode:null,isNode:!0}},t.state={grid:[],START_NODE_ROW:7,START_NODE_COL:10,FINISH_NODE_ROW:10,FINISH_NODE_COL:6,mousePressed:!1,N_ROWS:20,N_COLS:50,N_ROWS_MOBILE:10,N_COLS_MOBILE:20,isRunning:!1,isStart:!1,isFinish:!1,isWall:!1,row:0,col:0,isDesktop:!0},t.handleMouseDown=t.handleMouseDown.bind(Object(d.a)(t)),t.handleMouseLeave=t.handleMouseLeave.bind(Object(d.a)(t)),t.toggleIsRunning=t.toggleIsRunning.bind(Object(d.a)(t)),t}return Object(u.a)(i,[{key:"componentDidMount",value:function(){var t=this.initGrid();this.setState({grid:t})}},{key:"toggleIsRunning",value:function(){this.setState({isRunning:!this.state.isRunning})}},{key:"toggleView",value:function(){if(!this.state.isRunning){this.clearGrid(),this.clearWalls();var t,e=!this.state.isDesktop;e?(t=this.initGrid(this.state.N_ROWS,this.state.N_COLS),this.setState({isDesktop:e,grid:t})):this.state.START_NODE_ROW>this.state.N_ROWS_MOBILE||this.state.FINISH_NODE_ROW>this.state.N_ROWS_MOBILE||this.state.START_NODE_COL>this.state.N_COLS_MOBILE||this.state.FINISH_NODE_COL>this.state.N_COLS_MOBILE?alert("Start & Finish Nodes Must Be within 10 Rows x 20 Columns"):(t=this.initGrid(this.state.N_ROWS_MOBILE,this.state.N_COLS_MOBILE),this.setState({isDesktop:e,grid:t}))}}},{key:"handleMouseDown",value:function(t,e){if(!this.state.isRunning)if(this.isGridClear())if("node node-start"===document.getElementById("node-".concat(t,"-").concat(e)).className)this.setState({mousePressed:!0,isStart:!0,row:t,col:e});else if("node node-finish"===document.getElementById("node-".concat(t,"-").concat(e)).className)this.setState({mousePressed:!0,isFinish:!0,row:t,col:e});else{var i=j(this.state.grid,t,e);this.setState({grid:i,mousePressed:!0,isWall:!0,row:t,col:e})}else this.clearGrid()}},{key:"isGridClear",value:function(){var t,e=Object(c.a)(this.state.grid);try{for(e.s();!(t=e.n()).done;){var i,n=t.value,s=Object(c.a)(n);try{for(s.s();!(i=s.n()).done;){var a=i.value,r=document.getElementById("node-".concat(a.row,"-").concat(a.col)).className;if("node node-visited"===r||"node node-shortest-path"===r)return!1}}catch(o){s.e(o)}finally{s.f()}}}catch(o){e.e(o)}finally{e.f()}return!0}},{key:"handleMouseEnter",value:function(t,e){if(!this.state.isRunning&&this.state.mousePressed){var i=document.getElementById("node-".concat(t,"-").concat(e)).className;if(this.state.isStart){if("node node-wall"!==i)this.state.grid[this.state.row][this.state.col].isStart=!1,document.getElementById("node-".concat(this.state.row,"-").concat(this.state.col)).className="node",this.setState({row:t,col:e}),this.state.grid[t][e].isStart=!0,document.getElementById("node-".concat(t,"-").concat(e)).className="node node-start";this.setState({START_NODE_ROW:t,START_NODE_COL:e})}else if(this.state.isFinishN){if("node node-wall"!==i)this.state.grid[this.state.row][this.state.col].isFinish=!1,document.getElementById("node-".concat(this.state.row,"-").concat(this.state.col)).className="node",this.setState({row:t,col:e}),this.state.grid[t][e].isFinish=!0,document.getElementById("node-".concat(t,"-").concat(e)).className="node node-finish";this.setState({FINISH_NODE_ROW:t,FINISH_NODE_COL:e})}else if(this.state.isWall){var n=j(this.state.grid,t,e);this.setState({grid:n})}}}},{key:"handleMouseUp",value:function(t,e){if(!this.state.isRunning){if(this.setState({mousePressed:!1}),this.state.isStart){var i=!this.state.isStart;this.setState({startNode:i,START_NODE_ROW:t,START_NODE_COL:e})}else if(this.state.isFinishNode){var n=!this.state.isFinish;this.setState({finishNode:n,FINISH_NODE_ROW:t,FINISH_NODE_COL:e})}this.initGrid()}}},{key:"handleMouseLeave",value:function(){if(this.state.isStart){var t=!this.state.isStart;this.setState({startNode:t,mousePressed:!1})}else if(this.state.isFinish){var e=!this.state.isFinish;this.setState({finishNode:e,mousePressed:!1})}else if(this.state.isWall){var i=!this.state.isWall;this.setState({wallNode:i,mousePressed:!1}),this.initGrid()}}},{key:"clearGrid",value:function(){if(!this.state.isRunning){var t,e=this.state.grid.slice(),i=Object(c.a)(e);try{for(i.s();!(t=i.n()).done;){var n,s=t.value,a=Object(c.a)(s);try{for(a.s();!(n=a.n()).done;){var r=n.value,o=document.getElementById("node-".concat(r.row,"-").concat(r.col)).className;"node node-start"!==o&&"node node-finish"!==o&&"node node-wall"!==o&&(document.getElementById("node-".concat(r.row,"-").concat(r.col)).className="node",r.isVisited=!1,r.distance=1/0,r.heuristic=Math.abs(this.state.FINISH_NODE_ROW-r.row)+Math.abs(this.state.FINISH_NODE_COL-r.col)),"node node-finish"===o&&(r.isVisited=!1,r.distance=1/0,r.heuristic=0),"node node-start"===o&&(r.isVisited=!1,r.distance=1/0,r.heuristic=Math.abs(this.state.FINISH_NODE_ROW-r.row)+Math.abs(this.state.FINISH_NODE_COL-r.col),r.isStart=!0,r.isWall=!1,r.previousNode=null,r.isNode=!0)}}catch(l){a.e(l)}finally{a.f()}}}catch(l){i.e(l)}finally{i.f()}}}},{key:"clearWalls",value:function(){if(!this.state.isRunning){var t,e=this.state.grid.slice(),i=Object(c.a)(e);try{for(i.s();!(t=i.n()).done;){var n,s=t.value,a=Object(c.a)(s);try{for(a.s();!(n=a.n()).done;){var r=n.value;"node node-wall"===document.getElementById("node-".concat(r.row,"-").concat(r.col)).className&&(document.getElementById("node-".concat(r.row,"-").concat(r.col)).className="node",r.isWall=!1)}}catch(o){a.e(o)}finally{a.f()}}}catch(o){i.e(o)}finally{i.f()}}}},{key:"visualize",value:function(t){if(!this.state.isRunning){this.clearGrid(),this.toggleIsRunning();var e,i=this.state.grid,n=i[this.state.START_NODE_ROW][this.state.START_NODE_COL],s=i[this.state.FINISH_NODE_ROW][this.state.FINISH_NODE_COL];switch(t){case"Dijkstra":e=N(i,n,s);break;case"astar":e=function(t,e,i,n,s,a){if(!e||!i||e===i)return!1;t[e.id].g=0,t[e.id].f=0,t[e.id].direction="N";var r=Object.keys(t);for(console.log("frontier:",r);r.length;){for(var o=b(t,r);"wall"===o.status&&r.length;)o=b(t,r);if(o.g===1/0)return!1;if(n.push(o),o.status="visited",o.id===i.id)return n;p(t,o,s,e,i,a)}}(i,n,s);break;case"BFS":e=function(t,e,i){for(var n=[],s=[e];s.length;){var a=s.shift();if(a.id===i.id)return n;if(!a.isWall&&(a.isStart||!a.isVisited)){a.isVisited=!0,n.push(a);var r=a.col,o=a.row,c=void 0;o>0&&((c=t[o-1][r]).isVisited||(c.previousNode=a,s.push(c))),o<t.length-1&&((c=t[o+1][r]).isVisited||(c.previousNode=a,s.push(c))),r>0&&((c=t[o][r-1]).isVisited||(c.previousNode=a,s.push(c))),r<t[0].length-1&&((c=t[o][r+1]).isVisited||(c.previousNode=a,s.push(c)))}}return n}(i,n,s);break;case"DFS":e=function(t,e,i){for(var n=[],s=[e];s.length;){var a=s.pop();if(a.id===i.id)return n;if(!a.isWall&&(a.isStart||!a.isVisited)){a.isVisited=!0,n.push(a);var r=a.col,o=a.row,c=void 0;o>0&&((c=t[o-1][r]).isVisited||(c.previousNode=a,s.push(c))),o<t.length-1&&((c=t[o+1][r]).isVisited||(c.previousNode=a,s.push(c))),r>0&&((c=t[o][r-1]).isVisited||(c.previousNode=a,s.push(c))),r<t[0].length-1&&((c=t[o][r+1]).isVisited||(c.previousNode=a,s.push(c)))}}return n}(i,n,s)}var a=function(t){var e=[],i=t;for(;null!==i;)e.unshift(i),i=i.previousNode;return e}(s);a.push("end"),this.animate(e,a)}}},{key:"animate",value:function(t,e){for(var i=this,n=function(n){if(n===t.length)return setTimeout((function(){i.animatePath(e)}),10*n),{v:void 0};setTimeout((function(){var e=t[n],i=document.getElementById("node-".concat(e.row,"-").concat(e.col)).className;"node node-start"!==i&&"node node-finish"!==i&&(document.getElementById("node-".concat(e.row,"-").concat(e.col)).className="node node-visited")}),10*n)},s=0;s<=t.length;s++){var a=n(s);if("object"===typeof a)return a.v}}},{key:"animatePath",value:function(t){for(var e=this,i=function(i){"end"===t[i]?setTimeout((function(){e.toggleIsRunning()}),50*i):setTimeout((function(){var e=t[i],n=document.getElementById("node-".concat(e.row,"-").concat(e.col)).className;"node node-start"!==n&&"node node-finish"!==n&&(document.getElementById("node-".concat(e.row,"-").concat(e.col)).className="node node-shortest-path")}),40*i)},n=0;n<t.length;n++)i(n)}},{key:"render",value:function(){var t=this,e=this.state,i=e.grid,s=e.mousePressed;return Object(n.jsxs)("div",{children:[Object(n.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark ",children:[Object(n.jsx)("a",{className:"navbar-brand",href:"/",children:Object(n.jsx)("b",{children:"PathFinding Visualizer"})}),Object(n.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(n.jsx)("span",{className:"navbar-toggler-icon"})}),Object(n.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(n.jsxs)("ul",{className:"navbar-nav",children:[Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsxs)("a",{className:"nav-link",href:"http://www.github.com/jfur1/pathfinding",children:[" ","PathFinder Visualizer code"," "]})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)("a",{className:"nav-link",href:"https://jfur1.github.io",children:"Check Out Other Cool Projects"})})]})})]}),Object(n.jsx)("table",{className:"grid-container",onMouseLeave:function(){return t.handleMouseLeave()},children:Object(n.jsx)("tbody",{className:"grid",children:i.map((function(e,i){return Object(n.jsx)("tr",{children:e.map((function(e,i){var a=e.row,r=e.col,o=e.isFinish,c=e.isStart,l=e.isWall;return Object(n.jsx)(v,{col:r,isFinish:o,isStart:c,isWall:l,mousePressed:s,onMouseDown:function(e,i){return t.handleMouseDown(e,i)},onMouseEnter:function(e,i){return t.handleMouseEnter(e,i)},onMouseUp:function(){return t.handleMouseUp(a,r)},row:a},i)}))},i)}))})}),Object(n.jsx)("button",{type:"button",className:"btn btn-danger",onClick:function(){return t.clearGrid()},children:"Clear Grid"}),Object(n.jsx)("button",{type:"button",className:"btn btn-warning",onClick:function(){return t.clearWalls()},children:"Clear Walls"}),Object(n.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(){return t.visualize("Dijkstra")},children:"Dijkstra's"}),Object(n.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(){return t.visualize("astar")},children:"A*"}),Object(n.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(){return t.visualize("BFS")},children:"Breadth-First Search"}),Object(n.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(){return t.visualize("DFS")},children:"Depth-First Search"}),this.state.isDesktopView?Object(n.jsx)("button",{type:"button",className:"btn btn-light",onClick:function(){return t.toggleView()},children:"Mobile View"}):Object(n.jsx)("button",{type:"button",className:"btn btn-dark",onClick:function(){return t.toggleView()},children:"Desktop View"})]})}}]),i}(s.Component),j=function(t,e,i){var n=t.slice(),s=n[e][i];if(!s.isStart&&!s.isFinish&&s.isNode){var a=Object(o.a)(Object(o.a)({},s),{},{isWall:!s.isWall});n[e][i]=a}return n};i(20),s.Component;window.onclick=function(t){if(!t.target.matches(".dropbtn")){var e,i=document.getElementsByClassName("dropdown-content");for(e=0;e<i.length;e++){var n=i[e];n.classList.contains("show")&&n.classList.remove("show")}}};var _=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(S,{})})};r.a.render(Object(n.jsx)(_,{}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.58b5b695.chunk.js.map