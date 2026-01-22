const connectDB = require("./config/db_connection");
const User = require("./models/users");


connectDB();

// const createUser = async() => {
//     try{
//         await User.insertOne({name : "Sameer", message: "Waila Insan"});
//     }
//     catch(err){
//         console.log("Error Inserting", err);
//     }
// }
// createUser();

// const getUsers = async() => {
//     try{
//         const users = await User.find();
//         console.log(users);
//     }
//     catch(err){
//         console.log("Error Fetching", err);
//     }
// }
// getUsers();

const updateUser = async() => {
    const id = "696f114d66ebeee40fc09e4f";
    const updatedData = {
        name : "Owais"
    }
    try{
        await User.updateOne({_id: id}, {$set: updatedData});
        console.log("Data updated successfully");
    }
    catch(err){
        console.log("Error Updating Data:",err);
    }
}

// updateUser();

const deleteUser = async() => {
     const id = "6971ad57653ee4755ad735b2";
     try{
        await User.deleteOne({_id: id});
        console.log("Data deleted successfully");
     }
     catch(err){
        console.log("Error Deleting Data", err)
     }

}
deleteUser();










