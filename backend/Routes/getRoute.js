const express = require('express');
const mongoose = require('mongoose');
const Note=require("../models/notesModel");
const router= express.Router();


router.get("/",(req,res)=>{
    Note.find().then((note)=>{
        res.json(note);
    }).catch(err=>{
        console.log(err,"getRoute Error");
    });
});

module.exports=router