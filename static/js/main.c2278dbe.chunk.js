(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{16:function(t,e,s){},17:function(t,e,s){},18:function(t,e,s){},19:function(t,e,s){},21:function(t,e,s){"use strict";s.r(e);var i=s(0),n=s(2),a=s(10),o=s.n(a),r=(s(16),s(17),s(9)),c=s(1),d=s(4),l=s(5),u=s(3),h=s(7),f=s(6),v=(s(18),function(t){Object(h.a)(s,t);var e=Object(f.a)(s);function s(){return Object(d.a)(this,s),e.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){var t=this.props,e=t.col,s=t.isFinish,n=t.isStart,a=t.isWall,o=t.onMouseDown,r=t.onMouseEnter,c=t.onMouseUp,d=t.row,l=s?"node-finish":n?"node-start":a?"node-wall":"";return Object(i.jsx)("td",{id:"node-".concat(d,"-").concat(e),className:"node ".concat(l),onMouseDown:function(){return o(d,e)},onMouseEnter:function(){return r(d,e)},onMouseUp:function(){return c()}})}}]),s}(n.Component));function b(t,e,s){var i=[];e.distance=0;for(var n=function(t){var e,s=[],i=Object(c.a)(t);try{for(i.s();!(e=i.n()).done;){var n,a=e.value,o=Object(c.a)(a);try{for(o.s();!(n=o.n()).done;){var r=n.value;s.push(r)}}catch(d){o.e(d)}finally{o.f()}}}catch(d){i.e(d)}finally{i.f()}return s}(t);n.length;){O(n);var a=n.shift();if(!a.isWall){if(a.distance===1/0)return i;if(a.isVisited=!0,i.push(a),a===s)return i;m(a,t)}}}function O(t){t.sort((function(t,e){return t.distance-e.distance}))}function m(t,e){var s,i=function(t,e){var s=[],i=t.col,n=t.row;n>0&&s.push(e[n-1][i]);n<e.length-1&&s.push(e[n+1][i]);i>0&&s.push(e[n][i-1]);i<e[0].length-1&&s.push(e[n][i+1]);return s.filter((function(t){return!t.isVisited}))}(t,e),n=Object(c.a)(i);try{for(n.s();!(s=n.n()).done;){var a=s.value;a.distance=t.distance+1,a.previousNode=t}}catch(o){n.e(o)}finally{n.f()}}function g(t,e,s){var i=[];e.distance=0;for(var n=function(t){var e,s=[],i=Object(c.a)(t);try{for(i.s();!(e=i.n()).done;){var n,a=e.value,o=Object(c.a)(a);try{for(o.s();!(n=o.n()).done;){var r=n.value;s.push(r)}}catch(d){o.e(d)}finally{o.f()}}}catch(d){i.e(d)}finally{i.f()}return s}(t);n.length;){n.sort((function(t,e){return t.distance-e.distance}));var a=n.shift();if(!a.isWall){if(a.distance===1/0)return!1;if(a.isVisited=!0,i.push(a),a===s)return i;N(a,t)}}}function N(t,e){var s,i=function(t,e){var s=[],i=t.col,n=t.row;n>0&&s.push(e[n-1][i]);n<e.length-1&&s.push(e[n+1][i]);i>0&&s.push(e[n][i-1]);i<e[0].length-1&&s.push(e[n][i+1]);return s.filter((function(t){return!t.isVisited}))}(t,e),n=Object(c.a)(i);try{for(n.s();!(s=n.n()).done;){var a=s.value;a.distance=t.distance+1+a.distanceToFinishNode,a.previousNode=t}}catch(o){n.e(o)}finally{n.f()}}s(19);var p=function(t){Object(h.a)(s,t);var e=Object(f.a)(s);function s(){var t;return Object(d.a)(this,s),(t=e.call(this)).initGrid=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.state.N_ROWS,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.state.N_COLS,i=[],n=0;n<e;n++){for(var a=[],o=0;o<s;o++)a.push(t.newNode(n,o));i.push(a)}return i},t.newNode=function(e,s){return{row:e,col:s,isStart:e===t.state.START_NODE_ROW&&s===t.state.START_NODE_COL,isFinish:e===t.state.FINISH_NODE_ROW&&s===t.state.FINISH_NODE_COL,distance:1/0,distanceToFinishNode:Math.abs(t.state.FINISH_NODE_ROW-e)+Math.abs(t.state.FINISH_NODE_COL-s),isVisited:!1,isWall:!1,previousNode:null,isNode:!0}},t.state={grid:[],START_NODE_ROW:9,START_NODE_COL:14,FINISH_NODE_ROW:9,FINISH_NODE_COL:32,mousePressed:!1,N_ROWS:20,N_COLS:50,N_ROWS_MOBILE:10,N_COLS_MOBILE:20,isRunning:!1,isStartNode:!1,isFinishNode:!1,isWallNode:!1,curRow:0,curCol:0,isDesktop:!0,visitedAnimationSpeed:10,shortestPathAnimationSpeed:40},t.handleMouseDown=t.handleMouseDown.bind(Object(u.a)(t)),t.handleMouseLeave=t.handleMouseLeave.bind(Object(u.a)(t)),t.toggleIsRunning=t.toggleIsRunning.bind(Object(u.a)(t)),t}return Object(l.a)(s,[{key:"componentDidMount",value:function(){var t=this.initGrid();(!!navigator.userAgent.match(/iphone|android|blackberry/gi)||!1)&&alert("Mobile version still in development. Try using a computer for the best experience!"),this.updateAlgoDescription("start"),this.setState({grid:t})}},{key:"toggleIsRunning",value:function(){this.setState({isRunning:!this.state.isRunning})}},{key:"toggleView",value:function(){if(!this.state.isRunning){this.clearGrid(),this.clearWalls();var t,e=!this.state.isDesktop;e?(t=this.initGrid(this.state.N_ROWS,this.state.N_COLS),this.setState({isDesktop:e,grid:t})):this.state.START_NODE_ROW>this.state.N_ROWS_MOBILE||this.state.FINISH_NODE_ROW>this.state.N_ROWS_MOBILE||this.state.START_NODE_COL>this.state.N_COLS_MOBILE||this.state.FINISH_NODE_COL>this.state.N_COLS_MOBILE?alert("Start & Finish Nodes Must Be within 10 Rows x 20 Columns"):(t=this.initGrid(this.state.N_ROWS_MOBILE,this.state.N_COLS_MOBILE),this.setState({isDesktop:e,grid:t}))}}},{key:"toggleDropdown",value:function(){this.state.isRunning||document.getElementById("myDropdown").classList.toggle("show")}},{key:"toggleSpeed",value:function(t){this.state.isRunning||(this.toggleDropdown(),document.getElementById("animation-speed").innerHTML="Animation Speed: \n".concat(t),"Slow"===t?this.setState({visitedAnimationSpeed:25,shortestPathAnimationSpeed:55}):"Medium"===t?this.setState({visitedAnimationSpeed:10,shortestPathAnimationSpeed:40}):this.setState({visitedAnimationSpeed:5,shortestPathAnimationSpeed:25}))}},{key:"handleMouseDown",value:function(t,e){if(!this.state.isRunning)if(this.isGridClear())if("node node-start"===document.getElementById("node-".concat(t,"-").concat(e)).className)this.setState({mousePressed:!0,isStartNode:!0,curRow:t,curCol:e});else if("node node-finish"===document.getElementById("node-".concat(t,"-").concat(e)).className)this.setState({mousePressed:!0,isFinishNode:!0,curRow:t,curCol:e});else{var s=j(this.state.grid,t,e);this.setState({grid:s,mousePressed:!0,isWallNode:!0,curRow:t,curCol:e})}else this.clearGrid()}},{key:"isGridClear",value:function(){var t,e=Object(c.a)(this.state.grid);try{for(e.s();!(t=e.n()).done;){var s,i=t.value,n=Object(c.a)(i);try{for(n.s();!(s=n.n()).done;){var a=s.value,o=document.getElementById("node-".concat(a.row,"-").concat(a.col)).className;if("node node-visited"===o||"node node-shortest-path"===o)return!1}}catch(r){n.e(r)}finally{n.f()}}}catch(r){e.e(r)}finally{e.f()}return!0}},{key:"handleMouseEnter",value:function(t,e){if(!this.state.isRunning&&this.state.mousePressed){var s=document.getElementById("node-".concat(t,"-").concat(e)).className;if(this.state.isStartNode){if("node node-wall"!==s)this.state.grid[this.state.curRow][this.state.curCol].isStart=!1,document.getElementById("node-".concat(this.state.curRow,"-").concat(this.state.curCol)).className="node",this.setState({curRow:t,curCol:e}),this.state.grid[t][e].isStart=!0,document.getElementById("node-".concat(t,"-").concat(e)).className="node node-start";this.setState({START_NODE_ROW:t,START_NODE_COL:e})}else if(this.state.isFinishNode){if("node node-wall"!==s)this.state.grid[this.state.curRow][this.state.curCol].isFinish=!1,document.getElementById("node-".concat(this.state.curRow,"-").concat(this.state.curCol)).className="node",this.setState({curRow:t,curCol:e}),this.state.grid[t][e].isFinish=!0,document.getElementById("node-".concat(t,"-").concat(e)).className="node node-finish";this.setState({FINISH_NODE_ROW:t,FINISH_NODE_COL:e})}else if(this.state.isWallNode){var i=j(this.state.grid,t,e);this.setState({grid:i})}}}},{key:"handleMouseUp",value:function(t,e){if(!this.state.isRunning){if(this.setState({mousePressed:!1}),this.state.isStartNode){var s=!this.state.isStartNode;this.setState({isStartNode:s,START_NODE_ROW:t,START_NODE_COL:e})}else if(this.state.isFinishNode){var i=!this.state.isFinishNode;this.setState({isFinishNode:i,FINISH_NODE_ROW:t,FINISH_NODE_COL:e})}this.initGrid()}}},{key:"handleMouseLeave",value:function(){if(this.state.isStartNode){var t=!this.state.isStartNode;this.setState({isStartNode:t,mousePressed:!1})}else if(this.state.isFinishNode){var e=!this.state.isFinishNode;this.setState({isFinishNode:e,mousePressed:!1})}else if(this.state.isWallNode){var s=!this.state.isWallNode;this.setState({isWallNode:s,mousePressed:!1}),this.initGrid()}}},{key:"clearGrid",value:function(){if(!this.state.isRunning){var t,e=this.state.grid.slice(),s=Object(c.a)(e);try{for(s.s();!(t=s.n()).done;){var i,n=t.value,a=Object(c.a)(n);try{for(a.s();!(i=a.n()).done;){var o=i.value,r=document.getElementById("node-".concat(o.row,"-").concat(o.col)).className;"node node-start"!==r&&"node node-finish"!==r&&"node node-wall"!==r&&(document.getElementById("node-".concat(o.row,"-").concat(o.col)).className="node",o.isVisited=!1,o.distance=1/0,o.heuristic=Math.abs(this.state.FINISH_NODE_ROW-o.row)+Math.abs(this.state.FINISH_NODE_COL-o.col)),"node node-finish"===r&&(o.isVisited=!1,o.distance=1/0,o.heuristic=0),"node node-start"===r&&(o.isVisited=!1,o.distance=1/0,o.heuristic=Math.abs(this.state.FINISH_NODE_ROW-o.row)+Math.abs(this.state.FINISH_NODE_COL-o.col),o.isStart=!0,o.isWall=!1,o.previousNode=null,o.isNode=!0)}}catch(d){a.e(d)}finally{a.f()}}}catch(d){s.e(d)}finally{s.f()}}}},{key:"clearWalls",value:function(){if(!this.state.isRunning){var t,e=this.state.grid.slice(),s=Object(c.a)(e);try{for(s.s();!(t=s.n()).done;){var i,n=t.value,a=Object(c.a)(n);try{for(a.s();!(i=a.n()).done;){var o=i.value;"node node-wall"===document.getElementById("node-".concat(o.row,"-").concat(o.col)).className&&(document.getElementById("node-".concat(o.row,"-").concat(o.col)).className="node",o.isWall=!1)}}catch(r){a.e(r)}finally{a.f()}}}catch(r){s.e(r)}finally{s.f()}}}},{key:"visualize",value:function(t){if(this.updateAlgoDescription(t),!this.state.isRunning){this.clearGrid(),this.toggleIsRunning();var e,s=this.state.grid,i=s[this.state.START_NODE_ROW][this.state.START_NODE_COL],n=s[this.state.FINISH_NODE_ROW][this.state.FINISH_NODE_COL];switch(t){case"Dijkstra":e=b(s,i,n);break;case"astar":e=g(s,i,n);break;case"BFS":e=function(t,e,s){for(var i=[],n=[e];n.length;){var a=n.shift();if(a===s)return i;if(!a.isWall&&(a.isStart||!a.isVisited)){a.isVisited=!0,i.push(a);var o=a.col,r=a.row,c=void 0;r>0&&((c=t[r-1][o]).isVisited||(c.previousNode=a,n.push(c))),r<t.length-1&&((c=t[r+1][o]).isVisited||(c.previousNode=a,n.push(c))),o>0&&((c=t[r][o-1]).isVisited||(c.previousNode=a,n.push(c))),o<t[0].length-1&&((c=t[r][o+1]).isVisited||(c.previousNode=a,n.push(c)))}}}(s,i,n);break;case"DFS":e=function(t,e,s){var i=[],n=[];for(n.push(e);n.length;){var a=n.pop();if(a===s)return i;if(!a.isWall&&(a.isStart||!a.isVisited)){a.isVisited=!0,i.push(a);var o=a.col,r=a.row,c=void 0;r>0&&((c=t[r-1][o]).isVisited||(c.previousNode=a,n.push(c))),r<t.length-1&&((c=t[r+1][o]).isVisited||(c.previousNode=a,n.push(c))),o>0&&((c=t[r][o-1]).isVisited||(c.previousNode=a,n.push(c))),o<t[0].length-1&&((c=t[r][o+1]).isVisited||(c.previousNode=a,n.push(c)))}}}(s,i,n)}var a=function(t){var e=[],s=t;for(;null!==s;)e.unshift(s),s=s.previousNode;return e}(n);a.push("end"),this.animate(e,a)}}},{key:"updateAlgoDescription",value:function(t){this.state.isRunning||(document.getElementById("algoDescription").innerHTML="Dijkstra"===t?"".concat(t,"'s Algorithm is <i><b>weighted</b></i> and <i><b>does guarantee</b></i> the shortest path!"):"astar"===t?"A* Search is <i><b>weighted</b></i> and <i><b>does guarantee</b></i> the shortest path!":"DFS"===t?"Depth-First Search is <i><b>unweighted</b></i> and <i><b>does not guarantee</b></i> the shortest path!":"BFS"===t?"Breadth-First Search is <i><b>unweighted</b></i> and <i><b>does guarantee</b></i> the shortest path!":"Select an algorithm to visualize!<br><br>Try drawing some walls or moving the start / target nodes!")}},{key:"animate",value:function(t,e){for(var s=this,i=function(i){if(i===t.length)return setTimeout((function(){s.animatePath(e)}),s.state.visitedAnimationSpeed*i),{v:void 0};setTimeout((function(){var e=t[i],s=document.getElementById("node-".concat(e.row,"-").concat(e.col)).className;"node node-start"!==s&&"node node-finish"!==s&&(document.getElementById("node-".concat(e.row,"-").concat(e.col)).className="node node-visited")}),s.state.visitedAnimationSpeed*i)},n=0;n<=t.length;n++){var a=i(n);if("object"===typeof a)return a.v}}},{key:"animatePath",value:function(t){for(var e=this,s=function(s){"end"===t[s]?setTimeout((function(){e.toggleIsRunning()}),s*e.state.shortestPathAnimationSpeed):setTimeout((function(){var e=t[s],i=document.getElementById("node-".concat(e.row,"-").concat(e.col)).className;"node node-start"!==i&&"node node-finish"!==i&&(document.getElementById("node-".concat(e.row,"-").concat(e.col)).className="node node-shortest-path")}),s*e.state.shortestPathAnimationSpeed)},i=0;i<t.length;i++)s(i)}},{key:"render",value:function(){var t=this,e=this.state,s=e.grid,n=e.mousePressed;return Object(i.jsxs)("div",{children:[Object(i.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark ",children:[Object(i.jsx)("a",{className:"navbar-brand",href:"https://jfur1.github.io/pathfinding",children:Object(i.jsx)("b",{children:"PathFinding Visualizer"})}),Object(i.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(i.jsxs)("ul",{className:"navbar-nav",children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsxs)("a",{className:"nav-link",href:"http://www.github.com/jfur1/pathfinding",children:[" ","PathFinder Visualizer code"," "]})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("a",{className:"nav-link",href:"https://github.com/jfur1",children:"Check Out Other Cool Projects"})})]})})]}),Object(i.jsxs)("div",{id:"programButtons",children:[Object(i.jsx)("button",{type:"button",className:"btn btn-danger mr-1",onClick:function(){return t.clearGrid()},children:"Clear Grid"}),Object(i.jsx)("button",{type:"button",className:"btn btn-warning mr-1",onClick:function(){return t.clearWalls()},children:"Clear Walls"}),Object(i.jsx)("button",{type:"button",className:"btn btn-primary mr-1",onClick:function(){return t.visualize("Dijkstra")},children:"Dijkstra's"}),Object(i.jsx)("button",{type:"button",className:"btn btn-primary mr-1",onClick:function(){return t.visualize("astar")},children:"A*"}),Object(i.jsx)("button",{type:"button",className:"btn btn-primary mr-1",onClick:function(){return t.visualize("BFS")},children:"Breadth-First Search"}),Object(i.jsx)("button",{type:"button",className:"btn btn-primary mr-1",onClick:function(){return t.visualize("DFS")},children:"Depth-First Search"}),Object(i.jsxs)("div",{class:"dropdown",children:[Object(i.jsx)("button",{id:"animation-speed",onClick:function(){return t.toggleDropdown()},class:"dropbtn",children:"Animation Speed: Medium"}),Object(i.jsxs)("div",{id:"myDropdown",class:"dropdown-content",children:[Object(i.jsx)("a",{href:"#",id:"animate-slow",onClick:function(){return t.toggleSpeed("Slow")},children:"Slow"}),Object(i.jsx)("a",{href:"#",id:"animate-medium",onClick:function(){return t.toggleSpeed("Medium")},children:"Medium"}),Object(i.jsx)("a",{href:"#",id:"animate-fast",onClick:function(){return t.toggleSpeed("Fast")},children:"Fast"})]})]}),this.state.isDesktopView?Object(i.jsx)("button",{type:"button",className:"btn btn-light mr-1",onClick:function(){return t.toggleView()},children:"Mobile View"}):Object(i.jsx)("button",{type:"button",className:"btn btn-dark mr-1",onClick:function(){return t.toggleView()},children:"Desktop View"})]}),Object(i.jsxs)("div",{id:"legend",children:[Object(i.jsx)("ul",{children:Object(i.jsxs)("li",{children:[Object(i.jsx)("div",{class:"start-legend"}),"Start Node"]})}),Object(i.jsx)("ul",{children:Object(i.jsxs)("li",{children:[Object(i.jsx)("div",{class:"target-legend"}),"Target Node"]})}),Object(i.jsx)("ul",{children:Object(i.jsxs)("li",{children:[Object(i.jsx)("div",{class:"unvisited-legend"}),"Unvisited Node"]})}),Object(i.jsx)("ul",{children:Object(i.jsxs)("li",{children:[Object(i.jsx)("div",{class:"visited-legend"}),Object(i.jsx)("div",{class:"visited-legend-2"}),"Visited Node"]})}),Object(i.jsx)("ul",{children:Object(i.jsxs)("li",{children:[Object(i.jsx)("div",{class:"wall-legend"}),"Wall Node"]})}),Object(i.jsx)("ul",{children:Object(i.jsxs)("li",{children:[Object(i.jsx)("div",{class:"path-legend"}),"Shortest-Path Node"]})})]}),Object(i.jsx)("div",{id:"algoDescription"}),Object(i.jsx)("table",{className:"grid-container",onMouseLeave:function(){return t.handleMouseLeave()},children:Object(i.jsx)("tbody",{className:"grid",children:s.map((function(e,s){return Object(i.jsx)("tr",{children:e.map((function(e,s){var a=e.row,o=e.col,r=e.isFinish,c=e.isStart,d=e.isWall;return Object(i.jsx)(v,{col:o,isFinish:r,isStart:c,isWall:d,mousePressed:n,onMouseDown:function(e,s){return t.handleMouseDown(e,s)},onMouseEnter:function(e,s){return t.handleMouseEnter(e,s)},onMouseUp:function(){return t.handleMouseUp(a,o)},row:a},s)}))},s)}))})})]})}}]),s}(n.Component),j=function(t,e,s){var i=t.slice(),n=i[e][s];if(!n.isStart&&!n.isFinish&&n.isNode){var a=Object(r.a)(Object(r.a)({},n),{},{isWall:!n.isWall});i[e][s]=a}return i};window.onclick=function(t){if(!t.target.matches(".dropbtn")){var e,s=document.getElementsByClassName("dropdown-content");for(e=0;e<s.length;e++){var i=s[e];i.classList.contains("show")&&i.classList.remove("show")}}};s(20);var S=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)(p,{})})};o.a.render(Object(i.jsx)(S,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.c2278dbe.chunk.js.map