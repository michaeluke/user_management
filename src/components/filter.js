import React from "react";



export default function Filter(props) {



    const handle_search = (e) => {


        props.get_value(e.target.value);

    }

    return(
        
        <div className="d-flex align-items-center mb-5"> 

        <form className="form-inline">
        <input id="search" className="form-control mr-sm-2" type="search" placeholder="Search..." aria-label="Search" onChange={handle_search}/>
        </form>

        {/* for design only */}
        <input id="user_name" className="form-control mr-sm-2" type="search" placeholder="User Name"/>


        <div id="all_filters"> All filters</div>
        </div>
        
        
        )
}