import React from 'react'
import './Board.css'
import { MoreHorizontal } from 'react-feather'
import Card from '../Card/Card'
import Editable from '../Editable/Editable'

function Board() {
  return (
    <div className='board'>
      <div className='board-top'>
        <p className="board-top-title">
        To Do <span>2</span>
        </p>
        <MoreHorizontal />
      </div>
      <div className="board-cards custom-scroll">
        <Card/>
        <Card/>
        <Editable 
          displayClass = "board-card-add"
          text="Add Card"
          placeholder="Enter Card Title"
        />
      </div>
    </div>
  )
}

export default Board