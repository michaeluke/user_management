import React from "react";



export default function Filter(props) {



    const handle_search = (e) => {


        props.get_value(e.target.value);

    }

    return(
        
        <form className="form-inline">
        <input id="search" className="form-control mr-sm-2" type="search" placeholder="Search..." aria-label="Search" onChange={handle_search}/>
      
        </form>
        
        
        )
}