import React from "react";


function DataBody(props) {
    
    console.log(props);
    return(
        <tbody key="prop"s>
            <td><img src={props.picture.medium} alt="prop" /></td>
            <td>{props.name.first.last}</td>
            <td>{props.cell}</td>
            <td>{props.email}</td>
            <td>{props.dob}</td>
        </tbody>
    )
}

export default DataBody;
