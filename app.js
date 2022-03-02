const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
mongoose.connect('mongodb://localhost:27017/contactDance',{useNewUrlParser:true, useUnifiedTopology: true});
const port = 80;

// Define mongoose Schema
var contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    desc: String
  });

  var contact = mongoose.model('contact', contactSchema);



// EXPRESS SPECIFIC STUFF
app.use('/public', express.static('public')) // For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory
 
// ENDPOINTS
// serving home page
app.get('/', (req, res)=>{
    const params = { }
    res.status(200).render('home.pug', params);
})

// serving contact page
app.get('/contact', (req, res)=>{
    const params = { }
    res.status(200).render('contact.pug', params);
})

// install body parser to fetch data
app.post('/contact', (req, res)=>{
    var myData = new contact(req.body);
    myData.save().then(() => {
        res.send("This item has been saved to database")
    }).catch(() => {
        res.status(400).send("Item was not saved to the databse")
    });
    // res.status(200).render('contact.pug');
})



// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});