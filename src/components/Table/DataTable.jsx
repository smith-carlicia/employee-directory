import React from "react";
import "./DataTable.css";
import DataBody from "./DataBody.jsx";
import APICall from '../../utils/API.jsx';

function Table(props){

    const dataToGoToComponent = APICall();
    console.log(props.dataNameInProps);
    console.log('API Call Data: ', dataToGoToComponent);
    // const [myState, setMyState] = useState(props.foo)
   

    return(
        <wrapper className="table row">
            <table className="table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>DOB</th>
                    </tr>
                </thead>
                <DataBody dataNameInProps={dataToGoToComponent} />
            </table>
        </wrapper>
    )
}

export default Table;