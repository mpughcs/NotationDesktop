import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import Nav from "./Nav";

import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import ProjectThumbnail from "./Components/ProjectThumbnail";
import { WebviewWindow } from '@tauri-apps/api/window'
const mainWindow = WebviewWindow.getByLabel('NewProject')





  // how do I get the projects from the tauri api?
  // {getProjects()}
  // {getProjects().map((p) => ( <Project key={p.name} name={p.name} lastModified={p.lastModified}/>))}

 // [{name: "demo", lastModified: "2022-12-18"}, {name: "notation", lastModified: "2023-03-07"}, {name: "sarah", lastModified: "2023-02-19"}, {name: "honors", lastModified: "2023-02-14"}, {name: "january", lastModified: "2023-02-02"}, {name: "123", lastModified: "2022-12-12"}, {name: "giantsteps", lastModified: "2022-12-12"}, {name: "4chords", lastModified: "2022-12-18"}] 
  // var data;  
// var projects=[]
async function getProjects(){
  const projects=[];  
  try {
    const message = await invoke('get_project_list');
    let l = message;
    var info = l.split(",");
    for (let i = 0; i < info.length; i++) {
      let project = info[i].split(" ");
      if (project[0] === "" || project[1] === "") {
        continue;
      }
      projects.push({
        name: project[0],
        lastModified: project[1]
      });
    }
    console.log(projects);
    return projects;
  } catch (err) {
    console.log(err);
    return "error";
  }
}
// function ProjectThumbnail({name="test", lastModified="10/10/10"}){
//   return (
//     <div className="project">
//       <img src={projectImg} className="logo tauri" alt="Tauri logo"/>
//       <h2>{name}</h2>
//       {/* is there a tag for dates in jsx? */}
//       <p>Created: <span className="date">{lastModified}</span></p>

//     </div>
//   )
// }




function App() {
  const [projects, setProjects] = useState([]);
  // make this render in main window


  useEffect(() => {
    getProjects()
      .then((projects) => setProjects(projects))
      .catch((err) => console.log(err));
  }, []);  
  return (
    
  <div className="row-container">
    
  
      <div className="nav-container"> 
        <h1 className="header">Projects</h1>
          <ul className="options">
            <li><a>New Project</a></li>
            <li><a>Open Recent</a></li>
            <li><a>Help</a></li>
            <li><a>Exit</a></li>

          </ul>
      </div>
        
        
      <div className="project-container">
          {projects.map((p) => (
          <ProjectThumbnail className="project" key={p.name} name={p.name} lastModified={p.lastModified}/> 
          ))}
      </div>

      
  

  </div>
  );}

export default App;
