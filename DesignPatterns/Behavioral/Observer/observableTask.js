import Task from './task';
import ObserverList from './observerList';

const ObservableTask = function (data) {
	Task.call(this, data);
	this.observers = new ObserverList();
};

ObservableTask.prototype.addObserver = function (observer) {
	this.observers.add(observer);
};

ObservableTask.prototype.notify = function (context) {
	this.observers.observerList.forEach((element, index) => {
		this.observers.get(index)(context);
	});
};

ObservableTask.prototype.save = function () {
	this.notify(this);

	Task.prototype.save.call(this);
};

export default ObservableTask;
