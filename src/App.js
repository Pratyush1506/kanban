import React, { useEffect, useState } from 'react';
import './App.css';
import Board from './Components/Board/Board';

function App() {
  
  const initialBoard = [
    {
      id: Date.now() + Math.random(),
      title: "Wishlist",
      cards: [],
    },
    {
      id: Date.now() + Math.random(),
      title: "Applied",
      cards: [],
    },
    {
      id: Date.now() + Math.random(),
      title: "Interviewing",
      cards: [],
    },
    {
      id: Date.now() + Math.random(),
      title: "Offer",
      cards: [],
    },
    {
      id: Date.now() + Math.random(),
      title: "Rejected",
      cards: [],
    },
    {
      id: Date.now() + Math.random(),
      title: "Ghosted",
      cards: [],
    },
  ]

  const [boards, setBoards] = useState(JSON.parse(localStorage.getItem('jobtracker')) || initialBoard);

  const [target, setTarget]=useState({
    cid: "",
    bid: "",
  })

  const addCard = (title,bid) => {
    const card = {
      id: Date.now() + Math.random(),
      title: title,
      labels: [],
      tasks: [],
      date: "",
      link: "",
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

  

  const handleDragEnter=(cid, bid) => {
    setTarget({
      cid,
      bid,
    });

  }

  const handleDragEnd=(cid, bid) => {
    let s_bIndex, s_cIndex, t_bIndex, t_cIndex;

    s_bIndex = boards.findIndex((item) => item.id === bid);
    if(s_bIndex<0)return;

    s_cIndex = boards[s_bIndex].cards.findIndex((item)=> item.id === cid);
    if(s_cIndex<0) return;

    t_bIndex = boards.findIndex((item) => item.id === target.bid);
    if(t_bIndex<0)return;

    t_cIndex = boards[t_bIndex].cards.findIndex((item)=> item.id === target.cid);
    if(t_cIndex<0) return;

    const tempBoards = [...boards]
    const tempCard = tempBoards[s_bIndex].cards[s_cIndex]

    tempBoards[s_bIndex].cards.splice(s_cIndex,1);
    tempBoards[t_bIndex].cards.splice(t_cIndex, 0, tempCard);

    setBoards(tempBoards);

  }

  const updateCard =(cid, bid, card)=>{
    const bIndex = boards.findIndex((item) => item.id === bid);
    if(bIndex<0) return;
   
    const cIndex = boards[bIndex].cards.findIndex((item) => item.id === cid);
    if(cIndex<0) return;

    const tempBoards = [...boards]
    tempBoards[bIndex].cards[cIndex] = card;
    setBoards(tempBoards)
  };

  const resetData= () =>{
    // localStorage.setItem("jobreacker", JSON.stringify(initialBoard))
    setBoards(initialBoard);
  }

  useEffect(() => {
    localStorage.setItem("jobtracker", JSON.stringify(boards))
  }, [boards]);


  return (
    <div className="App">
      <div className="app-navbar">
        <h2>Kanban</h2>
        <button onClick={() =>resetData()} className='reset-button' >Reset data</button>
      </div>
      <div className="app-outer">
        <div className="app-boards">
          {
            boards.map((item)=>(
              <Board 
              key={item.id}
              board={item}
              addCard = {addCard}
              removeCard = {removeCard}
              handleDragEnter = {handleDragEnter}
              handleDragEnd = {handleDragEnd}
              updateCard = {updateCard}
               />
            ))
          }
          
        </div>
      </div>
    </div>
  );
}

export default App;
