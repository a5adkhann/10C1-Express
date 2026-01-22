const mongoose = require("mongoose");

const connectDB = async() => {
    try{
        await mongoose.connect("mongodb+srv://asadkaptech_db_user:10b1-backend@cluster0.wukudxa.mongodb.net/?appName=Cluster0/10b1");
        console.log("DB Connected Successfully");
    }
    catch(err){
        console.log("Error connecting DB:", err);
    }
}

module.exports = connectDB;



