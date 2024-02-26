import { faker } from '@faker-js/faker'
import locators_mi from "../../support/locators_mi";

describe('Login', () => {
    beforeEach(() => {
        cy.visit(Cypress.config('urlMI'))
    })
    it('Login válido', () => {
        cy.get(locators_mi.LOGIN_PAGE.USUARIO).clear().type(Cypress.env('mi_user_name'))
        cy.get(locators_mi.LOGIN_PAGE.SENHA).clear().type(Cypress.env('mi_user_password'))
        cy.get(locators_mi.LOGIN_PAGE.BTN_ENTRAR).click()
        cy.get('app-pagina-inicial h1').should('contain', 'bem-vindos')
    })
    
    it('Login inválido', () => {
        cy.get(locators_mi.LOGIN_PAGE.USUARIO).clear().type(faker.internet.userName())
        cy.get(locators_mi.LOGIN_PAGE.SENHA).clear().type(faker.internet.password())
        cy.get(locators_mi.LOGIN_PAGE.BTN_ENTRAR).click()
        cy.get(locators_mi.LOGIN_PAGE.MSG_FALHA).should('be.visible')
    })
})