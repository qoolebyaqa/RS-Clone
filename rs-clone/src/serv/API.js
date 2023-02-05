
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const db = 'mongodb+srv://qoolebyaqa:pyumhann@board-learn.jhd6ch1.mongodb.net/?retryWrites=true&w=majority';
const bodyParser = require('body-parser');

const createPath = (page) => path.resolve(__dirname, 'app', `${page}.html`);

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => console.log('Connected to DB'))
  .catch((err) => console.log(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: true }));

app.get('/getData', (req, res) => {
  res.json(db)
})

app.post('/getData', (req, res) => {

  db.push(req);
  res.sendStatus(201);
})


app.listen(3001, (err) => {
  err? console.log(err) : console.log('Api received your req');
})
