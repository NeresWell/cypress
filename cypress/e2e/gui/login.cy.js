describe('Login', () => {
    it('login com usuário e senha inválidos', () => {
        cy.login()
        cy.url().should('be.equal', `${Cypress.config('baseUrl')}/#/`)
        cy.title().should('be.equal', 'SPED 3.0')
    })
})