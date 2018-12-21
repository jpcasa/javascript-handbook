export const Task = function (data) {
	this.name = data.name;
	this.priority = data.priority;
	this.project = data.project;
	this.user = data.user;
	this.completed = data.completed;
};

// Not nice
export const TaskService = function () {
	return {
		complete: function (task) {
			task.completed = true;
			console.log('Completing task: ' + task.name);
		},
		setCompleteDate: function (task) {
			task.completedDate = new Date();
			console.log(task.name + ' completed on ' + task.completedDate);
		},
		notifyCompletion: function (task, user) {
			console.log('Notifying ' + user + ' of the completion of ' + task.name);
		},
		save: function (task) {
			console.log('Saving task: ' + task.name);
		}
	};
};
