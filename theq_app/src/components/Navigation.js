import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/form-submission">Form</NavLink>
          <NavLink to="/student-home">Student Home</NavLink>
       </div>
    );
}
 
export default Navigation