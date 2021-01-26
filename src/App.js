import './App.css';
import Jumbotron from './components/Header/Header.jsx';
// import Text from './Text.js';
// import Header from './components/Header/Header.jsx';
import Search from './components/Search/Search.jsx';
import Table from './components/Table/DataTable.jsx';
// import Body from './components/Table/DataBody.jsx'; 
import Area from './components/Table/DataArea.jsx';


function App() {
  

  return (
    <div className="App">
      <Jumbotron />
      <Search />
      <Area />
      

    </div>
  );
}


export default App;
