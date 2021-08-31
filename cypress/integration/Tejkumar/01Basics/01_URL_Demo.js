
describe('URL Demo', () => {

    before(function () {
        cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/login')
    })

    it('TC01', () => {

        cy.url().then(function (url) {
            cy.log('Application URL = ' + url)
        })

        cy.url().should('include', 'orangehrmlive')

    });

});