import React from "react";

import DataTable from './DataTable.jsx';

function DataBody(props) {
    // const random = useContext(DataTable);
    // const array = random.results[0];
    console.log(props);
    return(
            <thead key={props.cell.i}>
                {props.results.map((result, i) => (
                     <tr>
                     <ul>
                     <li>
                     <td><img src={result.picture} alt="props" /></td>
                     </li>
                     <li>
                      <td>{result.name.first}</td>
                     </li>
                     <li>
                      <td>{result.cell}</td>
                      </li>
                      <li>
                      <td>{result.email}</td>
                      </li>
                      <li>
                      <td>{result.dob}</td>
                      </li>
                     </ul>
                   </tr>
                ))}
        </thead>
    )
}

export default DataBody;
