import React, { useState, useEffect } from "react";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/v1/user/patient/me`,
          {
            withCredentials: true,
          }
        );
        setUser(response.data.user);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    fetchUser();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <section className="profile-page">
        <div className="back-profil">
       <div>
      {user.gender=="Male" ?( <img src="/profilMale.png" alt="" width={100}/>)
      :( <img src="/profilFemale.png" alt="" width={100}/>)}
       </div>
        </div>
    <div className="profile-container">
         <h1>
            Personal informations :
          </h1>
        <div className="personal-info">

          <div>
          <div className="profile-section">
          <p className="profile-label">ID:</p>
          <p className="profile-value">{user._id}</p>
        </div>
        <div className="profile-section">
          <p className="profile-label">First Name:</p>
          <p className="profile-value">{user.firstName}</p>
        </div>
        <div className="profile-section">
          <p className="profile-label">Last Name:</p>
          <p className="profile-value">{user.lastName}</p>
        </div>
          </div>


        <div>
        <div className="profile-section">
          <p className="profile-label">DOB:</p>
          <p className="profile-value">{user.dob.substring(0, 10)}</p>
        </div>
        <div className="profile-section">
          <p className="profile-label">CIN:</p>
          <p className="profile-value">{user.nic}</p>
        </div>
        <div className="profile-section">
          <p className="profile-label">Gender:</p>
          <p className="profile-value">{user.gender}</p>
        </div>
        </div>

        </div>

        <h1>
            Address :
          </h1>
        <div className="personal-info">
       

        <div>
        <div className="profile-section">
          <p className="profile-label">Email:</p>
          <p className="profile-value">{user.email}</p>
        </div>
      
        </div>


        <div>
        <div className="profile-section">
            <p className="profile-label">Phone:</p>
            <p className="profile-value">{user.phone}</p>
          </div>
        </div>

        </div>

    </div>
  </section>
   
  );
};

export default Profile;
