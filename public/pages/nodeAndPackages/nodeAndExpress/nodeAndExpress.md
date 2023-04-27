# node.js and express

## node.js
Node.js is a runtime environment, which allows us to run JavaScript code on the side of the server.

And it is on this basis, that we're able to utilize some tools that make development much easier.

### How to run node
In the case of `app.js` being the program's main entrypoint.

```console
$ node app.js
```

### nodemon
Although there might not be anything wrong with using `node` again and again, we have to continuously run the command, every time a change has been made, so as to view the result of the change.

Fret no more, as the solution is no more complicated than that of `nodemon`.

```console
$ nodemon app.js
```

With the above command, every time a change is made to the files (the type of file that is changed, can also be defined in the command, or in a separate file called `nodemon.json`).


## express
One such tool is the framework, `express`.

express is a web application framework, that makes the process of creating a web application much easier.

Now before proceeding with the importing of `express` and so forth, we would be remiss if we let you think that the installation was forgotten.
Fear not, as it will be further detailed <a href="/node-and-packages/npm">here</a>.


### Import of express

```javascript
const express = require("express"); // formerly the standard, but was replaced by
import express from 'express';      // import/export with ES6 (which is the current standard)
```

After the initial import has been made, we instantiate `express`.

```javascript
const app = express();              // 'app' is universally considered to be the standard choice for its instance.
```

Deeper look into <a href="/node-and-packages/import-export">import/export</a>


### Further use of express

At this point we're now able to begin setting up our first project, which actually doesn't require all that much.

Now the first thing we'd want to do is tell express where to locate our <a href="/node-and-packages/static-files-in-express">static files</a> (files sent to the client - unmodified).

It is then after this that we <a href="/node-and-packages/import-export">import</a> any relevant resources, upon which the rendering of a given page relies.

The process of rendering the page, is further detailed under the `Security and Performance` section.

After the individual pages are rendered fully, we're able to send back that same page when a relevant endpoint is reached by the user of the client.

```javascript
app.METHOD(path, callback)
```

As the use of `express` is constructed as show above, the same approach is taken below.

```javascript
app.get("/", (req, res) => {
  res.send(frontpagePage)
});
```

Using `GET` we're defining the method, followed by the endpoint (path), and a callback function, returning the frontpagePage.
<br></br>

___
<br>

Lastly, in order to even attempt the reaching of the above endpoint, the application has to be running on a server.

We set this up with the following syntax.

```javascript
const PORT = 8080;
app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  }
  console.log("The server is running on port", PORT);
});
```

When we run the application using `node`, the console message will display "The server is running on port 8080". That is, only if no error were encountered up until that point.


