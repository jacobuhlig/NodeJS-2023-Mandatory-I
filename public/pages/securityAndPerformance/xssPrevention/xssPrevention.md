# XSS-Prevention

Cross-Site Scripting, or XSS for short (sort of), is a way for an attacker to inject malicious code, into a web application.

As a result of such attacks, personal information of users might be compromised or a session could be hijacked by the hacker.

Before we can protect ourselves against future attacks though, we must understand the different ways in which the attacker goes about injecting the code.

1. Sanitize user input by validating it and correctly encoding it pre use.
2. Encode user generated content to be displayed.
3. Only use HTTP-cookies, so as to avoid client-side JavaScript from accessing the cookie values.
4. Keep software up to date (minimizing the occurrence of potentially avoidable security flaws).


## Sanitize with NPM
### escape-html
One way to do this, is with `escape-html`, which is a light-weight npm package, that escapes a limited number of HTML characters into their corresponding HTML entities.

```javascript
import escapeHTML from 'escape-html';

const input = "<script>alert(`You've been hacked`);</script>";
const sanitizedInput = escapeHTML(input);

console.log(sanitizedInput);
// Output: &lt;script&gt;alert(`You&#x27;ve been hacked`);&lt;/script&gt;
```


### xss
Another way to do this, is with `xss`, which is also an npm package, while taking up more storage, it correspondingly contains more functionality as well.
Using the example for `escape-html`, we're getting the exact same result, but if we increased the complexity of the injection statement, what would happen?

```javascript
import xss from "xss";

const input = "<script>alert(`You've been hacked`);</script>";
const sanitizedInput = xss(input);

console.log(sanitizedInput);
// Output: &lt;script&gt;alert(`You&#x27;ve been hacked`);&lt;/script&gt;
```

### escape-html vs. xss
In the following example, we're attempting to inject an onerror, which is a function that is run, in case an img isn't loaded properly.
As this could be used maliciously, it should ideally be excluded altogether.

```javascript
// Import the xss and escape-html packages
import xss from 'xss';
import escapeHTML from 'escape-html';

const input = '<img src="image.jpg" onerror="alert(\'XSS Attack!\');" />';

// Sanitize user input using xss
const sanitizedInputXss = xss(input);
console.log('Sanitized with xss:', sanitizedInputXss);
// Output: <img src="image.jpg" />

// Sanitize user input using escape-html
const sanitizedInputEscapeHtml = escapeHTML(input);
console.log('Sanitized with escape-html:', sanitizedInputEscapeHtml);
// Output: &lt;img src=&quot;image.jpg&quot; onerror=&quot;alert('XSS Attack!');&quot; /&gt;
```

As is evident, the output for `xss` excluded the onerror, while the `escape-html` didn't.

Now this doesn't mean that `xss` is always the better option, as the requirements might not call for anything more complicated than what `escape-html` offers.
If that is the case, then the larger package (xss) would just take up unnecessarily used up space.




