import React from "react";


function DataBody(props) {
    
    console.log(props);
    return(
        <tbody key="props">
            <td><img src={props.picture} alt="props" /></td>
            <td>{props.name}</td>
            <td>{props.cell}</td>
            <td>{props.email}</td>
            <td>{props.dob}</td>
        </tbody>
    )
}

export default DataBody;
