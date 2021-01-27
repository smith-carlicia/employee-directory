import React from "react";
import "./DataTable.css";
import DataBody from "./DataBody.jsx";
// import DataArea from "./DataArea.jsx";
// import APICall from '../../utils/API.jsx';

function DataTable({headings, users, handleSort}){
   
    return(

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