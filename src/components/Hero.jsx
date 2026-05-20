import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="hero" >
        <div className="banner">
          <h1>Welcome to <span style={{ color:"#1CA4AC" }}>TANGER</span><span style={{ color:"#8DC242" }}> Medical Clinics</span>,Your Trusted Healthcare Provider</h1>
          <p>
           
            Tanger Clinic is a cutting-edge medical facility devoted to delivering thorough healthcare services with empathy and proficiency.
            Our proficient team is dedicated to providing individualized care customized to suit the unique needs of each patient.
            At Tanger Clinic, we place your health at the forefront, guaranteeing a seamless path towards achieving optimal well-being.

          </p>
           <Link to="/appointment" className="appointment-btn">Appointment</Link>
        </div>
      </div>
     
    </>
  );
};

export default Hero;