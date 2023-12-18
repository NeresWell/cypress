import ProtocolarDocumentoExterno from '../../../support/pageObjects/documentos/inserirDocumentosNUP/protocolarDocExt.po'
import Perfil from '../../../support/pageObjects/perfis/perfil.po'
import Util from '../../../support/pageObjects/utils/utils.po'
import DocMaisAssinaturas from '../../../support/pageObjects/documentos/documentosComuns/docMaisAssinaturas.po'

Cypress._.times(1, () => {
    describe('Documentos Diversos', () => {
        beforeEach(() => {
            cy.visit('/')
            cy.login(Cypress.env('userName'), Cypress.env('password'))
            cy.title().should('eq', 'SPED 3.0')
            cy.get('h3').should('exist').and('have.text', 'Bem-vindo ao Sistema de Protocolo Eletrônico de Documentos do Exército Brasileiro')
        })

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
        it('Definir Perfil', () => {
            Perfil.setPerfil('Convencional (envia para Destinatário Externo)')
        })

        tipoDeDocumento.forEach(tipo => {
            it(`Protocolar ${tipo} Externo`, () => {
                cy.redigirDocumentoEB('Documentos Diversos')
                DocMaisAssinaturas.setTipoDocumento(tipo)
                Util.addAssunto(`Documento: ${tipo}`)
                Util.setTemporalidade('001')
                Util.addReferencia('Referência Adicionada')
                cy.conteudo('Receeeeeeeeeeeeeba carai!')
                DocMaisAssinaturas.setAssinantePrincipal('admin')
                Util.btnSalvar()
                // ProtocolarDocumentoExterno.tipoDocumento(tipo)
                // ProtocolarDocumentoExterno.prioridade('Urgente')
                // ProtocolarDocumentoExterno.addAssunto(tipo)
                // Util.setTemporalidade(codigoTemporalidade)
                // cy.anexoExterno(nomeAnexoExterno)
                // Util.salvarDocumentoExternoProtocolado()
                // Util.paginaInicial()
                // cy.assertDocExternoProtocolado(tipo)
            })
        })

        it.only('Documento Diversos', () => {
            cy.redigirDocumentoEB('Documentos Diversos')
            DocMaisAssinaturas.setTipoDocumento('Processo')
            Util.addAssunto(`Processo Diverso Validação`)
            Util.setTemporalidade('001')
            Util.addReferencia('Referência Adicionada')
            cy.conteudo('Receeeeeeeeeeeeeba!')
            DocMaisAssinaturas.setAssinantePrincipal('admin')
            Util.btnSalvar()
        })
    })
})