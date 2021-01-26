import React from "react";
import DataTable from './DataTable.jsx';
import APICall from '../../utils/API.jsx';

export default class DataArea extends React.Component {

    state = {
      users: [{}],
      order: "descend",
      filteredUsers: [{}],
    }

    headings = [
      { name: "Image", width: "10%" },
      { name: "Name", width: "10%" },
      { name: "Phone", width: "20%" },
      { name: "Email", width: "20%" },
      { name: "DOB", width: "10%" }
    ]

    handleInputChange = (event) => {
      const { name, value } = event.target;
  
      const filteredEmployees = this.state.employees.filter((employee) => {
        return employee.name.last.includes(value);
      });
  
      this.setState({
        [name]: value,
        filteredEmployees: filteredEmployees,
      });
    };
  
    handleOnClick = () => {
      // console.log("clicked button");
      let sortedEmployees;

      if(this.state.order === "descend") {
        sortedEmployees = this.state.filteredUsers.sort((a, b) => {
          return a.name.last > b.name.last ? -1 : 1;
        });
      } else if (this.state.order === "ascend"){ 
        sortedEmployees = this.state.filteredUsers.sort((a, b) => {
          return a.name.last < b.name.last ? -1 : 1;
        });
      }
      
      // console.log(sortedEmployees);
      this.handleSort()
      this.setState({
        employees: sortedEmployees,
      });
    };

    handleSort = () => {
      console.log("handleSort");
        if (this.state.order === "descend") {
          this.setState({
            order: "ascend"
          })
        } else {
          this.setState({
            order: "descend"
          })
    }}
    
  
    componentDidMount() {

      APICall.theAPI().then(results => {
        this.setState({
          users: results.data.results,
          filteredUsers: results.data.results
        });
      });
        // const dataToGoToComponent = APICall();

        // console.log(dataToGoToComponent);
       

        // (dataToGoToComponent).then(results => {
        //    console.log(results);
        //   this.setState({
        //     users: results.data.results,
        //     filteredUsers: results.data.results
        //   });
        // });
    }
    render() {
      console.log(this.props.searchTerm)
      return(
        <DataTable
        headings={this.headings}
        users={this.state.filteredUsers}
        handleSort={this.handleOnClick}
      />
      )
    }
}
