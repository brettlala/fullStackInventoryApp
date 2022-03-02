const mongoose = require('mongoose');

async function connectMongoose(){
    await mongoose.connect(`mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DATABASE}`,{useNewUrlParser:true})
        .then(() => console.log(`Connected to database ${process.env.MONGO_DATABASE} at ${process.env.MONGO_HOST}:${process.env.MONGO_PORT}!`))
        .catch(error => console.log('Error occured :(', error));
}

module.exports = connectMongoose;