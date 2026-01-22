const connectDB = require("./config/db_connection");
const User = require("./models/users");


connectDB();

const createUser = async() => {
    try{
        await User.insertOne({name : "Azaf", message: "lorem ipsum"});
    }
    catch(err){
        console.log("Error Inserting", err);
    }
}
// createUser();

const getUsers = async() => {
    try{
        const users = await User.find();
        console.log(users);
    }
    catch(err){
        console.log("Error Fetching", err);
    }
}
getUsers();







