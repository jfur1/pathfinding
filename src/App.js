import React from 'react';
import './App.css';
import PathfindingVisualizer from './pathfindingVisualizer/pathfindingVisualizer';
import Navbar from './navbar';

function App() {
  return (    
    <div className="Navbar"><Navbar/>
    <div className="App">
      <PathfindingVisualizer></PathfindingVisualizer>
    </div> </div>
  );
}

export default App;
