import Perfil from '../../../support/pageObjects/perfis/perfil.po'
import Util from '../../../support/pageObjects/utils/utils.po'

Cypress._.times(1, () => {
    describe('Redigir DIEx', () => {
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

        it('Redigir DIEx', () => {
            cy.redigirDocumentoEB('DIEx')
            Util.urgencia('Urgentíssimo')
            // Util.setSexoRemetente('Da')
            // Util.setSexoDestinatario('À Sra')
            // Util.setDestinatario('Conta de Teste')
            // Util.setDestinatarioExterno('Órgão')
            // Util.addReferenciaSped('DIEx')
            Util.addAssunto('DIEx Validação')
            Util.setTemporalidade('001')
            // Util.addAnexoSped('DIEx')
            // Util.addReferencia('Referência Adicionada')
            cy.anexoExterno('example.json')
            cy.conteudo('Receeeeeeeeeeeeeba!')
            // Util.noImpedimento('Nascimento')
            Util.assDelegacaoOp2('Nascimento')
            Util.btnSalvar()
        })
    })
})