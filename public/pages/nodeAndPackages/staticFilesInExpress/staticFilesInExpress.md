# Static files in express

## Middleware
Before taking a look at how we define static files in express, we must understand the concept of middleware.

Without delving into too much detail, middleware functions are able to access the request object (req), the response object (res) and the next middleware function in the cycle (next).

## express.static()
Although it might not look typical, the following is a built-in middleware function.

```javascript
app.use(express.static("public"));
```
It's important to note that the returned middleware function handles the req, res, and next arguments internally, which is why you don't see them explicitly in this case.

Here we're stating that our application (running express), should serve the files, located in the `public` directory statically.
This means that they won't be altered or in any way modified by the server. They will be sent directly to the client.
