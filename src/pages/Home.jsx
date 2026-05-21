import React from 'react'
import Hero from '../components/Hero'
import Biography from '../components/Biography'
import Departments from '../components/Departments'
import MessageForm from '../components/MessageForm'
// import Trailer from '../components/Trailer'
import Heurs from '../components/heurs'
import Galerie from '../components/Galerie'
import "../components/Home.css"; 



export default function Home() {
  return (
    <>
    <Hero/>
    <Biography />
    <Departments />
    {/* <Trailer/> */}
    <Galerie/>
    <Heurs/>
    <MessageForm />
  </>
  )
}
