const express = require('express');
const app = express();
app.use(express.json());
const { Booking } = require('../database/mongooseInit');
const router = express.Router();

//post api..
router.post("/api/booking", async (req, res) => {
    const { movieName, timeSlot, seats } = req.body;
    try {
      if (!movieName || !timeSlot){ res.status(422).send('Please select options Properly')}
      else if (seats.A1 || seats.A2 ||seats.A3 ||seats.A4 ||seats.D1 ||seats.D2)
       {await Booking(req.body).save((err, info) => { err ? res.send(err) : res.json(info) })
       return res.status(200);
       }
      else {res.status(422).send("Please select a slot!")}
    }catch (err) { res.status(401).send({err});
    }
  })
  //get api..
  router.get('/api/booking',async (req,res)=>{
    await Booking.find().exec((err,data)=>{err?res.send(err):res.send(data[data.length-1])});
    return res.status(200);
  })
router.get('/',(req,res)=>{res.send('hello world');})
  module.exports = router;
