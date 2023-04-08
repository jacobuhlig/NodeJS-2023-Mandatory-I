# Date and Time

Working with date and time is notorious for being universally difficult, across languages.
JavaScript has a few built-in objects that make it easier to work with dates and times.
In this section, we'll look at the `Date` object and some of its methods.


## An example

In the following example, we'll call the endpoint `/time/time`, which returns the `Date` in three different ways.

```js
app.get("/time/time", (req, res) => {    
    res.send({ 
        timeUTC: new Date(),
        timeLocal: Date(),
        unixTimestamp: Date.now()        
    }); 
});
```

The following is what is then returned:

```json
{
    "timeUTC": "2023-04-07T12:21:24.363Z",
    "timeLocal": "Fri Apr 07 2023 14:21:24 GMT+0200 (Central European Summer Time)",
    "unixTimestamp": 1680870084363
}
```


## Some thoughts

Not accounting for the order in which these are represented, the `unixTimestamp` certainly has some benefits,
in that it is ideal when working with time based calculations.

Left are the `timeUTC` and `timeLocal`.

Now while `timeLocal` looks good, and at times can seem like the optimal choice, it is more than likely not.
The overall difference between the two is that `timeLocal` returns a new Date object, while `timeUTC` returns a string.

The latter isn't easily manipulated, whereas the former is.

### Example below

```js
new Date().toLocaleDateString("da-dk", { weekday: "long" })
```

The same outcome is achieved, but this is easily changed, if needed, therein making it more flexible.



## A more practical example

Let's say I wanted to return the day of the week, as a string, from the endpoint `/time/day`.

```js
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

app.get("/time/day", (req, res) => {
    res.send({ data: days[new Date().getDay()] });
});
```

Here, we're utilizing the returned index of the getDay() method, to return the day of the week, as a string.

