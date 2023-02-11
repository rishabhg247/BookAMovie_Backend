const mongoose = require('mongoose');
const { bookMovieSchema } = require('../modals/schema');
const MongoUrl="mongodb://localhost:27017/" + "bookMovie";

mongoose.connect(MongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { 
        console.log("connection established with mongodb server online"); 
    })
    .catch(err => {
        console.log("error while connection", err)
    });
let Booking =mongoose.model('BOOKING',bookMovieSchema);
module.exports={Booking};