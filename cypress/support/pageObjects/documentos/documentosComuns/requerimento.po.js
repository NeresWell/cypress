const el = require('../../../elements/util/utils.elements')
const elRequerimento = require('../../../elements/documentos/documentosComuns/requerimento.elements')

class Requerimento {
    addAssuntoRequerimento(assunto) {
        cy.get(elRequerimento.ELEMENTS.addAssuntoInfRequerimento).type(assunto)
    }
    addObjetoRequerimento(objeto) {
        cy.get(elRequerimento.ELEMENTS.objeto).type(objeto)
    }
    setDiasOm(dias) {
        cy.get(elRequerimento.ELEMENTS.setDiasOM).type(dias)
    }
    setUsuario(conta) {
        cy.get(elRequerimento.ELEMENTS.usuariosDisponiveis).click()
        cy.contains('li', `${conta}`).click()
        cy.get(elRequerimento.ELEMENTS.campoPostGrad).should('be.visible')
        cy.get(elRequerimento.ELEMENTS.campoNome).should('be.visible')
        cy.get(elRequerimento.ELEMENTS.campoFuncao).should('be.visible')
    }
    setContaUsuario(conta) {
        cy.get(elRequerimento.ELEMENTS.usuariosDisponiveis).click()
        cy.contains('li', `${conta}`).click()
    }
    addDestExtNaoCadastrado(destinatario) {
        cy.get(elRequerimento.ELEMENTS.destExtNaoCadastrado).click()
        cy.get(elRequerimento.ELEMENTS.nomeDestExtNaoCadastrado).type(destinatario)
    }
}

export default new Requerimento();