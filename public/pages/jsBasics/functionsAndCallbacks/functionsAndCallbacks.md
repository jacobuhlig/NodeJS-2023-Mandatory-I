# Functions and Callbacks

## What is a callback function?

The fact that JavaScript is an synchronous language, means that it is the ideal solution for rendering on the web.
The reason has to do with our innate ability to continuously make mistakes.

As programmers of the web, it will once in a blue moon occur that some of the code we write, isn't exactly ideal.

If JavaScript refused to proceed after an initial error, that would leave the internet a very unreliable and brittle place.

Luckily, of course, JavaScript is synchronous in nature, and it is only when we require the functionality of processes occurring in a specified sequence, that we grab for the tools, able to make that a reality. One such type of function enables us to do just that.


A callback function is a function that is passed on as an argument to another function and is executed after the completion of the other function.

## Callback function syntax

There are several ways to write callback functions in JavaScript. Here, three common syntaxes will be discussed: `anonymous functions`, `named functions`, and `arrow functions`.
Now, before diving into the gist of it. The most optimal way of understanding these different types of syntaxes, is to show their individual implementation on the same function.

```javascript
function sayHello(firstname, callback) {
  console.log(`Hello ${firstname}`);
  callback();
});
```

### Anonymous functions

An anonymous function is a function without a name. You can declare an anonymous function directly as an argument in another function.

#### Example:

```javascript
sayHello(firstname, function() {
  console.log("The callback function");
});
```

### Named functions

A named function is a regular function with a name. You can define the named function first and then pass its name as an argument to another function.

#### Example:

```javascript
function callbackFunction() {
  console.log("The callback function");
}

sayHello(firstname, callbackFunction);
```

### Arrow functions

Arrow functions, introduced in ES6, offer a more concise syntax for writing callback functions.
While `arrow functions` can be used using the surrounding scope (due to the missing `this` keyword), it isn't a viable solution for the construction of a new object (for the same reason).
Meaning that an arrow function can't be instantiated.

#### Example:

```javascript
sayHello(firstname, () => {
  console.log("The callback function");
});
```


## In summation

While the naming of a function, is generally considered to be best practice, there are no absolute truths in this world.

When creating objects, an unnamed function might be used to give an attribute an value. Now if the naming of this function doesn't provide a better understanding of the code, then it could be argued that it isn't necessary.

In much the same way, arrow functions aren't always the best choice, despite their seemingly endless use cases.

As the original purpose of these syntaxes, were to make things more clear, we should not forget to keep asking what the best tool for the job might be, all things considered.
 