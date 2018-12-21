import ProjectRepo from './projectRepository';
import TaskRepo from './taskRepository';
import UserRepo from './userRepository';

const RepoFactoryClean = function () {
	let repos = this;

	let repoList = [
		{name: 'task', source: TaskRepo},
		{name: 'user', source: UserRepo},
		{name: 'project', source: ProjectRepo}
	];

	repoList.forEach(function (repo) {
		repos[repo.name] = repo.source;
	});
};

module.exports = new RepoFactoryClean;
