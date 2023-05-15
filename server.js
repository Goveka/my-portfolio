const express = require('express');
const app = express();
const port=process.env.PORT || 4009;
//const url= "mongodb://localhost:27017/test";
const bodyParser= require('body-parser');
const mongoose= require('mongoose');
const cors= require('cors');
require('dotenv').config();
const url='mongodb+srv://Sizwenkala:sizwe123@cluster0.fejtt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'



// middleware
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(express.json());
app.use(express.static('public'));
app.use(cors())


// connecting to database
mongoose.connect(url,{useNewUrlParser: true,useUnifiedTopology: true})

const database = mongoose.connection
//checking if our connection to database was successful
database.on('error', (error)=>{
    console.log(error)
})
database.once('connected', ()=>{
    console.log("database connected")
})



// creating a new monngoose model
const View = mongoose.model('View', new mongoose.Schema({
  viewedSite: Number,
  viewedProject: Number,
  viewedProjectCode: Number,
  viewedGITHUB: Number,
  downloadedCV: Number,
  date: String
}));




app.get('/',(req,res)=>{
  res.sendFile(__dirname + '/portfolio.html')
})


// posting to the database || updating the object in the database
app.post('/viewedSite', (req,res)=>{
   // const id="63cae72cd6a362d3024cf6a9";
  const id="63cb52231c868773a7297ef6"
  const date=req.body.date;
  View.findOne({_id: id}, (err, object)=>{
      if (err) {
          res.sendStatus(500)
      }else {
          object.viewedSite += 1;
          object.date= date;
          object.save(function(err, res){
              if (err){
                  res.sendStatus(500)
                  console.error(err)
              }else {
                 // res.sendStatus(200)
                  console.log('updated viewSite');
              }
          })
      }
  })
})

app.post('/viewedProjectCode', (res,req)=>{
  const id="63cb52231c868773a7297ef6"
  View.findOne({_id: id}, (err, object)=>{
      if (err) {
          res.sendStatus(500)
      }else {
          object.viewedProjectCode += 1;
          object.save(function(err, res){
              if (err){
                  res.sendStatus(500)
                  console.error(err)
              }else {
                 // res.sendStatus(200)
                  console.log('updated viewedProject code');
              }
          })
      }
  })
})

app.post('/viewedProject', (res,req)=>{
  const id="63cb52231c868773a7297ef6"
  View.findOne({_id: id}, (err, object)=>{
      if (err) {
          console.log("error")
      }else {
          object.viewedProject += 1;
          object.save(function(err, res){
              if (err){
                  res.sendStatus(500)
                  console.error(err)
              }else {
                 // res.sendStatus(200)
                  console.log('updated viewedProject');
              }
          })
      }
  })
})

app.post('/viewedGITHUB', (res,req)=>{
  const id="63cb52231c868773a7297ef6";
  View.findOne({_id: id}, (err, object)=>{
      if (err) {
          res.sendStatus(500)
      }else {
          object.viewedGITHUB += 1;
          object.save(function(err, res){
              if (err){
                  res.sendStatus(500)
                  console.error(err)
              }else {
                 // res.sendStatus(200)
                  console.log('updated viewed github profile');
              }
          })
      }
  })
})

app.post('/downloadedCV', (res,req)=>{
  const id="63cb52231c868773a7297ef6"
  View.findOne({_id: id}, (err, object)=>{
      if (err) {
          res.sendStatus(500)
      }else {
          object.downloadedCV += 1;
          object.save(function(err, res){
              if (err){
                  res.sendStatus(500)
                  console.error(err)
              }else {
                 // res.sendStatus(200)
                 console.log('updated || downloaded cv');
              }
          })
      }                  
  })
})


app.listen(port, console.log('server is up on port'+':' + port))
