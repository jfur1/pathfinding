import React, {Component} from 'react';
import Node from './Node/Node';
import {dijkstra, getPath} from '../algorithms/dijkstra';

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
      mouseDown: false,
    };
  }

  componentDidMount() {
    const grid = initGrid();
    this.setState({grid});
  }

  mouseDownHandler(row, col) {
    const newGrid = updateGrid(this.state.grid, row, col);
    this.setState({grid: newGrid, mouseDown: true});
  }

  mouseEnterHandler(row, col) {
    if (!this.state.mouseDown) return;
    const newGrid = updateGrid(this.state.grid, row, col);
    this.setState({grid: newGrid});
  }

  mouseUpHandler() {
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
        // Keep Start and Target Nodes original color
        

        document.getElementById(`node-${node.row}-${node.col}`).className =
          'node node-shortest-path';
      }, 50 * i);
    }
  }

  visualizeSearch() {
    const {grid} = this.state;
    const start = grid[START_NODE_ROW][START_NODE_COL];
    const goal = grid[FINISH_NODE_ROW][FINISH_NODE_COL];
    const visited = dijkstra(grid, start, goal);
    const path = getPath(goal);
    this.animateSearch(visited, path);
  }

  render() {
    const {grid, mouseDown} = this.state;
    return (
      <>
      <br/>
        <button onClick={() => this.visualizeSearch()}>
          Visualize Algorithm
        </button>
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
                      isFinish={isFinish}
                      isStart={isStart}
                      isWall={isWall}
                      mouseDown={mouseDown}
                      onMouseDown={(row, col) => this.mouseDownHandler(row, col)}
                      onMouseEnter={(row, col) =>
                        this.mouseEnterHandler(row, col)
                      }
                      onMouseUp={() => this.mouseUpHandler()}
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
// Initialize New Grid
const initGrid = () => {
  const grid = [];
  for (let row = 0; row < 20; row++) {
    const tmpRow = [];
    for (let col = 0; col < 50; col++) {
      tmpRow.push(newNode(col, row));
    }
    grid.push(tmpRow);
  }
  return grid;
};
// Create a new Node
const newNode = (col, row) => {
  return {
    col,
    row,
    isStart: row === START_NODE_ROW && col === START_NODE_COL,
    isFinish: row === FINISH_NODE_ROW && col === FINISH_NODE_COL,
    distance: Infinity,
    isVisited: false,
    isWall: false,
    previousNode: null,
  };
};

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

// const clearGrid
