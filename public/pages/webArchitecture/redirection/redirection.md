# Redirection

Firstly, it is true that redirection can be done, from both the server-side as well as from the client.

Although we haven't gone over this topic in depth, just yet.
Best practice when it comes to redirection, is in the validation of an authentication variable/function.

But before we're able to do this, I'll go through one way with CSR and one with SSR.

## CSR
Client-Side Redirection is when JavaScript makes it so that you're redirected, without any need for server intervention.

`anchor tag` (the easiest):
```html
<p>
  <a href="/node-and-packages/npm">here</a>
</p>
```


`window.location` (not as inclusive toward people with accessibility needs):
```js
if (!checkAuthentication()) {
  window.location.href = "/login.html";
} else {
  document.getElementById("welcome-message").innerText = "Welcome dear user!";
}
```

`meta refresh tag` (might as well be deprecated):

I always located in the head-tag, and is able to redirect after a specified amount of time (in this case; 5 seconds).
```html
<head>
  <title>Meta Refresh Redirect</title>
  <meta http-equiv="refresh" content="5;url=https://www.welcome.com">
</head>
```

The fact that the `meta`-tag is still supported in modern browsers, remains a mystery till this day.

You have a limited amount of control, when utilizing this tag, and your site might suffer penalties in the ranking in search results, as SO's could deem the site to contain content of poor quality.




## SSR
On a fundamental level, one could redirect as easily as:
```js
app.get("/", (req, res) => {
    return res.redirect("/welcomePage");            
});
```

However, there is another way to check whether a request, has the relevant permissions.
Through query strings.

```js
app.get("/api/door", (req, res) => {
    if (req.query.passport === "comeIn") {
        return res.redirect("/api/house");        
    }
    res.send({ message: "You are not allowed inside of the house. What's the secret pass code?"});    
});
```

It is here important to note that this isn't a secure way to accomplish this.

>The reason you ask!

Providing the actual password in the URL leave you vulnerable to various types of malicious attacks.

