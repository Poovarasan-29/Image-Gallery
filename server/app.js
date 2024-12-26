const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
const routes = require('./routes/routes');

const app = express();

app.use(express.json());
app.use(cors());
connectDB();


app.use(routes)

// app.get('/', async (req, res) => {
//     // let database = await dbo.getDatabase();
//     const collection = database.collection('spiderman');
//     const cursor = collection.find({});
//     let values = await cursor.toArray();

//     return res.json(values);
// })


app.listen(8080, () => {
    console.log("Server Running Port : ", 8080);
})