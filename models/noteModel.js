const mongoose = require('mongoose')

const notesSchema = mongoose.Schema({
    title : String,
    data : String
})

const Note = mongoose.model('Note',notesSchema)

module.exports = Note;