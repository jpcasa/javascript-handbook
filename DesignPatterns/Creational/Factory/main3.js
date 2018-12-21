const Task = require('./task');
const RepoFactory = require('./repoFactory2');

console.log('');
console.log('---------------------------------------');
console.log('            Factory Part 3             ');
console.log('---------------------------------------');
console.log('');

let task1 = new Task(RepoFactory.task.get(1));

let user = RepoFactory.user.get(1);
let project = RepoFactory.project.get(1);

task1.user = user;
task1.project = project;

console.log('task1:', task1);
task1.save();
