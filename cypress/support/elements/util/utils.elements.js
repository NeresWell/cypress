export const ELEMENTS = {
    assunto: 'textarea[id="txAssunto"]', // ok
    temporalidade: 'p-dropdown[id="pesquisaRapidaTemporalidade"]', // ok
    salvar: 'button[id="btnSalvar"]', // ok
    btnRemetente: 'button[id="btnRemetente"]', // ok
    btnDestinatario: 'button[id="btnDestinatarios"]', // ok
    btnDestinatarioExterno: 'button[id="btnDestinatariosExternos"]', // ok
    btnConcluir: 'button[name="btnConcluirSelecionarUsuario"]', // ok
    sexoRemetente: 'p-dropdown[id="sexoRemetente"]', // ok
    sexoDestinatario: 'p-dropdown[id="sexoDestinatario"]', // ok
    urgencia: 'p-checkbox[id="urgente"]', // ok
    nivelUrgencia: 'p-dropdown[id="nbUrgenteDrop"]', // ok
    btnReferenciarDocumentoSped: 'button[id="btnAnexoReferencia"]', // ok
    btnAnexarDocumentoSped: 'button[id="btnAnexarDocSped"]', // ok

    btnAddReferencia: 'button[id="btnAddReferencia"]', // ok
        btnPesquisar: 'button[id="pesquisar"]', // ok
        btnAddReferenciaSped: 'button[id="adicionarDoc"]', // ok
        btnConcluirReferenciaSped: 'button[id="incluirDoc"]', // ok
    btnImpedimento: 'p-checkbox[id="isImpedimento"]', // ok
    listaImpedimento: 'p-dropdown[id="usuariosdisp"]', // ok
    btnAssDelegacao: 'p-checkbox[id="possuiAssinaturaDeclaracao"]', // op1
    assDelegacaoOp1: 'p-radiobutton[id="opcaoAssinatura1"]', // ok
    assDelegacaoOp2: 'p-radiobutton[id="opcaoAssinatura2"]', // ok
    listaAssDelegacao: 'p-dropdown[id="assinantes"]', // ok

//  Minuta Documento
    btnFechar: 'button[id="btnFechar"]',
    btnDespacharEncaminhar: 'button[id="btnDespacharEncaminhar"]',
    btnEditar: 'button[id="btnEditar"]',
    btnImprimir: 'button[id="btnImprimir"]',
    btnClonarCopiar: 'button[id="btnCopiarClonar"]',
    btnAssinarProtocolar: 'button[id="btnAssinarProtocolar"]',
    
//  Detalhes do Documento
    btnPDFDocumentoPrincipal: 'div[id="pdfAssinatura"]',
    btnHTMLVisualizacaoApenas: 'div[id="pdfHtml"]',
    btnXMLAssEletronica: 'div[id="xmlAssinatura"]',
    btnDespacho: 'button[id="btnDespachar"]',
    btnAnexo: 'button[id="btnAnexos"]',
    btnExcluir: 'button[id="btnExcluir"]',
    btnAnotacao: 'button[id="btnAnotações"]',
    // btnAssinar igual minuta
    btnHistorico: 'button[id="btnVerHistorico"]',
    btnAddPalavraChave: 'button[id="addPalavraChave"]',
    btnArquivar: 'button[id="btnArquivarInvalidar"]',
    btnDocRelacionado: 'button[id="addDocRel"]',
    btnDocOrigem: 'button[id="addDocOr"]',
    btnMostrarRelacionamento: 'button[id="mostraRel"]',
    
//  Encaminhar/Despachar Documento
    btnAnularDespacho: 'button[id="btnAnularDespachos"]',
    btnMostrarDespachos: 'button[id="btnMostrarOcultar"]',
    btnPermanecerTela: 'p-checkbox[name="permaneceTela"]',
    btnDespachoTelaEncaminhamentoDespacho: 'p-button[label="Despachar/Encaminhar"]',
    btnVoltarAoDocumento: 'p-button[label="Voltar ao Documento"]',
    btnAddFraseDespachoEncaminhamento: 'p-button[label="<<<"]',
    btnAddFrase: 'p-button[label="Incluir"]',
    btnSalvarFrase: 'p-button[label="Salvar"]',
    btnExcluirFrase: 'p-button[label="Excluir"]',
    btnAlterarFrase: 'p-button[label="Alterar"]',
    selecionarContaDespachoEncaminhamento: 'p-listbox[datakey="idConta"]',
    selecionarGrupoDespachoEncaminhamento: 'p-listbox[datakey="idGrupo"]',
    addContaDespachoEncaminhamento: 'p-button[class="btnMoverBox"]',

//  Anotar Documento
    setObservacao: 'textarea[formcontrolname="descricao"]',
    addObservacao: 'button[label="Salvar"]',
    btnVoltar: 'button[label="Voltar ao Documento"]',
    
// Adicionar Documento Relacionado e Origem
    btnAddDocRelacionado: 'button[id="btnAdd"]',
    btnCancelarDocRelacionado: 'button[id="btnCancel"]',
    btnConcluirDocRelacionado: 'button[id="btnConc"]',
    btnNovoDocRelacionado: 'button[id="btnNewDoc"]',
    // Tipo Novo Documento Relacionado
    btnNovoDIExRelacionado: 'button[id="btnDiex"]',
    btnNovoDIExSimplesRelacionado: 'button[id="btnDiexSimplificado"]',
    btnNovoNotaBoletimRelacionado: 'button[id="btnNotaBoletim"]',
    btnNovoOficioRelacionado: 'button[id="btnOfício"]',
    btnNovoInfRequerimentoRelacionado: 'button[id="btnInfRequerimento"]',
    btnNovoRequerimentoRelacionado: 'button[id="btnRequerimento"]',
    btnNovoMaisAssRelacionado: 'button[id="btnMaisAss"]',
    btnNovoDescarteMaterialRelacionado: 'button[id="btnDescarteMateriais"]',
    btnNovoPedidoMaterialRelacionado: 'button[id="btnPedidoMaterial"]',
    btnNovoPassagensDiariasRelacionado: 'button[id="btnPedidoPassagensDiarias"]',
    btnNovoApoioEventoRelacionado: 'button[id="btnPedidoApoioEvento"]',
    btnNovoRelatorioRelacionado: 'button[id="btnRelatorio"]',
    btnNovoAutRadiogramaRelacionado: 'button[id="btnAutorizacaoRadiograma"]',
    btnNovoRadiogramaRelacionado: 'button[id="btnRadiograma"]',
    btnNovoSolicVtrRelacionado: 'button[id="btnSolicitacaoViatura"]',

//  Assinar Protocolar
    setAssEletronica: 'p-radiobutton[label="Assinatura Eletrônica"]',
    
}