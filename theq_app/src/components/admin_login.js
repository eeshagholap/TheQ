import React from 'react';
import './form.css';
import photo from './formpic.jpg';

class AdminForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      password: "",
      c_password: "admin",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  inputPassword = event => {
    this.setState({ password: event.target.value });
  };

  handleSubmit(event) {
    event.preventDefault();
    const { password, c_password } = this.state;
    const matches = password === c_password;
    matches ? this.props.history.push('/queue') : alert("Authentication Failed");  
  }

  render() {
    return (
      <div>
     <h1 className = "formHeader"> Get on TheQ </h1>
      <img className = "formphoto" src = {photo} alt = "" />
     

      <form id="queueForm" onSubmit={this.handleSubmit}>
        <label className = "namelabel" htmlFor="name">Password</label>
        <input className = "nameinput" name="name" type="Name" onChange={this.inputPassword} />

        <button className = "formButton"> Join TheQ </button>

      </form>

      </div>
    );
  }
}

export default AdminForm;
