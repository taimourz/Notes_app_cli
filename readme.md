# Notes App (Node.js CLI)

A simple **command-line notes management app** built using Node.js.  
You can add, remove, list, and read notes directly from your terminal.

---

## Features

- Add new notes with a title and body  
- Remove existing notes by title  
- List all saved notes  
- Read specific notes  
- Persistent storage using `notes.json`  

---

##  Setup Instructions

   ```bash
   git clone https://github.com/yourusername/notes-app.git
   cd notes-app
   npm install
   node app.js <command> [options]
   ```

 Example
 ![Notes App Cli](demo_notes_cli.gif)

 Dependencies

- [chalk](https://www.npmjs.com/package/chalk)
- [yargs](https://www.npmjs.com/package/yargs) 
- [fs (built-in)](https://nodejs.org/api/fs.html) 



