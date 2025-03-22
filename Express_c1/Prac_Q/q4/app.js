const express = require('express');
const app= express();

app.set('view engine','ejs');
const arr=[
    {
        "name":"pooja",
        "sal":23900
    },
    {
        "name":"sadhna",
        "sal":2900
    },
    {
        "name":"puja",
        "sal":2390
    }
]

app.get('/',(req,resp)=>{
    resp.render("home")
})

app.get('/about',(req,resp)=>{
    A=50+50;
    resp.render("about",({data:A}));

})

app.get("/show",(req,resp)=>{
    resp.render("show",{show:arr});
})
app.listen(2000,()=>{
    console.log("running");
    
})


