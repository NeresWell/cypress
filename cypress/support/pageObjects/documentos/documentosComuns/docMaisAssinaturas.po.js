const elMaisAssinaturas = require('../../../elements/documentos/documentosComuns/docMaisAssinaturas.elements')

class docMaisAssinaturas {
    setTipoDocumento(tipo) {
        cy.get(elMaisAssinaturas.ELEMENTS.tipoDocumento).click()
        cy.contains('li > span', `${tipo}`).eq(0).should('exist').click()
    }
    setAssinantePrincipal(assinante) {
        cy.get(elMaisAssinaturas.ELEMENTS.assinantePrincipal).click()
        cy.contains('li > span', `${assinante}`).eq(0).click()
        
    }
    addDemaisAssinantes(assinante) {
        cy.get(elMaisAssinaturas.ELEMENTS.demaisAssinante).click()
        cy.contains('p-multiselectitem > li', `${assinante}`).eq(0).should('exist').click()
    }
}

export default new docMaisAssinaturas();