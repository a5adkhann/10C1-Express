const express = require("express");
const salaryLogic = require("./middlewareLogic");
const route = express.Router();

const app = express();



route.use(salaryLogic);


app.get("/", (req, res) => {
    res.send("Express JS Server");
})

app.get("/about",salaryLogic, (req, res) => {

    const name = req.query.name;
    if(name){
    res.send(`Welcome ${name}`);
    }
    else {
        res.send("About us");
    }
})

app.get("/services", salaryLogic, (req, res) => {
    res.send("Service Page");
})


app.listen(3000, () => {
    console.log("Server Started");
})