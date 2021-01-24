import React from "react";
import DataTable from './DataTable.jsx';
import APICall from '../../utils/API.jsx';

export default class DataArea extends React.Component {

    componentDidMount(props) {
        const dataToGoToComponent = APICall();

        console.log(dataToGoToComponent);
        console.log(props.dataNameInProps);

        fetch(dataToGoToComponent).then(results => {
          this.setState({
            users: results.data.results,
            filteredUsers: results.data.results
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
        handleSort={this.handleSort}
        // dataNameInProps={dataToGoToComponent}
      />
      )
    }
}
