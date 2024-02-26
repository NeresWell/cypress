import Perfil from '../../../../../support/pageObjects/perfis/perfil.po'
import Util from '../../../../../support/pageObjects/utils/utils.po'
import NotaBoletim from '../../../../../support/pageObjects/documentos/documentosComuns/notaBoletim.po'

Cypress._.times(1, () => {
    describe('Redigir Nota para Boletim', () => {
        beforeEach(() => {
            cy.visit('/')
            cy.login(Cypress.env('userName'), Cypress.env('password'))
            cy.title().should('eq', 'SPED 3.0')
            cy.get('h3').should('exist').and('have.text', 'Bem-vindo ao Sistema de Protocolo Eletrônico de Documentos do Exército Brasileiro')
        })

        it('Definir Perfil', () => {
            Perfil.setPerfil('Convencional (envia para Destinatário Externo)')
        })

        it('Redigir Nota para Boletim', () => {
            cy.redigirDocumentoEB('Nota para Boletim')
            Util.addAssunto('Nota para Boletim Validação')
            Util.setDestinatario('Conta de Teste')
            Util.urgencia('Urgentíssimo')
            NotaBoletim.setCampoDe('Cypress')
            Util.setTemporalidade('001')
            cy.conteudo('Receeeeeeeeeeeeeba!')
            NotaBoletim.setNrBoletim('001')
            NotaBoletim.setItemBoletim('Item 001')
            Util.btnSalvar()
        })
    })
})