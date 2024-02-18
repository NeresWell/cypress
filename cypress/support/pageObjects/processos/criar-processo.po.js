const elPerfil = require('../../../support/elements/perfis/perfil.elements')
const elCriarProcesso = require('../../elements/processos/criar-processo.elements')

class CriarProcesso {
    criaProcesso(input) {
        cy.get(elCriarProcesso.ELEMENTS.assunto).type(input.name)
        cy.get(elCriarProcesso.ELEMENTS.observacaoPertinente).type(input.description)
        cy.get(elCriarProcesso.ELEMENTS.interessados).type(input.interessado)
        cy.get(elCriarProcesso.ELEMENTS.buscarDocumento).click()
        cy.get(elCriarProcesso.ELEMENTS.pesquisar).click()
    }
}

export default new CriarProcesso();