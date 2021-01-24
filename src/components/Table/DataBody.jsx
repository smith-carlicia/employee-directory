import React from "react";


function DataBody({user}) {
    
    console.log({user});
    return(
        <tbody key={user}>
            <td><img src={user.picture.medium} alt="user" /></td>
            <td>{user.name.first.last}</td>
            <td>{user.cell}</td>
            <td>{user.email}</td>
            <td>{user.dob}</td>
        </tbody>
    )
}

export default DataBody;
