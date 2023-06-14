import React, { useRef, useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'Name', headerName: 'Name', width: 350 },
  { field: 'userName', headerName: 'User Name', width: 200 },
  {
    field: 'email',
    headerName: 'Email Adrress',
    // type: 'number',
    width: 200,
  },
  {
    field: 'Group',
    headerName: 'Group',
    width: 200,
  },
];



export default function DataTable(props) {
  const rows = [
    { id: 1, Name: 'default', userName: 'default', email: '@default',Group :'Default_Group'},
    { id: 2, Name: '', userName: '', email: '',Group :'' },
    { id: 3, Name: '', userName: '', email: '',Group :'' },
    { id: 4, Name: '', userName: '', email: '',Group :'' },
    { id: 5, Name: '', userName: '', email: '', Group:'' },
    { id: 6, Name: '', userName: '', email: '' , Group:''},
    { id: 7, Name: '', userName: '', email: '' , Group:''},
    { id: 8, Name: '', userName: '', email: '' , Group:''},
    { id: 9, Name: '', userName: '', email: '' , Group:''},
    { id: 10, Name: '', userName: '', email: '' , Group:''},
    { id: 11, Name: '', userName: '', email: '' , Group:''},
    { id: 12, Name: '', userName: '', email: '' , Group:''},
  ];

const [rows_data,setRow] = useState(rows);

const rowsRef = useRef(rows);

const rows_copy = rowsRef.current.slice();


var index = 0;
//add new user
useEffect(() => {
  if (props.users) {
    const users = props.users;
   // const user = props.users_data[0];
   
    users.map ((user,i)=>{

   
    debugger
    rows_copy[i].Name =user.fullName
    rows_copy[i].userName =user.userName
    rows_copy[i].email =user.email
    rows_copy[i].Group =user.group
    debugger

   })
   
   setRow(rows_copy);
 
   
  }
}, [props.users]);

//edit a user
   useEffect(() => {
    if (props.users_data !='') {
     var data = props.users_data
     
     var index = data.id - (1);
     debugger
     
   
      
      rows_copy[index].Name = data.Name;
      rows_copy[index].userName = data.UserName;
      rows_copy[index].email = data.Email_address;
      rows_copy[index].Group = data.Group_info;
   
      setRow(rows_copy);
  
    }
  }, [props.users_data]);

   
 
   
      

  


  //get data from table and display on edit_modal
  const getdata = (row) => {
    console.log(row.Name)
  
    if(row.Name != ''){
      props.handleClick2();
      props.get_data(row.id,row.Name, row.userName,row.email,row.Group);
    }
  


    debugger

  }


 


  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid

        rows={rows_data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        onRowDoubleClick={(row) => {
          // Handle the double-click event for a specific row
          
          var row_data = row.row
          console.log('Double-clicked row:', row_data);
          debugger
          getdata(row_data)

         
          // Perform any other actions as needed
        }}
      />
    </div>
  );
}