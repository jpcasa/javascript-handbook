## Asynchronous Javascript

Single Threaded. Can only execute one piece of code at a time...
Event Loop. Queue where the Jobs line up.
Non-blocking (Callbacks don't interrupt process).
Run to completion (If it blocks, it will no continue until completion).
Cooperative Concurrency (The code waiting in line plays nice). Web Workers to start processes in new thread.
Little Programs (Which parts will execute at different times).
Not always async (Button click fired synchronously).

### Callbacks
Is a piece of code that we pass along to a function that we want to invoke
when that process is done. We return a function from a function.
