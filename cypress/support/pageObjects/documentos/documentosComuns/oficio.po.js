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
    setInfoDestExterno(formaTratamentoDestinatario, postoDestinatario, nomeDestinatario, cargoDestinatario, omDestinatario, enderecoDestinatario, cepDestinatario, cidadeDestinatario, estadoDestinatario) {
        cy.get(el.ELEMENTS.formaTratamentoDestinatario).type(formaTratamentoDestinatario)
        cy.get(el.ELEMENTS.postoDestinatario).type(postoDestinatario)
        cy.get(el.ELEMENTS.nomeDestinatario).type(nomeDestinatario)
        cy.get(el.ELEMENTS.cargoDestinatario).type(cargoDestinatario)
        cy.get(el.ELEMENTS.omDestinatario).type(omDestinatario)
        cy.get(el.ELEMENTS.enderecoDestinatario).type(enderecoDestinatario)
        cy.get(el.ELEMENTS.cepDestinatario).type(cepDestinatario)
        cy.get(el.ELEMENTS.cidadeDestinatario).type(cidadeDestinatario)
        cy.get(el.ELEMENTS.estadoDestinatario).type(estadoDestinatario)
    }
}

export default new Oficio();