
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const db = 'mongodb+srv://qoolebyaqa:pyumhann@board-learn.jhd6ch1.mongodb.net/?retryWrites=true&w=majority';
const bodyParser = require('body-parser');
const Task = require('./models/db');

const createPath = (page) => path.resolve(__dirname, 'app', `${page}.html`);

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to DB'))
  .catch((err) => console.log(err));

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

app.get('/getData', (req, res) => {
  Task
    .find()
    .sort({ createdAt: -1 })
    .then((tasks) => res.json(tasks))
    .catch((error) => {
      console.log(error);
    });
});

app.post('/getData', (req, res) => {
  const { workspace, name, discription, time, overdue, assignto, checklist, attachments } = req.body;
  const newTask = new Task({workspace, name, discription, time, overdue, assignto, checklist, attachments});
  newTask
    .save()
    .then((result) => res.send(result))
    .catch((err) => { console.log(err)});
})


app.listen(3001, (err) => {
  err? console.log(err) : console.log('Listening on 3001 port');
})
