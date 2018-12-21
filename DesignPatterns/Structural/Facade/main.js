import {Task, TaskService} from './task';

console.log('');
console.log('---------------------------------------');
console.log('                Facade                 ');
console.log('---------------------------------------');
console.log('');


// The facade for TaskService
const TaskServiceWrapper = function () {
	let completeAndNotify = function (task) {
		TaskService().complete(task);

		if (task.completed === true) {
			TaskService().setCompleteDate(task);
			TaskService().notifyCompletion(task, task.user);
			TaskService().save(task);
		}
	};

	return {
		completeAndNotify
	};
};

let myTask = new Task({
	name: 'MyTask',
	priority: 1,
	project: 'Courses',
	user: 'Jon',
	completed: false
});

TaskServiceWrapper().completeAndNotify(myTask);

console.log('myTask:', myTask);
