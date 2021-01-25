import React from "react";
import DataTable from './DataTable.jsx';
import APICall from '../../utils/API.jsx';

export default class DataArea extends React.Component {

    componentDidMount(props) {
        const dataToGoToComponent = APICall();

        console.log(dataToGoToComponent);

        fetch(dataToGoToComponent).then(results => {
          this.setState({
            users: this.results,
            filteredUsers: this.results
          });
        });
    }
    
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
      const sortedEmployees = this.state.filteredEmployees.sort((a, b) => {
        return a.nat < b.nat ? -1 : 1;
      });
      // console.log(sortedEmployees);
      this.setState({
        employees: sortedEmployees,
      });
    };

    handleSort = () => {
        if (this.state.order === "descend") {
          this.setState({
            order: "ascend"
          })
        } else {
          this.setState({
            order: "descend"
          })
    }}
  

    render() {
      return(
        <DataTable
        headings={this.headings}
        users={this.state.filteredUsers}
        handleSort={this.user}
      />
      )
    }
}
