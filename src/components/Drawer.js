import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Logo from './reno.png'
import NestedList from './NestedList'

import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react'
import DataTable from './Table'
import Bar from './bar';
import Modal from './modal';
import Edit_Modal from './Edit_Modal';
import Date_time from './date_time';

const drawerWidth = 200;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));




//

export default function Home(props) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false); //for drawer

  const [Modal_open,toggle_Modal] = React.useState(false);//for add user modal

  const [Modal_view,toggle_Edit_Modal] = React.useState(false);//for edit user modal

  const handleDrawer = () => {
    setOpen(!open);
  };


  const handleClick = () => {
   // debugger
  toggle_Modal(!Modal_open);

  };

  
  const handleClick2 = () => {
    toggle_Edit_Modal(!Modal_view);
   // debugger
  
    };


  ///// add user
  const [users, setUsers] = useState([]);

  const addUser = (fullName, userName, email, group,) => {//function
    const newUser = { //object
      fullName,
      userName,
      email,
      group,
  

     };
    setUsers(prevUsers => [...prevUsers, newUser]);//update state
  };

  //// edit user
  const [users_data,get_user] = useState([]);

  const get_data = (id,Name,UserName,Email_address,Group_info) =>{

    //object that has the data.
    const data_new ={
      id,
      Name,
      UserName,
      Email_address,
      Group_info
    }
//debugger
    get_user(data_new)
    
 
  }





  












  return (
     
        
      <Box sx={{ display: 'flex', bgcolor: 'whitesmoke', color: 'black' }}>
       
      
      
     
    
      <CssBaseline />
      <AppBar position="fixed" open={open}
      sx={{
        bgcolor:'white'
      }}
      >
        
        <Toolbar>
          {/* box here and d-flex it just like a div */}



          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawer}
            edge="start"
            sx={{ color:'gray',mr: 2, }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div"
          sx={{color:'gray'}}
          >
       
           <Date_time />
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
         
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            backgroundColor: '#050e2d',
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader
       
        >
        
         
        </DrawerHeader>
         <img src={Logo} alt='reno'/>

         <TextField

            id="search"
            type="search"
            label="Quick Access"
            // value={searchTerm}
            // onChange={handleChange}
            sx={{ maxHeight:'45px',width: '188px', backgroundColor:"white", borderRadius:'20px'}}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        <Divider />
        <List >


        <NestedList   
    
        
        />



        
        </List>
        <Divider />
        <List
        sx={{

           
        }}
        >
     
        </List>
      </Drawer>
      <Main open={open}>
    
      {/* insert here the bootstrap code  
      
      
      
      */}




  
      <Bar handleClick = {handleClick}/>
      {/* <Bar handleClick={handleClick} /> */}

       
        <DrawerHeader />
        {/* <Typography paragraph>
   
        </Typography>
        <Typography paragraph>
    
        </Typography> */}


    <DataTable  users={users} get_data={get_data} handleClick2 = {handleClick2} users_data={users_data} /> 
    
    <Modal show = {Modal_open} handleClick = {handleClick} addUser={addUser}/> 
    {/* {<Edit_Modal  show = {Modal_view} handleClick={handleClick2} users={users} /> } */}
    
    <Edit_Modal  show = {Modal_view} handleClick2 = {handleClick2} users_data={users_data} get_data={get_data}/>
      </Main>
    
    </Box>
    
  );
}