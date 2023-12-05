Cypress._.times(1, () => {
    describe('Expediçao do SPED 3.0 para SPED 3.0', () => {
        beforeEach(() => {
            cy.visit('/')
            cy.login(Cypress.env('userName'), Cypress.env('password'))
            cy.title().should('eq', 'SPED 3.0')
            cy.get('h3').should('exist').and('have.text', 'Bem-vindo ao Sistema de Protocolo Eletrônico de Documentos do Exército Brasileiro')
            // cy.location('pathname').should('eq', '/home')
            // npx cypress run -- browser edge
            // {browser: 'edge'},
            // npx cypress open --config viewportWidth=375,viewport Height=667

        })

        const codigoTemporalidade = '001'
        const nomeAnexoExterno = 'example.json'

        const tipoDeDocumento = [
            'Encaminhamento',
            'DIEx',
            'Relatório',
            'Diex Simplificado',
            'Requerimento',
            'Documento Externo',
            'Despacho',
            'Termo',
            'Descarga Material',
            'Informação de Requerimento',
            'Pedido de Apoio em Evento',
            'Radiograma',
            'Pedido de Viatura',
            'Autorização de Radiograma',
            'Pedido de Material',
            'Pedido de Passagens e Diárias',
            'Documento com 2+ Assinaturas',
            'Fax',
            'Documento Externo à Unidade',
            'Ofício Particular',
            'Memorando',
            'MDO',
            'Ofício restrito',
            'Outro',
            'Parte',
            'Remessa',
            'Restituição',
            'Boletim',
            'Calendário',
            'Carta',
            'Estudo',
            'Guia de Recolhimento',
            'Informação',
            'Memória',
            'Mensagem',
            'Mensagem SIAFI',
            'Nota',
            'Nota Informativa',
            'Ordem de Fornecimento',
            'Ordem de Instrução',
            'Ordem de Recolhimento',
            'Ordem de Serviço',
            'Ordem de Transferência',
            'Parecer',
            'Portaria',
            'Processo',
            'Requisição',
            'Acordo',
            'Acordo de Cooperação',
            'Acordo de Cooperação Bilateral',
            'Ata',
            'Ata de Reunião',
            'Atestado',
            'Boletim Especial de Acesso Restrito',
            'Boletim de Acesso Restrito',
            'Boletim Interno',
            'Caderno',
            'Caderno de Instrução',
            'Certidão',
            'Contrato',
            'Ofício',
            'Nota para Boletim',
            'Convênio',
            'Declaração',
            'Diretriz',
            'Formulário',
            'Formulário Padronizado',
            'Glossário',
            'Instrução Normativa',
            'Instruções Gerais',
            'Instruções Reguladoras',
            'Instrumento de Parceria',
            'Manual',
            'Manual de Campanha',
            'Manual de Ensino',
            'Manual Técnico',
            'Memória para Decisão',
            'Memorando de Entendimento',
            'Norma',
            'Nota de Dotação',
            'Nota do Comandante do Exército',
            'Nota Técnica',
            'Nota de Crédito',
            'Nota de Empenho',
            'Catálogo',
            'Nota de Lançamento',
            'Parecer de Mérito',
            'Parecer Técnico',
            'Parecer Jurídico',
            'Plano',
            'Plano Operacional',
            'Plano não Operacional',
            'Política',
            'Protocolo de Intenções',
            'Programa',
            'Regimento',
            'Regulamento',
            'Termo de Compromisso',
            'Termo de Compromisso de Sigilo',
            'Termo de Inquirição de Sindicado',
            'Termo de Inquirição de Testemunha',
            'Termo de Referência',
            'Vade – Mécum',
            'Passagem de Carga',
            'Transferência de Carga',
            'Estudo de Viabilidade',
            'Formulário de Apuração de Transgressão Disciplinar',
            'Declaração de Beneficiários',
            'Documento de Oficialização de Demanda',
            'Estudo Técnico Preliminar',
            'Análise de Riscos',
            'Projeto Básico',
            'Requisitos',
            'Requisitos Operacionais Básicos',
            'Requisitos Técnicos',
            'Quadro de Trabalho Mensal',
            'Quadro de Trabalho Semanal',
            'Quadro de Trabalho Quinzenal'
        ]

        tipoDeDocumento.forEach(tipo => {
            it(`Protocolar ${tipo} Externo`, () => {
                cy.protocolarDocExterno()
                cy.getById('tipoNupRadBtn2').click()
                cy.getById('numero').type(`Cypress`)
                cy.getById('omOrigem').type(`OM Automatizada`)
    
                cy.getById('tipoDocumento').click().find(`li:contains("${tipo}")`).eq(0).click()
                cy.getById('assunto').type(`${tipo} Cypress`)
                cy.getById('pesquisaRapidaTemporalidade').type(`${codigoTemporalidade}`)
                cy.anexoExterno(`${nomeAnexoExterno}`)
                cy.contains('button', 'Salvar').click()
                cy.reload()
                cy.assertDocExternoProtocolado(tipo)
            })
        })
    })
})