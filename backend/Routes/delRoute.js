const express = require('express');
const mongoose = require('mongoose');
const Note=require("../models/notesModel");
const router= express.Router();

router.delete('/:id',(req,res)=>{
    const id=req.params.id;
    Note.findByIdAndDelete(id).then((delNote)=>res.json(delNote));
})

module.exports=router