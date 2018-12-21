# JS Essentials: A quick guide for the busy developer.

## Table of contents:
1. [**Closures**](closures)
2. [**Scope**](scope)
3. [**Scope vs. Context**](scope-vs-closures)
4. [**Encapsulation**](encapsulation)
5. [**Value vs. Reference**](value-vs-reference)
6. [**this**](this)
7. [**new**](new)
8. [**apply, call, bind**](apply-call-bind)
9. [**Prototypes & Inheritance**](prototypes-inheritance)
10. [ **Modules**](modules)
11. [ **Promises**](promises)
12. [ **Callback**](callback)
13. [ **Generators**](generators)
14. [ **Async Await**](async-await)
15. [ **Higher Order Functions**](higher-order-functions)
16. [ **Thunks**](thunks)
17. [ **Arrow functions**](arrow-functions)
18. [ **ES6 Cool Methods**](es6-cool-methods)
19. [ **Mixins**](mixins)
20. [ **Advantages of ES6**](es6-advantages)
21. [ **Pure Functions**](pure-functions)
22. [ **Null, Undefined, and Undeclared**](null-undefined-undeclared)
23. [ **Creating Objects**](creating-objects)
24. [ **Design Patterns**](design-patterns)
25. [ **Functional Programming**](closures)


## 1.<a name="closures"/>**Closures**
A closure is a function that has access to its outer function scope even after the outer function has returned. This means a closure can remember and access variables and arguments of its outer function even after the function has finished.

## 2. <a name="scope"/>**Scope**
Scope in JavaScript refers to the accessibility or visibility of variables. A **lexical scope** or static scope in JavaScript refers to the accessibility of the variables, functions, and objects based on their physical location in the source code.
  1. Global Scope
  2. Function Scope
  3. Block Scope

## 3. <a name="scope-vs-closures"/>**Scope vs. Context**
**Scope** pertains to the variable access of a function when it is invoked and is unique to each invocation. **Context** is always the value of the this keyword which is a reference to the object that “owns” the currently executing code.  

## 4. <a name="encapsulation"/>**Encapsulation**
Encapsulation means information hiding. It’s about hiding as much as possible of the object’s internal parts and exposing a minimal public interface. The simplest and most elegant way to create encapsulation in JavaScript is using closures.

## 5. <a name="value-vs-reference"/>**Value vs. Reference**
Understand how objects, arrays, and functions are copied and passed into functions. Know that the reference is what’s being copied. Understand that primitives are copied and passed by copying the value.

## 6. <a name="this"/>**this**
The object that “this” refers changes every time execution context is changed.
- “this” in Global Environment
- “this” inside Functions
- “this” inside constructors
- “this” in Object Methods
- “this” in Classes

## 7. <a name="new"/>**new**
The new keyword invokes a function in a special way. Functions invoked using the new keyword are called constructor functions.
  1. Creates a new object.
  2. Sets the object’s prototype to be the prototype of the constructor function.
  3. Executes the constructor function with this as the newly created ob
  4. Returns the created object. If the constructor returns an object, this object is returned.

## 8. <a name="apply-call-bind"/>**apply, call, bind**
- Use **.bind()** when you want that function to later be called with a certain context, useful in events.
- Use **.call() (args with commas)** or **.apply() (args is array)** when you want to invoke the function immediately, with modification of the context.


## 9. <a name="prototypes-inheritance"/>**Prototypes & Inheritance**
  - **Class Inheritance**: A class is like a blueprint — a description of the object to be created. Classes inherit from classes and create subclass relationships: hierarchical class taxonomies.

  - **Prototypal Inheritance**: A prototype is a working object instance. Objects inherit directly from other objects
  > In JavaScript, prototypal inheritance is simpler & more flexible than class inheritance.

**Good to hear**: **Classes**: create tight coupling or hierarchies/taxonomies. **Prototypes**: mentions of concatenative inheritance, prototype delegation, functional inheritance, object composition.

## 10.<a name="modules"/> **Modules**
**In JavaScript, the word "modules" refers to small units of independent, reusable code.**
  1. CommonJS
  2. AMD
  3. UMD

## 11.<a name="promises"/> **Promises**
**EX: AXIOS**. A promise is an object that may produce a single value some time in the future: either a resolved value, or a reason that it’s not resolved (e.g., a network error occurred). **A promise may be in one of 3 possible states: fulfilled, rejected, or pending**. Promise users can attach callbacks to handle the fulfilled value or the reason for rejection.

## 12.<a name="callback"/> **Callback**
A callback is a function that is to be executed after another function has finished executing — hence the name 'call back'.

## 13.<a name="generators"/> **Generators**
Generators are special functions that generate values when you need them to. When you call a generator it will not execute like a normal function. It will execute to the point where it sees a yield statement and it will exit until you need a new value.

## 14.<a name="async-await"/> **Async Await**
Any JavaScript function definition can be marked with the async keyword. When a function is marked as an async function, the returned value will always be wrapped in a promise.

## 15.<a name="higher-order-functions"/> **Higher Order Functions**
Higher order functions are functions that operate on other functions, either by taking them as arguments or by returning them. In simple words, A Higher-Order function is a function that receives a function as an argument or returns the function as output.

## 16.<a name="thunks"/> **Thunks**
A thunks is a function that contains all of the context (state, functions, etc) it will need in order to carry out some sort of logic in the future.

## 17.<a name="arrow-functions"/> **Arrow functions**
Shine best with anything that requires this to be bound to the context, and not the function itself. **Not Use** in:
  1. Object methods
  2. Callback functions with dynamic context
  3. When it makes your code less readable

## 18.<a name="es6-cool-methods"/> **ES6 Cool Methods**
- Block Scope
- Lexical “this” (via Arrow Functions) is a feature that forces the variable “this” to always point to the object where it is physically located within.
- Dealing With “arguments”
- Classes

## 19.<a name="mixins"/> **Mixins**
Mixin is a way properties are added to objects without using inheritance

## 20.<a name="es6-advantages"/> **Advantages of ES6**
- Spread operator
- for…of iterator
- includes()
- some()
- every()
- filter()
- map()
- reduce()

## 21.<a name="pure-functions"/> **Pure Functions**
- A pure function is a function which:
- Given the same input, will always return the same output.
Produces no side effects.

## 22.<a name="null-undefined-undeclared"/> **Null, Undefined, and Undeclared**
- **undefined** is a variable that has been declared but no value exists and is a type of itself ‘undefined’.
- **null** is a value of a variable and is a type of object.
- **undeclared** variables is a variable that has been declared without ‘var’, 'let, or 'const' keywords.

## 23.<a name="creating-objects"/> **Creating Objects**
  1. Function based
  2. Object Literal
  3. From Object using new keyword
  4. Using Object.create

## 24.<a name="design-patterns"/> **Design Patterns**
**Creational**
- Factory Method
  - Simple factory simply generates an instance for client without exposing any instantiation logic to the client
- Abstract Factory
  - A factory of factories a factory that groups the individual but related/dependent factories together without specifying their concrete classes.  
- Builder
  - Allows you to create different flavors of an object while avoiding constructor pollution. Useful when there could be several flavors of an object. Or when there are a lot of steps involved in creation of an object.
- Singleton
  - Ensures that only one object of a particular class is ever created.

**Structural**
- Adapter
  - Adapter pattern lets you wrap an otherwise incompatible object in an adapter to make it compatible with another class.
- Bridge
  - Bridge pattern is about preferring composition over inheritance. Implementation details are pushed from a hierarchy to another object with a separate hierarchy.
- Composite
  - Composite pattern lets clients to treat the individual objects in a uniform manner.
- Decorator
  - Decorator pattern lets you dynamically change the behavior of an object at run time by wrapping them in an object of a decorator class.
- Facade
  - Facade pattern provides a simplified interface to a complex subsystem.
- Flyweight
  - It is used to minimize memory usage or computational expenses by sharing as much as possible with similar objects.
- Proxy
  - Using the proxy pattern, a class represents the functionality of another class.

**Behavioral**
- Chain of Responsibility
  - It helps building a chain of objects. Request enters from one end and keeps going from object to object till it finds the suitable handler.

- Command
  - Allows you to encapsulate actions in objects. The key idea behind this pattern is to provide the means to decouple client from receiver.

- Iterator
  - It presents a way to access the elements of an object without exposing the underlying presentation.

- Mediator
  - Mediator pattern adds a third party object (called mediator) to control the interaction between two objects (called colleagues). It helps reduce the coupling between the classes communicating with each other. Because now they don't need to have the knowledge of each other's implementation.
- Memento
  - Memento pattern is about capturing and storing the current state of an object in a manner that it can be restored later on in a smooth manner.
- Observer
  - Defines a dependency between objects so that whenever an object changes its state, all its dependents are notified.
- Visitor
  - Visitor pattern let's you add further operations to objects without having to modify them.
- Strategy
  - Strategy pattern allows you to switch the algorithm or strategy based upon the situation.
- State
  - It lets you change the behavior of a class when the state changes.
- Template Method
  - Template method defines the skeleton of how certain algorithm could be performed but defers the implementation of those steps to the children classes.

## 25.<a name="closures"/> **Functional Programming**
**Functional programming** (often abbreviated FP) is the process of building software by composing pure functions, avoiding shared state, mutable data, and side-effects. Functional programming is declarative rather than imperative, and application state flows through pure functions. Contrast with object oriented programming, where application state is usually shared and colocated with methods in objects.
