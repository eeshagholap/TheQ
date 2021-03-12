import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Error from './components/Error';
import Navigation from './components/Navigation';
import Form from './components/Form';
import './App.css'
 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          <Navigation/>
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/form-submission" component={Form}/>
             <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;