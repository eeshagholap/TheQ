import React from 'react';
import './Navigation.css';
import { NavLink } from 'react-router-dom';



const Navigation = () => {
    return (
       <div >
            <button className = "Button1"> <NavLink to="/" activeStyle={{fontWeight: "bold",color: "red"}}>Home 
            </NavLink> </button>
            <button className = "Button2"><NavLink to="/form-submission">Form</NavLink> </button>
         
       </div>
    );
}
 
export default Navigation