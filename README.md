# utam-js-wdio-boilerplate

The [`github.com/salesforce/utam-js-wdio-boilerplate`](https://github.com/salesforce/utam-js-wdio-boilerplate.git) repo includes a simple boilerplate UTAM page object and an end-to-end test file.

## Set Up the Wdio Boilerplate Repo

1. Clone or fork the repo.

    ```bash
    $ git clone https://github.com/salesforce/utam-js-wdio-boilerplate.git
    $ cd utam-js-wdio-boilerplate
    ```
1. Install [Volta](https://volta.sh/), which ensures that you use the correct versions of Node.js and Yarn. Volta isn't required, but we recommend it.

    If you installed Volta, run this command in `utam-js-wdio-boilerplate`:

    ```bash
    $ volta install node yarn
    ```

    > If you installed `Volta` from homebrew, you might need to run `volta setup` after `volta install` and open a new terminal.

    The command installs Node 14.15.1 and Yarn 1.22.5 and configures your environment.

    If you don't install Volta, install Node.js and Yarn:

    * [Node](https://nodejs.org/) >=14.15.1 <15
    * [Yarn](https://yarnpkg.com/) >= 1.22.5

    To ensure you're all set, run:

    ```bash
    $ node -v
    # v14.15.1
    $ yarn -v
    # v1.22.5
    ```

1. Install project dependencies.

    Run this command to install the project dependencies:

    ```bash
    $ yarn install
    ```

1. In `package.json`, update the `chromedriver` version to match your local version of Google Chrome web browser (It will run fine otherwise, but you will avoid downloading the binary).

    To find your local version of Chrome, in the Chrome address bar, enter `chrome://settings/help`.

    Then update `package.json`. For example, if your local version is 88, add:

    ```json
    "chromedriver": "^88.0.0",
    ```

1. Generate page objects.

    ```bash
    $ yarn build
    ```

    The UTAM compiler generates JavaScript code from the JSON page objects in `src/__utam__`. The generated JavaScript files are stored in `pageObjects`.

1. Run tests.

    To run all tests, enter `yarn test`.

    To run an individual test, specify the path to the test file. For example:

    ```bash
    $ yarn test --spec src/test/example.spec.ts
    ```

## About this boilerplate

UTAM is flexible&mdash;it isn't tied to a particular test automation framework or language.

This particular repo uses Typescript, and [WebdriverIO](https://webdriver.io/docs/gettingstarted.html) with [Jasmine](https://webdriver.io/docs/frameworks.html).

