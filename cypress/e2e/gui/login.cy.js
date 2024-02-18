describe('Login', () => {
    it('login com usuário e senha inválidos', () => {
        // const user = Cypress.env('user_name')
        // const password = Cypress.env('user_password')
        // const options = {cacheSession: false}

        // cy.login(user, password, options)
        cy.login()

        cy.url().should('be.equal', `${Cypress.config('baseUrl')}/#/`)
    })
})