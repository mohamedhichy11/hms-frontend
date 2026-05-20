import React from "react";

const Biography = () => {
  return (
    <>
      <div className="container biography" >
        <div className="banner">
          <img src="/tanger.png" alt="whoweare" className="tanger-img" />
        
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are ?</h3>
          <p>
          Established in the vibrant city of Tanger,<span style={{ color:"#8DC242" }}> Tanger Medical Clinic</span> has emerged 
          as a cornerstone of healthcare excellence since its inception in 2024. Founded by 
          esteemed 
          healthcare professionals, Dr. Mohamed allaoui , 
          this institution was born from a shared vision of providing 
          exceptional medical care coupled with unwavering compassion.
          </p>
          <p>
          From its modest beginnings,<span style={{ color:"#8DC242" }}> Tanger Medical Clinic</span> has grown into
            a comprehensive healthcare facility offering a spectrum of specialized 
            services to its community. With a team of dedicated physicians, surgeons,
            nurses, and support staff, the clinic is equipped to address a diverse range 
            of healthcare needs, ensuring that patients receive the highest quality
            of care tailored to their individual requirements.
            </p>
          <p>
         <span style={{ color:"#8DC242" }}> Tanger Medical Clinic</span> epitomizes patient-centered care, 
          with a dedicated team driven by a profound passion for healing 
          and empathy, ensuring a supportive environment for patients and their
           families. Through extensive community engagement initiatives and partnerships
           , we promote health literacy and wellness, embodying our mission as a beacon of
            healing and hope for our community, always striving for 
          excellence and innovation in healthcare delivery.
          </p>
        </div>
      </div>
    </>
  );
};

export default Biography;
