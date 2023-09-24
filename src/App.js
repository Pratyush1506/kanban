import React, { useState } from 'react';
import './App.css';
import Board from './Components/Board/Board';
import Editable from './Components/Editable/Editable';

function App() {
  const [boards, setBoards] = useState([
    {
      id: Date.now() + Math.random()*2,
      title: "To Do",
      cards: [
        {
          id: Date.now() + Math.random(),
          title: "Card 1",
          tasks: [],
          labels: [
            {
              text: "frontend",
              color: "blue"
            },
          ],
          desc: "basjdnsakdjb",
          date: "",
        },
        {
          id: Date.now() + Math.random(),
          title: "Card 2",
          tasks: [],
          labels: [ {
              text: "backend",
              color: "brown"
            },
          ],
          desc: "basjdnsakdjb",
          date: "",
        }
      ],
    },
  ]);

  const addCard = (title,bid) => {
    const card = {
      id: Date.now() + Math.random(),
      title,
      labels: [],
      tasks: [],
      date: "",
      desc: "",
    };

    const index = boards.findIndex((item) => item.id === bid)
    if(index<0) return;

    const tempBoards = [...boards];
    tempBoards[index].cards.push(card);
    setBoards(tempBoards);

  };

  const removeCard = (cid, bid)=> {
    const bIndex = boards.findIndex((item) => item.id === bid);
    if(bIndex<0) return;
   
    const cIndex = boards[bIndex].cards.findIndex((item) => item.id === cid);
    if(cIndex<0) return;

    const tempBoards = [...boards];
    tempBoards[bIndex].cards.splice(cIndex,1)
    setBoards(tempBoards);
  };

  const addBoard = (title) => {
    setBoards([...boards,
    {
      id: Date.now() + Math.random(),
      title,
      cards: [],
    },
    ]);
  };

  const removeBoard = (bid)=>{
    const tempBoards = boards.filter(item=>item.id !== bid);
    setBoards(tempBoards);
  }


  return (
    <div className="App">
      <div className="app-navbar">
        <h2>Kanban</h2>
      </div>
      <div className="app-outer">
        <div className="app-boards">
          {
            boards.map((item)=>(
              <Board 
              key={item.id}
              board={item}
              removeBoard = {removeBoard}
              addCard = {addCard}
              removeCard = {removeCard}
               />
            ))
          }
          <div className='app-boards-board'>
            <Editable 
              displayClass="app-boards-board-add" 
              text="Add Board" 
              placeholder="Enter board title" 
              onSubmit={(value) => addBoard(value)}
              / >
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
