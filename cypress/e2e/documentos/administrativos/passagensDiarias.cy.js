import Perfil from '../../../support/pageObjects/perfis/perfil.po'
import Util from '../../../support/pageObjects/utils/utils.po'
import PedidoMaterial from '../../../support/pageObjects/documentos/documentosAdm/material.po'
import PassagensDiarias from '../../../support/pageObjects/documentos/documentosAdm/passagensDiarias.po'

Cypress._.times(1, () => {
    describe('Redigir Passagens e Diárias', () => {
        beforeEach(() => {
            cy.visit('/')
            cy.login(Cypress.env('userName'), Cypress.env('password'))
            cy.title().should('eq', 'SPED 3.0')
            cy.get('h3').should('exist').and('have.text', 'Bem-vindo ao Sistema de Protocolo Eletrônico de Documentos do Exército Brasileiro')
        })

        it('Definir Perfil', () => {
            Perfil.setPerfil('Convencional (envia para Destinatário Externo)')
        })

        it('Redigir Passagens e Diárias', () => {
            cy.redigirDocumentoAdm('Passagens e Diárias')
            PassagensDiarias.primeiraParte('9999','Nr 001')
            PassagensDiarias.segundaParte('Nascimento','61-0000-0000','001','Nome Banco','1234','4321')
            PassagensDiarias.terceiraParteOutros('Outros', 'Identificação da viagem', 'Referência da seção')
            PassagensDiarias.quartaParte('Identificação da viagem','Referência Seção','Roteiro', 'C Mil A', 'Nome Guarnição','Nome OM Visitada')
            PassagensDiarias.quintaParte('Itinerário Completo', 'BI N° 001')
            PassagensDiarias.sextaParte('Evento a Ser Realizado', 'Objetivo do beneficiário no evento')
            PassagensDiarias.setimaParte('Justificativa')
            PassagensDiarias.oitavaParte('10', '10', 'Localidade', '999', '999', 'Tantos Reais')
            PassagensDiarias.nonaParte()
            PassagensDiarias.decimaParte('21/11/2023', '999', 'Tantos Reais')
            PassagensDiarias.decimaPrimeiraParte('Nascimento')
            PassagensDiarias.decimaSegundaParte('Nascimento')
            PassagensDiarias.decimaTerceiraParte('Nascimento', 'N° 001', 'Destino', 'Observação')
            Util.setTemporalidade('001')
            Util.btnSalvar()
        })
    })
})