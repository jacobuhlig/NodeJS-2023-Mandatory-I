# NPM

## Package Manager
As NPM is a package manager, we must first understand what that is.

A package manager is software that simplifies the process of installing, uninstalling and updating packages/dependencies.
What makes the idea of a package manager so appealing is that it is able to manage hundreds of packages in a consistent manner.

So for instance, we now no longer have to worry about manually detecting software left over from a (now uninstalled) application and delete it ourselves, as this is now taken care of by the package manager (which in this case is NPM).


## NPM
NPM was specifically created to manage packages in the language of JavaScript, and has since become the default package manager for `node.js`, meaning that it is bundled with the node installer.
This certainly has helped solidify its position as the universal package manager for node.

Additionally, you'd have a tough time getting around using `npm` altogether, despite the switch to another package manager such as `Yarn` or `pnpm`.

The reason for this has to do with the far reaching `npm registry`, which you'd still have to rely upon for installation of various packages.


## Initializing our project
Before getting started with `NPM`, we must first choose which way to initialize our project.

There is the manual or the automatic initialization, both of which require one final file creation, in order to proceed.

It is the `app.js` file which is to be created at the root directory of the project in question.

We do this now, because we want to have the primary entry point (`main`) to the program defined before the initialization (only really relevant for the automatic process).


### 1. Manual Initialization
This first method is manual in the sense that we're creating and writing directly into the <a href="/node-and-packages/package.json-and-node_modules">package.json</a> file (please click package.json).

We do have to add a few lines to the file, but only the following are strictly necessary for our purposes.

```json
{
  "type": "module",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  }
}
```

The `json` above is technically enough to start a project, but it is certainly not recommended to leave out `name`, `version`, `author` and `license`.
The reason being that these all help with Search Engine Optimization (SEO), as well as it future proofs the project, in case you'd wish to share the code some day (e.i. the licensing).


### 2. Automatic Initialization
There are two ways to do automatic initialization.
They're both easy, but the first one takes a little longer to setup, compared to the second.

#### First method

```console
$ npm init
```
* **npm**       - Command-line interface for the `Node Package Manager`
* **init**      - Subcommand for creating a package.json file at the current directory

When this command is used, we will continuously be prompted for input, in order to provide the necessary information to setup the finalized `package.json`.

An example of how such a file could look, can be found below.

```json
{
    "name": "mandatory_i-mac",
    "version": "1.0.0",
    "description": "An application that seeks to introduce you to the wondrous world behind the creation of a full-stack NodeJS web-application.",
    "main": "app.js",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    "repository": {
        "type": "git",
        "url": "git+https://github.com/jacobuhlig/NodeJS-2023-Mandatory-I.git"
    },
    "keywords": [
        "NodeJS",
        "learning"
    ],
    "author": "Jacob Uhlig",
    "license": "MIT"
}
```

The above `package.json` is generated at the root level.


#### Second method

```console
$ npm init -y
```
* **-y**        - An optional flag that let's you default all the initialization related prompts

```json
{
    "name": "mandatory",
    "version": "1.0.0",
    "description": "",
    "main": "app.js",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [],
    "author": "",
    "license": "ISC"
}
```

The above `package.json` is generated at the root level.

This method allows us to do a quick setup, and if anything should be added to the `package.json` file after initialization, then that could easily be altered in the file after the fact.


### Then what?
The last thing we have to do, before installing our relevant dependencies, is to make sure that Node is aware that we're working with ES6 modules and not CommonJS.

The way in which we accomplish this task is easily just writing it into the newly generated package.json file.

Like so:

```json
    "type": "module",
    "main": "app.js"
```
As illustrated above, the convention is to insert it above `main`.


## Installing dependencies
At this point we've prepared the `package.json` as well as the above mentioned `app.js` file, and we're ready to install our first package.

Once again, we can do one of two things.

We can just prompt the installation of a specific package, either updating it (if already installed), or installing it (if not done already).

```console
$ npm i express
```

Alternatively, we could change the content of the dependencies in the `package.json` manually, and then run:

```console
$ npm i
```

Whether the change was one or more additions or deletions, is irrelevant, as npm will delete any packages no longer represented in the `package.json`, as well as install the ones not yet installed.