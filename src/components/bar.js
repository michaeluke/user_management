import React from 'react'
import './App.css';


export default function Bar(props) {
 
  
    return(

         <div className='bar d-flex justify-content-between'>

            <div className='user'> User Management</div>

            <div onClick={props.handleClick} className='button_adduser'><button>+ Add New </button></div>

         </div>


    )

}