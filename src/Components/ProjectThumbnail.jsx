import { useState, useEffect } from "react";
import "../style.css";
import projectImg from "../assets/notation.png";
import { WebviewWindow } from '@tauri-apps/api/window'





function ProjectThumbnail({name="test", lastModified="10/10/10"}){
  const handleClick = (event) => {
  // log the name of the project that was clicked
  console.log(name + " was clicked at " + event.timeStamp);

    
    
  };
    return (
      <div className="project" onClick={event=>handleClick(event)}>
        <img src={projectImg} className="logo tauri" alt="Tauri logo"/>
        <h2>{name}</h2>
        {/* is there a tag for dates in jsx? */}
        <p>Created: <span className="date">{lastModified}</span></p>
  
      </div>
    )
  }
export default ProjectThumbnail;