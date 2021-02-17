// to run: yarn test --spec src/test/recipes.spec.ts

import HomePage from 'utam-js-webdriverio-boilerplate/pageObjects/lwc-recipes-home';
import HelloExample from 'utam-js-webdriverio-boilerplate/pageObjects/lwc-hello-binding';

describe('UTAM WDIO example for LWC recipes', () => {

    it('hello form accepts entry', async () => {
        
        // Load the website
        await browser.url('https://recipes.lwc.dev/');

        // Load the root Utam Page Object
        const homePage = await utam.load(HomePage);

        // Access nested elements
        const recipe = await homePage.getRecipe(2, HelloExample);
        const card = await recipe.getUicard();
        const text = await recipe.getGreeting();

        // Assert initial state
        console.log("TEXT: " + await text.getText());
        expect(await text.getText()).toBe('Hello, World!');

        // Change text inside Input
        const input = await card.getInput();
        await input.clearAndType('Jane');

        // Assert changed state
        console.log("TEXT: " + await text.getText());
        expect(await text.getText()).toBe('Hello, Jane!');
    });
});