const el = require('../../../elements/util/utils.elements')
const elApEvento = require('../../../elements/documentos/documentosAdm/pedApoioEvento.elements')

class PedApoioEvento {
    natureza(natureza) {
        cy.contains('label', `${natureza}`).click()
    }
    setData() {
        cy.get(elApEvento.ELEMENTS.setData).click().get('tbody > tr').contains('24').click()
    }
    setHora(hora) {
        cy.get(elApEvento.ELEMENTS.setHora).type(hora)
    }
    setLocal(local) {
        cy.get(elApEvento.ELEMENTS.localEvento).type(local)
    }
    setNumeroEfetivo(numero) {
        cy.get(elApEvento.ELEMENTS.nrEfetivo).type(numero)
    }
    AddDadosAdcEfetivo(dado) {
        cy.get(elApEvento.ELEMENTS.dadosAdcEfetivo).type(dado)
    }
    presencaDe(tipo) {
        cy.contains('label', `${tipo}`).click()
    }
    setTipoApoio(tipo) {
        cy.get(elApEvento.ELEMENTS.tipoApoio).type(tipo)
    }
    addInfo(info) {
        cy.get(elApEvento.ELEMENTS.infoAdcEvento).type(info)
    }
    addContactEvento(ctEvento) {
        cy.get(elApEvento.ELEMENTS.contactEvento).type(ctEvento)
    }
    addtelContato(ctEvento) {
        cy.get(elApEvento.ELEMENTS.telContato).type(ctEvento)
    }
    matExtraEvento(extra) {
        cy.get(elApEvento.ELEMENTS.matExtraEvento).type(extra)
    }
}

export default new PedApoioEvento();