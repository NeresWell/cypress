const el = require('../../../elements/documentos/inserirDocumentosNUP/protocolarDocExt.elements')

class ProtocolarDocumentoExterno {
    addAssunto(assunto) {
        cy.get(el.ELEMENTS.assunto).type(assunto)
    }

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

    prioridade(nivelPrioridade) {
        cy.get(el.ELEMENTS.prioridade).click()
        cy.contains('span', `${nivelPrioridade}`).click()

    }
}

export default new ProtocolarDocumentoExterno();