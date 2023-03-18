

pub mod startup_menu{
    use std::fs;
    #[tauri::command]
    pub fn get_project_list()-> String{
        let destination: String ="../projects".to_string();
        let projects= fs::read_dir(destination).unwrap();
        let mut to_return:String = "".to_string();
        for project in projects {
            let project = project.unwrap();
            let project_access_time:u64= project.metadata().unwrap().created().unwrap()
            .duration_since(std::time::SystemTime::UNIX_EPOCH).unwrap().as_secs();
            let project_access_date= chrono::NaiveDateTime::from_timestamp_opt(project_access_time as i64, 0).unwrap().format("%Y-%m-%d").to_string();
            let project_name = project.file_name().into_string().unwrap().replace(".txt", "");
            let project_data=format!("{} {},",project_name , project_access_date);
            to_return.push_str(&project_data);    
            
        }
        return to_return.to_string();
    }

 
    
}