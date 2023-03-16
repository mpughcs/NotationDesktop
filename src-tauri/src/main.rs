


#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]
// #![feature(string_remove_matches)]
use std::{io, fs};




// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command

// #![feature(string_remove_matches)]
// #[feature(string_remove_matches)]
#[tauri::command]
fn getProjectList() -> String{
    let mut project_list:String =" ".to_string();
    let destination: String ="../projects".to_string();
    let mut projects= fs::read_dir(destination).unwrap();
    let mut to_return:String = "".to_string();
    for project in projects {
        let project = project.unwrap();
        let project_access_time:String = project.metadata().unwrap().accessed().unwrap()
        .duration_since(std::time::SystemTime::UNIX_EPOCH).unwrap().as_secs().to_string();
        let project_name = project.file_name().into_string().unwrap().replace(".txt", "");
        let project_data=format!("name: {}, lastModified: {} \n",project_name , project_access_time);
        to_return.push_str(&project_data);    
    } 
   
    


   
    // console log the project list
    // println!("{}", project_list);

    // #![feature(string_remove_matches)]

    // println!("{}", to_return);
    to_return.into()
}



fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![getProjectList])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
