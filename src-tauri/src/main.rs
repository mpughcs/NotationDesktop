
// use chrono::prelude::*;

#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]
// #![feature(string_remove_matches)]
use std::{io, fs};
use chrono::prelude::*;





// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command

// #![feature(string_remove_matches)]
// #[feature(string_remove_matches)]
// this command is executed to populate the startup page with the projects in the progressions folder
#[tauri::command]
fn getProjectList()-> String{
    // set destination to the path of the projects folder
    let destination: String ="../projects".to_string();

    let mut project_list:String =" ".to_string();

    // read the directory and store into ReadDir struct
    let mut projects= fs::read_dir(destination).unwrap();
    let mut to_return:String = "".to_string();

    // loop through the ReadDir struct and store the file names into a string
    for project in projects {
        let project = project.unwrap();
        let project_access_time:u64= project.metadata().unwrap().created().unwrap()
        .duration_since(std::time::SystemTime::UNIX_EPOCH).unwrap().as_secs();
        let project_access_date= chrono::NaiveDateTime::from_timestamp_opt(project_access_time as i64, 0).unwrap().format("%Y-%m-%d").to_string();
        let project_name = project.file_name().into_string().unwrap().replace(".txt", "");
        let project_data=format!("{} {},",project_name , project_access_date);
        to_return.push_str(&project_data);    
    }
   
    


   
    // console log the project list
    // println!("{}", project_list);

    // #![feature(string_remove_matches)]

    // println!("{}", to_return);
    // to_return.into()
    to_return.to_string().into()
}



fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![getProjectList])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
