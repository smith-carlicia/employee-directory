import React, { useReducer } from "react";
import API from "../Api.jsx";

function DataBody() {
    return(
        <tbody>
            <td>{user.picture}</td>
            <td>{user.name}</td>
            <td>{user.cell}</td>
            <td>{user.email}</td>
            <td>{user.dob}</td>
        </tbody>
        // <API />
    )
}

export default DataBody;
