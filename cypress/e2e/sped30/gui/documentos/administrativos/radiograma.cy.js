import Perfil from '../../../../../support/pageObjects/perfis/perfil.po'
import Util from '../../../../../support/pageObjects/utils/utils.po'
import DescargaMateriais from '../../../../../support/pageObjects/documentos/documentosAdm/material.po'
import PedidoMaterial from '../../../../../support/pageObjects/documentos/documentosAdm/material.po'
import Radiograma from '../../../../../support/pageObjects/documentos/documentosAdm/radiograma.po'

Cypress._.times(1, () => {
    describe('Redigir Aut. de Radiogramas', () => {
        beforeEach(() => {
            cy.visit('/')
            cy.login(Cypress.env('userName'), Cypress.env('password'))
            cy.title().should('eq', 'SPED 3.0')
            cy.get('h3').should('exist').and('have.text', 'Bem-vindo ao Sistema de Protocolo Eletrônico de Documentos do Exército Brasileiro')
        })

        it('Definir Perfil', () => {
            Perfil.setPerfil('Convencional (envia para Destinatário Externo)')
        })

        it('Redigir Aut. de Radiogramas', () => {
            cy.redigirRadiograma()
            Util.addAssunto('Radiogramas Validação')
            Radiograma.setLinhaRadiograma('Palavras','Via a Seguir', '21:00', 'CDS')
            Util.setDestinatarioExterno('Órgão')
            Util.setTemporalidade('001')
            Util.btnSalvar()
            // PedidoMaterial.addLinha()
            // Radiograma.setLinhaAutRadiograma('Ordem', 'Arquivo', '001', 'PPPP', '9999','99')
        })
    })
})