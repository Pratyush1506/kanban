import React, { useState } from 'react'
import './Editable.css'
import { X } from 'react-feather'
function Editable(props) {
  const [showEdit, setShowEdit] = useState(false)
  return (
    <div className='edittable'>

    {
      showEdit ? (
        <form className={`editable-edit ${props.editClass || "" } `} 
        onSubmit={(event)=>{
          event.preventDefault()
          if(props.onSubmit)props.onSubmit()
        }}
        >
            <input type="text"
            defaultValue={props.text} 
            placeholder={props.placeholder || "Enter item"}
            />
            <div className='editable-edit-footer'>
                <button type="submit">{props.buttonText || "Add"}</button>
                <X onClick={()=> setShowEdit(false)}/>
            </div>
        </form>

      ) : (
        <p className={`editable-display ${props.displayClass || ""}`} onClick={()=>setShowEdit(true)}>{props.text || "Add item"}</p>
      )
    }   
    </div>
  )
}

export default Editable