import React, { useState } from 'react'
import './Board.css'
import Card from '../Card/Card'
import Editable from '../Editable/Editable'

function Board(props) {

  
  return (
    <div className='board'>
      <div className='board-top'>
        <p className="board-top-title">
          {props.board?.title} <span> {` ${props.board?.cards?.length}`} </span>
        </p>
        
      </div>
      <div className="board-cards custom-scroll">
        {
          props.board?.cards.map((item)=>(
            <Card
            key={item.id} 
            card={item} 
            removeCard={props.removeCard} 
            boardId = {props.board?.id} 
            handleDragEnd = {props.handleDragEnd}
            handleDragEnter = {props.handleDragEnter}
            updateCard = {props.updateCard}
            />
          ))
        }
        <Editable 
          displayClass = "board-card-add"
          text="Add Card"
          placeholder="Enter Card Title"
          onSubmit = {(value)=>props.addCard(value, props.board?.id)}
        />
      </div>
    </div>
  )
}

export default Board