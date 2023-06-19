import React , { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useForm } from 'react-hook-form';

export default  function Edit_Modal(props) {


  const debounceTimeoutRef = React.useRef(null);
  const [id,setID] = useState('')
  const [fullName, setFullName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [group,setGroup] = useState('')

  const { register, handleSubmit  , formState: { errors },} = useForm();

  useEffect(() => {
    if (props.users_data) {
        const user = props.users_data;
  
      setFullName(user.fullName);
      setUserName(user.userName);
      setEmail(user.email)
      setGroup(user.group);
     
      setID(user.id)
    }
  }, [props.users_data]);


  const onSubmit = (data) => {
  
    props.get_data(id,data.fullName, data.userName,data.email,data.group);
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
 
    
    props.get_data(id, '', '', '', '');
    setFullName('');
    setUserName('');
    setEmail('');
    setGroup('');
    props.handleClick2();
 
     }
  

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

          <form onSubmit={handleSubmit(onSubmit)}> 

           <label htmlFor="fullname " className='labels'>Full Name:</label>
           <input type="text" className="form-control" id="fullname" placeholder={fullName} autoComplete='off'  {...register('fullName', { required: 'Full Name is required' })} />
           {errors.fullName && (
           <p className="error-message text-danger">{errors.fullName.message}</p>
           )}

           <label htmlFor="username " className='labels'>User Name:</label>
           <input type="text" className="form-control" id="username" placeholder={userName}  autoComplete='off'{...register('userName', { required: 'User Name is required' })}/>
           {errors.userName && (
           <p className="error-message text-danger">{errors.userName.message}</p>
           )}

           <label htmlFor="emailaddress " className='labels'>Email Address:</label>
           <input type="text" className="form-control" id="emailaddress" placeholder={email} autoComplete='off' {...register('email', { required: 'Email is required' })}/>
           {errors.email && (
           <p className="error-message text-danger">{errors.email.message}</p>
           )}

           <label htmlFor="usergroup " className='labels'>User Group:</label> <br/>
       
              <select name="Group" id="Group" {...register('group', { required: 'Group name is required' })}>
                {group && <option value={group}>{group}</option>}
                <option   value="Office">&nbsp; Office</option>
                <option   value="Managers">&nbsp; Managers</option>
                <option   value="Head Office">&nbsp; Head Office</option>
                
              </select> <br/>
              {errors.group && (
              <p className="error-message text-danger">{errors.group.message}</p>
            )}
         
              <div className='modal-footer'>
              <div id='reset2'>Reset fields</div>
              <button onClick={handleDelete} type="button" className="btn btn-primary" id='del'>Delete User</button>
              <button onClick={close_function} type="button" className="btn btn-secondary" id='close_footer' data-toggle="modal">Cancel</button>
              <button type="submit" className="btn btn-primary">Edit User</button>
              </div>

              </form>
           
            
            
           

            </div>
          
      
          </div>
        </div>
      </div>

    )

}