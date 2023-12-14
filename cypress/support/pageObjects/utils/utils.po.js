const el = require('../../elements/util/utils.elements')

class Util {
    salvarDocumento() {
        cy.get(el.ELEMENTS.salvar).click()
    }
    paginaInicial(){
        cy.contains('span', 'Página Inicial').click()
    }
}

export default new Util();