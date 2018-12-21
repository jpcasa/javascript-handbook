const NotificationService = function () {
	let message = 'Notifying';

	this.update = function (task) {
		console.log(`${message} ${task.user} for task ${task.name}`);
	};
};

export default NotificationService;
