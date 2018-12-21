import TaskRepository from './taskRepository';

const TaskHandler = function () {
	return {
		save: function () {
			TaskRepository.save('Hello from TaskHandler');
		}
	};
};

export default TaskHandler();
