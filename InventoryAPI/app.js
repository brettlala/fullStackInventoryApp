require('dotenv').config();
const address = require('address');
const cookieParser = require('cookie-parser');
const express = require('express');
const cors = require('cors');

async function Main(){
    const app = express();

    await require('./service/MongooseConnection')();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser());
    app.use(cors());

    app.use('/', require('./routes/api'));

    app.listen(process.env.PORT, () => { 
        console.log(`Server started on port ${process.env.PORT}`);
        console.log(`Avaliable on your local network at ${address.ip()}:${process.env.PORT}`);
    });
}

Main();

