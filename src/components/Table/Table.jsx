import React from "react";
import "./Table.css";
import "./Data.jsx";

function Table(){
    return(
        <div className="table row">
            <table className="table-bordered table-striped">
                <thead>
                    <tr>
                        <th className="Image col">Image</th>
                        <th className="Name col">Name</th>
                        <th className="Phone col">Phone</th>
                        <th className="Email col">Email</th>
                        <th className="DOB col">DOB</th>
                    </tr>
                </thead>
            </table>
        </div>
    )
}

export default Table;