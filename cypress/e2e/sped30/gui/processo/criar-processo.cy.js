import Utils from '../../../support/pageObjects/utils/utils.po';
import Processo from '../../../support/pageObjects/processos/criar-processo.po';
import { faker } from '@faker-js/faker';

describe('Módulo Processos', () => {
    beforeEach(() => {
        cy.login()
    })

    it('Criar Processo', () => {
        cy.get('h3').should('contain', 'Bem-vindo')
        cy.visit({
            url: '/#/criacao-processo',
            method: 'GET',
        })

        Utils.setTemporalidade('001')

        const processo = {
            name: `processo-${faker.string.uuid()}`,
            description: faker.word.words(5),
            interessado: faker.internet.userName(),
        }
        Processo.criaProcesso(processo)
    })
})
