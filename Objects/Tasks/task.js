let task = {
  title: 'My Task',
  description: 'My Description'
};

task.toString = function() {
  return `${this.title} ${this.description}`;
}

console.log(task.title);
console.log(task.toString());
