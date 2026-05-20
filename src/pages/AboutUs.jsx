import React, { useEffect, useState } from "react";
import AboutUsSec from "../components/AboutUsSec";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { FaPlay } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { toast } from "react-toastify";
import axios from "axios";
import TopRatedMessages from "../components/TopFeedback.jsx";
// import "../main.css"



const AboutUs = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/v1/user/doctors`,
          { withCredentials: true }
        );
        setDoctors(data.doctors);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };
    fetchDoctors();
  }, []);
 
    const[counterOn,setCounterOn]=useState(false)
    const [videoPlaying, setVideoPlaying] = useState(false);
    const handleVideoPlay = () => {
      setVideoPlaying(true);
  };
  const handleVideoClose = () => {
    setVideoPlaying(false);
};


 
const responsive = {
  extraLarge: {
    breakpoint: { max: 3000, min: 1324 },
    items: 2,
    slidesToSlide: 1,
  },
  large: {
    breakpoint: { max: 1324, min: 1005 },
    items: 2,
    slidesToSlide: 1,
  },
  medium: {
    breakpoint: { max: 1005, min: 700 },
    items: 2,
    slidesToSlide: 1,
  },
  small: {
    breakpoint: { max: 700, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};
  return (
    
    <>
      <AboutUsSec/>
      <section className="whoWe-sec">
      <div className="aboutUs-text">
        <h1>
        Who We Are ?
        </h1>
        <p>
          Established in the vibrant city of Tanger,<span style={{ color:"#8DC242" }}> Tanger Medical Clinic</span> has emerged 
          as a cornerstone of healthcare excellence since its inception in 2024. Founded by 
          esteemed 
          healthcare professionals, Dr. Mohamed hichy , 
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
       <div className="imgg">
       <img src="./Whoare.png" alt="" />
       </div>
      </section>

     <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
     <section className="beds-section" >
       <div className="container-sect-beds">
       <div>
          <h1>
          <span className="span-num">
          +{
            counterOn && <CountUp 
            start={0} 
            end={21} 
            duration={4}>
            </CountUp>
            }
          </span>
          <span> beds</span>
          </h1>
          <p>MATERNITY SERVICE</p>
          <p>21 beds including 7 Suites</p>
        </div>

        <div>
        <h1>
        <span className="span-num">
         +{
            counterOn && <CountUp 
            start={0} 
            end={52} 
            duration={4}>
            </CountUp>
            }
         </span>
          <span> beds</span>
          </h1>
          <p>GENERAL HOSPITALIZATION</p>
          <p>52 beds including 8 Suites</p>
        </div>

        <div>
        <h1>
        <span className="span-num">
          +{
            counterOn && <CountUp 
            start={0} 
            end={10} 
            duration={4}>
            </CountUp>
            }
          </span>
          <span> beds</span>
          </h1>
          <p>
          RESUSCITATION
          </p>
         
        </div>

        <div>
        <h1>
        <span className="span-num">
          +{
            counterOn && <CountUp 
            start={0} 
            end={7} 
            duration={4}>
            </CountUp>
            }
          </span>
          <span> beds</span>
          </h1>
          <p>
          OPERATING ROOMS
          </p>
      
        </div>
       </div>
      </section>
     </ScrollTrigger>

     <section className="video-trailer-section">
              <div>
              <div className="text-trailer">
                  <h1>
                  About us
                  </h1>
           
                  <h3>
                  Your health is our priority: Discover our clinic
                  </h3>
                  <p>
                  The CLINIQUE DU GRAND TANGIER is a medical-surgical establishment project
                  with a capacity of 83 beds. This is one of the largest private clinics in Tangier to date,
                   located in the Branes district (near the city center) on a plot of land with an area of 1012 m2.

                  </p>
                </div>

                <div>
                {!videoPlaying ? (
                    <div className="img-play-video">
                      <button onClick={handleVideoPlay}><FaPlay id="play-icon"/></button>
                    </div>
                ) : (
                    <div className="area-video">
                       <button onClick={handleVideoClose}>close Video</button>
                       <div className="video-container">
                        <iframe
                             className="responsive-iframe"
                            width="1000"
                            height="600"
                            src="/into.mp4"
                            frameBorder="0"
                            allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                            allowFullScreen
                        ></iframe>
                        </div>
                       
                    </div>
                )}
                </div>
              </div>
       </section>

     
       <div className="team-carousel">
  <h1>Our Team</h1>
  <Carousel
    responsive={responsive}
    autoPlay={true}
    autoPlaySpeed={2000}
    infinite={true}
    keyBoardControl={true}
    customTransition="transform 500ms ease-in-out"
  >
    {doctors.map((doc, index) => {
      return (
        <div key={index} className="card1">
          <div className="doc-name"> {doc.firstName} {doc.lastName}</div>
          <img src={doc.docAvatar.url} alt="doctor" />
        </div>
      );
    })}
  </Carousel>
</div>

       <section className="last-section">
         
            <img src="/personnes.jpg" alt="" />
          
          <div className="text-last">
          <h1>
                Tanger Medical clinic:
          </h1>
          <p>
            on the verge of becoming a major metropolis with all the economic and demographic dynamics it knows.
            The Tangier Métropole project, under the leadership of His Majesty King Mohamed VI, perfectly reflects all the promises for the future of this city.
            The rapid demographic transition of the city implies a growing demand for medical care in order to overcome another transition: epidemiological (cardiovascular,
            oncological, degenerative diseases, emergencies, etc.).
            In addition, with the extension of social coverage (AMO), the need for private medical establishments is increasingly important.
          </p>
          </div>
   
       </section>

                <section className="feedback">
                  <TopRatedMessages/>
                </section>
      
    </>
  );
};

export default AboutUs;