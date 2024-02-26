describe('Logout', () => {
    beforeEach(() => {
        cy.login()
    })
    
    it.only('logout com usuário e senha inválidos', () => {
        cy.logout()
        cy.url().should('be.equal', `${Cypress.config('baseUrl')}/#/login`)
    })
})