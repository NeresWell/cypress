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

Cypress.Commands.add('redigirDocumentoEB', (seletor) => {
    cy.contains('span', 'Documentos').click()
    cy.contains('span', 'Redigir Documento').click()
    cy.contains('span', 'Documentos Comuns').click()
    cy.contains('span', `${seletor}`).click()
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

Cypress.Commands.add('anexarDocumentoSped', (tipoDocumento) => {
    cy.contains('button', 'Anexar documento do SPED').click()
    cy.getByName('tipoDocumento').click().find(`li:contains("${tipoDocumento}")`).eq(0).click()
    cy.contains('button', 'Pesquisar').click()
    cy.contains('td', `${tipoDocumento}`).click()
    cy.getById('adicionarDoc').click()
    cy.getById('incluirDoc').click()
    cy.contains('span', 'Descrição do Anexo')

})

Cypress.Commands.add('referenciarDocumentodoSped', () => {
    cy.getById('btnAnexoReferencia').click()
    cy.getById('pesquisar').click()
    cy.contains('td', 'DIEx').click()
    cy.getById('adicionarDoc').click()
    cy.getById('incluirDoc').click()
})

Cypress.Commands.add('anexoExterno', (nomeAnexo) => {
    cy.get('input[type="file"]').attachFile(`${nomeAnexo}`)
})

Cypress.Commands.add('assertDocExternoProtocolado', (tipo) => {
    cy.DocExternoProtocolados()
    cy.get('td').find(`span:contains("${tipo}")`).should('be.visible')
})