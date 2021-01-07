import React from 'react';
import './App.css';
import PathfindingVisualizer from './pathfindingVisualizer/pathfindingVisualizer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './navbar';

function App() {
  return (    
    <div className="App">

      <PathfindingVisualizer></PathfindingVisualizer>
    </div> 
  );
}

export default App;
