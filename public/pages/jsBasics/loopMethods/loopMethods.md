# Loop Array Methods

As was touched upon previous article, we have to make sure that the right tool is used for a given task.
In the case of loop array methods, the five most essential will be reviewed. Hopefully achieving a sense of when to use them as well.

Broadly speaking, loop array methods manipulate arrays in different ways, based on the argument provided to the given method.
In many cases, this results in the code being more readable, as we, rather than telling JavaScript how we want something, we just say what we want, and like magic, the request is granted, with minimal effort on the part of the developer.

One thing we do have to know though, is how to use these methods, so here we go.

## Array for examples

```js
const numbers = [1, 2, 3, 4, 5];
```

## 1. forEach()

The `forEach` method executes a method, provided in the argument, on every element of the array in question (numbers).

### Example

```js
const doubledNumbers = numbers.map((number) => {
  return number * 2;
});

console.log(doubledNumbers); // [2, 4, 6, 8, 10]
```

## 2. map()

`map` is a loop method that creates a new array by applying a function to each element of the original array.

### Example

```js
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((number) => {
  return number * 2;
});

console.log(doubledNumbers); // [2, 4, 6, 8, 10]
```

## 3. filter()

`filter` is a loop method that creates a new array with all elements that pass the test implemented by the provided function.

### Example

```js
const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter((number) => {
```


## 3. find()

`find` is a loop method that creates a new array with all elements that pass the test implemented by the provided function.

### Example

```js
const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter((number) => {
```



## 3. findIndex()

`findIndex` is a loop method that creates a new array with all elements that pass the test implemented by the provided function.

### Example

```js
const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter((number) => {
```



