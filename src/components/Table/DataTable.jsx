import React from "react";
import "./DataTable.css";
import DataBody from "./DataBody.jsx";
// import DataArea from "./DataArea.jsx";
// import APICall from '../../utils/API.jsx';

function DataTable(props){
    // const dataToGoToComponent = APICall();

    console.log(props.dataNameInProps);
    // console.log('API Call Data: ', dataToGoToComponent);
    // const [myState, setMyState] = useState(props.foo)
   

    return(
        <wrapper className="table row">
            <table className="table-bordered table-striped">
                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">DOB</th>
                    </tr>
                </thead>
                {/* <DataArea /> */}
                <DataBody props={props.DataTable.DataArea}
                />
                {/* dataNameInProps={dataToGoToComponent} */}
            </table>
        </wrapper>
    )
}

export default DataTable;