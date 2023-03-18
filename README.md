# Notation Desktop App
This project builds on a [command line app](https://github.com/mpughcs/Notation) that allows users to view notes in a scale, view notes in a chord, and create chord progressions. The app also allows users to convert notes to playable audio files. The goal of this project is to help composers with cognitive disabilities such as dyslexia, dysgraphia, and ADHD compose music easily and efficiently. The application is currently in early development by [Max Pugh](https://github.com/mpughcs)

# Technologies
 [Rust](https://www.rust-lang.org/), [Tauri](https://tauri.studio/en/), [Vite](https://vitejs.dev/), [React](https://reactjs.org/), [Notation.cli](https://github.com/mpughcs/Notation), [Rust MusicTheory Library](https://github.com/ozankasikci/rust-music-theory)
    

# Feature Roadmap
## Frontend
### Notation CLI App
- [x] Create a command line app that allows users to view notes in a scale, view notes in a chord, and create chord progressions.
- [x] Create command line app that allows users to convert notes to playable audio files.
### Startup Menu
- [x] Styled Startup Menu 
- [x] Startup Menu calls rust and tauri API's to display all projects in the projects directory in the parent directory.
- [ ] Startup Menu allows users to create new projects.
- [ ] Startup Menu allows users to delete projects.
- [ ] Startup Menu allows users to open projects.
### Project Menu
- [ ] Styled Project Menu
- [ ] Project Menu allows users to view notes in a scale.
- [ ] Dynamic adding of chords to chord progression.
