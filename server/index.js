const express=require('express');
const mongoose= require('mongoose');
const bodyParser=require('body-parser')
const routes=require("../src/routes/users")
const app=express();
const port= 3000;


// Add headers
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});

app.get('/',(req,res)=>{
    res.send('hello world');
})

mongoose
    .connect("mongodb://127.0.0.1:27017/bento",{useNewUrlParser:true})
    .then(()=>console.log("Connected to MongoDB..."))
    .catch(err=>console.error("Could not connect to MongoDB..."));

 

app.use(express.json());

app.use("/api/users",routes);

app.listen(port,()=>{
    console.log(`listening on localhost:${port}`)
})

module.exports=app;