import logo from './logo.svg';
import './App.css';

function App() {
  return (
    /* <div className="App">
      <header className="App-header">
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
          Learn React
        </a>
      </header>
    </div> */
    <div className="wrapper">
    <h1>Enter the Queue</h1>
    <form>
    <fieldset>
       <label>
         <p>Name</p>
         <input name="name" />
       </label>
     </fieldset>
     <fieldset>
       <label>
         <p>Question</p>
         <input name="question" />
       </label>
     </fieldset>
     <button type="submit">Submit</button>
    </form>
  </div>
  );
}

export default App;
