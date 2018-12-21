const Task = require('./task');

let task1 = new Task('Task Name 1');
let task2 = new Task('Task Name 2');
let task3 = new Task('Task Name 3');
let task4 = new Task('Task Name 4');

task1.complete();
task2.save();
task3.save();
task4.save();
