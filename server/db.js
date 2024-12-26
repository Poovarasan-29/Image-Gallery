const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const con = await mongoose.connect('mongodb://127.0.0.1:27017/gallery');
        console.log("Database Connected : ", con.connection.host);
    } catch (error) {
        console.log("Database Not Connected");
    }
}

module.exports = connectDB;
