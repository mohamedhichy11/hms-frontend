import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaPhone, FaSquareXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import ChatBot from 'react-simple-chatbot';
const Footer = () => {


  return (
    <>
      <footer >
     
        <div className="content">
          {/* ----- */}
          <div>
            <img src="/logo.png" alt="logo" className="logo-img" />
            <p className="modern-clin" style={{ fontSize:"50px", fontWeight:"700" }}>
            A MODERN <span style={{ color:"rgb(28,164,172)" ,fontWeight:"700" }}>CLINIC</span> CLOSE TO <span style={{ color:"#8DC242" ,fontWeight:"700" }}>YOU</span>
            </p>

          
            <div style={{height:"3px",width:"90%",marginTop:"9px", backgroundColor:"#8DC242"}} className="hr-logo"></div>
         
          </div>
            {/* ----- */}
          <div>
            <h4 id="title-link">Quick Links</h4>
            <ul className="link-Quiks">
              <Link to={"/"}>Home</Link>
              <Link to={"/appointment"}>Appointment</Link>
              <Link to={"/about"}>About Us</Link>
            </ul>
          </div>
           {/* ----- */}
          <div>
            <h4 id="title-link">Contact Us</h4>
            <div>
              <span style={{ fontSize:"15px", fontWeight:"500" }}>
              Hay Branes 1, lotissement Narjisse, 2TR ARue de cédre RDC et deuxième sous-sol 90000 Tange Maroc
              </span>
            </div>
            <div>
              <span style={{ color:"#8DC242" }}>
              WWW.TANGERMEDICLACLINIC.COM
              </span>
            </div>
            <div>
 
              <span style={{ color:"#8DC242" }}>+212 677 765 776</span>
            </div>
            <div>
              <span style={{ color:"#8DC242" }}>TangerMedicalClinic@gmail.com</span>
            </div>
            <div>
            <ul className="social-media-footer">
            <li><a href="#"><FaFacebook style={{ fontSize:"35px" }} /></a></li>
            <li><a href="#"><FaLinkedin style={{ fontSize:"35px" }}  /></a></li>
            <li><a href="#"><FaSquareXTwitter style={{ fontSize:"35px" }}  /></a></li>
            <li><a href="#"><FaInstagram style={{ fontSize:"35px" }}  /></a></li>
          </ul>
            </div>
          </div>
            {/* ----- */}
        </div>
      

      </footer>

      <div className="copy-right" >
         <center>
          <h4 style={{ color:"#fff" }}>
          © 2024 ,Created by <span id="copy-right-hover">Tanger Medical Clinic</span>.
          </h4>
         </center>

         </div>


     
    </>
  );
};

export default Footer;