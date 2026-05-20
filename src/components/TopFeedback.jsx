import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StarRatings from 'react-star-ratings';
import { VscFeedback } from 'react-icons/vsc';

const TopRatedMessages = () => {
  const [topMessages, setTopMessages] = useState([]);

  useEffect(() => {
    const fetchTopRatedMessages = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/message/toprated`);
        setTopMessages(response.data.topMessages);
      } catch (error) {
        console.error('Error fetching top-rated messages:', error);
      }
    };

    fetchTopRatedMessages();
  }, []);

  return (
    <div>
    <h2>Top Rated Messages</h2>
    <ul className='cards-rev'>
    

      {topMessages.map((message, index) => (
        
        <li key={index} class="message-card">
           
          <strong> <img src="/pro.png" alt="" width={30} style={{ marginRight:"10px" }} />{message.firstName} {message.lastName}</strong><br />
          <div class="star-rating">
            <StarRatings
              rating={message.rating}
              starRatedColor="gold"
              numberOfStars={5}
              name={`rating-${index}`}
              starDimension="20px"
              starSpacing="2px"
            />
          </div>
          <div class="message">{message.message}</div>
        </li>
      ))}
    </ul>
  </div>
  );
};

export default TopRatedMessages;
