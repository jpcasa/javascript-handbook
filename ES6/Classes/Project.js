class Project {
  constructor() {
    this.location = 'Bogota';
    console.log(`Constructing Project`);
  }
  getName() {
    return 'Manhattan';
  }
  getTaskCount() {
    return 50;
  }
  static getDefaultId() {
    return 0;
  }
}

// If has constructor and extends, you must add super() to constructor
class SoftwareProject extends Project {
  constructor() {
    super();
    console.log(`Constructing Software Project`);
  }
  getTaskCount() {
    return super.getTaskCount() + 6;
  }
}

let p = new SoftwareProject();
console.log(p.location);
console.log(p.getName());
console.log(p.getTaskCount());
console.log(Project.getDefaultId());
