const express = require('express');
const mongoose = require('mongoose');
const Note=require("../models/notesModel");
const router= express.Router();

router.post("/",(req,res)=>{
    const{title,content}=req.body;
    const newNote=new Note({
        title:title,
        content:content,
        time:new Date()
    });
    newNote.save();
    res.json(newNote);
});
module.exports=router