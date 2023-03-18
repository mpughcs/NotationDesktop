import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import projectImg from "./assets/notation.png";
import Nav from "./Nav";
// import styled from "styled-components";

import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";


function Project({name="test", lastModified="10/10/10"}){
  return (
    <div className="project">
      <img src={projectImg} className="logo tauri" alt="Tauri logo"/>
      <h2>{name}</h2>
      {/* is there a tag for dates in jsx? */}
      <p>Created: <span className="date">{lastModified}</span></p>

    </div>
  )
}

  // how do I get the projects from the tauri api?
  // {getProjects()}
  // {getProjects().map((p) => ( <Project key={p.name} name={p.name} lastModified={p.lastModified}/>))}

 // [{name: "demo", lastModified: "2022-12-18"}, {name: "notation", lastModified: "2023-03-07"}, {name: "sarah", lastModified: "2023-02-19"}, {name: "honors", lastModified: "2023-02-14"}, {name: "january", lastModified: "2023-02-02"}, {name: "123", lastModified: "2022-12-12"}, {name: "giantsteps", lastModified: "2022-12-12"}, {name: "4chords", lastModified: "2022-12-18"}] 
  // var data;  
// var projects=[]
function getProjects(){
  const projects=[];  
  return invoke('getProjectList')
    .then((message) => {
      let l=message;
      var info=l.split(",");
      for (let i=0; i<info.length; i++){
        let project = info[i].split(" ");
        if( project[0] === "" || project[1] === ""){
          continue;
        }
        projects.push({
          name: project[0],
          lastModified: project[1]
        })
      }
      return projects;
    })
    .catch((err) => {
      console.log(err);
      return "error"
    });
}





function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects()
      .then((projects) => setProjects(projects))
      .catch((err) => console.log(err));
  }, []);  
  return (
    <div className="project-container">
      
      {projects.map((p) => (
        // <li></li>
        <Project className="project" key={p.name} name={p.name} lastModified={p.lastModified}/> 
      ))}
    </div>
  );

    
  
}

export default App;
