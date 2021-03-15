import React, {useState, useEffect} from 'react';
import './Home.css'
import photo1 from './photo1.jpg';
const Home = () => {
    const [initialData, setInitialData] = useState([{}])

    useEffect(() =>{
        fetch('/api').then(
            response => response.json()
        ).then(data => setInitialData(data))
    }, []);
        return (
            <div  className="view">
                <h1> Home </h1>
                <p>{initialData.title}</p>
                <img src = {photo1} alt = "" />;
            </div> 
        );
}

 
export default Home;