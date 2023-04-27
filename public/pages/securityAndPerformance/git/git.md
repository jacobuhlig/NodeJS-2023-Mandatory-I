# The Basics of Git

Git is a version-control system that allows for easy collaboration with other developers.

## Getting started
### Init
Initiates your own git-credentials into current directory:
```console
$ git init
```
If dealing with a cloned project that you'd want to fork, firstly remove the existing `.git`-folder:
```console
$ rm -rf .git
```
### Clone
Cloning entire project:
```console
$ git clone <url of the repository being cloned> <Optional custom name for the new folder>
```

Cloning single branch:
```console
$ git clone -b <name of branch> <url of the repository being cloned> <Optional custom name for the new folder>
```

## Working with Git
At the basic level, there are only three commands essential to working with Git.

Track all uncommitted changes:
```console
$ git add .
```

Commit all tracked changes:
```console
$ git commit <-m "message describing the content in the commit.">
```

Push everything committed:
```console
$ git push
```
<br></br>

___
<br>

**Three bonus commands:**

These are great for trouble-shooting and preventing mistakes, such as a push being rejected, or you committing something that didn't contain all the files that you had intended.

See any untracked files, as well as all files added for commit:
```console
$ git status
```

See the difference made to files:
```console
$ git diff
```

If prevented from merging, or some other reason, `git stash` can be a great choice when conflicts take longer to solve, than one party just redoing whatever was preventing the merge:
```console
$ git stash