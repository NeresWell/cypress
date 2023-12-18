import Perfil from '../../../support/pageObjects/perfis/perfil.po'
import Util from '../../../support/pageObjects/utils/utils.po'
import SolicitacaoViatura from '../../../support/pageObjects/documentos/documentosAdm/solicitacaoViatura.po'
import PedidoMaterial from '../../../support/pageObjects/documentos/documentosAdm/material.po'
import PassagensDiarias from '../../../support/pageObjects/documentos/documentosAdm/passagensDiarias.po'

Cypress._.times(1, () => {
    describe('Redigir Solicitação de Viatura', () => {
        beforeEach(() => {
            cy.visit('/')
            cy.login(Cypress.env('userName'), Cypress.env('password'))
            cy.title().should('eq', 'SPED 3.0')
            cy.get('h3').should('exist').and('have.text', 'Bem-vindo ao Sistema de Protocolo Eletrônico de Documentos do Exército Brasileiro')
        })

        it('Definir Perfil', () => {
            Perfil.setPerfil('Convencional (envia para Destinatário Externo)')
        })

        it('Redigir Solicitação de Viatura', () => {
            cy.redigirDocumentoAdm('Solicitação de Viatura')
            Util.setDestinatario('Conta de Teste')
            SolicitacaoViatura.addAssuntoSolicitacaoViatura('Solicitação de Viatura Validação')
            PedidoMaterial.addLinha()
            SolicitacaoViatura.addLinhaSolicitacaoViatura('21:00', 'Itaquera', 'Segurança')
            Util.addAssunto('Obs Solicitação de Viatura Validação')
            SolicitacaoViatura.addTxtAo('Ao Militar')
            Util.setTemporalidade('001')
            Util.btnSalvar()
        })
    })
})