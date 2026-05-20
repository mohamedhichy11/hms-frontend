import React, { useContext, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Appointment from "./pages/Appointment.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Register from "./pages/Register.jsx";
import Navbar from "./components/Navbar.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Context } from "./main";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";

import Footer from "./components/Footer.jsx";
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import bot from "../public/chat.png";
import user2 from "../public/user.png";
import Profile from "./components/Profile.jsx";

const App = () => {
  const theme = {
    background: '#fff',
    fontFamily: 'Space Grotesk, sans-serif',
    headerBgColor: '#1CA4AC',

    headerFontColor: '#fff',
    headerFontSize: '16px',

    botBubbleColor: '#1CA4AC',
    botFontColor: '#fff',

    userBubbleColor: '#8DC242',
    userFontColor: '#fff',
  };

  const { isAuthenticated, setIsAuthenticated, setUser ,user } = useContext(Context);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/v1/user/patient/me`,
          {
            withCredentials: true,
          }
        );
        setIsAuthenticated(true);
        setUser(response.data.user);
      } catch (error) {
        setIsAuthenticated(false);
        setUser({});
      }
    };
    fetchUser();
  }, [isAuthenticated]);


  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {isAuthenticated && <Route path="/profile" element={<Profile/>} />} 
        </Routes>
        <ThemeProvider theme={theme}>

        <ChatBot
    steps={[
      {
        id: '1',
        message: 'Hello, What is your name ?',
        trigger: '2',
      },
      {
        id: '2',
        user: true,
        trigger: '3',
      },
      {
        id: '3',
        message: 'Hi {previousValue}, nice to meet you! How can we assist you today ?',
        trigger: '4',
      },
      {
        id: '4',
        options: [
          { value: 'appointment', label: 'Schedule an appointment', trigger: 'appointment' },
          { value: 'doctor', label: 'Speak to a doctor', trigger: '6' },
          { value: 'emergency', label: 'Emergency assistance', trigger: '7' },
          { value: 'other', label: 'Other questions', trigger: 'otherQuestions' },
        ],
      },
      {
        id: 'appointment',
        message: 'Please provide your details so we can schedule an appointment for you.',
        trigger: 'appointmentDetails',
      },
      {
        id: 'appointmentDetails',
        component: (
          <div>
            <p>
              Click <Link to="/appointment">here</Link> to schedule an appointment.
            </p>
          </div>
        ),
        asMessage: true,
        trigger:'end'
      },
      {
        id: '6',
        message: 'Please wait a moment. Connecting you to a doctor.',
        trigger: 'end',
      },
      {
        id: '7',
        message: 'If this is a medical emergency, please hang up and dial 911 immediately.',
        trigger: 'end',
      },
      {
        id: 'otherQuestions',
        message: 'Please type your question, and we will assist you shortly.',
        trigger: 'userQuestion',
      },
      {
        id: 'userQuestion',
        user: true,
        trigger: 'end',
      },
      {
        id: 'end',
        options: [
          { value: 'restart', label: 'Restart Chat', trigger: '1' },
        ],
        component: (
          <div>
            <p>Thank you for reaching out to us. We will assist you shortly.</p>
            <p>If you have any further questions, feel free to restart the chat.</p>
          </div>
        ),
      },
    ]}
    floating={true}
    botAvatar={bot}
    userAvatar={user2}
    headerTitle="TANGER MEDICAL CLINIC"
  />


    {/*speechSynthesis={{ enable: true, lang: 'en' }} */}
        </ThemeProvider>
        <Footer/>
        <ToastContainer position="top-center" />
      </Router>
    </>
  );
};

export default App;
