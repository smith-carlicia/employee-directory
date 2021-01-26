import React, { useContext } from "react";

// import DataTable from './DataTable.jsx';

function DataBody({users}) {
    function formatDate(date){
        const dateArray = date.split("-");
        const year = dateArray[0];
        const month = dateArray[1];
    }
    // const  employeeInfo = useContext(DataTable);
    // const array = employeeInfo.results[0];
    return(
        //     <thead key={props.results} >
        //         {props.array.map((results) => (
                    
        //              <tr>
        //                 <td><img src={props.picture} alt="props" /></td>
        //                 <td>{props.name}</td>
        //                 <td>{props.cell}</td>
        //                 <td>{props.email}</td>
        //                 <td>{props.dob}</td>
        //             </tr>
        //         ))}

        // </thead>
        <tbody>
{users[0] !== undefined && users[0].name !== undefined ? (
    users.map(({login, name, phone, picture, email, dob})=>{
        return(
            <tr key={login.uuid}>
                <td data-th="Image" className="align-middle">
                    <img 
                    src={picture.medium}
                    alt={"profile picture"}
                    className="img-responsive"
                    />
                </td>
                <td data-th="Name" className="name-cell align-middle">
                   {name.first}{name.last}
                </td>
                <td data-th="Phone" className="align-middle">
                 {phone}
                </td>
                <td data-th="Email" className="align-middle">
               <a href={"mailto:" + email} target="_blank">
                   {email}
               </a>
                </td>
                <td data-th="DOB" className="align-middle">
                {formatDate(dob.date)}
                </td>
            </tr>
        );
    })
): (
    <></>
)}

        </tbody>
    )
;}


export default DataBody;
