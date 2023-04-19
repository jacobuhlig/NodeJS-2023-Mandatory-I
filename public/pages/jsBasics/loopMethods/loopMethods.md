# Loop Array Methods

As was touched upon in the previous article, we have to make sure that the right tool is used for a given task.
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
numbers.forEach((number) => {
  console.log(number * 2);
});

// [2, 4, 6, 8, 10]
```

## 2. map()

The `map` function is a looping technique that generates a new array by executing a specified function on each element within the initial array.

### Example

```js
const doubledNumbers = numbers.map((number) => {
  return number * 2;
});

console.log(doubledNumbers); // [2, 4, 6, 8, 10]
```

## 3. filter()

The `filter` loop method generates a new array containing only the elements that meet the criteria specified by the given function.

### Example

```js
const evenNumbers = numbers.filter((number) => {
  return number % 2 === 0;
});
console.log(evenNumbers); // [2, 4]
```


## 4. find()

`find` is a loop method that returns the first element, that meet a specific criteria.

If no elements meet the condition, then it returns `undefined`.

### Example

```js
const firstEvenNumber = numbers.find((number) => {
  return number % 2 === 0;
});

console.log(firstEvenNumber); // 2
```



## 5. findIndex()

`findIndex` is like `find`, in that it finds the first element, and in this case, returns the index, as opposed to the element itself.

If no elements meet the condition, then it returns `-1`.

### Example

```js
const firstEvenNumberIndex = numbers.findIndex((number) => {
  return number % 2 === 0;
});

console.log(firstEvenNumberIndex); // 1 (which is the index of the second element of the array (which is `2`))
```



