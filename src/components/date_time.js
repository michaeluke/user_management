import React from "react";
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';

import HelpIcon from '@mui/icons-material/Help';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
export default function Date_time (){



return(


<div className=" header d-flex justify-content-between">


<div>     Good Morning!  {new Date().toLocaleString() + ""} </div>

<div id="rest"><HelpIcon/> <NotificationsActiveIcon sx={{color:'gray'}}/> Nader Amer</div>



</div>



)



}