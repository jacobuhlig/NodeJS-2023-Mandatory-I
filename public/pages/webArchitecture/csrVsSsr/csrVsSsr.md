# CSR vs. SSR

Client-Side Rendering and Server-side Rendering (CSR vs. SSR), are two different ways to render web content.
What it really comes down to, is the way in which HTML content is rendered.

>Which is the better option?

## Client-Side Rendering
With CSR, the HTML content is rendered on the side of the client.

### Example of CSR
```javascript
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});
```
The reason for this being that we're telling the client where to look for it, in the public directory, which has already been made accessible from the client.

```javascript
app.use(express.static("public"));
```


## Server-Side Rendering
With SSR, the HTML content is rendered on the side of the server.
### Example of SSR
```javascript
app.get("/", (req, res) => {
  res.send(frontpagePage)
});
```
Now how we got to the rendered page, all happens behind the scenes (on the server - in various ways).

But what is essential here, is that we're not referencing a location, from where the client itself can get the page, but rather, we're sending the actual already rendered file.


## Some thoughts
As with everything, there are both benefits and disadvantages in using both rendering techniques.

The reason that CSR is an obvious choice for Single-Page Applications (SPA's), is because that it is less strenuous on the server side.
Another reason that CSR is used on SPA's is because the size of these applications allows for the entirety to be loaded in the `public` directory.

With this method, There is an initial load time, but subsequent loading will dramatically decrease, if not seize, altogether (based on the type of HTTP methods used)

Whereas with larger scale systems, this would not be a good solution, due to the difference in internet access and individual machine computing power.



