# package.json and node_modules


## package.json
The very first thing required in order to initialize a project (or install express) is creating a new `package.json` at the root directory of the project in question.

It is then in this very file that the following is to be written.

```json
{}
```

This let's npm know that there is a file by the name `package.json`, and that the file is indeed a json file (the required format), hence the "{}" object.


## node_modules
Node modules is a directory that is created/recreated when the command `npm i`, is used.

It is herein that all project relevant dependencies are located.

Additionally, as the size of the project increases, the `node_modules` directory increases as well.

Therefore it is commonplace, not to include `node_modules` in version-control (Git).
