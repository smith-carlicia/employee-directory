import React from "react";
import "./DataTable.css";
import DataBody from "./DataBody.jsx";

function Table(props){

    console.log(props.dataNameInProps);

    state={
        users: [{}],
        order: "descend",
        filteredUsers: [{}]
    }
  
    // let sort = ()=> {
    //     setUsers(users);
    //     setOrder(order);
    //     setFilteredUsers(filteredUsers);
    // };
  
    headings = [
        { name: "Image", width: "10%" },
        { name: "Name", width: "10%" },
        { name: "Phone", width: "20%" },
        { name: "Email", width: "20%" },
        { name: "DOB", width: "10%" }
    ];
   

    return(
        <wrapper className="table row">
            <table className="table-bordered table-striped">
                <thead onClick={()=>{this.setState({this.state:this.state.[{}])}}>{this.props.texttoshow}>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>DOB</th>
                    </tr>
                </thead>
                <DataBody />
            </table>
        </wrapper>
    )
}

export default Table;