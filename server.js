const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const userRoutes = require('./Routes/userRoutes')

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/user', userRoutes);

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(()=>{
    console.log("MongoDB Connected!");
});
app.listen(5000, console.log("Server started"));

