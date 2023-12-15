const elPerfil = require('../../../support/elements/perfis/perfil.elements')

class Perfil {
    setPerfil(tipoPerfil){
        cy.get('h4').then((h4) => {
            if(h4.text().includes(tipoPerfil)){
                return cy.log(`Perfil ${tipoPerfil} Selecionado`)
            } else {
                cy.get(elPerfil.ELEMENTS.contasUsuario).eq(0).click()
                cy.get('span').contains(`(${tipoPerfil})`).should('exist').click()
            }
        })
    }
}

export default new Perfil();