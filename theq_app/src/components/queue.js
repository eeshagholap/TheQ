// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';

// const useStyles = makeStyles({
//   table: {
//     minWidth: 650,
//   },
// });

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Eclair', 262, 16.0, 24, 6.0),
//     createData('Cupcake', 305, 3.7, 67, 4.3),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
    
// ];

// export default function BasicTable() {
//   const classes = useStyles();

//   return (
//     <TableContainer component={Paper}>
//       <Table className={classes.table} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell>Dessert (100g serving)</TableCell>
//             <TableCell align="right">Calories</TableCell>
//             <TableCell align="right">Fat&nbsp;(g)</TableCell>
//             <TableCell align="right">Carbs&nbsp;(g)</TableCell>
//             <TableCell align="right">Protein&nbsp;(g)</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <TableRow key={row.name}>
//               <TableCell component="th" scope="row">
//                 {row.name}
//               </TableCell>
//               <TableCell align="right">{row.calories}</TableCell>
//               <TableCell align="right">{row.fat}</TableCell>
//               <TableCell align="right">{row.carbs}</TableCell>
//               <TableCell align="right">{row.protein}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }

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
                    <th>Name</th>
                    <th>Question</th>
                    <th>Zoom Link</th>
                </tr>
                </thead>
                <tbody>
                    {students.map((item) => (
                            <tr key={item.id}>
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