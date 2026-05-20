import React from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoMdPhotos } from "react-icons/io";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Galerie = () => {
  const images = [
    "../../hopitalimgs/p1.jpg",
    "../../hopitalimgs/p2.jpg",
    "../../hopitalimgs/p3.jpg",
    "../../hopitalimgs/p4.jpg",
    "../../hopitalimgs/p5.jpg",
    "../../hopitalimgs/p6.jpg",
    "../../hopitalimgs/p7.jpg",
    "../../hopitalimgs/p8.jpg",
    
  ];
  const responsive = {
    extraLarge: {
      breakpoint: { max: 3000, min: 1324 },
      items: 3,
      slidesToSlide: 1,
    },
    large: {
      breakpoint: { max: 1324, min: 1005 },
      items: 3,
      slidesToSlide: 1,
    },
    medium: {
      breakpoint: { max: 1005, min: 700 },
      items: 3,
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
    <h1 className="container title-gal">
    <IoMdPhotos style={{ marginRight:"20px" }} />
    Galerie
    </h1>
    <div className="galerie-img">
    <Carousel
          responsive={responsive}
          autoPlay={true} 
          autoPlaySpeed={2000} 
          infinite={true} 
          customTransition="transform 500ms ease-in-out" 
        

        >
          {images.map((img, index) => {
            return (
              <div key={index} className="card-gal">
                <img src={img} alt="" />
              </div>
            );
          })}
        </Carousel>
    </div>


    
        
          <div className="loc-div" style={{ overflow:"hidden"}}>

          <h1 className="container location">
          <FaMapLocationDot style={{ marginRight:"20px" }} />
         Location
          </h1>

          <iframe  className="container"
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3237.0559736911846!2d-5.822185624339788!3d35.77400137255741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b872ed3ed6fa3%3A0x1ac3b41081f2e9ce!2sLE%20GRAND%20TANGER%20M%C3%89DICALE!5e0!3m2!1sfr!2sma!4v1713261895004!5m2!1sfr!2sma" 
               width={"100%"} 
               height={500}
              
               allowFullScreen loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade" 
           />
          </div>
     
    
    
        </>
  );
};

export default Galerie;