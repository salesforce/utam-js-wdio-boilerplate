# Contributing to UTAM JS WDIO Boilerplate

-   [Code of Conduct](#code-of-conduct)
-   [Requirements](#requirements)
-   [Installation](#installation)
-   [Git Workflow](#git-workflow)

## [Code of Conduct](./CODE_OF_CONDUCT.md)

The UTAM JS WDIO Boilerplate project has a [Code of Conduct](https://github.com/salesforce/utam-js-wdio-boilerplate/blob/master/CODE_OF_CONDUCT.md) to which all contributors must adhere.

## Requirements

-   [Node](https://nodejs.org/) >= 14.15.4
-   [Yarn](https://yarnpkg.com/) >= 1.22.5

This project uses [Volta](https://volta.sh/) to ensure that all the contributors share the same version of `Node` and `Yarn` for development. If you are considering making frequent contributions to this project, we recommend installing Volta.

If you install Volta, run this command to install node and yarn:

```bash
$ volta install node yarn
```

## Installation

[Set up SSH access to GitHub][setup-github-ssh] if you haven't done so already.

### 1) Fork the repository

We recommend that you [fork][fork-a-repo] the [salesforce/utam-js-wdio-boilerplate](https://github.com/salesforce/utam-js-wdio-boilerplate) repo.

After you fork the repo, [clone][clone-a-repo] your fork in your local workspace:

```bash
$ git clone git@github.com<YOUR-USERNAME>/utam-js-wdio-boilerplate.git
$ cd utam-js-wdio-boilerplate
```

### 2) Install dependencies

_We use [yarn](https://yarnpkg.com/) because it is significantly faster than npm for our use case. See this command [cheatsheet](https://yarnpkg.com/lang/en/docs/migrating-from-npm/)._

```bash
$ yarn install
```

### 3) Update chromedriver (if relevant)

If your version of the Google Chrome web Browser doesn't match the `chromedriver` version declared in `package.json`, you should update it.

_Note: the project will run fine even if you have a mismatch, however running it will download a Chrome binary matching the `chromedriver` version declared in `package.json` taking extra time and space._

To find your local version of Chrome, in the Chrome address bar, enter `chrome://settings/help`.

If you have a mismatch, update the `chromedriver` version in `package.json` to match your local version of the Google Chrome web browser. For example, if your local version is `88`, add:

```json
"chromedriver": "^88.0.0",
```

### 4) Build the project

Execute `yarn install` to install the project and build it. The install command automatically runs `yarn build` after it installs the project dependencies.

If you change a page object or test later, run `yarn build` to update the project.

Building the project does 2 things:

1. It generates page objects
2. It compiles TypeScript test files to JavaScript

### 5) Run Tests

To run all tests, enter `yarn test`.

To run an individual test, specify the path to the test file. For example:

```bash
$ yarn test --spec src/test/example.spec.ts
```

You should see a browser window that opens briefly and then a test report that indicates that one or all tests passed.

## Git Workflow

The process of submitting a pull request is straightforward and generally follows the same pattern each time:

1. [Fork the UTAM JS WDIO Boilerplate repo](#fork-the-utam-js-wdio-boilerplate-repo)
2. [Create a feature branch](#create-a-feature-branch)
3. [Make your changes](#make-your-changes)
4. [Rebase](#rebase)
5. [Create a pull request](#create-a-pull-request)
6. [Update the pull request](#update-the-pull-request)
7. [Commit Message Conventions](#commit)

### Fork the UTAM JS WDIO Boilerplate repo

[Fork][fork-a-repo] the [salesforce/utam-js-wdio-boilerplate](https://github.com/salesforce/utam-js-wdio-boilerplate) repo. Clone your fork in your local workspace and [configure][configuring-a-remote-for-a-fork] your remote repository settings.

```bash
$ git clone git@github.com:<YOUR-USERNAME>/utam-js-wdio-boilerplate.git
$ cd utam-js-wdio-boilerplate
$ git remote add upstream git@github.com:salesforce/utam-js-wdio-boilerplate.git
```

### Create a feature branch

```bash
$ git checkout master
$ git pull origin master
$ git checkout -b <name-of-the-feature>
```

### Make your changes

Modify the files, lint, format and commit your code using the following commands:

```bash
$ git add <path/to/file/to/commit>
$ git commit
$ git push origin <username>/<name-of-the-feature>
```

The above commands will commit the files into your feature branch. You can keep
pushing new changes into the same branch until you are ready to create a pull
request.

### Rebase

Sometimes your feature branch will get stale with respect to the master branch,
and it will require a rebase. The following steps can help:

```bash
$ git checkout master
$ git pull origin master
$ git checkout <name-of-the-feature>
$ git rebase upstream/master
```

_note: If no conflicts arise, these commands will ensure that your changes are applied on top of the master branch. Any conflicts will have to be manually resolved._

### Create a pull request

If you've never created a pull request before, follow [these instructions][creating-a-pull-request].

### Update the pull request

```bash
$ git fetch origin
$ git rebase origin/${base_branch}

# If there were no merge conflicts in the rebase
$ git push origin ${feature_branch}

# If there was a merge conflict that was resolved
$ git push origin ${feature_branch} --force
```

### <a name="commit"></a> Commit Message Conventions

Git commit messages should be formatted according to a well defined set of rules. This leads to **more
readable messages** that are easy to follow when looking through the **project history**.

#### Commit Message Format

Each commit message consists of a **header**, a **body** and a **footer**. The header has a special
format that includes a **type**, a **scope** and a **subject**:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The **header** is mandatory and the **scope** of the header is optional.

Any line of the commit message can't be longer than 100 characters! This allows the message to be easier to read on GitHub as well as in various git tools.

Footer should contain a [closing reference to an issue](https://help.github.com/articles/closing-issues-via-commit-messages/) if any.

```
docs(changelog): update change log to beta.5
```

```
fix(release): need to depend on latest rxjs and zone.js

The version in our package.json gets copied to the one we publish, and users need the latest of these.
```

#### Reverting a commit

If the commit reverts a previous commit, it should begin with `revert: `, followed by the header of the reverted commit. In the body it should say: `This reverts commit <hash>.`, where the hash is the SHA of the commit being reverted.

#### Commit Type

Must be one of the following:

-   **`feat`**: new feature for the user, not a new feature for build script
-   **`fix`**: bug fix for the user, not a fix to a build script
-   **`docs`**: changes to the documentation
-   **`style`**: formatting, missing semi colons, etc; no production code change
-   **`refactor`**: refactoring production code, e.g. renaming a variable
-   **`test`**: adding missing tests, refactoring tests; no production code change
-   **`chore`**: updating grunt tasks etc; no production code change

#### Commit Subject

The subject contains a succinct description of the change:

-   use the imperative, present tense: "change" not "changed" nor "changes"
-   don't capitalize first letter
-   no dot (.) at the end

#### Commit Body

Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes". The body should include the motivation for the change and contrast this with previous behavior.

#### Commit Footer

The footer should contain any information about **Breaking Changes** and is also the place to reference GitHub issues that this commit **closes**.

_note: If more changes are needed as part of the pull request, just keep committing and pushing your feature branch as described above and the pull request will automatically update._

[clone-a-repo]: https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository
[fork-a-repo]: https://help.github.com/en/articles/fork-a-repo
[configuring-a-remote-for-a-fork]: https://help.github.com/en/articles/configuring-a-remote-for-a-fork
[setup-github-ssh]: https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/
[creating-a-pull-request]: https://help.github.com/articles/creating-a-pull-request/