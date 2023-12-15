const el = require('../../elements/util/utils.elements')

class Util {
    salvarDocumento() {
        cy.get(el.ELEMENTS.salvar).eq(1).click()
    }
    paginaInicial(){
        cy.contains('span', 'Página Inicial').click()
    }
}

export default new Util();