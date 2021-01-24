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
           headings={_this_.headings}
           users={_this_.state.filteredUsers}
           handleSort={_this_.handleSort}
        />
    }
}