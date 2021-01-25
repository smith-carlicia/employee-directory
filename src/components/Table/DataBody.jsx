import React from "react";

import DataTable from './DataTable.jsx';

function DataBody(props) {
    // const random = useContext(DataTable);
    // const array = random.results[0];
    return(
            <thead key={data.results}>
                {data.results.map((results) => (
                     <tr>
                    <td><img src={results.picture} alt="props" /></td>
                        <td>{results.name}</td>
                      <td>{results.cell}</td>
                      <td>{results.email}</td>
                      <td>{results.dob}</td>
                    </tr>
                )
                    )}

        </thead>
    )}


export default DataBody;
