const TaskRepository = (function () {
	let taskRepository;

	function createRepository() {
		return new Object('Task');
	}

	return {
		getInstance: function() {
			if (!taskRepository) {
				taskRepository = createRepository();
			}
			return taskRepository;
		}
	};
})();

console.log('');
console.log('---------------------------------------');
console.log('             Singleton Demo            ');
console.log('---------------------------------------');
console.log('');

let repo1 = TaskRepository.getInstance();
let repo2 = TaskRepository.getInstance();

if (repo1 === repo2) {
	console.log('Same TaskRepo');
}
