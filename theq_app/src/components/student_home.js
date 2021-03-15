import React from "react";
import './student_home-scss.scss';
import "@fontsource/palanquin"

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.flexWrapperOne}>
        <p className={styles.theq}>
          The
          <strong className={styles.theqEmphasis2}>
            Q
          </strong>
        </p>
        <p className={styles.helloAlexF}>
          <strong className={styles.helloAlexFEmphasis1}>
            Hello
          </strong>
          , Alex F.
        </p>
        <div className={styles.vsprofile}>
          <img
            alt=""
            src="https://static.overlay-tech.com/assets/78ee62f2-0226-4012-9a77-eac07d9540df.svg"
          />
        </div>
      </div>
      <p className={styles.spring2021Courses}>
        Spring 2021 Courses
      </p>
      <div className={styles.flexWrapperTwo}>
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
      </div>
    </div>
  );
};

export default Home;