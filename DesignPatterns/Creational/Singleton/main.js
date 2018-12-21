import TaskHandler from './taskHandler';
import TaskRepository from './taskRepository';

console.log('');
console.log('---------------------------------------');
console.log('              Singleton                ');
console.log('---------------------------------------');
console.log('');

TaskRepository.save('fromMain');
TaskRepository.save('fromMain');
TaskRepository.save('fromMain');

TaskHandler.save();
TaskHandler.save();
TaskHandler.save();
TaskHandler.save();
