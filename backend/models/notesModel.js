const mongoose=require('mongoose');
const timeStamp=require("console");

// const userSchema=new mongoose.Schema({
//     title:{
//         type:String,
//     },
//     content:{
//         type:String,
//         required:true
//     },
//     time:{
//         type:new Date()
//     }
// })
const Note=mongoose.model("Note",{
    title:{
        type:String,
    },
    content:{
        type:String,
        required:true
    },
    time:{
        type:Date
    }
})

module.exports=Note; 