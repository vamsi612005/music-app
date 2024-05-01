import React from 'react'
import dconstant from './downloadconstant.png';
import gif from "./download.gif";
import  music from './musicc.js';
import { json } from 'react-router-dom';
import ControlsToggleButton from "./ControlsToggleButton";



 const handledownload =()=>{
    
 const link =JSON.parse(music);
 const name =link.attribution.download;
 console.log(name);
 }

export default function DownloadMusic() {
  return (
    <div className="download ">
           <button onClick={handledownload}>download</button>
    </div>
  )
}
