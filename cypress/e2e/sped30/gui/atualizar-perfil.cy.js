import { faker } from '@faker-js/faker'

describe('Logout', () => {
    beforeEach(() => {
        cy.login()
    })

    it('Atualizar Perfil', () => {
        cy.get('[class="profile"]').click()
        cy.contains('span', 'Atualizar Cadastro').click()
        cy.get('[name="nomeCompleto"]').clear().type(faker.internet.userName())
        cy.get('[id="salvar"]').click()
        cy.get('[id="ui-dialog-57-label"] p-header').should('not.be.visible')
    })
})