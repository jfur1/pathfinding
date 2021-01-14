import React, {Component} from 'react';
import Node from './Node/Node';
import {dijkstra} from '../algorithms/dijkstra';
import {astar} from '../algorithms/astar';
import {dfs} from '../algorithms/dfs';
import { bfs } from '../algorithms/bfs';
import './pathfindingVisualizer.css';

export default class PathfindingVisualizer extends Component {
  constructor(){
    super();
    this.state = {
      grid: [],
      START_NODE_ROW: 9,
      START_NODE_COL: 14,
      FINISH_NODE_ROW: 9,
      FINISH_NODE_COL: 32,
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
      visitedAnimationSpeed: 10,
      shortestPathAnimationSpeed: 40,
    };
    // Event Handler Prototypes
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.toggleIsRunning = this.toggleIsRunning.bind(this);
  }

  componentDidMount() {
    const grid = this.initGrid();
    var is_mobile = !!navigator.userAgent.match(/iphone|android|blackberry/ig) || false;
    if(is_mobile) alert('Mobile version still in development. Try using a computer for the best experience!');
    this.updateAlgoDescription("start");
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

  toggleDropdown(){
    if(!this.state.isRunning){
      document.getElementById("myDropdown").classList.toggle("show");
    }
  }

  toggleSpeed(speed){
      if(!this.state.isRunning){
        this.toggleDropdown();
        document.getElementById("animation-speed").innerHTML = `Animation Speed: \n${speed}`;
        if(speed === "Slow"){
          this.setState({visitedAnimationSpeed: 25, shortestPathAnimationSpeed: 55});
        } else if(speed === "Medium"){
          this.setState({visitedAnimationSpeed: 10, shortestPathAnimationSpeed: 40});
        } else{
          this.setState({visitedAnimationSpeed: 5, shortestPathAnimationSpeed: 25});
        }
      }
  }

  /* -------------------- Initialize 2D Grid --------------------- */
  initGrid = (
    rowCount = this.state.N_ROWS,
    colCount = this.state.N_COLS,
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
      if (this.state.mousePressed) {
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
      this.setState({mousePressed: false});
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
      this.setState({isStartNode, mousePressed: false});
    } else if (this.state.isFinishNode) {
      const isFinishNode = !this.state.isFinishNode;
      this.setState({isFinishNode, mousePressed: false});
    } else if (this.state.isWallNode) {
      const isWallNode = !this.state.isWallNode;
      this.setState({isWallNode, mousePressed: false});
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
    this.updateAlgoDescription(algo);
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

  updateAlgoDescription(algo){
    if (!this.state.isRunning){
      if(algo === "Dijkstra"){
        document.getElementById('algoDescription').innerHTML = `${algo}'s Algorithm is <i><b>weighted</b></i> and <i><b>does guarantee</b></i> the shortest path!`;
      }
      else if(algo === "astar"){
        document.getElementById('algoDescription').innerHTML = `A* Search is <i><b>weighted</b></i> and <i><b>does guarantee</b></i> the shortest path!`;
      }
      else if(algo === "DFS"){
        document.getElementById('algoDescription').innerHTML = `Depth-First Search is <i><b>unweighted</b></i> and <i><b>does not guarantee</b></i> the shortest path!`;
      }
      else if(algo === "BFS"){
        document.getElementById('algoDescription').innerHTML = `Breadth-First Search is <i><b>unweighted</b></i> and <i><b>does guarantee</b></i> the shortest path!`;
      }    else{
        document.getElementById('algoDescription').innerHTML = "Select an algorithm to visualize!<br><br>Try drawing some walls or moving the start / target nodes!";
      }
    }
  }

  animate(visitedNodesInOrder, path) {
    for (let i = 0; i <= visitedNodesInOrder.length; i++) {
      if (i === visitedNodesInOrder.length) {
        setTimeout(() => {
          this.animatePath(path);
        }, this.state.visitedAnimationSpeed * i);
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
      }, this.state.visitedAnimationSpeed * i);
    }
  }

  animatePath(path) {
    for (let i = 0; i < path.length; i++) {
      if (path[i] === 'end') {
        setTimeout(() => {
          this.toggleIsRunning();
        }, i * this.state.shortestPathAnimationSpeed);
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
        }, i * this.state.shortestPathAnimationSpeed);
      }
    }
  }

  /* ------------------------------- Construct Path ----------------------------- */
    render() {
      const {grid, mousePressed} = this.state;
      return (
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
            <a className="navbar-brand" href="https://jfur1.github.io/pathfinding">
              <b>PathFinding Visualizer</b>
            </a>
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
                  <a className="nav-link" href="https://github.com/jfur1">
                    Check Out Other Cool Projects
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <div id="programButtons">
          <button
            type="button"
            className="btn btn-danger mr-1"
            onClick={() => this.clearGrid()}>
            Clear Grid
          </button>
          <button
            type="button"
            className="btn btn-warning mr-1"
            onClick={() => this.clearWalls()}>
            Clear Walls
          </button>
          <button
            type="button"
            className="btn btn-primary mr-1"
            onClick={() => this.visualize('Dijkstra')}>
            Dijkstra's
          </button>
          <button
            type="button"
            className="btn btn-primary mr-1"
            onClick={() => this.visualize('astar')}>
            A*
          </button>
          <button
            type="button"
            className="btn btn-primary mr-1"
            onClick={() => this.visualize('BFS')}>
            Breadth-First Search
          </button>
          <button
            type="button"
            className="btn btn-primary mr-1"
            onClick={() => this.visualize('DFS')}>
            Depth-First Search
          </button>
          <div class="dropdown">
              <button id="animation-speed" onClick={() => this.toggleDropdown()} class="dropbtn">Animation Speed: Medium</button>
              <div id="myDropdown" class="dropdown-content">
                  <a href="#" id="animate-slow" onClick={() => this.toggleSpeed("Slow")}>Slow</a>
                  <a href="#" id="animate-medium" onClick={() => this.toggleSpeed("Medium")}>Medium</a>
                  <a href="#" id="animate-fast" onClick={() => this.toggleSpeed("Fast")}>Fast</a>
              </div>
          </div>
          {this.state.isDesktopView ? (
            <button
              type="button"
              className="btn btn-light mr-1"
              onClick={() => this.toggleView()}>
              Mobile View
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-dark mr-1"
              onClick={() => this.toggleView()}>
              Desktop View
            </button>
          )}
          </div>
          <div id="legend">
            <ul>
              <li><div class="start-legend"></div>Start Node</li>
            </ul>
            <ul>
              <li><div class="target-legend"></div>Target Node</li>
            </ul>
            <ul>
              <li><div class="unvisited-legend"></div>Unvisited Node</li>
            </ul>
            <ul>
              <li>
                <div class="visited-legend"></div>
                <div class="visited-legend-2"></div>
                Visited Node
              </li>
            </ul>
            <ul>
              <li><div class="wall-legend"></div>Wall Node</li>
            </ul>
            <ul>
              <li><div class="path-legend"></div>Shortest-Path Node</li>
            </ul>
          </div>
          <div id="algoDescription"></div>
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

  // Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
  var dropdowns = document.getElementsByClassName("dropdown-content");
  var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}