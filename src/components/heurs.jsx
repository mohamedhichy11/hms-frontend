import React from 'react'
import { TbClockHour8 } from "react-icons/tb";

export default function Heurs() {
  return (
  <div className='heur-div' style={{ padding:"20px 100px" }}>
   <h1> 
   <TbClockHour8  style={{ marginRight:"20px" }}/>
    Business hours
   </h1>

   <h3>
    Ouvert 24h/7j
   </h3>
  </div>

  )
}
