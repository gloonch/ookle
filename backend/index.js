const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const markerRoute = require('./route/MarkerRoute');


const app = express();

app.use(cors())
app.use(express.json());
app.use('/api/v1/marker', markerRoute);

mongoose.connect('mongodb://127.0.0.1:27017/ookle?authSource=admin&directConnection=true',
                {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        console.log("MongoDB Connected...")
    })
    .catch(err => {
        console.log(err);
    });

app.listen(4000, ()=>{
    console.log("App is running on PORT 4000");
})