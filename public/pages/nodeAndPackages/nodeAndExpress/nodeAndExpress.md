# node.js and express

## node.js
Node.js is a runtime environment, which allows us to run JavaScript code on the side of the server.

And it is on this basis, that we're able to utilize some tools that make development much easier.

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


### Further use of express

At this point we're now able to begin setting up our first project, which actually doesn't require all that much.

```javascript
app.METHOD(PATH, HANDLER)
```


(Remember to divulge that its implementation will be explained in-depth later in the "Node and Packages" section.)
(   Side note - should this be before or after the "package.json and node_modules" sub-section, I don't currently know.)