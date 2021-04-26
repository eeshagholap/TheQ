
import React , {useEffect, useState} from "react";
import "./queue.css"
import logo from "./TheQ.png";
import { Link } from 'react-router-dom'

const Queue = () => {


    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetch("/queue").then(response => response.json().then(data => {
            setStudents(data.students);
            
        })
        );
    }, []);

    console.log(students)

    const handleRemoveItem = (e) => {
        setStudents(students.filter(item => item.id!== e));
       };

    function  handleClick (param) {
        console.log(param)
        fetch(`/delete/${param}`,{  
            
        },
        
        handleRemoveItem(param),

        console.log(students)
        );
        
    
        
        
    }
    function goToLink (param) {
         window.open(param)
        
    }


//     return (
//             <div>
//             <ul>
//                 {students.map(
                
//                 s => (<li>  {s.name} , {s.question } , {s.zoom_link} , {s.id} </li>))
                
//                 }

                
//             </ul>

//             <button className = "deleteButton" onClick = {handleClick(s.id)}> Close Question </button>
            

//             </div>
//   );
    return (
        <div>
            <img className="logoStyle" src = {logo} alt = "logo"></img>
            <h1 className="header">CS 332: Elements of the Theory of Computation</h1>
            <div className="styled">
            <table class="hoverTable">
                <thead>
                <tr>
                    <th>Place in TheQ</th>
                    <th>Student Name</th>
                    <th>Question</th>
                    <th></th>
                    <th>Zoom Link</th>
                </tr>
                </thead>
                <tbody>
                    {students.map((item,index) => (
                            <tr key={item.id}>
                                <td>{index}</td>
                                <td>{item.name}</td>
                                <td>{item.question}</td>
                                <Link to={'/queue'}>
                                    <td><button className = "close" onClick={() => handleClick(item.id)}> Close </button></td>     
                                </Link>
                                <td><button className ="zoomButton1" onClick={() => goToLink(item.zoom_link)}>Join Zoom Link</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
        </div>

    );
}

export default Queue