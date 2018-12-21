const Task = require('./task');
const RepoFactory = require('./repoFactoryWithCache');

console.log('');
console.log('---------------------------------------');
console.log('            Factory Part 2             ');
console.log('---------------------------------------');
console.log('');

let task1 = new Task(RepoFactory.getRepo('task').get(1));

let user = RepoFactory.getRepo('user').get(1);
let project = RepoFactory.getRepo('project').get(1);

task1.user = user;
task1.project = project;

console.log('task1:', task1);
task1.save();
