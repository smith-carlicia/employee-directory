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
  
    // const [myState, setMyState] = useState(props.foo)
  
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
                <thead onClick={()=>{useState({state: state[{}]})}}>
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