import React, { useReducer } from "react";
import API from '../../utils/API.jsx';

function DataBody({user}) {
    console.log(API);
    return(
        <tbody key={user}>
            <td>{user.picture}</td>
            <td>{user.name}</td>
            <td>{user.cell}</td>
            <td>{user.email}</td>
            <td>{user.dob}</td>
        </tbody>
    )
}

export default DataBody;
