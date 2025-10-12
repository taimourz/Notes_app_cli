import fs from 'fs'

export default function addNote(t, b){
    const notes = loadNotes()

    const duplicateNotes = notes.filter(function(note){
        return note.title === t
    })
    
    if(duplicateNotes.length === 0){
        notes.push({title: t, body: b})
        saveNotes(notes)
        console.log("new note added")
    }else{
        console.log("Title is taken")
    }

}

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function(notes){
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){
        return []
    }
    
}


