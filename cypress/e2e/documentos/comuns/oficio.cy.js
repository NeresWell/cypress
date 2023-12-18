import Perfil from '../../../support/pageObjects/perfis/perfil.po'
import Util from '../../../support/pageObjects/utils/utils.po'
import Oficio from '../../../support/pageObjects/documentos/documentosComuns/oficio.po'

Cypress._.times(1, () => {
    describe('Redigir Ofício', () => {
        beforeEach(() => {
            cy.visit('/')
            cy.login(Cypress.env('userName'), Cypress.env('password'))
            cy.title().should('eq', 'SPED 3.0')
            cy.get('h3').should('exist').and('have.text', 'Bem-vindo ao Sistema de Protocolo Eletrônico de Documentos do Exército Brasileiro')
        })

        it('Definir Perfil', () => {
            Perfil.setPerfil('Convencional (envia para Destinatário Externo)')
        })

        it('Redigir Oficio', () => {
            cy.redigirDocumentoEB('Ofício')
            Util.urgencia('Urgentíssimo')
            Util.setDestinatario('Órgão')
            Oficio.addAssunto('Ofício Validação')
            Util.setTemporalidade('001')
            Oficio.addVocativo('Vocativo')
            cy.conteudo('Receeeeeeeeeeeeeba!')
            Oficio.addFechoCortesiaOficio('Fecho de Cortesia')
            // Oficio.oficioNoImpedimento('Convencional')
            Oficio.setRemetente('Convencional')
            Util.btnSalvar()
        })
    })
})