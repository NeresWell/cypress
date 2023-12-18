const el = require('../../../elements/documentos/caixaDocumentos/caixaEntrada.elements')

class CaixaEntrada {
    moverPara(nomeSubCaixa) {
        cy.get(el.ELEMENTS.moverPara).contains(nomeSubCaixa).should('exist').click()
    }
    documentosVencendoHj() {
        cy.get(el.ELEMENTS.documentoVencendoHj).click()
    }
    moverDocumento(){
        cy.get(el.ELEMENTS.mover).click()
    }
    documentoPrazoTramitacao() {
        cy.get(el.ELEMENTS.documentosPrazoTramitacao).click()
    }
}

export default new CaixaEntrada();