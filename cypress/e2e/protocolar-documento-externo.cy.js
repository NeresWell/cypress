Cypress._.times(1, () => {
    describe('Expediçao do SPED 3.0 para SPED 3.0', () => {
        beforeEach(() => {
            cy.visit('/')
            cy.login(Cypress.env('userName'), Cypress.env('password'))
            cy.title().should('eq', 'SPED 3.0')
            cy.get('h3').should('exist').and('have.text', 'Bem-vindo ao Sistema de Protocolo Eletrônico de Documentos do Exército Brasileiro')
            // cy.location('pathname').should('eq', '/home')
            // npx cypress run -- browser edge
            // {browser: 'edge'},
            // npx cypress open --config viewportWidth=375,viewport Height=667
        })

        // const tipoDocumento = ['DIEx', 'Requerimento', 'Ofício']
        const tipoDocumento = 'DIEx'
        const codigoTemporalidade = '001'
        const nomeAnexoExterno = 'example.json'

        it.only('Expedir DIEx com anexo interno sendo DIEx Simplificado', () => {
            cy.protocolarDocExterno()
            cy.getById('tipoNupRadBtn2').click()
            cy.getById('numero').type(`Cypress`)
            cy.getById('omOrigem').type(`OM Automatizada`)
            let contador = 0
            cy.getByName('tipoDocumento').click().find('li').each((item, index, list) => {
                // console.log(list[contador])
                cy.wrap(($tipoDocumento) => {

                }) 
                
                contador++
            })


            // cy.getById('tipoDocumento').click().find(`li:contains("${tipoDocumento}")`).eq(0).click()
            // cy.getById('assunto').type(`${tipoDocumento} Cypress`)
            // cy.getById('pesquisaRapidaTemporalidade').type(`${codigoTemporalidade}`)
            // cy.anexoExterno(`${nomeAnexoExterno}`)
        })
    })
})