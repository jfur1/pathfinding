import React, {Component} from 'react';
import Node from './Node/Node';
import {dijkstra, getPath} from '../algorithms/dijkstra';
import {astar, getAstarPath} from '../algorithms/astar';
import './pathfindingVisualizer.css';

const START_NODE_ROW = 10;
const START_NODE_COL = 15;
const FINISH_NODE_ROW = 10;
const FINISH_NODE_COL = 35;


export default class PathfindingVisualizer extends Component {
  constructor() {
    super();
    this.state = {
      grid: [],
      nodes: {},
      mouseDown: false,
      algoFinished: true,
      currentAlgo: null,
      start: null,
      target: null
    };
  }

  componentDidMount() {
    const board = this.initGrid();
    this.setState({grid: board[0], nodes: board[1]});
  }

  onMouseDown(row, col) {
    const newGrid = updateGrid(this.state.grid, row, col);
    this.setState({grid: newGrid, mouseDown: true});
  }

  onMouseEnter(row, col) {
    if (!this.state.mouseDown) return;
    const newGrid = updateGrid(this.state.grid, row, col);
    this.setState({grid: newGrid});
  }

  onMouseUp() {
    this.setState({mouseDown: false});
  }

  animateSearch(visited, path) {
    for (let i = 0; i <= visited.length; i++) {
      if (i === visited.length) {
        setTimeout(() => {
          this.animatePath(path);
        }, 10 * i);
        return;
      }
      // Visited nodes get animated in 10ms intervals
      setTimeout(() => {
        const node = visited[i];
        document.getElementById(`node-${node.row}-${node.col}`).className =
          'node node-visited';
      }, 10 * i);
    }
  }

  animatePath(path) {
    for (let i = 0; i < path.length; i++) {
      setTimeout(() => {
        const node = path[i];
        document.getElementById(`node-${node.row}-${node.col}`).className =
          'node node-shortest-path';
      }, 35 * i);
    }
    this.algoFinished = true;
    document.getElementById("startButton").disabled = false;
    document.getElementById("clearGridButton").disabled = false;
  }

  visualizeSearch() {
      const algo = document.getElementById("startButton").innerHTML;
      document.getElementById("startButton").disabled = true;
      document.getElementById("clearGridButton").disabled = true;
      console.log(algo);
      this.algoFinished = false;
      const {grid, nodes} = this.state;
      const start = grid[START_NODE_ROW][START_NODE_COL];
      const goal = grid[FINISH_NODE_ROW][FINISH_NODE_COL];
      var visited = [];
      var path = [];
      // Select algo based on start button text
      if(algo === "A* Search"){
        console.log(nodes)
        // console.log("start:", start)
        // console.log("start-id:", start.id)
        // console.log("goal:", goal)
        visited = astar(nodes, start, goal, visited, grid, []);
        path = getAstarPath(goal);
        console.log("Visited:", visited);
        console.log("Path:", path);
        this.animateSearch(visited, path);
      }
      else if(algo === "Dijkstra's Algorithm"){
        visited = dijkstra(grid, start, goal);
        path = getPath(goal);
        this.animateSearch(visited, path);
      }
      
  }

  clearGrid() {
    if(this.algoFinished){
      const board = this.initGrid();
      this.setState({grid: board[0]});
      for(let row = 0; row < 20; row++) {
        for (let col = 0; col < 50; col++) {
          if(row === START_NODE_ROW && col === START_NODE_COL){
            document.getElementById(`node-${row}-${col}`).className = 'node node-start';
          }
          else if(row === FINISH_NODE_ROW && col === FINISH_NODE_COL){
            document.getElementById(`node-${row}-${col}`).className = 'node node-finish';
          }
          else{
            document.getElementById(`node-${row}-${col}`).className = 'node';
          }
        }
      }
    }
  }
  // Initialize New Grid
  initGrid = () => {
    var grid = [];
    var nodes = {};
    for (let row = 0; row < 20; row++) {
      const tmpRow = [];
      for (let col = 0; col < 50; col++) {
        var nodeId = `${row}-${col}`, nodeClass, node;
        if(row === START_NODE_ROW && col === START_NODE_COL){
          nodeClass = "node-start";
          this.start = nodeId;
        } else if(row === FINISH_NODE_ROW && col === FINISH_NODE_COL){
          nodeClass = "node-finish";
          this.target = `${nodeId}`;
        } else nodeClass = "node"
        node = newNode(col, row);
        tmpRow.push(node);
        nodes[nodeId] = node;
      }
      grid.push(tmpRow);
    }
    return [grid, nodes];
  };

  render() {
    const {grid, mouseDown, algoFinished} = this.state;
    
    return (
      <>
        <div class="center">
          <button id="startButton" onClick={() => this.visualizeSearch()}>Visualize Algorithm</button>
        </div>
        <div class="center">
          <button id="clearGridButton" onClick={() => this.clearGrid()}>Clear Grid</button>
        </div>
        <div className="grid">
          {grid.map((row, rowIdx) => {
            return (
              <div key={rowIdx}>
                {row.map((node, nodeIdx) => {
                  const {row, col, isFinish, isStart, isWall} = node;
                  return (
                    <Node
                      key={nodeIdx}
                      col={col}
                      g = {Infinity}
                      h = {null}
                      f = {Infinity}
                      isFinish={isFinish}
                      isStart={isStart}
                      isWall={isWall}
                      mouseDown={mouseDown}
                      onMouseDown={(row, col) => this.onMouseDown(row, col)}
                      onMouseEnter={(row, col) => this.onMouseEnter(row, col)}
                      onMouseUp={() => this.onMouseUp()}
                      row={row}></Node>
                  );
                })}
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

// Create a new Node
const newNode = (col, row) => {
  return {
    col,
    row,
    isStart: row === START_NODE_ROW && col === START_NODE_COL,
    isFinish: row === FINISH_NODE_ROW && col === FINISH_NODE_COL,
    g: Infinity,
    h: null,
    f: Infinity,
    prev: null,
    isVisited: false,
    isWall: false,
    previousNode: null,
    weight: 0,
    id: `${row}-${col}`
  };
};

// Update our grid state
const updateGrid = (grid, row, col) => {
  const newGrid = grid.slice();
  const node = newGrid[row][col];
  const newNode = {
    ...node,
    isWall: !node.isWall,
  };
  newGrid[row][col] = newNode;
  return newGrid;
};

