const el = require('../../../support/elements/util/utils.elements')

class Util {
    setRemetente(remetente) {
        cy.get(el.ELEMENTS.btnRemetente).click()
        cy.contains('li', `${remetente}`).dblclick()
    }
    setSexoRemetente(sexo){
        cy.get(el.ELEMENTS.sexoRemetente).click()
        cy.contains('li', `${sexo}`).click()
    }
    setSexoDestinatario(sexo) {
        cy.get(el.ELEMENTS.sexoDestinatario).click()
        cy.contains('li', `${sexo}`).click()
    }
    setDestinatario(destinatario) {
        cy.get(el.ELEMENTS.btnDestinatario).click()
        cy.contains('li', `${destinatario}`).dblclick()
        cy.get(el.ELEMENTS.btnConcluir).click()
        cy.get(el.ELEMENTS.setDestinatarioExterno).should('not.exist')
    }
    setDestinatarioExterno(destinatarioExterno) {
        cy.get(el.ELEMENTS.btnDestinatarioExterno).click()
        cy.contains('li', `${destinatarioExterno}`).dblclick()
        cy.get(el.ELEMENTS.btnConcluir).click()
    }
    addAssunto(assunto) {
        cy.get(el.ELEMENTS.assunto).type(assunto)
    }
    setTemporalidade(codigoTemporalidade) {
        cy.get(el.ELEMENTS.temporalidade).type(codigoTemporalidade)
    }
    btnSalvar() {
        cy.get(el.ELEMENTS.salvar).eq(0).click()
    }
    salvarDocumentoExternoProtocolado() {
        cy.get(el.ELEMENTS.salvar).eq(1).click()
    }
    paginaInicial(){
        cy.contains('span', 'Página Inicial').click()
    }
    urgencia(nivelPrioridade) {
        cy.get(el.ELEMENTS.urgencia).click()
        cy.get(el.ELEMENTS.nivelUrgencia).click()
        cy.contains('span', `${nivelPrioridade}`).click()
    }
    addReferenciaSped(tipoDocumento) {
        cy.get(el.ELEMENTS.btnReferenciarDocumentoSped).click()
        cy.get(el.ELEMENTS.btnPesquisar).click()
        cy.contains('tr', `${tipoDocumento}`).should('be.visible').click()
        cy.get(el.ELEMENTS.btnAddReferenciaSped).click()
        cy.get(el.ELEMENTS.btnConcluirReferenciaSped).click()
    }
    addAnexoSped(tipoDocumento) {
        cy.get(el.ELEMENTS.btnAnexarDocumentoSped).click()
        cy.get(el.ELEMENTS.btnPesquisar).click()
        cy.contains('td', `${tipoDocumento}`).should('be.visible').click()
        cy.get(el.ELEMENTS.btnAddReferenciaSped).click()
        cy.get(el.ELEMENTS.btnConcluirReferenciaSped).click()
    }
    addReferencia(referencia){
        cy.get(el.ELEMENTS.btnAddReferencia).click()
        cy.get('input[id="txInput-1"]').should('be.visible').type(referencia)
    }
    noImpedimento(conta) {
        cy.get(el.ELEMENTS.btnImpedimento).click()
        cy.get(el.ELEMENTS.listaImpedimento).click()
        cy.contains('li', `${conta}`).click()
        cy.get(el.ELEMENTS.btnAssDelegacao).should('not.be.checked')
    }
    assDelegacaoOp1(conta) {
        cy.get(el.ELEMENTS.btnAssDelegacao).click().should('be.ok')
        cy.get(el.ELEMENTS.assDelegacaoOp1).click().should('be.ok')
        cy.get(el.ELEMENTS.listaAssDelegacao).click()
        cy.contains('li', `${conta}`).click()
        cy.get(el.ELEMENTS.btnImpedimento).should('not.be.checked')
    }
    assDelegacaoOp2(conta) {
        cy.get(el.ELEMENTS.btnAssDelegacao).click().should('be.ok')
        cy.get(el.ELEMENTS.assDelegacaoOp2).click().should('be.ok')
        cy.get(el.ELEMENTS.listaAssDelegacao).click()
        cy.contains('li', `${conta}`).click()
        cy.get(el.ELEMENTS.btnImpedimento).should('not.be.checked')
    }
    btnFechar() {
        cy.get(el.ELEMENTS.btnFechar).should('be.visible').click()
    }
    btnAnexoDetalhesDocumento() {
        cy.get(el.ELEMENTS.btnAnexo).click()
    }
}

export default new Util();