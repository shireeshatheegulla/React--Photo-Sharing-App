import React from 'react';
import {useNavigate} from "react-router-dom"
import "./Land.css";

export default function LandingPage() {
    let navigate=useNavigate();
    
   return(
       
      <div className='cont3'>

        <div className='cont1'>
            <img src="https://media.istockphoto.com/photos/moraine-lake-at-sunrise-banff-national-park-canada-picture-id471926619?s=612x612" alt ="nature" style={{width:"400px", height:"500px"}}/>
        </div>
       <div className='cont2'>
           <h1>Landing Page</h1>
           <button className="btn"onClick={()=>{
               navigate("/about")
           }}>ENTER</button>
       </div>

       </div>
      
   ) 
}
// Landing Pgae
