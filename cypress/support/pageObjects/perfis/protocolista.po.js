const el = require('/git projects/cypress/cypress/support/elements/perfis/protocolista.elements')

class Protocolista {

    inputNumero(arg){
        cy.get(el.ELEMENTS.inputNumero).type(arg)
    }
}

export default new Protocolista();