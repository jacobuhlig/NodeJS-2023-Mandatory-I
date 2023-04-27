# Import / Export

Import/export were introduced with the new ES6 modules, to improve organizing and sharing code.

The main difference between import/export (ES6 modules) and require (CommonJS), is that the former is resolved at compile-time, allowing for more in-depth analysis of the code (without having to execute it), and the latter is resolved at run-time, making further analyzing difficult.


## Import

As with the initialization of `express`, sometimes the entire module is required.
In these cases we import the `default export` of the module in question.
This is achieved by using the following syntax.

```javascript
import subjects from "./util/subjects/subjects.js";
const topicsNavbar = subjects.getSubjects();
```

Now it isn't always necessary for the entire module to be imported, so as to eliminate unnecessarily up-taken storage.

```javascript
import { functionName } from 'module'
```

Applying the syntax above on the earlier example, we're able to only import the function `getSubjects`.

```javascript
import {getSubjects} from "./util/subjects/subjects.js";
const topicsNavbar = getSubjects();
```

A final note.

When importing let's say several `routers`, they might have the same `default export` name, which result in issues, being that they're not allowed to be named the same (imported into the same file).

Conveniently, there is a solution.

```javascript
import { router as jsBasicsRouter } from "./util/routers/jsBasics.js";
app.use("/js-basics", jsBasicsRouter);
```

The `as` keyword is used to give the import a new name with the context of the file.


## Export

Now in order to import, there has to be something for us to export.

To allow for the individual export of a function, `export` is simply used.

```javascript
export function getSubjects() {
    return subjectsData.subjects;
}
```

However, when the entire module is called for, there following syntax is to be used.

```javascript
export default {
    getSubjects,
    getJSBasics,
    getWebArchitecture,
    getNodeAndPackages,
    getSecurityAndPerformance
};
```



