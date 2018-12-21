Allows a collection of objects to watch an object and be
notified of changed.

Allows for loosely coupled system
One object is the focal point
Group of objects watch for changes

Task Object to implement:
1). Logging // Observers
2). Notification // Observers
3). Auditing // Observers

Task service let's other services know what's going on

Task gets:
OnbserverList{}
Notify()

When something changes on task, notify is going to send message to the services.
Execute a function basically...
Executes the callback from the observer to notify
