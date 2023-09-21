import React from 'react'
import './Card.css'
import { CheckSquare, Clock, MoreHorizontal } from 'react-feather'
import Chip from '../Chip/Chip'

function Card() {
  return (
    <div className='card'>
        <div className="card-top">
            <div className="card-labels">
                <Chip text="Frontend" color="green" />
            </div>
            <MoreHorizontal/>
        </div>
        <div className="card-title">weaasf ewdaf dwfasfa</div>
        <div className="card-footer">
            <p>
                <Clock/>
                29 Sept
            </p>
            <p>
                <CheckSquare />
                1/4
            </p>
        </div>
    </div>
  )
}

export default Card