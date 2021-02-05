import LwcDevHomePage from 'utam-js-webdriverio-boilerplate/pageObjects/lwc-home';
describe('counter specs test', () => {
    it('has header - lwc.dev', async () => {
        await browser.url('http://lwc.dev');
        const lwcDevHomePage = await utam.load(LwcDevHomePage);
        const header = await lwcDevHomePage.getHeader();
        expect(await header.getText()).toBe('Lightning Web Components');
    });
});