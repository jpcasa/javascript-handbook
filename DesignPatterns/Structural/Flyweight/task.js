// Task Object
export const Task = function (data) {
	this.flyweight = FlywieghtFactory.get(
		data.project,
		data.project,
		data.user,
		data.completed
	);
	this.name = data.name;
};

function Flyweight(project, priority, user, completed) {
	this.priority = data.priority;
	this.project = data.project;
	this.user = data.user;
	this.completed = data.completed;
}

const FlywieghtFactory = function() {
	let flyweights = {};

	let get = function(project, priority, user, completed) {
		if (!flyweights[project + priority + user + completed]) {
			flyweights[project + priority + user + completed] =
				new Flyweight(project, priority, user, completed);
		}
		return flyweights[project + priority + user + completed];
	};

	let getCount = function() {
		let count = 0;
		for (var f in flyweights) count++;
		return count;
	};

	return {
		get,
		getCount
	}

}()

// Task Collection - Revealing Module Pattern
export function TaskCollection() {
	let tasks = {};
	let count = 0;

	let add = function (data) {
		tasks[data.name] = new Task(data);
		count++;
	};

	let get = function (name) {
		return tasks[name];
	};

	let getCount = function () {
		return count;
	};

	return {
		add,
		get,
		getCount,
	};
}
