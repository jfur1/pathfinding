import React from 'react';
import './App.css';
import PathfindingVisualizer from './pathfindingVisualizer/pathfindingVisualizer';
import Navbar from './navbar';

function App() {
  return (    
    <div className="App">
      <div className="Navbar"><Navbar></Navbar></div>
      <PathfindingVisualizer></PathfindingVisualizer>
    </div> 
  );
}

export default App;
