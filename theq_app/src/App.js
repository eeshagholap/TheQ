import React, {Component} from 'react';
import { HashRouter, Route, Switch, hashHistory } from 'react-router-dom';
import Home from './components/Home';
import Error from './components/Error';
import Navigation from './components/Navigation';
import Form from './components/Form';
import student_home from './components/student_home'; 
import queue from './components/queue'; 
import Student_Queue from './components/Student_Queue';
import './App.css'
import AdminForm from './components/admin_login';
 

class App extends Component {

  render() {
    return (      
      <HashRouter>
        <div>
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/form-submission" component={Form}/>
             <Route path="/student-home" component={student_home}/>
             <Route path="/queue" component={queue}/>
             <Route path="/student-queue" component={Student_Queue}/>
             <Route path="/admin-login" component={AdminForm}/>
             <Route component={Error}/>
           </Switch>
        </div> 
      </HashRouter>
    );
  }
}
 
export default App;