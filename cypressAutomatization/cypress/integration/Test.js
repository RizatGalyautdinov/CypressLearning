describe('My first tests', () => {
    beforeEach(function (){
        cy.visit('https://example.cypress.io');
    });

    it('Testing true==true', () => {
        expect(true).to.eq(true);
    });

    it('Visit the page and find "get"', () => {
        cy.contains('get');

    });

    it('Visit the page about click and check input form "describe" ', function () {
        cy.contains('focus').click();

        cy.url().should('include', '/commands/actions');

        cy.get('.action-clear')
            .type('test@test.com')
            .should('have.value', 'test@test.com')
            .clear()
            .should('have.value', '');
    });



});

describe('Using new learned features - command "get" ', () => {
    beforeEach( function (){
        cy.visit('https://example.cypress.io');
    });

    it('search button named "button" ', () => {
        cy.contains('get').click();
        cy.get('#query-btn').should('contain', 'Button');
    });

    it('search link "Cypress API" and go there', () => {
        cy.get('a[href*="cypress-api"]').contains('Cypress API').click();
    });

    it('menu click and go to querying', ()=>{
        cy.get('.dropdown-menu >li:first').should('not.be.visible');

        cy.get('.dropdown').click();
        cy.get('.dropdown-menu >li:first').click();

        cy.url().should('include', '/commands/querying');
        cy.get('h1').contains('Querying');
    });

    it('should be 4 links in Querying block', () => {
        cy.get('.home-list >li:first >ul>li').should('have.length', 4);
    });
});