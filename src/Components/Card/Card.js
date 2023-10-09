import React from 'react'
import './Card.css'
import { CheckSquare, Clock, MoreHorizontal } from 'react-feather'
import Chip from '../Chip/Chip'
import Dropdown from '../Dropdown/Dropdown'
import { useState } from 'react'
import CardInfo from './CardInfo/CardInfo'

function Card(props) {
    
const [showDropdown, setShowDropdown] = useState(false);
const [showModal, setShowModal] = useState(false);


  return (
    <>
        {showModal && (
                <CardInfo 
                card={props.card}
                updateCard={props.updateCard}
                boardId={props.boardId}
                onClose={()=>setShowModal(false)}
                 />
                )
            }
        <div className='card'
            draggable
            onDragEnd={()=>props.handleDragEnd(props.card?.id, props.boardId)}
            onDragEnter={()=>props.handleDragEnter(props.card?.id, props.boardId)}
            onClick={()=> setShowModal(true)}
        >
            <div className="card-top">
                <div className="card-top-labels">
                    {
                        props.card?.labels?.map((item,index)=>(
                            <Chip key={index} text={item.text} color={item.color} />
                        ))
                    }
                </div>
                <div className="card-top-more" onClick={(event) => {
                    setShowDropdown(true);
                    event.stopPropagation();
                }}>
                    <MoreHorizontal />
                    {showDropdown && (
                        <Dropdown onClose={()=> setShowDropdown(false)} >
                        <div className="card-dropdown">
                            <p onClick={()=>{
                                props.removeCard(props.card?.id, props.boardId)
                            }} >Delete Card</p>
                        </div>
                        </Dropdown>
                    )}
                </div>
            </div>
            <div className="card-title"> {props.card?.title} </div>
            <div className="card-footer">
                {
                    props.card?.date &&( 
                    <p>
                        <Clock/>
                        {props.card?.date}
                    </p>
                )}
                {  
                    props.card?.tasks?.length>0 && (
                <p>
                    <CheckSquare />
                    {props.card.tasks?.filter((item) => item.completed)?.length}/{props.card.tasks?.length}
                </p>
                )
                }
            </div>
        </div>
    </>
  )
}

export default Card