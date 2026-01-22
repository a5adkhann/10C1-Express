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

module.exports = salaryLogic;