import { faker } from '@faker-js/faker'
import Util from '../../support/pageObjects/utils/utils.po'

describe('Logout', () => {
    beforeEach(() => {
        cy.login()
    })

    it('expedição entre sped 3.0', () => {
        // criar um documento para dest. externo
        cy.get('[href="#/diex"] > div').click()
        Util.urgencia('Urgentíssimo')
        Util.setSexoRemetente('Da')
        Util.setSexoDestinatario('À Sra')
        Util.setDestinatarioExterno('VM 37')
        Util.addAssunto(faker.string.uuid())
        Util.setTemporalidade('001')

        // Util.addReferenciaSped('DIEx')
        // Util.addAnexoSped('DIEx')
        Util.addReferencia('Referência Adicionada')

        cy.anexoExterno('example.json')
        cy.conteudo('Receeeeeeeeeeeeeba!')

        // Util.btnSalvar()
        // Util.verificaMsgSalvarDocumento()

        // verificar expedição

        // acessar outro sped 3.0

        // verificar recebimento
        cy.log('verifique o documento na OM destino')
    })
})