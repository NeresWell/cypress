import { faker } from '@faker-js/faker'
import Util from '../../../support/pageObjects/utils/utils.po'
import locators from '../../../support/locators'
import Perfil from '../../../support/pageObjects/perfis/perfil.po'

describe('Logout', () => {
    beforeEach(() => {
        cy.login()
    })

    it('Definir Perfil', () => {
        Perfil.setPerfil('Convencional (envia para Destinatário Externo)')
    })

    it('expedição entre sped 3.0', () => {
        // criar um documento para dest. externo
        cy.get(locators.PAGINA_INICIAL.MODULO_DOCUMENTOS.REDIGIR_DIEX).click()
        Util.urgencia('Urgentíssimo')
        Util.setSexoRemetente('Da')
        Util.setSexoDestinatario('À Sra')
        Util.setDestinatarioExterno('VM 37')
        cy.get(locators.DOCUMENTO.DOCUMENTO_COMUM.DIEX.ASSUNTO).clear().type(faker.string.uuid())
        Util.setTemporalidade('001')

        // Util.addReferenciaSped('DIEx')
        // Util.addAnexoSped('DIEx')
        Util.addReferencia('Referência Adicionada')

        cy.anexoExterno('example.json')
        cy.conteudo('Receeeeeeeeeeeeeba!')

        Util.btnSalvar()
        cy.get(locators.UTIL.MINUTA_DOCUMENTO.BTN_ASSINAR).click()
        cy.get(locators.UTIL.TIPO_ASSINATURA.ELETRONICA).click()
        cy.get(locators.UTIL.TIPO_ASSINATURA.BTN_ASSINAR).click()
        cy.get(locators.UTIL.TIPO_ASSINATURA.SENHA).clear().type(Cypress.env('sped_electronic_password'))
        cy.get(locators.UTIL.TIPO_ASSINATURA.BTN_ASSINAR).eq(1).click()
        // verificar expedição
        cy.wait(5000)
        cy.get(locators.UTIL.DETALHES_DOCUMENTO.BTN_HISTORICO).click()
        cy.contains('span', '✓Expedido via Módulo Integrador').should('be.visible')

        // verificar recebimento
        cy.log('verifique o documento na OM destino')
    })
})