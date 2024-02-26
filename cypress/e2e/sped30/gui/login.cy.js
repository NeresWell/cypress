import { faker } from '@faker-js/faker'
import element from '../../../support/locators'

describe('Login', () => {
    it('login com usuário e senha válidos', () => {
        cy.login()
        cy.get(element.PAGINA_INICIAL.CAMPOS.MSG_BEM_VINDO).should('be.visible')
    })

    it('login com usuário e senha inválidos', () => {
        cy.visit('/')
        cy.get(element.LOGIN_PAGE.USUARIO).clear().type(faker.internet.userName())
        cy.get(element.LOGIN_PAGE.SENHA).clear().type(faker.internet.password())
        cy.get(element.LOGIN_PAGE.BTN_LOGIN).click()
        cy.get(element.LOGIN_PAGE.MSG_FALHA).should('be.visible')
    })
})