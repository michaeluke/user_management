import React , { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';


export default  function Modal(props) {


  const debounceTimeoutRef = React.useRef(null);
  const [id, setID] = useState(1);
  const [fullName, setFullName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [group,setGroup] = useState('')

  const handle_fullname = event => {
   
    setFullName(event.target.value)
      // console.log(event.target.value);
    };
 

  const handle_username = event => {

    setUserName(event.target.value);
    // console.log(event.target.value);
  };

  const handle_email = event => {


    setEmail(event.target.value);
    // console.log(event.target.value);
  };

  const handle_group = event => {

  
      setGroup(event.target.value);
     // debugger
      console.log(event.target.value)

  }

  const handleSubmit = () => {
    
    setID(prevID => prevID + 1);
    props.addUser(id,fullName, userName,email,group);

    setFullName('');
    setUserName('');
    setEmail('');
    setGroup('');
//  debugger
    props.handleClick();
  };

   console.log(fullName,userName,email,group)

  if(!props.show){
    return null;
  }
    return(
  
    

    
      <div className="modal" id="exampleModal" tabIndex="-1" role="dialog" style={{ display: 'block' }} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
           
              <h5 className="modal-title" id="exampleModalLabel">Add New User</h5>
              <button onClick={props.handleClick} type="button" className="close" id="close_btn"  data-toggle="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body text-start">
              
            <label htmlFor="fullname " className='labels'>Full Name:</label>
           <input type="text" className="form-control" id="fullname" placeholder='Enter full name ' autoComplete='off' onChange={handle_fullname}  required/>

           <label htmlFor="username " className='labels'>User Name:</label>
           <input type="text" className="form-control" id="username" placeholder='Enter username' autoComplete='off' onChange={handle_username}  required/>

           <label htmlFor="emailaddress " className='labels'>Email Address:</label>
           <input type="text" className="form-control" id="emailaddress" placeholder='Enter user email address' autoComplete='off' onChange={handle_email}  required/>


           <label htmlFor="usergroup " className='labels'>User Group:</label> <br/>
       
              <select name="Group" id="Group" onClick={handle_group}  required>
                <option   value="Office">&nbsp; Office</option>
                <option   value="Managers">&nbsp; Managers</option>
                <option   value="Head Office">&nbsp; Head Office</option>
                
              </select> <br/>
          
           <label htmlFor="profile " className='labels'>Assign Profile:</label>
           <input type="text" className="form-control" id="profile" placeholder='Choose Profile' autoComplete='off'/>
        

            </div>
     
            <div className="modal-footer">
              <div id='reset'>Reset fields</div>
              <button onClick={props.handleClick} type="button" className="btn btn-secondary" id='close_footer' data-toggle="modal">Cancel</button>
              <button onClick={handleSubmit} type="button" className="btn btn-primary"> Add User</button>
            </div>
          </div>
        </div>
      </div>

    )

}