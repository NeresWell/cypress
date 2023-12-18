const el = require('../../../elements/documentos/documentosComuns/oficio.elements')
const elUtils = require('../../../elements/util/utils.elements')

class Oficio {
    addAssunto(assunto) {
        cy.get(el.ELEMENTS.addAssuntoOficio).type(assunto)
    }
    addVocativo(vocativo) {
        cy.get(el.ELEMENTS.addVocativoOficio).type(vocativo)
    }
    addFechoCortesiaOficio(fechoCortesia) {
        cy.get(el.ELEMENTS.addFechoCortesiaOficio).type(fechoCortesia)
    }
    oficioNoImpedimento(conta) {
        cy.get(el.ELEMENTS.setNoImpedimento).click()
        cy.get(elUtils.ELEMENTS.listaImpedimento).click()
        cy.contains('li', `${conta}`).click()
    }
    setRemetente(remetente) {
        cy.get(el.ELEMENTS.setRemetente).click()
    }
}

export default new Oficio();