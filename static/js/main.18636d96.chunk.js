(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var i=n(0),o=n(1),s=n(9),r=n.n(s),a=(n(15),n(16),n(8)),c=n(3),u=n(4),l=n(6),d=n(5),h=(n(17),function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props,e=t.col,n=t.isFinish,o=t.isStart,s=t.isWall,r=t.onMouseDown,a=t.onMouseEnter,c=t.onMouseUp,u=t.row,l=(t.g,t.h,t.f,t.direction,t.weight,t.status,n?"node-finish":o?"node-start":s?"node-wall":"");return Object(i.jsx)("div",{id:"node-".concat(u,"-").concat(e),className:"node ".concat(l),onMouseDown:function(){return r(u,e)},onMouseEnter:function(){return a(u,e)},onMouseUp:function(){return c()}})}}]),n}(o.Component)),f=n(2);function v(t,e,n){var i=[];e.g=0;for(var o=function(t){var e,n=[],i=Object(f.a)(t);try{for(i.s();!(e=i.n()).done;){var o,s=e.value,r=Object(f.a)(s);try{for(r.s();!(o=r.n()).done;){var a=o.value;n.push(a)}}catch(c){r.e(c)}finally{r.f()}}}catch(c){i.e(c)}finally{i.f()}return n}(t);o.length;){g(o);var s=o.shift();if(!s.isWall){if(s.g===1/0)return i;if(s.isVisited=!0,i.push(s),s===n)return i;m(s,t)}}}function g(t){t.sort((function(t,e){return t.g-e.g}))}function m(t,e){var n,i=function(t,e){var n=[],i=t.col,o=t.row;o>0&&n.push(e[o-1][i]);o<e.length-1&&n.push(e[o+1][i]);i>0&&n.push(e[o][i-1]);i<e[0].length-1&&n.push(e[o][i+1]);return n.filter((function(t){return!t.isVisited}))}(t,e),o=Object(f.a)(i);try{for(o.s();!(n=o.n()).done;){var s=n.value;s.g=t.g+1,s.previousNode=t}}catch(r){o.e(r)}finally{o.f()}}function p(t){for(var e=[],n=t;null!==n;)e.unshift(n),n=n.previousNode;return e}function j(t,e,n){var i=[];e.distance=0;for(var o=function(t){var e,n=[],i=Object(f.a)(t);try{for(i.s();!(e=i.n()).done;){var o,s=e.value,r=Object(f.a)(s);try{for(r.s();!(o=r.n()).done;){var a=o.value;n.push(a)}}catch(c){r.e(c)}finally{r.f()}}}catch(c){i.e(c)}finally{i.f()}return n}(t);o.length;){o.sort((function(t,e){return t.distance-e.distance}));var s=o.shift();if(!s.isWall){if(s.distance===1/0)return!1;if(s.isVisited=!0,i.push(s),s==n)return i;b(s,t)}}}function b(t,e){var n,i=function(t,e){var n=[],i=t.col,o=t.row;o>0&&n.push(e[o-1][i]);o<e.length-1&&n.push(e[o+1][i]);i>0&&n.push(e[o][i-1]);i<e[0].length-1&&n.push(e[o][i+1]);return n.filter((function(t){return!t.isVisited}))}(t,e),o=Object(f.a)(i);try{for(o.s();!(n=o.n()).done;){var s=n.value;s.distance=t.distance+1+s.distanceToFinishNode,s.previousNode=t}}catch(r){o.e(r)}finally{o.f()}}n(18);var y=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;return Object(c.a)(this,n),(t=e.call(this)).initGrid=function(){for(var t=[],e={},n=0;n<20;n++){for(var i=[],o=0;o<50;o++){var s,r="".concat(n,"-").concat(o);(s=O(o,n)).status=10===n&&15===o?"start":10===n&&35===o?"target":"node",i.push(s),e[r]=s}t.push(i)}return[t,e]},t.state={grid:[],nodes:{},mouseDown:!1,algoFinished:!0,currentAlgo:null,start:null,target:null},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=this.initGrid();this.setState({grid:t[0],nodes:t[1]})}},{key:"onMouseDown",value:function(t,e){var n=w(this.state.grid,this.state.nodes,t,e);this.setState({grid:n[0],nodes:n[1],mouseDown:!0})}},{key:"onMouseEnter",value:function(t,e){if(this.state.mouseDown){var n=w(this.state.grid,this.state.nodes,t,e);this.setState({grid:n[0],nodes:n[1]})}}},{key:"onMouseUp",value:function(){this.setState({mouseDown:!1})}},{key:"animateSearch",value:function(t,e){var n=this;if(!1===t||1===e.length||1===t.length)console.log("No path found."),this.algoFinished=!0,document.getElementById("startButton").disabled=!1,document.getElementById("clearGridButton").disabled=!1;else for(var i=function(i){if(i===t.length)return setTimeout((function(){n.animatePath(e)}),10*i),{v:void 0};setTimeout((function(){var e=t[i];document.getElementById("node-".concat(e.row,"-").concat(e.col)).className="node node-visited"}),10*i)},o=0;o<=t.length;o++){var s=i(o);if("object"===typeof s)return s.v}}},{key:"animatePath",value:function(t){for(var e=function(e){setTimeout((function(){var n=t[e];document.getElementById("node-".concat(n.row,"-").concat(n.col)).className="node node-shortest-path"}),25*e)},n=0;n<t.length;n++)e(n);this.algoFinished=!0,document.getElementById("startButton").disabled=!1,document.getElementById("clearGridButton").disabled=!1}},{key:"visualizeSearch",value:function(){var t=document.getElementById("startButton").innerHTML;if("Visualize Algorithm"===t)console.log("Select an algorithm!");else{console.log("Selected Algorithm:",t),this.clearGrid(),document.getElementById("startButton").disabled=!0,document.getElementById("clearGridButton").disabled=!0,this.algoFinished=!1;var e=this.state,n=e.grid,i=e.nodes,o=n[10][15],s=n[10][35],r=[],a=[];"A* Search"===t?(console.log(i),r=j(i,o,s),a=function(t){for(var e=[],n=t;null!==n;)e.unshift(n),n=n.previousNode;return e}(s),console.log("Astar Visited:",r),console.log("Astar Path:",a),this.animateSearch(r,a)):"Dijkstra's Algorithm"===t?(r=v(n,o,s),a=p(s),console.log("Dijkstra Visited:",r),console.log("Dijkstra Path:",a),this.animateSearch(r,a)):"Depth-First-Search"===t?(r=function(t,e,n){for(var i=[],o=[e];o.length;){var s=o.pop();if(s.id===n.id)return i;if(!s.isWall&&(s.isStart||!s.isVisited)){s.isVisited=!0,i.push(s);var r=s.col,a=s.row,c=void 0;a>0&&((c=t[a-1][r]).isVisited||(c.previousNode=s,o.push(c))),a<t.length-1&&((c=t[a+1][r]).isVisited||(c.previousNode=s,o.push(c))),r>0&&((c=t[a][r-1]).isVisited||(c.previousNode=s,o.push(c))),r<t[0].length-1&&((c=t[a][r+1]).isVisited||(c.previousNode=s,o.push(c)))}}return i}(n,o,s),a=p(s),console.log("DFS Visited:",r),console.log("DFS Path:",a),this.animateSearch(r,a)):"Breadth-First-Search"===t&&(r=function(t,e,n){for(var i=[],o=[e];o.length;){var s=o.shift();if(s.id===n.id)return i;if(!s.isWall&&(s.isStart||!s.isVisited)){s.isVisited=!0,i.push(s);var r=s.col,a=s.row,c=void 0;a>0&&((c=t[a-1][r]).isVisited||(c.previousNode=s,o.push(c))),a<t.length-1&&((c=t[a+1][r]).isVisited||(c.previousNode=s,o.push(c))),r>0&&((c=t[a][r-1]).isVisited||(c.previousNode=s,o.push(c))),r<t[0].length-1&&((c=t[a][r+1]).isVisited||(c.previousNode=s,o.push(c)))}}return i}(n,o,s),a=p(s),console.log("BFS Visited:",r),console.log("BFS Path:",a),this.animateSearch(r,a))}}},{key:"clearGrid",value:function(){if(this.algoFinished)for(var t=0;t<20;t++)for(var e=0;e<50;e++)this.state.grid[t][e].previousNode=null,this.state.grid[t][e].isVisited=!1,10===t&&15===e?document.getElementById("node-".concat(t,"-").concat(e)).className="node node-start":10===t&&35===e?document.getElementById("node-".concat(t,"-").concat(e)).className="node node-finish":("node node-visited"===document.getElementById("node-".concat(t,"-").concat(e)).className||"node node-shortest-path"===document.getElementById("node-".concat(t,"-").concat(e)).className)&&(document.getElementById("node-".concat(t,"-").concat(e)).className="node")}},{key:"render",value:function(){var t=this,e=this.state,n=e.grid,o=e.mouseDown;e.algoFinished;return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{class:"board",children:[Object(i.jsx)("div",{class:"center",children:Object(i.jsx)("button",{id:"startButton",onClick:function(){return t.visualizeSearch()},children:"Visualize Algorithm"})}),Object(i.jsx)("div",{class:"center",children:Object(i.jsx)("button",{id:"clearGridButton",onClick:function(){return t.initGrid()},children:"Reset Grid"})}),Object(i.jsx)("div",{className:"grid",children:n.map((function(e,n){return Object(i.jsx)("div",{children:e.map((function(e,n){var s=e.row,r=e.col,a=e.isFinish,c=e.isStart,u=e.isWall;return Object(i.jsx)(h,{col:r,g:1/0,h:null,f:1/0,isFinish:a,isStart:c,isWall:u,mouseDown:o,onMouseDown:function(e,n){return t.onMouseDown(e,n)},onMouseEnter:function(e,n){return t.onMouseEnter(e,n)},onMouseUp:function(){return t.onMouseUp()},row:s},n)}))},n)}))})]})})}}]),n}(o.Component),O=function(t,e){return{col:t,row:e,isStart:10===e&&15===t,isFinish:10===e&&35===t,g:1/0,h:null,f:1/0,status:null,isVisited:!1,isWall:!1,previousNode:null,weight:0,id:"".concat(e,"-").concat(t)}},w=function(t,e,n,i){var o=t.slice(),s=e;if(10===n&&15===i||10===n&&35===i)return[t,e];var r=o[n][i],c=Object(a.a)(Object(a.a)({},r),{},{isWall:!r.isWall});return c.isWall?c.status="wall":c.status="node",s["".concat(n,"-").concat(i)]=c,o[n][i]=c,[o,s]},S=(n(19),function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(t){var i;return Object(c.a)(this,n),(i=e.call(this,t)).state={value:t.value},i}return Object(u.a)(n,[{key:"handleChange",value:function(t){this.setState({value:t.target.value})}},{key:"toggleDropdown",value:function(){document.getElementById("myDropdown").classList.toggle("show")}},{key:"selectAlgo",value:function(t){this.toggleDropdown(),document.getElementById("startButton").innerHTML=t}},{key:"render",value:function(){var t=this;return Object(i.jsx)("div",{class:"navbar",children:Object(i.jsxs)("div",{class:"dropdown",children:[Object(i.jsx)("button",{onClick:function(){return t.toggleDropdown()},class:"dropbtn",children:"Select an Algorithm"}),Object(i.jsxs)("div",{id:"myDropdown",class:"dropdown-content",children:[Object(i.jsx)("a",{href:"#",id:"dijkstraStart",onClick:function(){return t.selectAlgo("Dijkstra's Algorithm")},children:"Dijkstra's Algorithm"}),Object(i.jsx)("a",{href:"#",id:"astarStart",onClick:function(){return t.selectAlgo("A* Search")},children:"A* Search"}),Object(i.jsx)("a",{href:"#",id:"bfsStart",onClick:function(){return t.selectAlgo("Breadth-First-Search")},children:"BFS"}),Object(i.jsx)("a",{href:"#",id:"dfsStart",onClick:function(){return t.selectAlgo("Depth-First-Search")},children:"DFS"})]})]})})}}]),n}(o.Component));window.onclick=function(t){if(!t.target.matches(".dropbtn")){var e,n=document.getElementsByClassName("dropdown-content");for(e=0;e<n.length;e++){var i=n[e];i.classList.contains("show")&&i.classList.remove("show")}}};var B=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(S,{}),Object(i.jsx)(y,{})]})};r.a.render(Object(i.jsx)(B,{}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.18636d96.chunk.js.map