# Redirection

Firstly, it is true that redirection can be done, from both the server-side as well as from the client.

Although we haven't gone over this topic in depth, just yet.
Best practice when it comes to redirection, is in the validation of an authentication variable/function.

But before we're able to do this, I'll go through one way with CSR and one with SSR.

## CSR
With various different approaches to the redirection itself, it would be tiresome to go through them all here.

Hence, is a single demonstration (`window.location.href`):
```js
if (!checkAuthentication()) {
  window.location.href = "/login.html";
} else {
  document.getElementById("welcome-message").innerText = "Welcome dear user!";
}
```


## SSR
On a fundamental level, one could redirect as easy as:
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

