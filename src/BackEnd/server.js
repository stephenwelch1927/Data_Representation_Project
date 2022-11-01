const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors');
const bodyParser = require("body-parser");
const path = require('path');
const mongoose = require('mongoose');

//Cors so two domains can communicate
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//Build path to deploy to the server 
app.use(express.static(path.join(__dirname, '../../build')));
app.use('/static', express.static(path.join(__dirname, 'build//static')));

//App use bodyParser for url
app.use(bodyParser.urlencoded({ extended: false}))

//Parse application with JSON
app.use(bodyParser.json())

//Set up using the mongod database
const strConnection = 'mongodb+srv://stephenwelch1927:bluebirds1927@cluster0.hw58zei.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(strConnection, {useNewUrlParser: true});

//Set up holiday schema
const Schema = mongoose.Schema;
const holidaySchema = new Schema({
  Destination:String,
  Duration:String,
  Description:String
})

//constant that sets up new holiday schema and holiday db
const holidayDesc = mongoose.model('holiday', holidaySchema);

//Bring to holida/add navigatio
app.get('/holiday/add', (req, res) => {
    
  holidayDesc.find((err,data)=>{
      res.json(data);
  })

})

//Updates the new holidays schema
app.post('/holiday/add', (req, res) => {
  console.log(req.body);

  holidayDesc.create({
      Destination:req.body.Destination,
      Duration:req.body.Duration,
      Description:req.body.Description
  })
  .then()
  .catch();

  res.send('Data Recieved!');
})

//App get to update records
app.get('/holiday/add/:id',(req, res)=>{
  console.log(req.params.id);

  holidayDesc.findById(req.params.id, (err, data) => {
    res.json(data);
  })
})
//App put to update the record
app.put('/holiday/add/:id',(req, res)=>{
  console.log("Update "+req.params.id);

  holidayDesc.findByIdAndUpdate(req.params.id,
      req.body, {new:true},
      (err,data)=>{
          
      })
})
//Listen for a delete request from user
app.delete('/holiday/add/:id', (req,res)=>{
  console.log("delete holiday: "+req.params.id);

  holidayDesc.findByIdAndDelete({_id:req.params.id}, 
    (err,data)=>{
    res.send(data);
  })
})

//App Get to deploy of the server and retrieve
app.get('*', (req, res) => {
   res.sendFile(path.join(__dirname+'../../build/index.html'));
})

//listening at localhost 4000
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})