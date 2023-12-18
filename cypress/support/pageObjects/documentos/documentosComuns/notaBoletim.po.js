const el = require('../../../elements/documentos/documentosComuns/notaBoletim.elements')

class NotaBoletim {
    setCampoDe(desc) {
        cy.get(el.ELEMENTS.campoDe).type(desc)
    }
    setNrBoletim(numero) {
        cy.get(el.ELEMENTS.nrBoletim).type(numero)
    }
    setItemBoletim(item) {
        cy.get(el.ELEMENTS.itemBoletim).type(item)
    }
}

export default new NotaBoletim();