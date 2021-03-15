import React from "react";
import styles from './student_home-scss.scss';
import "./styles.scss";
import logo from "./TheQ.png";
import profile from "./vs_profile.png"

const Home = () => {
  return (
    <div>
      <view style = {{top: 42, position: 'absolute', marginLeft: 55, width:127, height: 91}}>
        <img src = {logo} alt = "logo">
        </img>
      </view> <div>
        <view style = {{position: 'absolute', width: 238 + 'px', height: 72 + 'px', left: 1009 + 'px', 
                        top: 42 + 'px', bottom: 1140 + 'px', right: 193 + 'px', 
                        fontFamily: 'Palaquin Dark', fontStyle: 'normal', fontWeight: 600,
                        fontSize: 40, lineHeight: 0, color: "lightgreen",  marginTop:0}}>
        <p>
          Hello
        </p>
        </view>
        <view style = {{position: 'absolute', width: 238 + 'px', height: 72 + 'px', left: 1100 + 'px', 
                        top: 42 + 'px', bottom: 1140 + 'px', right: 193 + 'px', 
                        fontFamily: 'Palaquin Dark', fontStyle: 'normal', fontWeight: 600,
                        fontSize: 40, lineHeight: 0, color: 'dark-slate-gray', marginTop:0}}>
        <p>
          , Alex F.
        </p>
        </view> <div>
          <view style = {{position: 'absolute', width: 67, height: 70, top: 26, left: 1268, backgroundColor: '34343'}}>
          <img
            alt="profile"
            src={profile}
          />
          </view>
        </div>
      </div>
      <view style = {{position: 'absolute', width: 466 + 'px', height: 91 + 'px', left: 136 + 'px', 
                        top: 160 + 'px', bottom: 904 + 'px', right: 838 + 'px', 
                        fontFamily: 'Palaquin Dark', fontStyle: 'normal', fontWeight: 600,
                        fontSize: 50, lineHeight: 0, color: "dark-slate-grey",  marginTop:0}}>
      <p>
        Spring 2021 Courses
      </p>
      </view>
      <div>
        <div>
          <div> 
          <view style = {{position: 'absolute', width: 156 + 'px', height: 54 + 'px', left: 162 + 'px', 
                        top: 375 + 'px', bottom: 726 + 'px', right: 1122 + 'px', 
                        fontFamily: 'Palaquin Dark', fontStyle: 'normal', fontWeight: '600',
                        fontSize: 30, lineHeight: 0, color: "dark-slate-grey",  marginTop:0, borderTop: 3 + "px solid black"}}>
            <p> CAS CS320
            </p>
            </view>
            <view style = {{position: 'absolute', width: 265 + 'px', height: 18 + 'px', left: 162 + 'px', 
                        top: 437 + 'px', bottom: 700 + 'px', right: 1013 + 'px', 
                        fontFamily: 'Palaquin Dark', fontStyle: 'normal', fontWeight: 'bold',
                        fontSize: 15, lineHeight: 0, color: "dark-slate-grey",  marginTop:0}}>
            <p>
              Elements of the Theory of Computation
            </p>
            </view>
            <view style = {{position: 'absolute', width: 179 + 'px', height: 54 + 'px', left: 162 + 'px', 
                        top: 483 + 'px', bottom: 618 + 'px', right: 1099 + 'px', 
                        fontFamily: 'Palaquin Dark', fontStyle: 'normal', fontWeight: '600',
                        fontSize: 30, lineHeight: 0, color: "dark-slate-grey",  marginTop:0}}>
            <p>
              Office Hours
            </p>
            </view>
            <view style = {{position: 'absolute', width: 280 + 'px', height: 80 + 'px', left: 162 + 'px', 
                        top: 552 + 'px', bottom: 585 + 'px', right: 998 + 'px', 
                        fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: 'bold',
                        fontSize: 15, lineHeight: 0, color: "dark-slate-grey",  marginTop:0}}>
            <p>
              Voronova: Friday 19 3:00 PM - 4:00 PM
            </p>
            </view>
            <view style = {{position: 'absolute', width: 280 + 'px', height: 80 + 'px', left: 162 + 'px', 
                        top: 585 + 'px', bottom: 552 + 'px', right: 998 + 'px', 
                        fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: 'bold',
                        fontSize: 15, lineHeight: 0, color: "dark-slate-grey",  marginBottom:0 }}>
            <p>
              Voronova: Friday 19 5:00 PM - 7:00 PM
            </p>
            </view>
            <view style = {{position: 'absolute', width: 156 + 'px', height: 54 + 'px', left: 593 + 'px', 
                        top: 375 + 'px', bottom: 726 + 'px', right: 686 + 'px', 
                        fontFamily: 'Palaquin Dark', fontStyle: 'normal', fontWeight: '600',
                        fontSize: 30, lineHeight: 0, color: "dark-slate-grey",  marginTop:0, borderTop: 3 + "px solid black"}}>
            <p> CAS CS460
            </p>
            </view>
            <view style = {{position: 'absolute', width: 265 + 'px', height: 18 + 'px', left: 593 + 'px', 
                        top: 437 + 'px', bottom: 726 + 'px', right: 1013 + 'px', 
                        fontFamily: 'Palaquin Dark', fontStyle: 'normal', fontWeight: 'bold',
                        fontSize: 15, lineHeight: 0, color: "dark-slate-grey",  marginTop:0}}>
            <p>
              Intoduction to Databases
            </p>
            </view>
            <view style = {{position: 'absolute', width: 179 + 'px', height: 54 + 'px', left: 593 + 'px', 
                        top: 483 + 'px', bottom: 618 + 'px', right: 668 + 'px', 
                        fontFamily: 'Palaquin Dark', fontStyle: 'normal', fontWeight: '600',
                        fontSize: 30, lineHeight: 0, color: "dark-slate-grey",  marginTop:0}}>
            <p>
              Office Hours
            </p>
            </view>
            <view style = {{position: 'absolute', width: 280 + 'px', height: 80 + 'px', left: 593 + 'px', 
                        top: 552 + 'px', bottom: 585 + 'px', right: 585 + 'px', 
                        fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: 'bold',
                        fontSize: 15, lineHeight: 0, color: "dark-slate-grey",  marginTop:0}}>
            <p>
                 Mark: Friday 19        3:00 PM - 4:00 PM
            </p>
            </view>
            <view style = {{position: 'absolute', width: 280 + 'px', height: 80 + 'px', left: 593 + 'px', 
                        top: 585 + 'px', bottom: 552 + 'px', right: 587 + 'px', 
                        fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: 'bold',
                        fontSize: 15, lineHeight: 0, color: "dark-slate-grey",  marginBottom:0 }}>
            <p>
                 Ken: Saturday 20     2:00 PM - 4:00 PM
            </p>
            </view>
          </div>
          </div>
          </div>

     
      {/* <div className={styles.flexWrapperTwo}>
        <div className={styles.relativeWrapperOne}>
          <div className={styles.group3}>
            <p className={styles.casCs320}>CAS CS 320</p>
            <p
              className={
                styles.elementsOfTheTheoryOfComputation
              }
            >
              Elements of the Theory of Computation
            </p>
            <p className={styles.officeHours}>
              Office Hours
            </p>
            <p
              className={styles.voronovaFriday19300Pm400Pm}
            >
              Voronova: Friday 19 3:00 PM - 4:00 PM
            </p>
            <p
              className={
                styles.elementsOfTheTheoryOfComputation
              }
            >
              Voronova: Friday 19 5:00 PM - 7:00 PM
            </p>
          </div>
          <div className={styles.group2}>
            <p className={styles.casCs320}>CAS CS 320</p>
            <p
              className={
                styles.elementsOfTheTheoryOfComputation
              }
            >
              Elements of the Theory of Computation
            </p>
            <p className={styles.officeHours}>
              Office Hours
            </p>
            <p
              className={styles.voronovaFriday19300Pm400Pm}
            >
              Voronova: Friday 19 3:00 PM - 4:00 PM
            </p>
            <p
              className={
                styles.elementsOfTheTheoryOfComputation
              }
            >
              Voronova: Friday 19 5:00 PM - 7:00 PM
            </p>
          </div>
          <div className={styles.group1}>
            <p className={styles.joinTheq}>Join TheQ</p>
          </div>
        </div>
        <div className={styles.relativeWrapperOne}>
          <div className={styles.group4}>
            <p className={styles.casCs460}>CAS CS 460</p>
            <p
              className={
                styles.elementsOfTheTheoryOfComputation
              }
            >
              Introduction to Databases
            </p>
            <p className={styles.officeHours}>
              Office Hours
            </p>
            <p
              className={styles.voronovaFriday19300Pm400Pm}
            >
              Mark: Friday 19 3:00 PM - 4:00 PM
            </p>
            <p
              className={
                styles.elementsOfTheTheoryOfComputation
              }
            >
              Ken: Saturday 20 2:00 PM - 4:00 PM
            </p>
          </div>
          <div className={styles.group1}>
            <p className={styles.joinTheq}>Join TheQ</p>
          </div>
        </div>
        <div className={styles.group5}>
          <div className={styles.group7}>
            <div className={styles.clarityaddLine}>
              <img
                alt=""
                src="https://static.overlay-tech.com/assets/212d6007-1add-4fb5-9fa6-f13d6a3a6e99.svg"
              />
            </div>
            <p className={styles.addCourse}>Add Course</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Home;