import logo from './logo.svg';
import './App.css';

function App() {
  const list=['react','javascript','CSS','HTML'];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
       
        </a>
        <li key='3'>
            {list[0]}
        </li>
        <li key='2'>
            {list[1]}
        </li>
        <li key='4'>
            {list[2]}
        </li>
        <li key='1'>
            {list[3]}
        </li>
      {/*{list.map(v=><li>{v}</li>)} //error */}
      </header>
    </div>
  );
}

export default App;
