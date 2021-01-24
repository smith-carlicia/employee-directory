import React from "react";
import './Header.css';
// import Table from './Table/DataTable.jsx';

function Header(){
   return(
    <div className="header">
        <h1 className="display-4">Employee Directory</h1>
        <p className="lead">Click on carrots to filter by heading or use the search box to narrow your results</p>
    </div>
    // <DataTable props={props.dataNameInProps}/>
   )
   
}

export default Header;