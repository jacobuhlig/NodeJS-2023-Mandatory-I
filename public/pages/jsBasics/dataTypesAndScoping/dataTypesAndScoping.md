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

f


