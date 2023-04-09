# Functions and Callbacks

## What is a callback function?

The fact that JavaScript is an synchronous language, means that it is the ideal solution for rendering on the web.
The reason has to do with our innate ability to continuously make mistakes.

As programmers of the web, it will once in a blue moon occur that some of the code we write, isn't exactly ideal.

If JavaScript refused to proceed after an initial error, that would leave the internet a very unreliable and brittle place.

Luckily, of course, JavaScript is synchronous in nature, and it is only when we require the functionality of processes occurring in a specified sequence, that we grab for the tools, able to make that a reality. One such type of function enables us to do just that.


A callback function is a function that is passed as an argument to another function and is executed after the completion of the other function.

## Callback function syntax

There are several ways to write callback functions in JavaScript. Here, we will discuss three common syntaxes: anonymous functions, named functions, and arrow functions.

### Anonymous functions

An anonymous function is a function without a name. You can declare an anonymous function directly as an argument in another function.

#### Example:

```javascript
function sayHello(firstname, callback) {
  console.log(`Hello ${firstname}`);
  callback();
});

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

Arrow functions, introduced in ES6, offer a more concise syntax for writing callback functions. They are particularly useful when dealing with this keyword as they do not have their own this context.

#### Example:

```javascript
sayHello(firstname, () => {
  console.log("The callback function");
});
```


## Using callback functions

Now let's dive into a practical example of using a callback function. Suppose we have an array of numbers, and we want to apply a specific function to each number in the array. We can use a higher-order function like Array.prototype.map() that accepts a callback function as an argument.

#### Example:

```javascript
const numbers = [1, 2, 3, 4, 5];

// Using an anonymous function
const doubledNumbers = numbers.map(function(number) {
  return number * 2;
});
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// Using a named function
function double(number) {
  return number * 2;
}
const doubledNumbers2 = numbers.map(double);
console.log(doubledNumbers2); // Output: [2, 4, 6, 8, 10]

// Using an arrow function
const doubledNumbers3 = numbers.map(number => number * 2);
console.log(doubledNumbers3); // Output: [2, 4, 6, 8, 10]
```

As shown above, all three syntaxes can be used to write callback functions in JavaScript. Choose the one that best suits your needs and code readability.