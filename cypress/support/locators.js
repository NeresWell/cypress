const locators = {
    LOGIN_PAGE: {
        USUARIO: '[name="login"]',
        SENHA: '[type="password"]',
        BTN_LOGIN: '[id="entrar"]',
        BTN_ESQUECI_MINHA_SENHA: '[id="cancelar"]',
        MSG_FALHA: '[class="ui-growl-message"]',
    },

    PAGINA_INICIAL: {
        CAMPOS: {
            MSG_BEM_VINDO: '[class="mensagemBemVindo"]',
            AJUDA_SPED: '[href="http://sigadex.eb.mil.br"] > div',
            CONTA: {
                BNT: '[class="material-icons"]',
                ITENS: {
                    ATUALIZAR_CADASTRO: '//p-scrollpanel/div/div[1]/div/app-inline-profile/ul/li[1]/a/span',
                    TRANSFERIR_CONTA: '//p-scrollpanel/div/div[1]/div/app-inline-profile/ul/li[2]/a/span',
                    TROCAR_SENHA: '//p-scrollpanel/div/div[1]/div/app-inline-profile/ul/li[3]/a/span[1]',
                    BTN_SAIR: '[href="#/logout"] > i',
                },
            },
        },
        MODULO_PROCESSOS: {
            MEUS_PROCESSOS: '[href="#/meus-processos"] > div',
            A_RECEBER: '[href="#/processos-a-receber"] > div',
            ENCAMINHADOS: '[href="#/processos-encaminhados"] > div',
            EXPEDIDOS: '[href="#/processos-expedidos"] > div',
            ARQUIVADOS: '[href="#/processos-arquivados"] > div',
            DEVOLVIDOS: '[href="#/processos-devolvidos"] > div',
            CRIAR_PROCESSO: '[href="#/criacao-processo"] > div > div',
        },

        MODULO_DOCUMENTOS: {
            CAIXA_ENTRADA: '[href="#/caixa-entrada"] > div',
            PROVIDENCIA_RESOLVIDA: '[href="#/listar-providencia-resolvida"] > div',
            ENCAMINHADO_DESPACHADO: '[href="#/listar-pendentes"] > div',
            EM_ELABORACAO: '[href="#/documentos-em-elaboracao"] > div',
            PROTOCOLADOS: '[href="#/documentos-protocolados"] > div',
            EXPEDIDOS: '[href="#/listar-expedidos"] > div',
            ARQUIVADOS: '[href="#/listar-arquivados"] > div',
            INVALIDADOS: '[href="#/listar-invalidados"] > div',
            JA_LIDOS: '[href="#/sub-caixa/24"] > div',
            REDIGIR_DIEX: '[href="#/diex"] > div',
            REDIGIR_OFICIO: '[href="#/oficio-particular"] > div',
            REDIGIR_DIEX_SIMPLIFICADO: '[href="#/diex-simplificado"] > div',
        },

        MODULO_PENDENCIAS: {
            MINHAS_PENDENCIAS: '[href="#/relatorios/minhas-pendencias"] > div',
            DOCUMENTOS_COM_PRAZO: '[href="#/relatorios/com-prazo"] > div',
        },

        MODULO_USUARIO: {
            ATUALIZAR_CADASTRO: '//app-pagina-inicial/div/div/div[2]/div[3]/div[2]/div[2]/a[1]/div/div/div',
            TROCAR_SENHA: '//app-pagina-inicial/div/div/div[2]/div[3]/div[2]/div[2]/a[2]/div/div/div',
        },

        MODULO_SISTEMA: {
            LISTAR_OM: '[href="#/manter-om/visualizar/1/false"] > div',
            LISTAR_CONTAS: '[href="#/manter-conta"] > div',
            LISTAR_SECOES: '[href="#/manter-secao"] > div',
            LISTAR_USUARIOS: '[href="#/manter-pessoa"] > div',
        },
    },

    UTIL: {
        MINUTA_DOCUMENTO: {
            BTN_FECHAR: '[id="btnFechar"]',
            BTN_DESPACHAR_ENCAMINHAR: '[id="btnDespacharEncaminhar"]',
            BTN_EDITAR: '[id="btnEditar"]',
            BTN_IMPRIMIR: '[id="btnImprimir"]',
            BTN_CLONAR: '[id="btnCopiarClonar"]',
            BTN_ASSINAR: '[id="btnAssinarProtocolar"]',
            MSG_MINUTA: '[class="ui-growl-title"]',
        },
        DETALHES_DOCUMENTO: {
            BTN_HISTORICO: '[id="btnVerHistorico"]',
        },
        TIPO_ASSINATURA: {
            ELETRONICA: '[label="Assinatura Eletrônica"]',
            DIGITAL: '[label="Assinatura Digital"]',
            CHECKBOX_ENCAMINHAR: '[class="ui-chkbox ui-widget"]',
            BTN_CANCELAR: 'p-footer button[class*="btnCancelar "]',
            BTN_ASSINAR: 'p-footer button[class*="btnNovo "]',
            SENHA: '[name="senhaEletronica"]',
        },
    },

    MENU_CAIXA: {
        DOCUMENTO: {
            CAIXA_ENTRADA: {
                MOVER_PARA: 'p-dropdown[inputid="assunto"]',
                BTN_ENVIAR: 'p-button[label="Enviar"]',
                DOC_PRAZO_TRAMITACAO: 'p-button[class="txt-mover-para"]',
                VENCENDO_HJ: 'p-button[class="txt-status-lido"]',
                BTN_ASSINAR: 'button[name="btnAssinarProtocolar"]',
                BTN_ARQUIVAR: 'button[name="btnArquivar"]',
            },
        },
    },

    DOCUMENTO: {
        DOCUMENTO_COMUM: {
            DIEX: {
                ASSUNTO: '[id="txAssunto"]',
            },
            DIEX_SIMPLIFICADO: {

            },
            NOTA_BOLETIM: {

            },
            OFICIO: {

            },
            INF_REQUERIMENTO: {

            },
            REQUERIMENTO: {

            },
            DOC_2ASSINATURAS: {

            },
            DOCUMENTO_DIVERSO: {

            },
        },

        DOCUMENTO_ADM: {
            DESCARGA_MATERIAIS: {

            },
            PEDIDO_MATERIAL: {

            },
            PASSAGENS_DIARIAS: {

            },
            PEDIDO_APOIO_EVENTO: {

            },
            RELATORIO: {

            },
            AUT_RADIOGRAMA: {

            },
            RADIOGRAMA: {

            },
            SOLICITACAO_VIATURA: {

            },
        },
    },
    PROCESSO: {
        CRIAR_PROCESSO: {

        },
        MEUS_PROCESSOS: {

        },
        A_RECEBER: {

        },
        PROCESSO_ENCAMINHADO: {

        },
        PROCESSO_EXPEDIDO: {

        },
        PROCESSO_ARQUIVADO: {

        },
        PROCESSO_DEVOLVIDO: {

        },
    },
    RELATORIOS: {
        RELATORIO_PENDENCIAS: {

        },
        MINHAS_PENDENCIAS: {

        },
        DOCUMENTOS_ENVIADOS: {

        },
        DOCUMENTO_PRAZO: {

        },
        ESTATISTICAS_DESPACHO: {

        },
    },
    SISTEMA: {
        ORG_MILITAR: {

        },
        SECOES: {

        },
        CONTA: {

        },
        PESSOA: {

        },
        DESTINATARIO_EXTERNO: {

        },
        GRUPO_USUARIO: {

        },
    },
}

export default locators;