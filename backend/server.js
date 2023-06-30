const express = require('express');
const mongoose=require('mongoose');
const dotenv=require('dotenv');
dotenv.config();
const cors=require('cors');
const getRoute=require('./Routes/getRoute')
const postRoute=require('./Routes/postRoute')
const delRoute=require('./Routes/delRoute');

const app = express()
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.URI).then(()=>{
    console.log('Database Connected');
    // server will listen only after database in connected other don not start at all
    app.listen(process.env.PORT, () => console.log(`Example app listening on port ${process.env.PORT}!`))
}).catch((err)=>console.log("errror in connection",err));

app.use(getRoute);
app.use(postRoute);
app.use(delRoute);