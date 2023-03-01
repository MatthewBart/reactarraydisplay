import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  function changeCell(newCellVal: string, idxToChange : number)
  {
    setCells((prevCells) =>
      prevCells.map((cell, i)=>
      (i === idxToChange?newCellVal:cell))
      );
  }
  const [cells,setCells] = useState(["a","b","c"]);

  function handleClicked(idx: number){
    setCells((prevCells)=>[...prevCells.slice(0,idx + 1)," ",...prevCells.slice(idx+1)]);
  }

  return (
    <div className="app">
      <div className="cells">
        {cells.map((cell, idx) =>(
          <div key={idx} className = "cell">
            <input 
            onChange={(e) => changeCell(e.currentTarget.value, idx)} 
            value={cell}>
            </input>
          {idx<cells.length-1&&
          <span className="add" onClick={() => handleClicked(idx)}></span>}
          </div>
        ))}
      </div>    
    </div>
  );
}

export default App;
