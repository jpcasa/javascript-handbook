import Task from './task';

console.log('');
console.log('---------------------------------------');
console.log('              Decorator                ');
console.log('---------------------------------------');
console.log('');

let myTask = new Task('Legacy Task');
myTask.complete();
myTask.save();

console.log('');

let urgentTask = new Task('Urgent Task');

// Decorated urgentTask with priority and notify method
urgentTask.priority = 2;
urgentTask.notify = function() {
	console.log('notifying important people');
};

urgentTask.complete();
// urgentTask is decorated with a new implementation of save
urgentTask.save = function () {
	this.notify();
	// call binds the save execution to the scope of current function
	Task.prototype.save.call(this);
};
urgentTask.save();
