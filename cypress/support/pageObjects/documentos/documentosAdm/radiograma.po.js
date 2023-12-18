const el = require('../../../elements/util/utils.elements')
const elRadiograma = require('../../../elements/documentos/documentosAdm/radiograma.elements')

class Radiograma {
    setLinhaAutRadiograma(ordem, arquivo, numero, p, omDestino, qtdRadiograma) {
        cy.get(elRadiograma.ELEMENTS.ordem).type(ordem)
        cy.get(elRadiograma.ELEMENTS.arquivo).type(arquivo)
        cy.get(elRadiograma.ELEMENTS.numero).type(numero)
        cy.get(elRadiograma.ELEMENTS.p).type(p)
        cy.get(elRadiograma.ELEMENTS.omDestino).type(omDestino)
        cy.get(elRadiograma.ELEMENTS.qtdRadiograma).type(qtdRadiograma)
    }
    setLinhaRadiograma(palavrasRadiograma, viaSeguir, hrTransmissao, iniciaisOperador) {
        cy.get(elRadiograma.ELEMENTS.palavrasRadiograma).type(palavrasRadiograma)
        cy.get(elRadiograma.ELEMENTS.viaSeguir).type(viaSeguir)
        cy.get(elRadiograma.ELEMENTS.hrTransmissao).type(hrTransmissao)
        cy.get(elRadiograma.ELEMENTS.iniciaisOperador).type(iniciaisOperador)
    }
}

export default new Radiograma();