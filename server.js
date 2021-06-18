const express = require('express');
const hbs = require('hbs');

const app = express();

app.set('view engine', hbs);



app.get('/home', (req, res) => {
    res.render('home.hbs', {name : "Siraj"})
});

app.get('/contact', (req, res) => {
    res.render('contact.hbs', {name : "Rania"})
});

app.get('/ourservices', (req, res) => {
    res.render('ourservices.hbs', {name : "Meriem"})
});

app.listen(6300, (err) => {
    if(err) console.log("server is not running")
    else console.log("server is running 🚀 on port 6300")
});