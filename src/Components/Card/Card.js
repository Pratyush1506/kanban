import React from 'react'
import './Card.css'
import { CheckSquare, Clock, MoreHorizontal } from 'react-feather'
import Chip from '../Chip/Chip'
import Dropdown from '../Dropdown/Dropdown'
import { useState } from 'react'

function Card(props) {
    
const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div className='card'
        draggable
    >
        <div className="card-top">
            <div className="card-top-labels">
                {
                    props.card?.labels?.map((item,index)=>(
                        <Chip key={index} text={item.text} color={item.color} />
                    ))
                }
                
            </div>
            <div className="card-top-more" onClick={() => setShowDropdown(true)}>
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

            <p>
                <CheckSquare />
                1/4
            </p>
        </div>
    </div>
  )
}

export default Card