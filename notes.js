//11.13
const fs = require('fs')
const chalk=require('chalk') 
console.log('notes.js accesed')

const addNote = (title,body) =>{
    
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)
    
    debugger
    
    if(!duplicateNote)//or if(duplicatNote === undefined)
    {   notes.push
        ({
        title: title,
        body: body
        })
        saveNotes(notes)
        console.log(chalk.inverse.green('New note Adding!!'))
    }
    else//duplicateNote have some value
    {
    console.log(chalk.inverse.red('Title already Taken!!'))
    }
    
    
    // const duplicatNotes = notes.filter((note)=> note.title === title)//condition,used instead of boolean
    // if(duplicatNotes.length === 0)
    // {   notes.push
    //     ({
    //     title: title,
    //     body: bodyw
    //     })
    //     saveNotes(notes)
    //     console.log(chalk.inverse.green('New note Adding!!'))
    // }
    // else//duplicateNotes have some value
    // {
    // console.log(chalk.inverse.red('Title already Taken!!'))
    // }
    
    
}
const loadNotes = ()=> {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const saveNotes=(notes) =>{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const removeNote = (title)=>{

    const notes = loadNotes();//returns an array of object notes
    const notesToKeep = notes.filter((note)=>note.title !== title)
    
    if(notes.length !== notesToKeep.length)
    {
        console.log(chalk.inverse.green('Notes Removed'))
        saveNotes(notesToKeep)
    }
    else
    {
        console.log(chalk.inverse.red('No Notes Found'))
    }
  
}
const listNotes = ()=>{
    const notes = loadNotes()
    console.log(chalk.yellow.inverse("Your notes ="))
    notes.forEach((note)=>{ console.log(chalk.white.inverse(note.title))})
} 
const readNote = (title)=>{
    const notes = loadNotes()
    const note = notes.find((note)=>note.title === title)
    if(!note)
    {
        console.log(chalk.red.inverse('NO TITLE MATCH FOUND'))
    }
    else
    {
        console.log(chalk.italic.blue.inverse(note.title))
        console.log(chalk.white(note.body))
    }
    
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}