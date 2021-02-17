// to run: yarn test --spec src/test/salesforce.spec.ts

// Import a PageObject from within the package
import Login from 'utam-js-webdriverio-boilerplate/pageObjects/sf-login';

describe('UTAM WDIO example for Salesforce environment', () => {

    it('login form accepts entry', async () => {

        const PRIVATE_URL = process.env.MY_ORG_URL;
        const PRIVATE_USERNAME = process.env.MY_ORG_USERNAME;
        const PRIVATE_PASSWORD = process.env.MY_ORG_PASSWORD;
        
        // Load the website
        await browser.url(PRIVATE_URL);

        // Load the root Utam Page Object
        const login = await utam.load(Login);

        // Access nested elements
        await login.login(PRIVATE_USERNAME, PRIVATE_PASSWORD);
    });
});