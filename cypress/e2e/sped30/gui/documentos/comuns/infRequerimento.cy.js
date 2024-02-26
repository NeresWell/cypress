import Perfil from '../../../../../support/pageObjects/perfis/perfil.po'
import Util from '../../../../../support/pageObjects/utils/utils.po'
import Requerimento from '../../../../../support/pageObjects/documentos/documentosComuns/requerimento.po'

Cypress._.times(1, () => {
    describe('Redigir Inf de Requerimento', () => {
        beforeEach(() => {
            cy.visit('/')
            cy.login(Cypress.env('userName'), Cypress.env('password'))
            cy.title().should('eq', 'SPED 3.0')
            cy.get('h3').should('exist').and('have.text', 'Bem-vindo ao Sistema de Protocolo Eletrônico de Documentos do Exército Brasileiro')
        })

        it('Definir Perfil', () => {
            Perfil.setPerfil('Convencional (envia para Destinatário Externo)')
        })

        it('Redigir Inf de Requerimento', () => {
            cy.redigirDocumentoEB('Inf. de Requerimento')
            Util.setSexoDestinatario('À Sra')
            Util.setDestinatario('Conta de Teste')
            Requerimento.addAssuntoRequerimento('Inf de Requerimento Validação')
            Util.setTemporalidade('001')
            cy.conteudo('Receeeeeeeeeeeeeba!')
            cy.conteudo2('Receeeeeeeeeeeeeba!')
            cy.conteudo3('Receeeeeeeeeeeeeba!')
            Requerimento.setDiasOm('05 dias')
            Requerimento.setUsuario('Nascimento')
            Util.btnSalvar()
        })
    })
})