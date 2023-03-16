import { useState } from "react";
import reactLogo from "./assets/react.svg";
import projectImg from "./assets/notation.png";
import Nav from "./Nav";
// import styled from "styled-components";

import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";


function Project({name, lastModified}){
  return (
    <div className="project">
      <img src={projectImg} className="logo tauri" alt="Tauri logo"/>
      <h2>{name}</h2>
      {/* is there a tag for dates in jsx? */}
      <p>last opened: <span className="date">{lastModified}</span></p>

    </div>
  )
}
function getProjects(){
  // call the tauri api to get the list of projects and print it to the console
  // console.log("test print: ");
  // console.log("test print: "+invoke('getProjectList'));
  

  invoke('getProjectList').then((message) => console.log(message))

  // invoke('getProjectList');
}

let projects = [
  {
    name: "4 chords",
    lastModified: "10/10/10"
  },
  {
    name: "Giant Steps",
    lastModified: "10/10/10"
  }
]
function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");
  getProjects();

  // 
  // async function greet() {
  //   // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  //   // invoke is a wrapper around the Tauri command API
  //   setGreetMsg(await invoke("grate", { name }));
  // }
//  console.log("test print: "+invoke('getProjectList'));

  return (
    // <div className="container">
    //   <h1>Welcome to butty!</h1>

    //   <div className="row">
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src="/vite.svg" className="logo vite" alt="Vite logo" />
    //     </a>
    //     <a href="https://tauri.app" target="_blank">
    //       <img src="/tauri.svg" className="logo tauri" alt="Tauri logo" />
    //     </a>
    //     <a href="https://reactjs.org" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>

    //   <p>Click on the Tauri, Vite, and React logos to learn more.</p>

    //   <div className="row">
    //     <form
    //       onSubmit={(e) => {
    //         e.preventDefault();
    //         greet();
    //       }}
    //     >
    //       <input
    //         id="greet-input"
    //         onChange={(e) => setName(e.currentTarget.value)}
    //         placeholder="Enter a name..."
    //       />
    //       <button type="submit">Greet</button>
    //     </form>
    //   </div>

    //   <p>{greetMsg}</p>
    // </div>
    
    
    <div className="container">
      <h1>Projects</h1>
      <div className="project-container">
        {/* <Project name="4 chords" lastModified="10/10/10"/>
        <Project name="Giant Steps" lastModified="10/10/10"/> */}
        {projects.map((project, i) => {
          return <Project name={project.name} lastModified={project.lastModified} key={i}/>
        })}
      </div>

    </div>
  );
}

export default App;
