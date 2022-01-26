import mongoose from 'mongoose';

const notelistschema = new mongoose.Schema({
    Title: {
        type:String,
        trim:true,
    },
    Tag:String,
    Description:{
        type:String,
        trim:true
    },
    Color:String,
    createdAt:{
        type:Date,
        default:new Date()
    }
})

const NoteList  = new mongoose.model("Noteslist", notelistschema);
const TrashNote = new mongoose.model("Trashnote", notelistschema);

export default NoteList;
export {TrashNote}