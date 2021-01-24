import logo from './logo.svg';
import './App.css';
// import Text from './Text.js';
import Header from './components/Header/Header.jsx';
import Search from './components/Search/Search.jsx';
import Button from './components/Button/Button.jsx';
import Table from './components/Table/DataTable.jsx';
import Body from './components/Table/DataBody.jsx';


function App() {
  

  return (
    <div className="App">
      <Header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React App
        </a>
        {/* <Text texttoshow="this is the text to show"/> */}
      </Header>
      <Search />
        {/* <Button /> */}
      <Table>
        <Body />
      </Table>
    </div>
  );
}

// users={users}

export default App;
