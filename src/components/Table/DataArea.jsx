// import Nav from './Nav/Nav.jsx';
import DataTable from './Table/DataTable.jsx';
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

    handleSort => {
      if (this.state.order === "descend") {
        this.setState({
          order: "ascend"
        })
      } else {
        this.setState({
          order: "descend"
        })
      }

  
    handleSearchChange = event => {
    console.log(event.target.value);

    const filter = event.target.value;
//   <!-- create re-useable method that will filter the api response based on the value in the search box -->

    const filteredList = this.state.users.filter

    setFilteredUsers(sortedUsers)

    (response => {
      let values = Object.values(response)
        .join("")
        .toLowerCase();
      })
      
    render(){
        <DataTable
           headings={this.headings}
           users={this.state.filteredUsers}
           handleSort={this.handleSort}
        />
        dataNameInProps={dataToGoToComponent}
    }

