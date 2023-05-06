# Fetch

Fetch is built into modern day web browsers, and is quite simply just an easy way to do one of two things.
1. Ask for information
2. Send information (data)

Fetch really just makes dealing with HTTP requests more simple. 

Firstly, the HTTP request is made (containing however much information necessary).
Secondly, the server, having just received the request, starts collecting the data, or processing it (depending on the type of HTTP-method in question).
Finally, once everything has been collected, or processed, an HTTP-response is sent back to the client, containing a status code (hopefully 200 i.e. success), as well as headers and of course the data collected (could be HTML, CSS, and JavaScript files).

As I've had trouble personally, really grasping the concept, I thought that the following metaphor, could perhaps clarify the process.

1. **Client** making a fetch request (**dog owner** calling out command to dog)
2. **The data** we want to get (**dog's toy**)
3. **The dog** (**fetch API** used to retrieve the data)

By throwing the toy, we're making a request to the server.
Our dog runs to get the toy (fetch, performing the request).
To adhere to the metaphor, our dog **finding the toy**, is like the `promise`.
The reason being that the toy can be either

**pending** (dog still looking for it).

**fulfilled** (dog found the toy, and brought it back)

**rejected** (dog couldn't find the toy)

Now in case the dog brought back the toy (fulfilled), we can then choose to do something with the toy (represented with the `.then` - method).

In case our dog wasn't able to find the toy, we'd have to handle the outcome somehow (error handling).


## Promise example
In the following example, we're using the fetch method, to retrieve a single object from the todos-api from jsonplaceholder.
When/if the promise is resolved (returns fulfilled), `.then` a new promise can be made (chaining several promises dependent on the resolution of the one previous.)

```javascript
app.get("/todo", (req, res) => {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())
    .then(todo => {
      res.send(todo);
    })
    .catch(error => {
      console.error("Error fetching todo:", error);
      res.status(500).send("Error fetching todo");
    });
});
```

In the above example, the HTTP-method is implicit, as nothing else is specified.
But let's say that we wanted to add something to the server, we could use an POST HTTP-method.

```javascript
fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST", // Set the HTTP method to POST
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({todo: "Go to the park."}), // Convert the newTodo object to a JSON string
  })
    .then((response) => response.json())...
```



## Async/Await example
Now while you'd think that the `.then` method and the `await` keyword, are essentially the same thing.
Well, you'd be right... at least from a functional stand point.

While there is an implicit return, after each promise (.then), when dealing with the traditional promises, this is not clear in the syntax necessarily.
However, when it comes to async/await, it is possible to save the returned promise in a variable, allowing for seemingly more readable code.

```javascript
app.get("/todo", async (req, res) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const todo = await response.json();
    res.send(todo);
  } catch (error) {
    console.error("Error fetching todo:", error);
    res.status(500).send("Error fetching todo");
  }
});
```


