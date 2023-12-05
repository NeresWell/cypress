import { forEach } from "cypress/types/lodash"

Cypress._.times(1, () => {
  describe('Expediçao do SPED 3.0 para SPED 3.0', () => {
    beforeEach(() => {
      cy.visit('/')
      cy.login(Cypress.env('userName'), Cypress.env('password'))
      cy.title().should('eq', 'SPED 3.0')
      cy.get('h3').should('exist').and('have.text', 'Bem-vindo ao Sistema de Protocolo Eletrônico de Documentos do Exército Brasileiro')
    })

    const assuntoDocumento = 'DIEx Cypress'
    const nomeDestinatarioExterno = 'CDS PROD MIGRADA (3.0) - VM 37'
    const codigoTemporalidade = '001'
    const nomeAnexoExterno = 'example.json'

    it('Expedir DIEx sem anexo', () => {
      cy.redigirDocumentoEB('DIEx')
      cy.destinatarioExterno(`${nomeDestinatarioExterno}`)
      cy.getById('txAssunto').type(`${assuntoDocumento}`)
      cy.getById('pesquisaRapidaTemporalidade').type(`${codigoTemporalidade}`)
      cy.conteudo('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut purus arcu. Maecenas lacus ante, vehicula at rhoncus in, gravida quis tellus.')
      cy.contains('button', 'Salvar').click()
      cy.assinaturaEletronica(Cypress.env('assinaturaEletronica'))
    })

    it.only('Expedir DIEx com anexo interno e externos', () => {
      cy.redigirDocumentoEB('DIEx')
      cy.destinatarioExterno(`${nomeDestinatarioExterno}`)
      cy.getById('txAssunto').type(`${assuntoDocumento}`)
      cy.getById('pesquisaRapidaTemporalidade').type(`${codigoTemporalidade}`)
      cy.anexarDocumentoSped('DIEx')
      cy.anexoExterno(`${nomeAnexoExterno}`)
      cy.conteudo('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut purus arcu. Maecenas lacus ante, vehicula at rhoncus in, gravida quis tellus.')
      // cy.contains('button', 'Salvar').click()
      // cy.assinaturaEletronica(Cypress.env('assinaturaEletronica'))
    })

    it('Expedir DIEx com anexo interno sendo DIEx Simplificado', () => {

    })

    it('Expedir DIEx com anexo interno sendo Oficio', () => {

    })

    it('Expedir DIEx com anexo interno sendo Nota para Boletim', () => {

    })

    it('Expedir DIEx com anexo interno sendo Inf. de Requerimento', () => {

    })
    it('Expedir DIEx com anexo interno sendo Requerimento', () => {

    })
    it('Expedir DIEx com anexo interno sendo Doc. 2+ Assinaturas', () => {

    })
    it('Expedir DIEx com anexo interno sendo Documentos Adm', () => {

    })
  })
})