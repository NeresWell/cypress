import 'cypress-iframe'
import 'cypress-file-upload'
import 'cypress-if'

Cypress.Commands.add('getByName', (seletor) => {
    return cy.get(`[name=${seletor}]`)
})

Cypress.Commands.add('getByType', (seletor) => {
    return cy.get(`[type=${seletor}]`)
})

Cypress.Commands.add('getById', (seletor) => {
    return cy.get(`#${seletor}`)
})

Cypress.Commands.add('login', (email, password) => {
    cy.getByName('login').type(email, { log: false })
    cy.getByType('password').type(password, { log: false })
    cy.contains('button', 'Entrar').click()
})

Cypress.Commands.add('verificaTexto', (seletor, texto) => {
    cy.get(`${seletor}`).contains(`${texto}`)
})

Cypress.Commands.add('conteudo', (texto) => {
    cy.iframe('[title="Editor de Rich Text, editor1"]').as('iframe').find('p').type(`${texto}`)
})

Cypress.Commands.add('conteudo2', (texto) => {
    cy.iframe('[title="Editor de Rich Text, editor2"]').as('iframe').find('p').eq(0).type(`${texto}`)
})

Cypress.Commands.add('conteudo3', (texto) => {
    cy.iframe('[title="Editor de Rich Text, editor3"]').as('iframe').find('p').eq(0).type(`${texto}`)
})

Cypress.Commands.add('redigirDocumentoEB', (seletor) => {
    cy.contains('span', 'Documentos').click()
    cy.contains('span', 'Redigir Documento').click()
    cy.contains('span', 'Documentos Comuns').click()
    cy.contains('li', `${seletor}`).click()
})

Cypress.Commands.add('redigirRequerimento', () => {
    cy.contains('span', 'Documentos').click()
    cy.contains('span', 'Redigir Documento').click()
    cy.contains('span', 'Documentos Comuns').click()
    cy.contains('span', /^Requerimento$/).click()
})

Cypress.Commands.add('redigirRadiograma', () => {
    cy.contains('span', 'Documentos').click()
    cy.contains('span', 'Redigir Documento').click()
    cy.contains('span', 'Documentos Adm').click()
    cy.contains('span', /^Radiograma$/).click()
})

Cypress.Commands.add('redigirDocumentoAdm', (seletor) => {
    cy.contains('span', 'Documentos').click()
    cy.contains('span', 'Redigir Documento').click()
    cy.contains('span', 'Documentos Adm').click()
    cy.contains('span', `${seletor}`).click()
})

Cypress.Commands.add('protocolarDocExterno', () => {
    cy.contains('span', 'Documentos').click()
    cy.contains('span', 'Inserir Documentos/NUP').click()
    cy.contains('span', 'Protocolar Doc. Ext.').click()
})

Cypress.Commands.add('DocExternoProtocolados', () => {
    cy.contains('span', 'Documentos').click()
    cy.contains('span', /^Caixa de Documentos$/).click()
    cy.contains('span', 'Doc. Ext. Protocolados').click()
})

Cypress.Commands.add('assinaturaEletronica', (senha) => {
    cy.contains('button', 'Assinar/Protocolar').click()
    cy.get('p-radiobutton[label="Assinatura Eletrônica"]').click()
    cy.get('.btnNovo').click()
    cy.get('input[name="senhaEletronica"]').type(`${senha}`)
    cy.contains('span', 'Confirmar').click()
})

Cypress.Commands.add('anexoExterno', (nomeAnexo) => {
    cy.get('input[type="file"]').attachFile(`${nomeAnexo}`)
})

Cypress.Commands.add('assertDocExternoProtocolado', (tipo) => {
    cy.DocExternoProtocolados()
    cy.get('td').find(`span:contains("${tipo}")`).should('be.visible')
})
