import React from 'react';
import './Student_Queue.css';
import "./queue.css"
import logo from "./TheQ.png";
import back from "./image4.jpg";
import profile from "./vs_profile.png";
import {useEffect, useState} from "react";
import Popup from './popup';
import './popup.css';

const Student_Queue = () => {
  const [students, setStudents] = useState([]);
  const [cookie] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  function closePopup() {
    this.props.history.push('/student-queue')
  }
  
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  function goToLink (param) {
    window.open(param)
   
}

    useEffect(() => {
        fetch("/queue").then(response => response.json().then(data => {
            setStudents(data.students);
            
        })
        );
    }, []);

    useEffect(() => {
      fetch("/getcookie").then(response => response.json().then(data => {
          
      })
      );
  }, []);

  console.log(cookie)

  function  handleClick (param) {
    console.log(param)
    fetch(`/delete/${param}`,{  
        
    });
    window.location.reload();
    
    
  }
  let place = -1
  let id = 0 
  let question = ""
  let name_user = ""
  let zoom_link = ""
  

  for (let i=0; i< students.length; i++){
      if(students[i].name.localeCompare(cookie)) {
        console.log(cookie)
        place = i
        question = students[i].question
        name_user = students[i].name
        id = students[i].id
        zoom_link = students[i].zoom_link
        console.log(students[i].name)
        console.log(students[i].sessiontype)
      }

  }
    
    return (
      
      <div>

        <view style = {{top: 42, position: 'absolute', marginLeft: 55, width:127, height: 91}}>
            <img src = {logo} alt = "logo"></img>
        </view>

        <view style = {{position: 'absolute', width: 238 + 'px', height: 72 + 'px', left: 1009 + 'px', 
                        top: 42 + 'px', bottom: 1140 + 'px', right: 193 + 'px', 
                        fontFamily: 'Palaquin Dark', fontStyle: 'normal', fontWeight: 600,
                        fontSize: 40, lineHeight: 0, color: "lightgreen",  marginTop:0}}>
            <p>Hello</p>
        </view>

        <view style = {{position: 'absolute', width: 238 + 'px', height: 72 + 'px', left: 1100 + 'px', 
                        top: 42 + 'px', bottom: 1140 + 'px', right: 193 + 'px', 
                        fontFamily: 'Palaquin Dark', fontStyle: 'normal', fontWeight: 600,
                        fontSize: 40, lineHeight: 0, color: 'dark-slate-gray', marginTop:0}}>
            <p>, {name_user}</p>
        </view>

        
        <img alt="background" src={back} className="back"/>
        <view style = {{position: 'absolute', width: 300 + 'px', height: 500 + 'px', left: 564 + 'px', 
                        top: 230 + 'px', bottom: 500 + 'px', right: 139 + 'px', 
                        fontFamily: 'Palanquin Dark', fontStyle: 'normal', fontWeight: 400,
                        fontSize: 40, lineHeight: 0, color: "dark-slate-grey",  marginTop:0, wordWrap: "normal"}}>
            <p>Place in TheQ</p>
        </view>
        
        <p className = "number">{place}</p>

        <p className = "question1">{question}</p>
        {/* <p className = "question2">2. How can I convert between DFAs and NFAs?</p>
        <p className = "question3">3. What makes a Turing machine decidable?</p> */}
        <button className = "zoomButton"> Enter Zoom Meeting </button> 
        <button className = "delButton" onClick={() => { if (window.confirm('Are you sure you want to leave the queue?')) handleClick(id) } }> Leave Queue </button> 
        
        <table class="hoverTableStudent">
                <thead>
                <tr>
                    <th>Place in TheQ</th>
                    <th>Question</th>
                    <th>Zoom Link</th>
                </tr>
                </thead>
                <tbody>
                {students.map((item,index) => {
                      if(item.sessiontype==='Group')   
                        return  <tr key={item.id}>
                                <td>{index}</td>
                                <td>{item.question}</td>
                                <td><button className ="zoomButton1" onClick={() => goToLink(item.zoom_link)}>Join Zoom Link</button></td>
                                
                                
                            </tr>
                      else
                          return <tr key={item.id}>
                                  <td>{index}</td>
                                  <td>1-on-1 Session</td>
                                  <td></td>
                                  {/* <td>{item.question}</td> */}
                                  
                                  
                              </tr>
})
                    }
                </tbody>
            </table>

       <div>
          {/* <input
            type="button"
            value="Click to Open Popup"
            onClick={togglePopup}
          /> */}
          {place === 0 && <Popup
            content={<>
              <b className="popupTitle"><b>You're up next!</b></b>
              <p className="popupBody">Time to start your meeting and wait for your Professor/TA to join.</p>
              <button className="popupButton"><b>Enter Zoom Meeting</b></button>
            </>}
            handleClose={togglePopup}
          />}
        </div>         
      </div>
    );
}
export default Student_Queue;