import logo from './logo.svg';
import './App.css';
import Text from './Text.js';
// import API from './components/API/API.jsx';
import Header from './components/Header/Header.jsx';
import Search from './components/Search/Search.jsx';
import Button from './components/Button/Button.jsx';
import Table from './components/Table/Table.jsx';

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
        <Text texttoshow="this is the text to show"/>
      </Header>
      <Search />
        {/* <Button /> */}
      <Table />
    </div>
  );
}

export default App;
