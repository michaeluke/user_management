import React , { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useForm } from 'react-hook-form';

export default  function Modal(props) {


  const debounceTimeoutRef = React.useRef(null);
  const [id, setID] = useState(1);
  const [fullName, setFullName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [group,setGroup] = useState('')
  const { register, handleSubmit  , reset, formState: { errors },} = useForm();
  



  const reset_modal = ()=>{

    reset();
    debugger
  }

  const onSubmit = (data) => {
    setID(prevID => prevID + 1);
 
    props.addUser(id,data.fullName, data.userName,data.email,data.group);
    setFullName('');
    setUserName('');
    setEmail('');
    setGroup('');
    reset();
 
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
              
            <form onSubmit={handleSubmit(onSubmit)}> 

            <label htmlFor="fullname " className='labels'>Full Name:</label>
           <input type="text" className="form-control" id="fullname" placeholder='Enter full name ' autoComplete='off'    {...register('fullName', { required: 'Full Name is required' })}/>
           {errors.fullName && (
           <p className="error-message text-danger">{errors.fullName.message}</p>
           )}

           <label htmlFor="username " className='labels'>User Name:</label>
           <input type="text" className="form-control" id="username" placeholder='Enter username' autoComplete='off'   {...register('userName', { required: 'User Name is required' })}/>
           {errors.userName && (
           <p className="error-message text-danger">{errors.userName.message}</p>
           )}
           
           <label htmlFor="emailaddress " className='labels'>Email Address:</label>
           <input type="text" className="form-control" id="emailaddress" placeholder='Enter user email address' autoComplete='off'   {...register('email', { required: 'Email is required' })}/>
           {errors.email && (
           <p className="error-message text-danger">{errors.email.message}</p>
           )}

           <label htmlFor="usergroup " className='labels'>User Group:</label> <br/>
       
              <select name="Group" id="Group"  {...register('group', { required: 'Group name is required' })}>
                <option   value=""></option>
                <option   value="Office">&nbsp; Office</option>
                <option   value="Managers">&nbsp; Managers</option>
                <option   value="Head Office">&nbsp; Head Office</option>
             
              </select> <br/>
              {errors.group && (
              <p className="error-message text-danger">{errors.group.message}</p>
            )}
                      
           {/* <label htmlFor="profile " className='labels'>Assign Profile:</label>
           <input type="text" className="form-control" id="profile" placeholder='Choose Profile' autoComplete='off'/> */}

           <div className='modal-footer'>
            <div id='reset' onClick={reset_modal}>Reset fields</div>
            <button onClick={props.handleClick} type="button" className="btn btn-secondary" id='close_footer' data-toggle="modal">Cancel</button>
           <button type="submit" className="btn btn-primary"> Add User</button>
           </div>
           </form>




            </div>
     
         
           
           
          
         
          </div>
        </div>
        
      </div>
    
   
    )

}