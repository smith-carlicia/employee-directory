import React from "react";
import DataTable from './Table/DataTable.jsx';
import DataArea from './Table/DataArea.jsx';

function Search() {

    return (
        <div className="Search-container">
            <input className="search-input">
            </input>
            <button className="searchButton btn-primary mb-2" type="submit">Search</button> */
             <DataTable>
                 <DataArea />
             </DataTable>
         </div>
        
    )
}

export default Search;

// / class Button extends React.Component{
    //     return(
    //         <div className="button">
    //             <button className="searchButton btn-primary mb-2" type="submit">Search</button>
    //         </div>
    //     )
    // }{props.dataNameInProps}