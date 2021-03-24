import React from 'react'
import './form.css'
import photo from './formpic.jpg';
class MyForm extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    fetch('/api', {
      method: 'POST',
      body: (data),
    });
    document.getElementById("queueForm").reset();

  }

  render() {
    return (
      <div>
      
      <h1 className = "formHeader"> Get on TheQ </h1>
      <img className = "formphoto" src = {photo} alt = "" />
     

      <form id="queueForm" onSubmit={this.handleSubmit}>
        <label className = "namelabel" htmlFor="name">Name</label>
        <input className = "nameinput" name="name" type="Name" />

        <label className = "questionlabel" htmlFor="question">Question</label>
        <input className = "questioninput" id="question" name="question" type="question" />

        <label className = "linklabel" htmlFor="link">Zoom Link</label>
        <input className = "linkinput" id="link" name="link" type="link" />

        <button className = "formButton"> Join TheQ </button>

        
      </form>

      </div>
    );
  }
}


/*
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
*/
export default MyForm;
