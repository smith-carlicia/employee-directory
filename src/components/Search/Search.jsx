import React from "react";
// import DataTable from '../Table/DataTable.jsx';
import DataArea from '../Table/DataArea.jsx';
// import DataBody from "../Table/DataBody.jsx";

function Search(values, sortedUsers) {

    // let handleSearchChange = event => {
    //     console.log(event.target.value);
    
    //     const filter = event.target.value;
    // //   <!-- create re-useable method that will filter the api response based on the value in the search box -->
    //     const filteredList = this.users.filter;

    //     (response => {
    //       let values = Object.values(response)
    //         .join("")
    //         .toLowerCase();
    //       })
    //       return values.indexOf(filter.toLowerCase()) !== -1;
    //     }
    
    //     setFilteredUsers(filteredList)

    return (
        <div className="Search-container">
            <input className="search-input">
            </input>
            <button className="searchButton btn-primary mb-2" type="submit">Search</button> */
             <DataArea />
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
    // }