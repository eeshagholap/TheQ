
import React , {useEffect, useState} from "react";
import "./queue.css"

const Queue = () => {


    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetch("/queue").then(response => response.json().then(data => {
            setStudents(data.students);
            
        })
        );
    }, []);

    console.log(students)

function  handleClick (param) {
        console.log(param)
        fetch(`/delete/${param}`,{  
            
        });
        window.location.reload();
        
        
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
        <div className="styled">
            <table class="hoverTable">
                <thead>
                <tr>
                    <th>Place</th>
                    <th>Name</th>
                    <th>Question</th>
                    <th>Zoom Link</th>
                </tr>
                </thead>
                <tbody>
                    {students.map((item,index) => (
                            <tr key={item.id}>
                                <td>{index}</td>
                                <td>{item.name}</td>
                                <td>{item.question}</td>
                                <td><a href={(item.zoom_link)}>Join Zoom Link</a></td>
                                <td><button className = "deleteButton" onClick={() => handleClick(item.id)}> Close Question </button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>


        </div>

    );
}

export default Queue