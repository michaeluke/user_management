import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { colors } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';

export default function NestedList() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: '#050e2d' , color:'gray', }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader"
        
        sx ={{bgcolor:'#050e2d' ,
        color:'gray',
        textAlign: 'left' , 
        pl:2,
        marginBottom:'20px'
      
      }}
        
        >
          <DashboardIcon sx={{paddingRight:"3px"}}/>
          Dashboard
        </ListSubheader>
      }
    >
       <ListItemText    sx={{ textAlign: 'left' , pl:2 ,fontSize:'5px'}}  primary="Settings"/>
     
      <ListItemButton>
       
       <ListItemText primary="ATM Settings" 
    
       
       />
       {open ? <ExpandLess /> : <ExpandMore />}
     </ListItemButton>
     
      <ListItemButton>
       
       <ListItemText primary="Business Setup" 
    
       
       />
       {open ? <ExpandLess /> : <ExpandMore />}
     </ListItemButton>

      <ListItemButton onClick={handleClick}>
       
        <ListItemText primary="User Management" 
     
        
        />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding
        sx={{paddingLeft:"12px"}}
        
        >
          <ListItemButton >
            
           
            <ListItemText primary="Users" />
          </ListItemButton>

          <ListItemButton >
            
           
            <ListItemText primary="Profiles" />
          </ListItemButton>

          <ListItemButton >
            
           
            <ListItemText primary="Groups" />
          </ListItemButton>

        </List>
      </Collapse>

      <ListItemText primary="License Agreement"
      
      sx={{
        textAlign: 'left' ,
        marginTop:'10px',
        paddingLeft:'15px'

      }}
      />
    </List>
  );
}