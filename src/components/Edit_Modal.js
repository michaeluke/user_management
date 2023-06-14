import React , { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';


export default  function Edit_Modal(props) {


  const debounceTimeoutRef = React.useRef(null);
  const [id,setID] = useState('')
  const [fullName, setFullName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [group,setGroup] = useState('')

   const [areStatesEmpty, setAreStatesEmpty] = useState(false);

  useEffect(() => {
    if (props.users_data) {
        const user = props.users_data;
     // const user = props.users_data[0];
      setFullName(user.Name);
      setUserName(user.UserName);
      setEmail(user.Email_address);
      setGroup(user.Group_info);
     
      setID(user.id)
    }
  }, [props.users_data]);




  const handle_fullname = event => {
  
    setFullName(event.target.value)
   
    
    };
 

  const handle_username = event => {
  
    setUserName(event.target.value);

  };

  const handle_email = event => {
 
    setEmail(event.target.value);
  
  };

  const handle_group = event => {

    
    setGroup(event.target.value);
  }

  const handleSubmit = () => {
    props.get_data(id,fullName, userName,email,group);
    setFullName('');
    setUserName('');
    setEmail('');
    setGroup('');
  
    props.handleClick2();
  };

  const close_function = () => {
   
    props.get_data(id,fullName, userName,email,group);
    setFullName('');
    setUserName('');
    setEmail('');
    setGroup('');
    props.handleClick2();

  }
  const handleDelete = () => {
 
    setFullName('');
    setUserName('');
    setEmail('');
    setGroup('');
    setAreStatesEmpty(true)
   
     }
  
  useEffect(() => {
    if (areStatesEmpty) {
      props.get_data(id, fullName, userName, email, group);
      setAreStatesEmpty(false)
      props.handleClick2();
    }
  }, [areStatesEmpty]);

   console.log(fullName,userName,email,group)

  if(!props.show){
    return null;
  }
    return(
  
    

    
      <div className="modal" id="exampleModal" tabIndex="-1" role="dialog" style={{ display: 'block' }} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit User:</h5>
              <button onClick={close_function} type="button" className="close" id="close_btn"  data-toggle="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body text-start">
            <label htmlFor="fullname " className='labels'>Full Name:</label>
           <input type="text" className="form-control" id="fullname" placeholder={fullName} autoComplete='off' onChange={handle_fullname} />

           <label htmlFor="username " className='labels'>User Name:</label>
           <input type="text" className="form-control" id="username" placeholder={userName}  autoComplete='off' onChange={handle_username}/>

           <label htmlFor="emailaddress " className='labels'>Email Address:</label>
           <input type="text" className="form-control" id="emailaddress" placeholder={email} autoComplete='off' onChange={handle_email}/>


           <label htmlFor="usergroup " className='labels'>User Group:</label> <br/>
       
              <select name="Group" id="Group" onClickCapture={handle_group}>
                {group && <option value={group}>{group}</option>}
                <option   value="Office">&nbsp; Office</option>
                <option   value="Managers">&nbsp; Managers</option>
                <option   value="Head Office">&nbsp; Head Office</option>
                
              </select> <br/>

           <label htmlFor="profile " className='labels'>Assign Profile:</label>
           <input type="text" className="form-control" id="profile" placeholder='Choose Profile' autoComplete='off'/>


            </div>
            <div className="modal-footer">
              <div id='reset2'>Reset fields</div>
              <button onClick={handleDelete} type="button" className="btn btn-primary" id='del'>Delete User</button>
              <button onClick={close_function} type="button" className="btn btn-secondary" id='close_footer' data-toggle="modal">Cancel</button>
              <button onClick={handleSubmit} type="button" className="btn btn-primary">Edit User</button>
            </div>
          </div>
        </div>
      </div>

    )

}