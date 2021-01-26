import React from "react";
// import DataTable from '../Table/DataTable.jsx';
import DataArea from '../Table/DataArea.jsx';
// import DataBody from "../Table/DataBody.jsx";

class Search extends React.Component {

    state = {
        searchTerm: ""
    }
    
    handleInputChange = (event) => {
        this.setState({searchTerm: event.target.value})
    }

    render() {
        return (
            <div className="Search-container">
                <input className="search-input lg"
                onChange={this.handleInputChange}>
                </input>
                <button className="searchButton btn-info mb-2" type="submit">Search</button> 
                 <DataArea
                 searchTerm={this.state.searchTerm}
                  />
             </div>
            
        )
    }
}

export default Search;

// / class Button extends React.Component{
    //     return(
    //         <div className="button">
    //             <button className="searchButton btn-primary mb-2" type="submit">Search</button>
    //         </div>
    //     )
    // }