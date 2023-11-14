Cypress._.times(1, () => {
  describe('Expediçao do SPED 3.0 para SPED 3.0', () => {
    beforeEach(() => {
      cy.visit('/')
      cy.login(Cypress.env('userName'), Cypress.env('password'))
      cy.title().should('eq', 'SPED 3.0')
      cy.get('h3').should('exist').and('have.text', 'Bem-vindo ao Sistema de Protocolo Eletrônico de Documentos do Exército Brasileiro')
    })

    it.only('Expedir DIEx sem anexo', () => {
      cy.diex()
      cy.destinatarioExterno('CDS PROD MIGRADA (3.0) - VM 37')

      // assunto do documento
      cy.get('#txAssunto').type('DIEx Cypress')

      // classificação documental
      cy.get('#pesquisaRapidaTemporalidade').type('001')
      
      // conteúdo do DIEx
      cy.conteudo('Lorem ipsum')
      
      
      
      cy.contains('button', 'Salvar').click()



      cy.contains('button', 'Assinar/Protocolar').click()
      cy.get('p-radiobutton[label="Assinatura Eletrônica"]').click()
      cy.get('.btnNovo').click()

      // assinatura do Documento
      cy.get('input[name="senhaEletronica"]').type('sigadex123')
      cy.contains('span', 'Confirmar').click()
      cy.wait(5000)
      cy.contains('button','Histórico').click()
      cy.contains('span','Expedido via Módulo Integrador').should('be.visible')
    })

    it('Expedir DIEx com anexo interno e externos', () => {

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