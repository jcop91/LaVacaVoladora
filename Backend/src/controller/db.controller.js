require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;
const url = process.env.DB_HOST;
const mongoose = require('mongoose');
let dbName = process.env.DB_NAME
let pass = process.env.PASS
let user = process.env.USER

const dbURL = `mongodb+srv://${user}:${pass}@cluster0-q55ie.mongodb.net/${dbName}?retryWrites=true&w=majority`

function connect() {

    return mongoose.connect(dbURL, {
        useNewUrlParser:true,
        useCreateIndex:true,
        useUnifiedTopology:true,
    }).then(() =>{
        console.log("Connected");
    }).catch((err) =>{
        console.log("No conectado ",err);
    })
}

module.exports = {
    connect, mongoose
}