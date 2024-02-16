describe('Login', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.login()
    })
    
    it.only('logout com usuário e senha inválidos', () => {
        cy.logout()
        cy.url().should('be.equal', `${Cypress.config('baseUrl')}/#/login`)
    })
    
    it('login com usuário e senha válidos', () => {
        cy.login()
        cy.contains('h3', 'Bem-vindo ao Sistema de Protocolo Eletrônico de Documentos do Exército Brasileiro').should('be.visible')
    })
    
    it('login com usuário e senha válidos', () => {
        cy.contains('h3', 'Bem-vindo ao Sistema de Protocolo Eletrônico de Documentos do Exército Brasileiro').should('be.visible')
    })
})