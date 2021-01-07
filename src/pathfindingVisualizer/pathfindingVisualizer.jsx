import React, {Component} from 'react';
import Node from './Node/Node';
import {dijkstra, getPath} from '../algorithms/dijkstra';
import {astar, getAstarPath} from '../algorithms/astar';
import './pathfindingVisualizer.css';
import {dfs} from '../algorithms/dfs';
import { bfs } from '../algorithms/bfs';

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
    // const newGrid = updateGrid(this.state.grid, row, col);
    // const newNodes = updateNodes(this.state.nodes, row, col);
    const board = updateBoard(this.state.grid, this.state.nodes, row, col);
    this.setState({grid: board[0], nodes: board[1], mouseDown: true});
  }

  onMouseEnter(row, col) {
    if (!this.state.mouseDown) return;
    // const newGrid = updateGrid(this.state.grid, row, col);
    // const newNodes = updateNodes(this.state.nodes, row, col);
    const board = updateBoard(this.state.grid, this.state.nodes, row, col);
    this.setState({grid: board[0], nodes: board[1]});
  }

  onMouseUp() {
    this.setState({mouseDown: false});
  }

  animateSearch(visited, path) {
    if(visited === false || path.length === 1 || visited.length === 1){
      console.log("No path found.")
      this.algoFinished = true;
      document.getElementById("startButton").disabled = false;
      document.getElementById("clearGridButton").disabled = false;
    }else{
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
    }

  animatePath(path) {
    for (let i = 0; i < path.length; i++) {
      setTimeout(() => {
        const node = path[i];
        document.getElementById(`node-${node.row}-${node.col}`).className =
          'node node-shortest-path';
      }, 25 * i);
    }
    this.algoFinished = true;
    document.getElementById("startButton").disabled = false;
    document.getElementById("clearGridButton").disabled = false;
  }

  visualizeSearch() {
      const algo = document.getElementById("startButton").innerHTML;
      if(algo === "Visualize Algorithm"){
        console.log("Select an algorithm!");
      }
      else{
        console.log("Selected Algorithm:", algo);
        // Clear any visited nodes from the grid
        this.clearGrid();
        document.getElementById("startButton").disabled = true;
        document.getElementById("clearGridButton").disabled = true;
        this.algoFinished = false;

        var {grid, nodes} = this.state;
        var start = grid[START_NODE_ROW][START_NODE_COL];
        var goal = grid[FINISH_NODE_ROW][FINISH_NODE_COL];
        var visited = [];
        var path = [];
        // Select algo based on start button text
        if(algo === "A* Search"){
          console.log(nodes);
          // console.log("start:", start)
          // console.log("start-id:", start.id)
          // console.log("goal:", goal)
          visited = astar(nodes, start, goal, visited, grid, []);
          path = getAstarPath(goal);
          console.log("Astar Visited:", visited);
          console.log("Astar Path:", path);
          this.animateSearch(visited, path);
        }
        else if(algo === "Dijkstra's Algorithm"){
          visited = dijkstra(grid, start, goal);
          path = getPath(goal);
          console.log("Dijkstra Visited:", visited);
          console.log("Dijkstra Path:", path);
          this.animateSearch(visited, path);
        }else if(algo === "Depth-First-Search"){
          visited = dfs(grid, start, goal);
          path = getPath(goal);
          console.log("DFS Visited:", visited);
          console.log("DFS Path:", path);
          this.animateSearch(visited, path);
        }else if(algo === "Breadth-First-Search"){
          visited = bfs(grid, start, goal);
          path = getPath(goal);
          console.log("BFS Visited:", visited);
          console.log("BFS Path:", path);
          this.animateSearch(visited, path);
        }
      }
  }
  // Same as init grid, exept walls & start/goal nodes are kept
  clearGrid() {
    if(this.algoFinished){
      for(let row = 0; row < 20; row++) {
        for (let col = 0; col < 50; col++) {
          this.state.grid[row][col].previousNode = null;
          this.state.grid[row][col].isVisited = false;
          if(row === START_NODE_ROW && col === START_NODE_COL){
            document.getElementById(`node-${row}-${col}`).className = 'node node-start';
          }
          else if(row === FINISH_NODE_ROW && col === FINISH_NODE_COL){
            document.getElementById(`node-${row}-${col}`).className = 'node node-finish';
          }
          else if(document.getElementById(`node-${row}-${col}`).className === "node node-visited"){
            document.getElementById(`node-${row}-${col}`).className = 'node';
          }
          else if(document.getElementById(`node-${row}-${col}`).className === "node node-shortest-path"){
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
        var node = newNode(col, row);

        if(row === START_NODE_ROW && col === START_NODE_COL){
          node.status = "start"
        } 
        else if(row === FINISH_NODE_ROW && col === FINISH_NODE_COL){
          node.status = "target"
        } 
        else node.status = "node"

        tmpRow.push(node);
        nodes[nodeId] = node;
      }
      grid.push(tmpRow);
    }
    return [grid, nodes];
  };

  render() {
    const {grid, mouseDown, algoFinished} = this.state;
    let tableHTML = "";
    return (
      <>
        <div class="board">
        <div class="center">
          <button id="startButton" onClick={() => this.visualizeSearch()}>Visualize Algorithm</button>
        </div>
        <div class="center">
          <button id="clearGridButton" onClick={() => this.initGrid()}>Reset Grid</button>
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
    status: null,
    isVisited: false,
    isWall: false,
    previousNode: null,
    weight: 0,
    id: `${row}-${col}`
  };
};
// Update our grid state
const updateBoard = (grid, nodes, row, col) => {
  // Create copies of grid & nodes
  const newGrid = grid.slice();
  const newNodes = nodes;
  // If start/goal node, continue
  if(row === START_NODE_ROW && col === START_NODE_COL 
    || row === FINISH_NODE_ROW && col === FINISH_NODE_COL){
    return [grid, nodes];
  }
  // Get the node in question
  const node = newGrid[row][col];
  // Create a new node with prop "isWall" toggled
  const newNode = {
    ...node,
   isWall: !node.isWall,
  };
  // Set status to wall if .isWall === true
  if(newNode.isWall) newNode.status = "wall";
  else newNode.status = "node";
  // Update the new node in the grid & nodes sets, then return to be updated as state
  newNodes[`${row}-${col}`] = newNode;
  newGrid[row][col] = newNode;

  return [newGrid, newNodes];
};