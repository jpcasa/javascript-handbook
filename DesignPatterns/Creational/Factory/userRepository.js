const UserRepo = function () {
	let db = {};

	const get = function (id) {
		console.log(`Getting user ${id}`);
		return { name: 'Archit Mahto' };
	};

	const save = function (user) {
		console.log(`Saving ${user.name} to the db`);
	};

	return { get, save };
};

module.exports = UserRepo();
