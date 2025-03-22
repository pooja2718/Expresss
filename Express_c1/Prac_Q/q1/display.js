const express = require('express');
const app= express();

app.get("/",(req,resp)=>{
    resp.sendfile('./views/home.html',{__dirname});

 
})
app.get("/about",(req,resp)=>{
    resp.sendfile('./views/about.html',{__dirname});

 
})

app.listen(2000,()=>{
    console.log("running");
    
})

