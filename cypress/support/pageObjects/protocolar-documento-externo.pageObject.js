const el = require('../elements/documentos/protocolar-documento-externo.elements')

class ProtocolarDocumentoExterno {

    inputText(arg){
        cy.get(el.ELEMENTS.inputNumero).type(arg)
    }
}

export default new ProtocolarDocumentoExterno();