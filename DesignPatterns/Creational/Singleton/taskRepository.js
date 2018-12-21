const TaskRepository = function () {
	console.log('Creating new task repo');

	let called = 0;

	const save = function (task) {
		called++;
		console.log(`Saving ${task} Called ${called} times`);
	};

	return { save };
};

export default TaskRepository();
