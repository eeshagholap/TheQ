import React, {useState, useEffect} from 'react';

const Home = () => {
    const [initialData, setInitialData] = useState([{}])

    useEffect(() =>{
        fetch('/api').then(
            response => response.json()
        ).then(data => setInitialData(data))
    }, []);
        return (
            <div class='view'>
                <h1>Home</h1>
                <p>{initialData.title}</p>
            </div> 
        );
}

 
export default Home;