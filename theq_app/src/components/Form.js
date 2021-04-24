import React from 'react'
import './form.css'
import photo from './formpic.jpg';
import getonqueue from './images/GetonTheQ.png';
import text from './images/form_text.png';

class MyForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
  }

  onValueChange(event) {
    this.setState({
      selectedOption: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    data.append('sessiontype',this.state.selectedOption)
    fetch('/api', {
      method: 'POST',
      body: (data),
    });
    document.getElementById("queueForm").reset();
    this.props.history.push('/student-queue')

  }

  render() {
    return (
      <div>
      
      <img className = "formHeader" src = {getonqueue} alt = "" />
      <img className = "formphoto" src = {photo} alt = "" />
      <img className = "phototext" src = {text} alt = "" />

      <form id="queueForm" onSubmit={this.handleSubmit}>
        <label className = "namelabel" htmlFor="name">Name</label>
        <input className = "nameinput" name="name" type="Name" />

        <label className = "emaillabel" htmlFor="name">Email</label>
        <input className = "emailinput" name="Email" type="Email" />

        <label className = "questionlabel" htmlFor="question">Question</label>
        <input className = "questioninput" id="question" name="question" type="question" />

        <label className = "linklabel" htmlFor="link">Zoom Link</label>
        <input className = "linkinput" id="link" name="link" type="link" />

        <div className="radio">
          <div className = "radio1label">
          <label  htmlFor="sessiontype">
            <input
              className = "radio1"
              type="radio"
              value="Single"
              checked={this.state.selectedOption === "Single"}
              onChange={this.onValueChange}
            />
            1-on-1 Session
          </label>
          </div>
        </div>
        <div className="radio">
          <div className = "radio2label">
          <label htmlFor="sessiontype">
            <input
              className = "radio2"
              type="radio"
              value="Group"
              checked={this.state.selectedOption === "Group"}
              onChange={this.onValueChange}
            />
            Group Session
          </label>
          </div>
        </div>

        <button className = "formButton"> Join TheQ </button>

        
      </form>

      </div>
      
      


    );
  }
}

export default MyForm;
