import React from "react";
import "./DataTable.css";
import DataBody from "./DataBody.jsx";
// import DataArea from "./DataArea.jsx";
// import APICall from '../../utils/API.jsx';

function DataTable({headings, users, handleSort}){
    // const dataToGoToComponent = APICall();

    // console.log(props);
    // console.log('API Call Data: ', dataToGoToComponent);
    // const [myState, setMyState] = useState(props.foo)
   

    return(
        // <div className="container table">
        //     <table className="table-bordered table-striped">
        //         <thead>
        //             <tr>
        //                 <th scope="col">Image</th>
        //                 <th scope="col">Name</th>
        //                 <th scope="col">Phone</th>
        //                 <th scope="col">Email</th>
        //                 <th scope="col">DOB</th>
        //             </tr>
        //         </thead>
        //         {/* <DataArea /> */}
        //         <DataBody props={props}
        //         />
        //         {/* dataNameInProps={dataToGoToComponent} */}
        //     </table>
        // </div>

        <div className="datatable mt-5">
            <table 
            id="table"
            >

<thead>
    <tr>
        {headings.map(({name, width}) => {
            return (

                <th
                className='col'
                key={name}
                style={{width}}
                onClick={()=> {
                    handleSort(name.toLowerCase());
                }}
                >
                    {name}
                </th>
            );
        })}
    </tr>
</thead>
<DataBody 
    users={users}/>
            </table>
        </div>
    )
}

export default DataTable;