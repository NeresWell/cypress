const el = require('../../../elements/util/utils.elements')
const elRelatorio = require('../../../elements/documentos/documentosAdm/relatorio.elements')

class Relatorio {
    addOrigem(origem) {
        cy.get(elRelatorio.ELEMENTS.origemRelatorio).type(origem)
    }
    addReferencia(ref) {
        cy.get(elRelatorio.ELEMENTS.refRelatorio).type(ref)
    }
    addDespacho(desp) {
        cy.get(elRelatorio.ELEMENTS.despachoRelatorio).type(desp)
    }
}

export default new Relatorio();