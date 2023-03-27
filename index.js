const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const Router = require("./router")

const uriMongoDB = 'mongodb+srv://t07032003:jmFdfZKwLKwncHbL@demo.cufzg2b.mongodb.net/test';

app.use(express.urlencoded({
    extended: true,
}));
app.use(express.json());

mongoose.connect(uriMongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(console.log('Ket noi thanh cong'));

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});

app.use(Router);

app.listen(port);