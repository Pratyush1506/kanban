import React from 'react'
import './Board.css'
import { MoreHorizontal } from 'react-feather'

function Board() {
  return (
    <div className='board'>
      <div className='board-top'>
        <p className="board-top-title">
        To Do  <span>2</span>
        </p>
        <p><MoreHorizontal /></p>
      </div>
      <div className="board-cards">
        <h1>Card 1</h1>
        <h1>Card 2</h1>
      </div>
    </div>
  )
}

export default Board