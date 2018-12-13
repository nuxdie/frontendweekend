describe('mobile version', () => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:8080/')
    })

    it('should have all widgets at 100% width', () => {
        cy.viewport('iphone-5')
        cy.get('iframe.test--sc-embedded-player')
            .should('have.css', 'width')
            .and('lessThan', '321px')
        cy.get('iframe.test--yandex-money-embed')
            .should('have.css', 'width')
            .and('lessThan', '321px')
        cy.get('footer.test--footer')
            .should('have.css', 'width')
            .and('lessThan', '321px')
    })

})