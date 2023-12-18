export const ELEMENTS = {
    // 1. Proposta
    inputRamal: 'input[name="ramalProponente"]',
    inputIdtProposta: 'input[name="idProposta"]',
    // 2. Beneficiado
    btnBeneficiario: 'button[id="btnBeneficiario"]',
    telBeneficiario: 'input[name="telBeneficiario"]',
    numBancoBeneficiario: 'input[name="numBancoBeneficiario"]',
    nomeBancoBeneficiario: 'input[name="nomeBancoBeneficiario"]',
    agenciaBancoBeneficiario: 'input[name="agenciaBancoBeneficiario"]',
    contaBancoBeneficiario: 'input[name="contaBancoBeneficiario"]',
    // 3.
    piv: 'p-radiobutton[id="piv"]',
    pvmeb: 'p-radiobutton[id="pvmeb"]',
    outros: 'p-radiobutton[id="outros"]',
    planoVisitaOutros: 'input[name="planoVisitaOutros"]',
    idViagem: 'input[name="idViagem"]',
    refSecao: 'input[name="refSecao"]',
    // 4. REGISTRO EM CASO DE ATUALIZAÇÃO DO EVENTO
    idtViagem: 'input[name="idtViagem"]',
    refSecaoAtualizacao: 'input[name="refSecaoAtualizacao"]',
    roteiro: 'input[name="roteiro"]',
    cMilA: 'input[name="cMilA"]',
    guarnicao: 'input[name="guarnicao"]',
    OmVisitada: 'input[name="omVisitada"]',
    // 5. AFASTAMENTO DA SEDE
    itinerarioCompleto: 'input[name="itinerarioCompleto"]',
    dtIda: 'input[name="dtIda"]',
    dtVolta: 'input[name="dtVolta"]',
    BiAutorizaca: 'input[id="campoIdaVolta"]',
    // 6. EVENTO A SER REALIZADO
    evento: 'input[name="evento"]',
    dtInicioEvento: 'p-calendar[name="dtInicioEvento"]',
    dtTerminoEvento: 'p-calendar[name="dtTerminoEvento"]',
    campoInicioTermino: 'input[name="campoInicioTermino"]',
    // 7. JUSTIFICATIVA
    justificativa: 'textarea[id="justificativa"]',
    // 8. DIÁRIAS
    alojamentoOmSim: 'p-radiobutton[id="alojadoOMSim"]',
    alojamentoOmNao: 'p-radiobutton[inputid="alojamentoOMNao"]',
    
    veiculoOficialSim: 'p-radiobutton[inputid="veiculoOficialSim"]',
    veiculoOficialNao: 'p-radiobutton[inputid="veiculoOficialNao"]',
    veiculoOficialParte: 'p-radiobutton[inputid="veiculoOficialParte"]',

    numDias: 'input[name="numDias"]',
    totalDiarias: 'input[name="totalDiarias"]',
    localidadesDiaria: 'input[name="localidadesDiaria"]',

    valorDiarias: 'input[id="valorDiarias"]',
    valorEmbarqueDesembarque: 'input[id="valorEmbarqueDesembarque"]',
    valorTotalDiariasPorExtenso: 'input[name="valorTotalDiariasPorExtenso"]',
    // 9. CATEGORIA DO TRANSPORTE:
    categoriaTransporteRodoviario: 'p-radiobutton[id="categoriaTransporteRodoviario"]',
    categoriaTransporteAereo: 'p-radiobutton[id="categoriaTransporteAereo"]',
    categoriaTransporteFerroviario: 'p-radiobutton[id="categoriaTransporteFerroviario"]',
    categoriaTransporteAquaviario: 'p-radiobutton[id="categoriaTransporteAquaviario"]',
    // 10. BILHETE DE PASSAGEM:
    // add linha igual material
    dtBilhete0: 'input[name="dtBilhete0"]',
    valorTotalPassagens: 'input[name="valorTotalPassagens"]',
    valorTotalPassagensPorExtenso: 'input[name="valorTotalPassagensPorExtenso"]',
    
    // 11. AUTORIDADE PROPONENTE
    btnAutoridadeProponente: 'button[id="btnAutoridadeProponente"]',

    // 12. RESPONSÁVEL PELA RESERVA DA PASSAGEM AÉREA
    btnResponsavel: 'button[id="btnResponsavel"]',

    // 13. ORDENADOR DE DESPESAS
    btnOrdenador: 'button[id="btnOrdenador"]',
    protocolo: 'input[name="protocolo"]',
    dtProtocolo: 'p-calendar[name="dtProtocolo"]',
    destinoProtocolo: 'input[name="destinoProtocolo"]',
    paraProvidenciar: 'p-checkbox[name="providenciar"]',
    obervacao: 'input[name="obervacao"]',
}