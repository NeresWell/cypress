import Perfil from '../../../support/pageObjects/perfis/perfil.po'
import Util from '../../../support/pageObjects/utils/utils.po'
import Oficio from '../../../support/pageObjects/documentos/documentosComuns/oficio.po'
import PedApoioEvento from '../../../support/pageObjects/documentos/documentosAdm/pedApoioEvento.po'

Cypress._.times(1, () => {
    describe('Redigir Ped. de Apoio a Evento', () => {
        beforeEach(() => {
            cy.visit('/')
            cy.login(Cypress.env('userName'), Cypress.env('password'))
            cy.title().should('eq', 'SPED 3.0')
            cy.get('h3').should('exist').and('have.text', 'Bem-vindo ao Sistema de Protocolo Eletrônico de Documentos do Exército Brasileiro')
        })

        it('Definir Perfil', () => {
            Perfil.setPerfil('Convencional (envia para Destinatário Externo)')
        })

        it('Redigir Ped. de Apoio a Evento', () => {
            cy.redigirDocumentoAdm('Ped. de Apoio a Evento')
            Util.setDestinatario('Nascimento')
            Oficio.addAssunto('Ped. de Apoio a Evento Validação')
            PedApoioEvento.natureza('Recepção')
            PedApoioEvento.setData()
            PedApoioEvento.setHora('21:00')
            PedApoioEvento.setLocal('Sol')
            PedApoioEvento.setNumeroEfetivo(50)
            PedApoioEvento.presencaDe('Of. General')
            PedApoioEvento.AddDadosAdcEfetivo('Dados Adicionais')
            PedApoioEvento.setTipoApoio('Apoio de Teste')
            PedApoioEvento.addInfo('Informação Adicional Incluída')
            PedApoioEvento.addContactEvento('61 9 9999 8888')
            PedApoioEvento.addtelContato('61 9 9999 8888')
            PedApoioEvento.matExtraEvento('Material Extra')
            Util.setTemporalidade('001')
            Util.btnSalvar()
        })
    })
})