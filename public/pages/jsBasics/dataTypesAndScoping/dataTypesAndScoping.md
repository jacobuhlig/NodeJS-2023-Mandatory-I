# Data Types and Scoping

In the attempt at sorting the topics covered throughout the semester, into manageable categories, we've come to realize that `Data Types` and `Scoping`, are essential in understanding the fundamentals of JavaScript. 

We therefore deemed it appropriate to start out with this.

## Data Types

In total there are 8 data types in JavaScript.

### Primitive Data Types
The following 5, are the primitive data types:

<table>
  <tr>
    <th><h4>Example: Strings</h4></th>
    <th><h4>Example: Numbers</h4></th>
    <th><h4>Example: Booleans</h4></th>
  </tr>
  <tr>
    <td>

```javascript
const message = "Hello, world!";
```
  </td>
    <td>
      
```javascript
const number = 42;
```
  </td>
    <td>
      
```javascript
const isTrue = true;
```
  </td>
  </tr>
</table>


<table>
  <tr>
    <th><h4>Example: Null</h4></th>
    <th><h4>Example: Undefined</h4></th>
  </tr>
  <tr>
    <td>
      
```javascript
const isNull = null;
```
  </td>
    <td>
      
```javascript
const isUndefined = undefined;
```
  </td>
  </tr>
</table>



### Non-Primitive/Complex Data Types

The following 3, are the non-primitive/complex data types:


<table>
  <tr>
    <th><h4>Example: Objects</h4></th>
    <th><h4>Example: Arrays</h4></th>
    <th><h4>Example: Functions</h4></th>
  </tr>
  <tr>
    <td>

```javascript
      const person = {
        name: "John",
        age: 42
      };
```
  </td>
    <td>
      
```javascript
const numbers = [1, 2, 3, 4, 5];
```
  </td>
    <td>
      
```javascript
const sayHello = function() {
    console.log("Hello, world!");
};
```
  </td>
  </tr>
</table>


## Scoping

Even before creating variables though, we need to understand the concept of `Scoping`.
Scoping defines the degree to which a variable is accessible within a program.

In JavaScript, there are two types of scopes (actually three):

1. Local Scope
2. Global Scope
3. (Block Scope)

### Local Scope

Local scope, otherwise known as function scope, means that the availability of a variable defined within said parameter, is limited to that parameter.
This is the reason that the variable `message` is not accessible outside of the function `sayHello()` (example below).

```javascript
function sayHello() {
  const message = "Hello, world!";
}
console.log(message); // ReferenceError: message is not defined
```


### Global Scope

Global scope is then when a variable is defined outside of a function, and is therefore accessible throughout the entire program, hence the name `global`.
Let's take the example from above, and move the variable `message` outside of the function `sayHello()`.
Just like so:

```javascript
const message = "Hello, world!";
```

This variable would now be completely accessible throughout the entire program, including all functions.



### Block Scope

Now block scope, is a relatively new addition, as it is only available in ES6 and above.

First of all, what is a block?
Yes, you guessed it, a block is a piece of code that is enclosed within two curly braces `{}`.

We've actually been using block scope all along, without even realizing it, as both `let` (mutable) and `const` (immutable) are block scoped.


Lastly, and without further detailing, `var` is not block scoped.



