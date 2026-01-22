const express = require("express");

const app = express();


const salaryLogic = (req, res, next) => {
    const salary = req.query.salary;
    if(!salary){
        res.send("Salary not provided");
    }
    else if(salary < 30000){
        res.send("Salary is below 30K");
    }
    else {
        next();
    }
}

app.use(salaryLogic);

app.get("/", (req, res) => {
    res.send("Home");
})

app.get("/about", (req, res) => {
    res.send("About");
})


app.listen(2000, () => {
    console.log("Server Started...");
})