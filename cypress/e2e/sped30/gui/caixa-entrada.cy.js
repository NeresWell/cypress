import element from '../../../support/locators'

describe('caixa de entrada', () => {
    beforeEach(() => {
        cy.login()
    })

    it('acessar caixa de entrada', () => {
        cy.get(element.PAGINA_INICIAL.MODULO_DOCUMENTOS.CAIXA_ENTRADA).click()
        cy.url().should('be.equal', `${Cypress.config('baseUrl')}/#/caixa-entrada`)
    })
})