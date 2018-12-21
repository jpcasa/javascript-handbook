const TaskRepo = function () {
	let db = {};

	const get = function (id) {
		console.log(`Getting task ${id}`);
		return {
			name: 'new task from db'
		};
	};

	const save = function(task) {
		console.log(`Saving ${task.name} to the db`);
	};

	console.log('Creating new task repo');
	return { get, save };
};

module.exports = TaskRepo();
