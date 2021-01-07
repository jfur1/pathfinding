import React, {Component} from 'react';
import Node from './Node/Node';
import {dijkstra} from '../algorithms/dijkstra';
import {astar} from '../algorithms/astar';
import {dfs} from '../algorithms/dfs';
import { bfs } from '../algorithms/bfs';
import './pathfindingVisualizer.css';

const START_NODE_ROW = 10;
const START_NODE_COL = 15;
const FINISH_NODE_ROW = 10;
const FINISH_NODE_COL = 35;

export default class PathfindingVisualizer extends Component {
  constructor(){
    super();
    this.state = {
      grid: [],
      START_NODE_ROW: 5,
      START_NODE_COL: 5,
      FINISH_NODE_ROW: 5,
      FINISH_NODE_COL: 15,
      mousePressed: false,
      N_ROWS: 20,
      N_COLS: 50,
      N_ROWS_MOBILE: 10,
      N_COLS_MOBILE: 20,
      isRunning: false,
      isStartNode: false,
      isFinishNode: false,
      isWallNode: false,
      curRow: 0,
      curCol: 0,
      isDesktop: true,
    };
    // Event Handler Prototypes
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.toggleIsRunning = this.toggleIsRunning.bind(this);
  }

  componentDidMount() {
    const grid = this.initGrid();
    this.setState({grid});
  }

  toggleIsRunning() {
    this.setState({isRunning: !this.state.isRunning});
  }

  toggleView() {
    if (!this.state.isRunning) {
      this.clearGrid();
      this.clearWalls();
      const isDesktop = !this.state.isDesktop;
      let grid;
      if (isDesktop) {
        grid = this.initGrid(
          this.state.N_ROWS,
          this.state.N_COLS,
        );
        this.setState({isDesktop, grid});
      } else {
        if (
          this.state.START_NODE_ROW > this.state.N_ROWS_MOBILE ||
          this.state.FINISH_NODE_ROW > this.state.N_ROWS_MOBILE ||
          this.state.START_NODE_COL > this.state.N_COLS_MOBILE ||
          this.state.FINISH_NODE_COL > this.state.N_COLS_MOBILE
        ) {
          alert('Start & Finish Nodes Must Be within 10 Rows x 20 Columns');
        } else {
          grid = this.initGrid(
            this.state.N_ROWS_MOBILE,
            this.state.N_COLS_MOBILE,
          );
          this.setState({isDesktop, grid});
        }
      }
    }
  }

  /* -------------------- Initialize 2D Grid --------------------- */
  initGrid = (
    rowCount = this.state.ROW_COUNT,
    colCount = this.state.COLUMN_COUNT,
  ) => {
    const initialGrid = [];
    for (let row = 0; row < rowCount; row++) {
      const currentRow = [];
      for (let col = 0; col < colCount; col++) {
        currentRow.push(this.newNode(row, col));
      }
      initialGrid.push(currentRow);
    }
    return initialGrid;
  };

  newNode = (row, col) => {
    return {
      row,
      col,
      isStart:
        row === this.state.START_NODE_ROW && col === this.state.START_NODE_COL,
      isFinish:
        row === this.state.FINISH_NODE_ROW &&
        col === this.state.FINISH_NODE_COL,
      distance: Infinity,
      distanceToFinishNode:
        Math.abs(this.state.FINISH_NODE_ROW - row) +
        Math.abs(this.state.FINISH_NODE_COL - col),
      isVisited: false,
      isWall: false,
      previousNode: null,
      isNode: true,
    };
  };

  /* --------------------- Mouse Event Handlers ----------------------- */
  handleMouseDown(row, col) {
    if (!this.state.isRunning) {
      if (this.isGridClear()) {
        if (
          document.getElementById(`node-${row}-${col}`).className ===
          'node node-start'
        ) {
          this.setState({
            mousePressed: true,
            isStartNode: true,
            curRow: row,
            curCol: col,
          });
        } else if (
          document.getElementById(`node-${row}-${col}`).className ===
          'node node-finish'
        ) {
          this.setState({
            mousePressed: true,
            isFinishNode: true,
            curRow: row,
            curCol: col,
          });
        } else {
          const newGrid = updateGrid(this.state.grid, row, col);
          this.setState({
            grid: newGrid,
            mousePressed: true,
            isWallNode: true,
            curRow: row,
            curCol: col,
          });
        }
      } else {
        this.clearGrid();
      }
    }
  }

  isGridClear() {
    for (const row of this.state.grid) {
      for (const node of row) {
        const nodeClassName = document.getElementById(
          `node-${node.row}-${node.col}`,
        ).className;
        if (
          nodeClassName === 'node node-visited' ||
          nodeClassName === 'node node-shortest-path'
        ) {
          return false;
        }
      }
    }
    return true;
  }

  handleMouseEnter(row, col) {
    if (!this.state.isRunning) {
      if (this.state.mouseIsPressed) {
        const nodeClassName = document.getElementById(`node-${row}-${col}`)
          .className;
        if (this.state.isStartNode) {
          if (nodeClassName !== 'node node-wall') {
            const prevStartNode = this.state.grid[this.state.curRow][
              this.state.curCol
            ];
            prevStartNode.isStart = false;
            document.getElementById(
              `node-${this.state.curRow}-${this.state.curCol}`,
            ).className = 'node';

            this.setState({curRow: row, curCol: col});
            const currStartNode = this.state.grid[row][col];
            currStartNode.isStart = true;
            document.getElementById(`node-${row}-${col}`).className =
              'node node-start';
          }
          this.setState({START_NODE_ROW: row, START_NODE_COL: col});
        } else if (this.state.isFinishNode) {
          if (nodeClassName !== 'node node-wall') {
            const prevFinishNode = this.state.grid[this.state.curRow][
              this.state.curCol
            ];
            prevFinishNode.isFinish = false;
            document.getElementById(
              `node-${this.state.curRow}-${this.state.curCol}`,
            ).className = 'node';

            this.setState({curRow: row, curCol: col});
            const currFinishNode = this.state.grid[row][col];
            currFinishNode.isFinish = true;
            document.getElementById(`node-${row}-${col}`).className =
              'node node-finish';
          }
          this.setState({FINISH_NODE_ROW: row, FINISH_NODE_COL: col});
        } else if (this.state.isWallNode) {
          const newGrid = updateGrid(this.state.grid, row, col);
          this.setState({grid: newGrid});
        }
      }
    }
  }

  handleMouseUp(row, col) {
    if (!this.state.isRunning) {
      this.setState({mouseIsPressed: false});
      if (this.state.isStartNode) {
        const isStartNode = !this.state.isStartNode;
        this.setState({isStartNode, START_NODE_ROW: row, START_NODE_COL: col});
      } else if (this.state.isFinishNode) {
        const isFinishNode = !this.state.isFinishNode;
        this.setState({
          isFinishNode,
          FINISH_NODE_ROW: row,
          FINISH_NODE_COL: col,
        });
      }
      this.initGrid();
    }
  }

  handleMouseLeave() {
    if (this.state.isStartNode) {
      const isStartNode = !this.state.isStartNode;
      this.setState({isStartNode, mouseIsPressed: false});
    } else if (this.state.isFinishNode) {
      const isFinishNode = !this.state.isFinishNode;
      this.setState({isFinishNode, mouseIsPressed: false});
    } else if (this.state.isWallNode) {
      const isWallNode = !this.state.isWallNode;
      this.setState({isWallNode, mouseIsPressed: false});
      this.initGrid();
    }
  }

  /* ---------------------- Update Grid / Walls --------------------------- */

  clearGrid() {
    if (!this.state.isRunning) {
      const newGrid = this.state.grid.slice();
      for (const row of newGrid) {
        for (const node of row) {
          let className = document.getElementById(
            `node-${node.row}-${node.col}`,
          ).className;
          if (
            className !== 'node node-start' &&
            className !== 'node node-finish' &&
            className !== 'node node-wall'
          ) {
            document.getElementById(`node-${node.row}-${node.col}`).className =
              'node';
            node.isVisited = false;
            node.distance = Infinity;
            node.heuristic =
              Math.abs(this.state.FINISH_NODE_ROW - node.row) +
              Math.abs(this.state.FINISH_NODE_COL - node.col);
          }
          if (className === 'node node-finish') {
            node.isVisited = false;
            node.distance = Infinity;
            node.heuristic = 0;
          }
          if (className === 'node node-start') {
            node.isVisited = false;
            node.distance = Infinity;
            node.heuristic =
              Math.abs(this.state.FINISH_NODE_ROW - node.row) +
              Math.abs(this.state.FINISH_NODE_COL - node.col);
            node.isStart = true;
            node.isWall = false;
            node.previousNode = null;
            node.isNode = true;
          }
        }
      }
    }
  }

  clearWalls() {
    if (!this.state.isRunning) {
      const newGrid = this.state.grid.slice();
      for (const row of newGrid) {
        for (const node of row) {
          let className = document.getElementById(
            `node-${node.row}-${node.col}`,
          ).className;
          if (className === 'node node-wall') {
            document.getElementById(`node-${node.row}-${node.col}`).className =
              'node';
            node.isWall = false;
          }
        }
      }
    }
  }

  /* ---------------------------------- Animations ----------------------------- */

  visualize(algo){
    if (!this.state.isRunning) {
      this.clearGrid();
      this.toggleIsRunning();
      const {grid} = this.state;
      const start =
        grid[this.state.START_NODE_ROW][this.state.START_NODE_COL];
      const finish =
        grid[this.state.FINISH_NODE_ROW][this.state.FINISH_NODE_COL];
      let visitedNodesInOrder;
      switch (algo) {
        case 'Dijkstra':
          visitedNodesInOrder = dijkstra(grid, start, finish);
          break;
        case 'astar':
          visitedNodesInOrder = astar(grid, start, finish);
          break;
        case 'BFS':
          visitedNodesInOrder = bfs(grid, start, finish);
          break;
        case 'DFS':
          visitedNodesInOrder = dfs(grid, start, finish);
          break;
        default:
          // should not execute
          break;
      }
      const path = getPath(finish);
      path.push('end');
      this.animate(visitedNodesInOrder, path);
    }
  }

  animate(visitedNodesInOrder, path) {
    for (let i = 0; i <= visitedNodesInOrder.length; i++) {
      if (i === visitedNodesInOrder.length) {
        setTimeout(() => {
          this.animatePath(path);
        }, 10 * i);
        return;
      }
      setTimeout(() => {
        const node = visitedNodesInOrder[i];
        const nodeClass = document.getElementById(
          `node-${node.row}-${node.col}`,
        ).className;
        if (
          nodeClass !== 'node node-start' &&
          nodeClass !== 'node node-finish'
        ) {
          document.getElementById(`node-${node.row}-${node.col}`).className =
            'node node-visited';
        }
      }, 10 * i);
    }
  }

  animatePath(path) {
    for (let i = 0; i < path.length; i++) {
      if (path[i] === 'end') {
        setTimeout(() => {
          this.toggleIsRunning();
        }, i * 50);
      } else {
        setTimeout(() => {
          const node = path[i];
          const nodeClass = document.getElementById(
            `node-${node.row}-${node.col}`,
          ).className;
          if (
            nodeClass !== 'node node-start' &&
            nodeClass !== 'node node-finish'
          ) {
            document.getElementById(`node-${node.row}-${node.col}`).className =
              'node node-shortest-path';
          }
        }, i * 40);
      }
    }
  }

  /* ------------------------------- Construct Path ----------------------------- */
    render() {
      const {grid, mousePressed} = this.state;
      return (
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
            <a className="navbar-brand" href="/">
              <b>PathFinding Visualizer</b>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="http://www.github.com/jfur1/pathfinding">
                    {' '}
                    PathFinder Visualizer code{' '}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://jfur1.github.io">
                    Check Out Other Cool Projects
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <table
            className="grid-container"
            onMouseLeave={() => this.handleMouseLeave()}>
            <tbody className="grid">
              {grid.map((row, rowIdx) => {
                return (
                  <tr key={rowIdx}>
                    {row.map((node, nodeIdx) => {
                      const {row, col, isFinish, isStart, isWall} = node;
                      return (
                        <Node
                          key={nodeIdx}
                          col={col}
                          isFinish={isFinish}
                          isStart={isStart}
                          isWall={isWall}
                          mousePressed={mousePressed}
                          onMouseDown={(row, col) =>
                            this.handleMouseDown(row, col)
                          }
                          onMouseEnter={(row, col) =>
                            this.handleMouseEnter(row, col)
                          }
                          onMouseUp={() => this.handleMouseUp(row, col)}
                          row={row}></Node>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => this.clearGrid()}>
            Clear Grid
          </button>
          <button
            type="button"
            className="btn btn-warning"
            onClick={() => this.clearWalls()}>
            Clear Walls
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => this.visualize('Dijkstra')}>
            Dijkstra's
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => this.visualize('astar')}>
            A*
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => this.visualize('BFS')}>
            Breadth-First Search
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => this.visualize('DFS')}>
            Depth-First Search
          </button>
          {this.state.isDesktopView ? (
            <button
              type="button"
              className="btn btn-light"
              onClick={() => this.toggleView()}>
              Mobile View
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-dark"
              onClick={() => this.toggleView()}>
              Desktop View
            </button>
          )}
        </div>
      );
    }
  }


  /******************** Create Walls ********************/
  const updateGrid = (grid, row, col) => {
    const newGrid = grid.slice();
    const node = newGrid[row][col];
    if (!node.isStart && !node.isFinish && node.isNode) {
      const newNode = {
        ...node,
        isWall: !node.isWall,
      };
      newGrid[row][col] = newNode;
    }
    return newGrid;
  };

  // Backtracks from the goal to find the shortest path.
  // Only works when called after the pathfinding method has executed.
  function getPath(goal) {
    const path = [];
    let node = goal;
    while (node !== null) {
      path.unshift(node);
      node = node.previousNode;
    }
    return path;
  }

// export default class PathfindingVisualizer extends Component {
//   constructor() {
//     super();
//     this.state = {
//       grid: [],
//       nodes: {},
//       mouseDown: false,
//       algoFinished: true,
//       currentAlgo: null,
//       start: null,
//       target: null
//     };
//   }

//   componentDidMount() {
//     const board = this.initGrid();
//     this.setState({grid: board[0], nodes: board[1]});
//   }

//   onMouseDown(row, col) {
//     // const newGrid = updateGrid(this.state.grid, row, col);
//     // const newNodes = updateNodes(this.state.nodes, row, col);
//     const board = updateBoard(this.state.grid, this.state.nodes, row, col);
//     this.setState({grid: board[0], nodes: board[1], mouseDown: true});
//   }

//   onMouseEnter(row, col) {
//     if (!this.state.mouseDown) return;
//     // const newGrid = updateGrid(this.state.grid, row, col);
//     // const newNodes = updateNodes(this.state.nodes, row, col);
//     const board = updateBoard(this.state.grid, this.state.nodes, row, col);
//     this.setState({grid: board[0], nodes: board[1]});
//   }

//   onMouseUp() {
//     this.setState({mouseDown: false});
//   }

//   animateSearch(visited, path) {
//     if(visited === false || path.length === 1 || visited.length === 1){
//       console.log("No path found.")
//       this.algoFinished = true;
//       document.getElementById("startButton").disabled = false;
//       document.getElementById("clearGridButton").disabled = false;
//     }else{
//         for (let i = 0; i <= visited.length; i++) {
//           if (i === visited.length) {
//             setTimeout(() => {
//               this.animatePath(path);
//             }, 10 * i);
//             return;
//           }
//           // Visited nodes get animated in 10ms intervals
//           setTimeout(() => {
//             const node = visited[i];
//             document.getElementById(`node-${node.row}-${node.col}`).className =
//               'node node-visited';
//           }, 10 * i);
//         }
//       }
//     }

//   animatePath(path) {
//     for (let i = 0; i < path.length; i++) {
//       setTimeout(() => {
//         const node = path[i];
//         document.getElementById(`node-${node.row}-${node.col}`).className =
//           'node node-shortest-path';
//       }, 25 * i);
//     }
//     this.algoFinished = true;
//     document.getElementById("startButton").disabled = false;
//     document.getElementById("clearGridButton").disabled = false;
//   }

//   visualizeSearch() {
//       const algo = document.getElementById("startButton").innerHTML;
//       if(algo === "Visualize Algorithm"){
//         console.log("Select an algorithm!");
//       }
//       else{
//         console.log("Selected Algorithm:", algo);

//         // Clear any visited nodes from the grid
//         this.clearGrid();
//         document.getElementById("startButton").disabled = true;
//         document.getElementById("clearGridButton").disabled = true;
//         this.algoFinished = false;

//         const {grid, nodes} = this.state;
//         const start = grid[START_NODE_ROW][START_NODE_COL];
//         const goal = grid[FINISH_NODE_ROW][FINISH_NODE_COL];
//         var visited = [];
//         var path = [];

//         // Select algo based on start button text
//         if(algo === "A* Search"){
//           console.log(nodes);
//           // console.log("start:", start)
//           // console.log("start-id:", start.id)
//           // console.log("goal:", goal)
//           //visited = astar(nodes, start, goal, visited, grid, []);
//           visited = astar(grid, start, goal);
//           path = getAstarPath(goal);
//           console.log("Astar Visited:", visited);
//           console.log("Astar Path:", path);
//           this.animateSearch(visited, path);
//         }
//         else if(algo === "Dijkstra's Algorithm"){
//           visited = dijkstra(grid, start, goal);
//           path = getPath(goal);
//           console.log("Dijkstra Visited:", visited);
//           console.log("Dijkstra Path:", path);
//           this.animateSearch(visited, path);
//         }else if(algo === "Depth-First-Search"){
//           visited = dfs(grid, start, goal);
//           path = getPath(goal);
//           console.log("DFS Visited:", visited);
//           console.log("DFS Path:", path);
//           this.animateSearch(visited, path);
//         }else if(algo === "Breadth-First-Search"){
//           visited = bfs(grid, start, goal);
//           path = getPath(goal);
//           console.log("BFS Visited:", visited);
//           console.log("BFS Path:", path);
//           this.animateSearch(visited, path);
//         }
//       }
//   }
//   // Same as init grid, exept walls & start/goal nodes are kept
//   clearGrid() {
//     if(this.algoFinished){
//       for(let row = 0; row < 20; row++) {
//         for (let col = 0; col < 50; col++) {
//           this.state.grid[row][col].previousNode = null;
//           this.state.grid[row][col].isVisited = false;
//           if(row === START_NODE_ROW && col === START_NODE_COL){
//             document.getElementById(`node-${row}-${col}`).className = 'node node-start';
//           }
//           else if(row === FINISH_NODE_ROW && col === FINISH_NODE_COL){
//             document.getElementById(`node-${row}-${col}`).className = 'node node-finish';
//           }
//           else if(document.getElementById(`node-${row}-${col}`).className === "node node-visited"){
//             document.getElementById(`node-${row}-${col}`).className = 'node';
//           }
//           else if(document.getElementById(`node-${row}-${col}`).className === "node node-shortest-path"){
//             document.getElementById(`node-${row}-${col}`).className = 'node';
//           }
//         }
//       }
//     }
//   }
//   // Initialize New Grid
//   initGrid = () => {
//     var grid = [];
//     var nodes = {};
//     for (let row = 0; row < 20; row++) {
//       const tmpRow = [];
//       for (let col = 0; col < 50; col++) {
//         var nodeId = `${row}-${col}`, nodeClass, node;
//         var node = newNode(col, row);

//         if(row === START_NODE_ROW && col === START_NODE_COL){
//           node.status = "start"
//         } 
//         else if(row === FINISH_NODE_ROW && col === FINISH_NODE_COL){
//           node.status = "target"
//         } 
//         else node.status = "node"

//         tmpRow.push(node);
//         nodes[nodeId] = node;
//       }
//       grid.push(tmpRow);
//     }
//     return [grid, nodes];
//   };

//   render() {
//     const {grid, mouseDown, algoFinished} = this.state;
//     let tableHTML = "";
//     return (
//       <>
//         <div class="board">
//         <div class="center">
//           <button id="startButton" onClick={() => this.visualizeSearch()}>Visualize Algorithm</button>
//         </div>
//         <div class="center">
//           <button id="clearGridButton" onClick={() => this.initGrid()}>Reset Grid</button>
//         </div>
//         <div className="grid">
//           {grid.map((row, rowIdx) => {
//             return (
//               <div key={rowIdx}>
//                 {row.map((node, nodeIdx) => {
//                   const {row, col, isFinish, isStart, isWall} = node;
//                   return (
//                     <Node
//                       key={nodeIdx}
//                       col={col}
//                       g = {Infinity}
//                       h = {null}
//                       f = {Infinity}
//                       isFinish={isFinish}
//                       isStart={isStart}
//                       isWall={isWall}
//                       mouseDown={mouseDown}
//                       onMouseDown={(row, col) => this.onMouseDown(row, col)}
//                       onMouseEnter={(row, col) => this.onMouseEnter(row, col)}
//                       onMouseUp={() => this.onMouseUp()}
//                       row={row}></Node>
//                   );
//                 })}
//               </div>
//             );
//           })}
//         </div>
//         </div>
//       </>
//     );
//   }
// }
// // Create a new Node
// const newNode = (col, row) => {
//   return {
//     col,
//     row,
//     isStart: row === START_NODE_ROW && col === START_NODE_COL,
//     isFinish: row === FINISH_NODE_ROW && col === FINISH_NODE_COL,
//     g: Infinity,
//     h: null,
//     f: Infinity,
//     status: null,
//     isVisited: false,
//     isWall: false,
//     previousNode: null,
//     weight: 0,
//     id: `${row}-${col}`
//   };
// };
// // Update our grid state
// const updateBoard = (grid, nodes, row, col) => {
//   // Create copies of grid & nodes
//   const newGrid = grid.slice();
//   const newNodes = nodes;
//   // If start/goal node, continue
//   if(row === START_NODE_ROW && col === START_NODE_COL 
//     || row === FINISH_NODE_ROW && col === FINISH_NODE_COL){
//     return [grid, nodes];
//   }
//   // Get the node in question
//   const node = newGrid[row][col];
//   // Create a new node with prop "isWall" toggled
//   const newNode = {
//     ...node,
//    isWall: !node.isWall,
//   };
//   // Set status to wall if .isWall === true
//   if(newNode.isWall) newNode.status = "wall";
//   else newNode.status = "node";
//   // Update the new node in the grid & nodes sets, then return to be updated as state
//   newNodes[`${row}-${col}`] = newNode;
//   newGrid[row][col] = newNode;

//   return [newGrid, newNodes];
// };