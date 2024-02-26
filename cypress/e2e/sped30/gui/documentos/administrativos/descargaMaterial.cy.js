import Perfil from '../../../../../support/pageObjects/perfis/perfil.po'
import Util from '../../../../../support/pageObjects/utils/utils.po'
import DescargaMateriais from '../../../../../support/pageObjects/documentos/documentosAdm/material.po'

Cypress._.times(1, () => {
    describe('Redigir Descarga de Materiais', () => {
        beforeEach(() => {
            cy.visit('/')
            cy.login(Cypress.env('userName'), Cypress.env('password'))
            cy.title().should('eq', 'SPED 3.0')
            cy.get('h3').should('exist').and('have.text', 'Bem-vindo ao Sistema de Protocolo Eletrônico de Documentos do Exército Brasileiro')
        })

        it('Definir Perfil', () => {
            Perfil.setPerfil('Convencional (envia para Destinatário Externo)')
        })

        it('Redigir Descarga de Materiais', () => {
            cy.redigirDocumentoAdm('Descarga de Materiais')
            Util.setDestinatario('Nascimento')
            DescargaMateriais.addMaterial('Especificação','Duração','10','15','Observação')
            Util.setTemporalidade('001')
            DescargaMateriais.setNrParecer('001')
            DescargaMateriais.setRemetente('Conv Dest Ext Admin')
            DescargaMateriais.setDestinatario('Conv Dest Ext')
            DescargaMateriais.btnSalvar()
            // Util.urgencia('Urgentíssimo')
            // Util.setSexoRemetente('Da')
            // Util.setSexoDestinatario('À Sra')
            // Util.setDestinatarioExterno('Órgão')
            // Util.addReferenciaSped('DIEx')
            // Util.addAssunto('DIEx Validação')
            // Util.addAnexoSped('DIEx')
            // Util.addReferencia('Referência Adicionada')
            // cy.anexoExterno('example.json')
            // cy.conteudo('Receeeeeeeeeeeeeba!')
            // Util.noImpedimento('Nascimento')
            // Util.assDelegacaoOp2('Nascimento')
        })
    })
})