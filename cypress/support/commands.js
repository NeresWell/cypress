import 'cypress-iframe';

Cypress.Commands.add('getByName', (seletor) => {
    return cy.get(`[name=${seletor}]`)
})

Cypress.Commands.add('getByType', (seletor) => {
    return cy.get(`[type=${seletor}]`)
})

Cypress.Commands.add('login', (email, password) => {
    cy.getByName('login').type(email)
    cy.getByType('password').type(password)
    cy.contains('button', 'Entrar').click()
})

Cypress.Commands.add('verificaTexto', (seletor, texto) => {
    cy.get(`${seletor}`).contains(`${texto}`)
})

Cypress.Commands.add('conteudo', (texto) => {
    cy.iframe('[title="Editor de Rich Text, editor1"]').as('iframe').find('p').type(`${texto}`)
})

Cypress.Commands.add('destinatarioExterno', (destinatario) => {
    cy.getByName('btnDestinatariosExternos').click()
    cy.contains('div',`${destinatario}`).click()
    cy.get('[icon="pi pi-angle-right"] > .ui-button-icon-left').click()
    cy.contains('button', 'Concluir').click()
})

Cypress.Commands.add('diex', () => {
    cy.contains('span', 'Documentos').click()
    cy.contains('span', 'Redigir Documento').click()
    cy.contains('span', 'Documentos Comuns').click()
    cy.contains('span', 'DIEx').click()
})

Cypress.Commands.add('diexSimplificado', () => {
    cy.contains('span', 'Documentos').click()
    cy.contains('span', 'Redigir Documento').click()
    cy.contains('span', 'Documentos Comuns').click()
    cy.contains('span', 'DIEx Simplificado').click()
})

Cypress.Commands.add('', () => {
    cy.contains('span', 'Documentos').click()
    cy.contains('span', 'Redigir Documento').click()
    cy.contains('span', 'Documentos Comuns').click()
    cy.contains('span', '').click()
})
