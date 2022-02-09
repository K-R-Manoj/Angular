import express from 'express';
import mongoose from './database/mongoose.js';
import cors from 'cors';
import NoteList from './database/Models/Notes.js';
import {TrashNote} from './database/Models/Notes.js';


const app = express();

app.use(express.json())             
/*  Using this because to parse json data.Meaning that it is the format that data exchange b/w frontend(FE) and backend(BE).
    For that we were using body parser a third pary library . For that express team integrated the body parser inside the express so we dont have to use the third party library.
    So we just use app.use(express.json())
*/

app.use(cors())

// CORS ;- Cross Origin request security                                   
/*  FE:-localhost:4200
    BE :- localhost:3000
    since FE and BE are on different ports the express rejects the request from the FE . to prevent that we use cors
*/


app.get('/notes',(req,res)=>{
    NoteList.find({})
        .then((lists)=>{
            res.send(lists)
        }).catch((error)=>{"Error file fetching the Notelists.!!!!!!!!", console.log(error);})
})

app.post('/notes',(req,res)=>{
    const note = new NoteList({
        Title:req.body.Title,
        Tag:req.body.Tag,
        Description:req.body.Description,
        Color:req.body.Color,
        Time:req.body.Time,
    })
    note.save()
    .then((list)=>{
        res.send({message:"successfully added the Note to Database: ",list})
    })
    .catch((error)=>{
        res.send({message:"Error!!!! Adding Note to Database failed: ", error})
    })
})

app.patch('/notes',(req,res)=>{
    NoteList.updateOne({_id:req.body.ID},{Title:req.body.Title,Tag:req.body.Tag,Description:req.body.Description,Color:req.body.Color, Time:req.body.Time})
        .then((lists)=>{res.send({message:"successfully updated the Note in DataBase ", lists})})
        .catch((error)=>{res.send({message:"Error!!! updateing the Note Failed: ", error})})
})

app.delete('/notes/:ID',(req,res)=>{
    // console.log(req.params.ID);
    NoteList.deleteOne({_id:req.params.ID})
        .then((lists)=>{res.send({message:"successfully deleted the Note from the DataBase: ", lists})})
        .catch((error)=>{res.send({message:"Error!!! Deleting the Note Failed: ", error})})
})


// __________________________________________Trash Side__________________________________________________________________________


app.get('/trash',(req,res)=>{
    TrashNote.find({})
        .then((lists)=>{
            res.send(lists)
        }).catch((error)=>{"Error file fetching the Notelists.!!!!!!!!", console.log(error);})
})

app.post('/trash',(req,res)=>{
    console.log(req.body);
      const trashnote = new TrashNote({
        Title:req.body.Title,
        Tag:req.body.Tag,
        Description:req.body.Description,
        Color:req.body.Color,
        Time:req.body.Time
    })
    trashnote.save()
    .then((list)=>{
        res.send({message:"successfully added the TrashNote to Database: ",list})
    })
    .catch((error)=>{
        res.send({message:"Error!!!! Adding TrashNote to Database failed: ", error})
    })
})

app.delete('/trash/:ID',(req,res)=>{
    // console.log(req.params.ID);
    TrashNote.deleteOne({_id:req.params.ID})
        .then((lists)=>{res.send({message:"successfully deleted the TrashNote from the DataBase: ", lists})})
        .catch((error)=>{res.send({message:"Error!!! Deleting the TrashNote Failed: ", error})})
})


app.listen(3000,()=>{
    console.log("server connected at port 3000");
})