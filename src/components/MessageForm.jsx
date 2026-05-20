
import axios from "axios";
import React, { useState } from "react";
import { IoIosSend } from "react-icons/io";
import StarRatings from "react-star-ratings";
import { toast } from "react-toastify";

const MessageForm = () => {
  const [rating, setRating] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleMessage = async (e) => {
    e.preventDefault();
    try {
      await axios
      .post(
        `${import.meta.env.VITE_API_URL}/api/v1/message/send`,
        { firstName, lastName, email, phone, message, rating },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      )
        .then((res) => {
          toast.success(res.data.message);
          setFirstName("");
          setLastName("");
          setEmail("");
          setPhone("");
          setMessage("");
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
    <h2 className=" h2-sendMessage"> <IoIosSend />Send Us A Message</h2>
     
      <div className="container form-mess"  >
     
        <div className="div-img-mess">
          <img src="../public/send.jpg" alt=""    />
        </div>
        
        
      <div>
      <form onSubmit={handleMessage} >
          <div>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="number"
              placeholder="Mobile Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div>
          <textarea
            rows={7}
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          </div>
          
         <div className="rating-div">
          <h1>
            Rating :
          </h1>
         <StarRatings
              rating={rating}
              starRatedColor="gold"
              changeRating={(newRating) => setRating(newRating)}
              numberOfStars={5}
              starHoverColor="#fff"
              name="rating"
              style={{ fontSize: "24px", margin: "0px" }}
            />

         </div>
          <div style={{ justifyContent: "center", alignItems: "center" }}>
            <button type="submit" className="">Send</button>
          </div>
        </form>
      </div>
     
      </div>
    </>
  );
};

export default MessageForm;