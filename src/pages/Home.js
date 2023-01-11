import { React, useState } from "react";
import { Link } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import Typewriter from "typewriter-effect";
import Footer from "../components/Footer";


export default function Home() {
  const { user } = useUserAuth();
  function CheckUser(user) {
    if (user) {
      return true;
    }
  }

  return (
    <div className="home page">
      <div className="hero">
        <h1 className="banner-heading1">Start Learning From </h1>
        <span className="banner-heading2">The World's Best Teachers</span>

        <div className="content">
          <p>
            
          </p>
          <Typewriter
            options={{
              strings: ["Learn From Anywhere", "Learn Without Limits"],
              autoStart: true,
              loop: true,
            }}
          />
          <div className="cta">
            {CheckUser(user) ? (
              <div>
                <Link to="/courses" className="link-1">
                  Explore all courses
                </Link>
              </div>
            ) : (
              <div>
                <Link to="/login" className="btn">
                  Login
                </Link>
                <Link to="/teacher/" className="btn">
                  Teach
                </Link>
              </div>
            )}
          </div>
        </div>
        {/* <div className="image">
          <img src="/images/hero.svg" alt="Hero-image" />
        </div> */}
      </div>
      <div className="p-2">
        <br />
        <br />
        <h2>Welcome</h2>
        Welcome to the e-learn site with a new face and a new structure. Through this online learning facility, e-learn provides virtual classes, allowing a number of learning materials to be used as online learning facilities.

        If you have difficulty accessing e-learn, you can contact the help desk via email customerservice@elearn.co.id
        <br />
        <br />
        <h2>Start Learning Now</h2>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae
        accusamus totam corporis nulla nemo? Illo nihil quod, laboriosam non,
        assumenda, optio ab laudantium culpa quo iure perspiciatis voluptatem
        qui obcaecati vero quos quia consectetur! Sequi?
        <br />
        <br />
        <h2>Explore Course</h2>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod ab enim
        tenetur voluptatibus, nesciunt adipisci et amet fugiat hic incidunt
        alias molestias dicta nisi at totam esse natus voluptate, assumenda
        explicabo asperiores perspiciatis voluptates. Ad, harum. Possimus et sit
        at!
        <br />
        <br />
      </div>
      <Footer />
    </div>
  );
}
