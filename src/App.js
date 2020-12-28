import React from 'react';
import './App.css';
import PathfindingVisualizer from './pathfindingVisualizer/pathfindingVisualizer';

function App() {

  return (  
    <div className="App">
      <ul>
        <li class="dropdown">
          <a href="" class="dropbtn">Select an Algorithm</a>
          <div class="dropdown-content">
            <a href="#">Dijkstra's Algorithm</a>
            <a href="#">A* Search</a>
            <a href="#">Uniform-Cost Search</a>
            <a href="#">Breadth-First Search</a>
            <a href="#">Depth-First Search</a>
          </div>
        </li>
      </ul>
      <div className="App-header">
        <div id="mainText"><div class="shortest-path"></div>Shortest Path Node</div>
        <div id="mainText"><div class="start-node"></div>Start Node</div>
        <div id="mainText"><div class="goal-node"></div>Target Node</div>
        <div id="mainText"><div class="explored-node"></div>Explored Node</div>
      </div>
      <PathfindingVisualizer></PathfindingVisualizer>
    </div>
  );
}

export default App;
