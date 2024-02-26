import Perfil from '../../../../../support/pageObjects/perfis/perfil.po'
import Util from '../../../../../support/pageObjects/utils/utils.po'
import Requerimento from '../../../../../support/pageObjects/documentos/documentosComuns/requerimento.po'
import Relatorio from '../../../../../support/pageObjects/documentos/documentosAdm/relatorio.po'

Cypress._.times(1, () => {
    describe('Redigir Relatório', () => {
        beforeEach(() => {
            cy.visit('/')
            cy.login(Cypress.env('userName'), Cypress.env('password'))
            cy.title().should('eq', 'SPED 3.0')
            cy.get('h3').should('exist').and('have.text', 'Bem-vindo ao Sistema de Protocolo Eletrônico de Documentos do Exército Brasileiro')
        })

        it('Definir Perfil', () => {
            Perfil.setPerfil('Convencional (envia para Destinatário Externo)')
        })

        it('Redigir Relatório', () => {
            cy.redigirDocumentoAdm('Relatório')
            Util.addAssunto('Relatório Validação')
            Util.setTemporalidade('001')
            Relatorio.addOrigem('Origem')
            Relatorio.addReferencia('Referência')
            cy.conteudo('Receeeeeeeeeeba 01!')
            cy.conteudo2('Receeeeeeeeeeba 02!')
            Requerimento.setContaUsuario('Nascimento')
            Relatorio.addDespacho('Despacho')
            Util.btnSalvar()
            // Util.setDestinatario('Nascimento')
            // PedidoMaterial.addPedidoMaterial('Especificação', 10, 5, 'Observação')
            // PedidoMaterial.setData('01','janeiro',1970)
            // PedidoMaterial.btnSalvar()
            // DescargaMateriais.addMaterial('Especificação','Duração','10','15','Observação')
            // DescargaMateriais.setNrParecer('001')
            // DescargaMateriais.setRemetente('admin')
            // DescargaMateriais.setDestinatario('Pedro Elias')

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