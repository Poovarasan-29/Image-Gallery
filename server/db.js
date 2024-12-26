const mongoose = require('mongoose');
const MONGODB_URL = "mongodb+srv://spking222005:SayHi_29@imagegallery.bjehx.mongodb.net/gallery"
const connectDB = async () => {
    try {
        const con = await mongoose.connect(MONGODB_URL);
        
        console.log("Database Connected : ", con.connection.host);
    } catch (error) {
        console.log("Database Not Connected");
    }
} 

module.exports = connectDB;
