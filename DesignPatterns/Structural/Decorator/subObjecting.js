import Task from './task';

console.log('');

// A new constructor is created where the constructor of Task is
// executed within the context of UrgentTask
const UrgentTask = function (name, priority) {
	Task.call(this, name);
	this.priority = priority;
};

// Creates a new UrgentTask object for the UrgentTask prototype
// out of Task's prototype
UrgentTask.prototype = Object.create(Task.prototype);

// Decoration occurs by adding the methods to the prototype of
// the subclass
UrgentTask.prototype.notify = function () {
	console.log('notifying important people');
};

UrgentTask.prototype.save = function () {
	this.notify();
	console.log('do special stuff before saving');
	Task.prototype.save.call(this);
};

const ut = new UrgentTask('This is urgent', 1);

ut.complete();
ut.save();
console.log('ut:', ut);
