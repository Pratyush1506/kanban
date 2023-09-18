import React from 'react';
import './App.css';
import Board from './Components/Board/Board';

function App() {
  return (
    <div className="App">
      <div className="app-navbar">
        <h2>Kanban</h2>
      </div>
      <div className="app-outer">
        <div className="app-boards">
          <Board/>
          <Board/>
          <Board/>
          <Board/>
        </div>
      </div>
    </div>
  );
}

export default App;
