# Functions and Callbacks

## What is a callback function?

A callback function is a function that is passed as an argument to another function and is executed after the completion of the other function. This can be helpful when dealing with asynchronous tasks or when you want to control the order of execution of certain functions.

## Callback function syntax

There are several ways to write callback functions in JavaScript. Here, we will discuss three common syntaxes: anonymous functions, named functions, and arrow functions.

### Anonymous functions

An anonymous function is a function without a name. You can declare an anonymous function directly as an argument in another function.

#### Example:

```javascript
setTimeout(function() {
  console.log("Execute later after 1 second");
}, 1000);
```

### Named functions

A named function is a regular function with a name. You can define the named function first and then pass its name as an argument to another function.

#### Example:

```javascript
function executeLater() {
  console.log("Execute later after 1 second");
}

setTimeout(executeLater, 1000);
```

### Arrow functions

Arrow functions, introduced in ES6, offer a more concise syntax for writing callback functions. They are particularly useful when dealing with this keyword as they do not have their own this context.

#### Example:

```javascript
setTimeout(() => {
  console.log("Execute later after 1 second");
}, 1000);
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