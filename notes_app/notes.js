import fs from 'fs'
import chalk from 'chalk'

export const addNote = (t, b) => {
    const notes = loadNotes()

    // const duplicateNotes = notes.filter((note) =>  note.title === t)
    const duplicateNote = notes.find((note) => note.title == t)

    // without arrow operator
    // const duplicateNotes = notes.filter(function(note){
    //     return note.title === t
    // })    
    
    if(!duplicateNote){
        notes.push({title: t, body: b})
        saveNotes(notes)
        console.log("new note added")
    }else{
        console.log("Title is taken")
    }

}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = (notes) => {
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){
        return []
    }   
}


export const removeNote = (title) => {
    const notes = loadNotes()
    const filtered_notes = notes.filter((note) => note.title !== title)
    if(filtered_notes.length != notes.length){
        saveNotes(filtered_notes)
        console.log(chalk.green("removed successfully"))
    }else{
        console.log(chalk.red("No note with this title"))
    }
}

// without arrow operator (can use b/c there is no 'this' keyword )
// export function removeNote(title){
//     const notes = loadNotes()
//     console.log(notes)
//     const filtered_notes = notes.filter(function(note){
//         return note.title !== title
//     })
//     if(filtered_notes.length != notes.length){
//         saveNotes(filtered_notes)
//         console.log(chalk.green("removed successfully"))
//     }else{
//         console.log(chalk.red("No note with this title"))
//     }
// }



export const listNotes = () => {
    const notes = loadNotes()
    notes.forEach(element => {
        console.log(chalk.yellow(element.title))
    });
}

export const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title == title)
    if(note){
        console.log(chalk.italic.yellow(note.title))
        console.log(chalk.yellow(note.body))
    }else{
        console.log(chalk.red("No note found"))
    }
}