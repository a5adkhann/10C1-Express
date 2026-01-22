const express = require('express')
const app = express()

app.get("/", (req, res) => {
    res.send("Express JS Server");
})

app.get("/about", (req, res) => {

    const name = req.query.name;
    if(name){
    res.send(`Welcome ${name}`);
    }
    else {
        res.send("About us");
    }
})

app.get("/services/:email", (req, res) => {
    const myEmail = req.params.email;
    res.send(`My Email is ${myEmail}`);
})

let port = 3000
app.listen(port,()=>{
    console.log(`server is runnning on ${port}`)
})