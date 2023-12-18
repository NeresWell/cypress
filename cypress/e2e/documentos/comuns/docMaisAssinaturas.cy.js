import Perfil from '../../../support/pageObjects/perfis/perfil.po'
import Util from '../../../support/pageObjects/utils/utils.po'
import DocMaisAssinaturas from '../../../support/pageObjects/documentos/documentosComuns/docMaisAssinaturas.po'

Cypress._.times(1, () => {
    describe('Redigir Doc 2+ Assinaturas', () => {
        beforeEach(() => {
            cy.visit('/')
            cy.login(Cypress.env('userName'), Cypress.env('password'))
            cy.title().should('eq', 'SPED 3.0')
            cy.get('h3').should('exist').and('have.text', 'Bem-vindo ao Sistema de Protocolo Eletrônico de Documentos do Exército Brasileiro')
        })

        it('Definir Perfil', () => {
            Perfil.setPerfil('Convencional (envia para Destinatário Externo)')
        })

        it('Redigir Doc 2+ Assinaturas', () => {
            cy.redigirDocumentoEB('Doc. 2+ Assinaturas')
            DocMaisAssinaturas.setTipoDocumento('Processo')
            Util.addAssunto('Doc 2+ Assinaturas Validação')
            Util.setTemporalidade('001')
            Util.addAnexoSped('DIEx')
            cy.anexoExterno('example.json')
            cy.conteudo('Receeeeeeeeeeeeeba!')
            DocMaisAssinaturas.setAssinantePrincipal('admin')
            DocMaisAssinaturas.addDemaisAssinantes('Freixo')
            Util.btnSalvar()
            // Util.urgencia('Urgentíssimo')
            // Util.setSexoRemetente('Da')
            // Util.setSexoDestinatario('À Sra')
            // Util.setDestinatario('Conta de Teste')
            // Util.setDestinatarioExterno('Órgão')
            // Util.addReferenciaSped('DIEx')
            // Util.addReferencia('Referência Adicionada')
            // Util.noImpedimento('Nascimento')
            // Util.assDelegacaoOp2('Nascimento')
        })
    })
})