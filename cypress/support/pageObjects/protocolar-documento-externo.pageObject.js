const el = require('../elements/documentos/protocolar-documento-externo.elements')

class ProtocolarDocumentoExterno {

    numeroDocumento(arg){
        cy.get(el.ELEMENTS.inputNumero).type(arg)
    }

    semNup() {
        cy.get(el.ELEMENTS.semNUP).click()
    }

    nupAutomatico() {
        cy.get(el.ELEMENTS.nupAutomatico).click()
    }

    nupProprio() {
        cy.get(el.ELEMENTS.nupProprio).click()
    }

    orgaoOrigem(nomeOrgao) {
        cy.get(el.ELEMENTS.inputOrgaoOrigem).type(nomeOrgao)
    }

    tipoDocumento(tipo) {
        cy.get(el.ELEMENTS.tipoDocumento).click().find(`li:contains("${tipo}")`).eq(0).click()
    }

    assunto(assunto) {
        cy.get(el.ELEMENTS.assunto).type(assunto)
    }

    temporalidade(codigoTemporalidade) {
        cy.get(el.ELEMENTS.temporalidade).type(codigoTemporalidade)
    }
}

export default new ProtocolarDocumentoExterno();