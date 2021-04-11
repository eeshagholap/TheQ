import React from 'react';
import './Home.css'
import img1 from './images/home_image1.png';
import img2 from './images/home_image2.png';
import img3 from './images/home_image3.png';
import getonq from "./images/GetonTheQ.png";
import logo from "./TheQ.png";
import { Link } from 'react-router-dom'

const Home = () => {
    return (
            <div>

                <view style = {{top: 42, position: 'absolute', marginLeft: 55, width:127, height: 91}}>
                <img src = {logo} alt = "logo"></img>
                </view>

                <view style = {{position: 'absolute', width:1000, height: 940, marginLeft: 70 + 'px', top: 120,}}>
                <img src = {img1} alt = "img1"></img>
                </view>

                <view style = {{position: 'absolute', width: 400 + 'px', height: 200 + 'px', left: 800 + 'px', 
                        top: 60 + 'px', bottom: 1140 + 'px', right: 193 + 'px', 
                        fontFamily: 'Palanquin Dark', fontStyle: 'normal', fontWeight: 600,
                        fontSize: 24, lineHeight: 0, color: "black",  marginTop:0}}>
                <p>Are you an instructor or student?</p>
                </view>

                <Link to={'/queue'}>
                    <button className = "instructorsButton"> Instructors </button>      
                </Link>
                
                <Link to={'/form-submission'}>
                    <button className = "studentsButton">Students</button>
                </Link>

                <view style = {{position: 'absolute', width:284, height: 86, marginLeft: 830, top: 220}}>
                <img src = {getonq} alt = "getonq"></img>
                </view>

                <view style = {{position: 'absolute', width: 400 + 'px', height: 200 + 'px', left: 670 + 'px', 
                    top: 280 + 'px', bottom: 1140 + 'px', right: 193 + 'px', 
                    fontFamily: 'Palanquin Dark', fontStyle: 'normal', fontWeight: 600,
                    fontSize: 24, lineHeight: 0, color: "lightgreen",  marginTop:0}}>
                <p>Fast, Reliable, Efficient</p>
                </view>

                <view style = {{position: 'absolute', width: 300 + 'px', height: 500 + 'px', left: 670 + 'px', 
                        top: 330 + 'px', bottom: 500 + 'px', right: 193 + 'px', 
                        fontFamily: 'Palanquin Dark', fontStyle: 'normal', fontWeight: 600,
                        fontSize: 18, lineHeight: 0, color: "black",  marginTop:0, wordWrap: "normal"}}>
                <p>Our queue system will make the</p>
                <p>office hours experience quicker</p>
                <p>and more feasible to navigate. It's</p>
                <p>time to take charge of </p>
                <p>online learning.</p>
                </view>

                <view style = {{position: 'absolute', width:10, height: 100, marginLeft: 1020, top: 300,}}>
                <img src = {img2} alt = "img2"></img>
                </view>

                <view style = {{position: 'absolute', width: 400 + 'px', height: 200 + 'px', left: 970 + 'px', 
                        top: 450 + 'px', bottom: 1140 + 'px', right: 193 + 'px', 
                        fontFamily: 'Palanquin Dark', fontStyle: 'normal', fontWeight: 600,
                        fontSize: 28, lineHeight: 0, color: "lightgreen",  marginTop:0}}>
                <p>Collaborative and Fun</p>
                </view>
                
                <view style = {{position: 'absolute', width:284, height: 100, marginLeft: 690, top: 450,}}>
                <img src = {img3} alt = "img3"></img>
                </view>

                <view style = {{position: 'absolute', width: 300 + 'px', height: 500 + 'px', left: 980 + 'px', 
                        top: 500 + 'px', bottom: 500 + 'px', right: 193 + 'px', 
                        fontFamily: 'Palanquin Dark', fontStyle: 'normal', fontWeight: 600,
                        fontSize: 18, lineHeight: 0, color: "black",  marginTop:0, wordWrap: "normal"}}>
                <p>Our queue system will make the</p>
                <p>office hours experience quicker</p>
                <p>and more feasible to navigate. It's</p>
                <p>time to take charge of </p>
                <p>online learning.</p>
                </view>

                {/*<view style = {{top: 42, position: 'absolute', marginLeft: 55, width:127, height: 91}}>
                <img src = {logo} alt = "logo"></img>
                </view>
                
                <div>
                    <view style = {{position: 'absolute', width:1000, height: 940, marginLeft: 70 + 'px', top: 120,}}>
                    <img src = {img1} alt = "img1"></img>
                    </view>
                </div>

                <div>
                    <view style = {{position: 'absolute', width:284, height: 86, marginLeft: 830, top: 40}}>
                    <img src = {getonq} alt = "getonq"></img>
                    </view>
                </div>

                <div>
                    <view style = {{position: 'absolute', width:10, height: 100, marginLeft: 1000, top: 120,}}>
                    <img src = {img2} alt = "img2"></img>
                    </view>
                </div>

                <div>
                    <view style = {{position: 'absolute', width: 400 + 'px', height: 200 + 'px', left: 670 + 'px', 
                        top: 120 + 'px', bottom: 1140 + 'px', right: 193 + 'px', 
                        fontFamily: 'Palanquin Dark', fontStyle: 'normal', fontWeight: 600,
                        fontSize: 28, lineHeight: 0, color: "lightgreen",  marginTop:0}}>
                    <p>Fast, Reliable, Efficient</p>
                    </view>
                </div>

                <div>
                    <view style = {{position: 'absolute', width: 300 + 'px', height: 500 + 'px', left: 670 + 'px', 
                        top: 180 + 'px', bottom: 500 + 'px', right: 193 + 'px', 
                        fontFamily: 'Palanquin Dark', fontStyle: 'normal', fontWeight: 600,
                        fontSize: 18, lineHeight: 0, color: "black",  marginTop:0, wordWrap: "normal"}}>
                    <p>Our queue system will make the</p>
                    <p>office hours experience quicker</p>
                    <p>and more feasible to navigate. It's</p>
                    <p>time to take charge of </p>
                    <p>online learning.</p>
                    </view>
                </div>

                <div>
                    <view style = {{position: 'absolute', width:284, height: 100, marginLeft: 670, top: 340,}}>
                    <img src = {img3} alt = "img3"></img>
                    </view>
                </div>

                <div>
                    <view style = {{position: 'absolute', width: 400 + 'px', height: 200 + 'px', left: 980 + 'px', 
                        top: 350 + 'px', bottom: 1140 + 'px', right: 193 + 'px', 
                        fontFamily: 'Palanquin Dark', fontStyle: 'normal', fontWeight: 600,
                        fontSize: 28, lineHeight: 0, color: "lightgreen",  marginTop:0}}>
                    <p>Collaborative and Fun</p>
                    </view>
                </div>

                <div>
                    <view style = {{position: 'absolute', width: 300 + 'px', height: 500 + 'px', left: 980 + 'px', 
                        top: 410 + 'px', bottom: 500 + 'px', right: 193 + 'px', 
                        fontFamily: 'Palanquin Dark', fontStyle: 'normal', fontWeight: 600,
                        fontSize: 18, lineHeight: 0, color: "black",  marginTop:0, wordWrap: "normal"}}>
                    <p>Everyone has a learning style.</p>
                    <p>Whether it's in a 1-on-1 or group</p>
                    <p>setting, you get to choose how</p>
                    <p>you learn best.</p>
                    </view>
                </div>

                    <Link to={'/queue'}>
                        <button className = "instructorsButton"> Instructors </button>      
                    </Link>
                    <Link to={'/form-submission'}>
                        <button className = "studentsButton">Students</button>
                    </Link>*/}
                    
            </div>
        );
}

 
export default Home;