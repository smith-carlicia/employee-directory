import React from "react";
import './Header.css';

function Header(){
   return(
    <div class="header">
        <h1 class="display-4">Employee Directory</h1>
        <p class="lead">Click on carrots to filter by heading or use the search box to narrow your results</p>
    </div>
   )
}

export default Header;