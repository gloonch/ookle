const express = require('express');
const mongoose = require('mongoose');

const markerRoute = require('./route/MarkerRoute');

const app = express();

app.use(express.json());
app.use('/api/v1/marker', markerRoute);

mongoose.connect('mongodb://mongo:27017/ookle',
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