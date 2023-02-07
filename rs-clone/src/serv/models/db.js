const mongoose = require('mongoose');
const { take } = require('rxjs');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  "workspace": String,
  "name": String,
  "discription": String,
  "time": String,
  "overdue": Boolean,
  "assignto": String,
  "checklist": String,
  "attachments": String
}, { timestamps: true });

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
