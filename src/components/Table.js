import React, { useRef, useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'fullName', headerName: 'Name', width: 350 },
  { field: 'userName', headerName: 'User Name', width: 200 },
  {
    field: 'email',
    headerName: 'Email Adrress',
    // type: 'number',
    width: 200,
  },
  {
    field: 'group',
    headerName: 'Group',
    width: 200,
  },
];



export default function DataTable(props) {
  // const rows = [
  //   { id: 1, Name: 'default', userName: 'default', email: '@default',Group :'Default_Group'},
  //   { id: 2, Name: '', userName: '', email: '',Group :'' },
  //   { id: 3, Name: '', userName: '', email: '',Group :'' },
  //   { id: 4, Name: '', userName: '', email: '',Group :'' },
  //   { id: 5, Name: '', userName: '', email: '', Group:'' },
  //   { id: 6, Name: '', userName: '', email: '' , Group:''},
  //   { id: 7, Name: '', userName: '', email: '' , Group:''},
  //   { id: 8, Name: '', userName: '', email: '' , Group:''},
  //   { id: 9, Name: '', userName: '', email: '' , Group:''},
  //   { id: 10, Name: '', userName: '', email: '' , Group:''},
  //   { id: 11, Name: '', userName: '', email: '' , Group:''},
  //   { id: 12, Name: '', userName: '', email: '' , Group:''},
  // ];

  const rows =[
    // id , Name , userName , email ,Group
  ]

const [rows_data,setRow] = useState([]);

// const rowsRef = useRef(rows);

// const rows_copy = rowsRef.current.slice();


var index = 0;
//add new user
useEffect(() => {

  if (props.users) {
    const users = props.users;

   const rows_new = [...rows_data]
  console.log(users)
   debugger
  

   const updatedRows = users.map((user,i) => ({
    
    id: i+1,
    fullName: user.fullName,
    userName: user.userName,
    email: user.email,
    group: user.group,
  }))


  setRow(updatedRows);
  } 

 
}, [props.users]);

//edit a user
   useEffect(() => {
   
    if (props.users_data) {
    //  var data = props.users_data
     debugger
    //var index = data.id - (1);

    const { id, fullName, userName, email, group } = props.users_data;
    const rows_new = [...rows_data]




    rows_new.forEach((row)=>{

      if(row.id == id){
        debugger
        row.id = id;
        row.fullName = fullName;
        row.userName = userName;
        row.email = email;
        row.group = group;

      }
         // delete
        if (fullName === '') {
          rows_new.forEach((row, index) => {
            if (row.id === id) {
              rows_new.splice(index, 1);
              props.users.splice(index,1);
            }
          });
        }
    },

    setRow(rows_new)
      
      )

    }
  }, [props.users_data]);

   
 
   
      

  


  //get data from table and display on edit_modal
  const getdata = (row) => {
    console.log(row.Name)
  
    // if(row.Name != ''){
    
      props.get_data(row.id,row.fullName, row.userName,row.email,row.group);
      props.handleClick2();
    // }
  


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