const el = require('../../../elements/util/utils.elements')
const elSolVtr = require('../../../elements/documentos/documentosAdm/solicitacaoViatura.elements')

class SolicitacaoViatura {
    addAssuntoSolicitacaoViatura(assunto) {
        cy.get(elSolVtr.ELEMENTS.addAssuntoSolicitacaoViatura).type(assunto)
    }
    addTxtAo(txt) {
        cy.get(elSolVtr.ELEMENTS.txAo).type(txt)
    }
    addLinhaSolicitacaoViatura(horaSaida1, itinerario, naturezaServico1) {
        cy.get(elSolVtr.ELEMENTS.data1).click().get('tbody > tr').contains('26').click()
        cy.get(elSolVtr.ELEMENTS.horaSaida1).type(horaSaida1)
        cy.get(elSolVtr.ELEMENTS.itinerario).type(itinerario)
        cy.get(elSolVtr.ELEMENTS.naturezaServico1).type(naturezaServico1)
    }
}

export default new SolicitacaoViatura();