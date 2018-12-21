const Task = require('./task');
const Repo = require('./taskRepo');

let task1 = Task(Repo.get(1));
let task2 = new Task({ name: 'Task Name 2' });
let task3 = new Task({ name: 'Task Name 3' });
let task4 = new Task({ name: 'Task Name 4' });

task1.complete();
task2.save();
task3.save();
task4.save();
