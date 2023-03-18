
// use chrono::prelude::*;

#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]
use tauri::{CustomMenuItem, Menu, MenuItem, Submenu};
mod startup_menu;
use crate::startup_menu::startup_menu::*;





// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command

// [tauri::command]
// //this function should render window with label "NewProject" when the new project button is clicked
// pub fn new_project(event: tauri::Event){
//     println!("new project");
//     let new_project_window = tauri::WindowBuilder::new(
//         &app,
//         "NewProject", /* the unique window label */
//         tauri::WindowUrl::External("https://tauri.app/".parse().unwrap())
//       ).build().expect("failed to build window");
      

    
// }
fn main() {
    let quit = CustomMenuItem::new("quit".to_string(), "Quit");
    let new: CustomMenuItem = CustomMenuItem::new("new".to_string(), "New Project");
    let open: CustomMenuItem = CustomMenuItem::new("open".to_string(), "Open Project");
    let submenu = Submenu::new("File", Menu::new().add_item(new).add_item(open).add_item(quit));
    let menu = Menu::new()
    .add_native_item(MenuItem::Copy)
    .add_item(CustomMenuItem::new("hide", "Hide"))
    .add_submenu(submenu);
    let app=tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![get_project_list])
        .menu(menu)
        .on_menu_event(|event| {
            match event.menu_item_id() {
              "quit" => {
                std::process::exit(0);
              }
              "close" => {
                event.window().close().unwrap();
              }
              _ => {}
            }
          })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");

}

// function that opens a new window when the new project button is clicked

// fn main() {
//     let quit = CustomMenuItem::new("quit".to_string(), "Quit");
//     let new: CustomMenuItem = CustomMenuItem::new("new".to_string(), "New Project");
//     let open: CustomMenuItem = CustomMenuItem::new("open".to_string(), "Open Project");
//     let submenu = Submenu::new("File", Menu::new().add_item(new).add_item(open).add_item(quit));
//     let menu = Menu::new()
//     .add_native_item(MenuItem::Copy)
//     .add_item(CustomMenuItem::new("hide", "Hide"))
//     .add_submenu(submenu);

//     let app=tauri::Builder::default()
//         .invoke_handler(tauri::generate_handler![get_project_list])
//         .menu(menu)
//         .on_menu_event(|event| {
//             match event.menu_item_id() {
//               "quit" => {
//                 std::process::exit(0);
//               }
//               "close" => {
//                 event.window().close().unwrap();
//               }
//               _ => {}
//             }
//           })
//         .build(tauri::generate_context!())
//         .expect("error while running tauri application");

//     let new_project_window = tauri::WindowBuilder::new(
//         &app,
//         "NewProject", /* the unique window label */
//         tauri::WindowUrl::External("https://tauri.app/".parse().unwrap())
//       ).build().expect("failed to build window");
//     //   q:how to we get the new project window to open when the new project button is clicked?
//     // 
//     // 
// }
