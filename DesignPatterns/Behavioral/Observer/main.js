import Task from './task';
import AuditingService from './auditingService';
import LoggingService from './loggingService';
import NotificationService from './notificationService';
import ObserverList from './observerList';
import ObservableTask from './observableTask';

console.log('');
console.log('---------------------------------------');
console.log('               Observer                ');
console.log('---------------------------------------');
console.log('');

let task1 = new ObservableTask({
	name: 'Create a demo for constructor',
	user: 'Jon'
});

const auditingService = new AuditingService();
const loggingService = new LoggingService();
const notificationService = new NotificationService();

task1.addObserver(notificationService.update);
task1.addObserver(loggingService.update);
task1.addObserver(auditingService.update);

task1.save();
