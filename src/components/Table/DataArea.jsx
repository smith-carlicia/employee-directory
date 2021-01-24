// import Nav from './Nav/Nav.jsx';
import DataTable from './Table/DataTable.jsx';

export default class DataArea extends React.Component {
    state = {
      users: [{}],
      order: "descend",
      filteredUsers: [{}]
    }
    headings = [
      { name: "Image", width: "10%" },
      { name: "Name", width: "10%" },
      { name: "Phone", width: "20%" },
      { name: "Email", width: "20%" },
      { name: "DOB", width: "10%" }
    ]

    render(){
        <DataTable
           headings={this.headings}
           users={this.state.filteredUsers}
           handleSort={this.handleSort}
        />
    }
}