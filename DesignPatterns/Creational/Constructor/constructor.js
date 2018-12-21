// The new keyword
// Creates a brand new object
// Links to an object prototype
// Binds 'this' to new object scope
// implicitly returns this

// Constructor Function Pattern
function ObjectName(param1, param2) {
  this.param1 = param1;
  this.param2 = param2;
  this.toString = function() {
    return this.param1 + ' ' + this.param2;
  }
}

// PROTOTYPE
// An encapsulation of properties than an object links to.
