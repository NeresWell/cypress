import Perfil from '../../../../../support/pageObjects/perfis/perfil.po'
import Util from '../../../../../support/pageObjects/utils/utils.po'

Cypress._.times(1, () => {
    describe('Redigir DIEx Simples', () => {
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

        it('Definir Perfil', () => {
            Perfil.setPerfil('Convencional (envia para Destinatário Externo)')
        })

        it('Redigir DIEx Simples', () => {
            cy.redigirDocumentoEB('DIEx Simplificado')
            Util.setSexoDestinatario('À Sra')
            Util.setDestinatario('Conta de Teste')
            Util.addAssunto('DIEx Simples Validação')
            Util.setTemporalidade('001')
            Util.addReferencia('Referência Adicionada')
            cy.anexoExterno('example.json')
            cy.conteudo('Receeeeeeeeeeeeeba!')
            Util.noImpedimento('Nascimento')
            Util.btnSalvar()
        })
    })
})