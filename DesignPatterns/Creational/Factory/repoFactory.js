const ProjectRepository = require('./projectRepository');
const TaskRepository = require('./taskRepository');
const UserRepository = require('./userRepository');

/*
		Bad implementation of Factory Pattern
 */
const RepoFactory = function () {
	this.getRepo = function (repoType) {
		if (repoType === 'task') {
			return TaskRepository;
		}
		if (repoType === 'user') {
			return UserRepository;
		}
		if (repoType === 'project') {
			return ProjectRepository;
		}
	};
};

module.exports = new RepoFactory;
