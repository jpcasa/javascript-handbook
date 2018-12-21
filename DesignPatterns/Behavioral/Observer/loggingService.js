const LoggingService = function () {
	let message = 'Logging';

	this.update = function (task) {
		console.log(`${message} ${task.user} for task ${task.name}`);
	};
};

export default LoggingService;
