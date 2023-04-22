# NPM

## Package Manager
To understand what NPM is, first we must understand what a package manager is.

A package manager is software that simplifies the process of installing, uninstalling and updating packages/dependencies.
What makes the idea of a package manager so appealing is that it is able to manage hundreds of packages in a consistent manner.

So we no longer have to worry about manually detecting software left over from a (now uninstalled) application.


## NPM
NPM is a package manager.

Specifically it was created to manage packages in the language of JavaScript, and has since become the default package manager for `node.js`, meaning that it is bundled with node initially. This certainly has helped solidify its position as the universal package manager for node.

Additionally, you'd have a tough time getting around using `npm` altogether, despite the switch to another package manager such as `Yarn` or `pnpm`.

The reason for this has to do with the far reaching `npm registry`, which you'd still have to rely upon for installation of various packages.


## Using NPM
Now before we do anything in regards to npm in the command-line prompt, we have to create our <a href="/node-and-packages/package.json-and-node_modules">package.json</a>, as this is required in order to proceed (if `npm init` is not used).


### The initial setup
The last thing required before proceeding with either the manual or automatic initialization, is to create the `app.js` file (also at the root directory).
We do this now, because we want to have the primary entry point (`main`) to the program defined correctly the first time.


#### 1. manual initialization
This first method is manual in the sense that we're writing directly into the `package.json` file.

This is in no way efficient, except if a former file was just copied (which we of course never do ourselves).





At this point we've prepared the `package.json` as well as the above mentioned `app.js` file, and we're ready to install our first package.

```console
$ npm i express
```


#### 2. npm init


```console
$ npm init -y
```
* **npm**       - Command-line interface for the `Node Package Manager`
* **init**      - Subcommand for creating a package.json file at the current directory
* **-y**        - An optional flag that let's you default all the initialization related prompts


