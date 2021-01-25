import React from "react";

import DataTable from './DataTable.jsx';

function DataBody(props) {
    // const array = random.results[0];
    return(
            <thead >
                {props.results.map((results) => (
                    // key={props.results}
                     <tr>
                    <td><img src={props.results.users.picture} alt="props" /></td>
                        <td>{props.results.users.name}</td>
                      <td>{props.results.users.cell}</td>
                      <td>{props.results.users.email}</td>
                      <td>{props.results.users.dob}</td>
                    </tr>
                )
                    )}

        </thead>
    )}


export default DataBody;
