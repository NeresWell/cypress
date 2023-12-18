const el = require('../../../elements/util/utils.elements')
const elPassDir = require('../../../elements/documentos/documentosAdm/passagensDiarias.elements')
const elPedMat = require('../../../elements/documentos/documentosAdm/material.elements')

class PassagensDiarias {
    primeiraParte(ramal, idtProposta){
        cy.get(elPassDir.ELEMENTS.inputRamal).type(ramal)
        cy.get(elPassDir.ELEMENTS.inputIdtProposta).type(idtProposta)
    }
    segundaParte(btnBeneficiario, telBeneficiario, numBancoBeneficiario, nomeBancoBeneficiario, agenciaBancoBeneficiario, contaBancoBeneficiario) {
        cy.get(elPassDir.ELEMENTS.btnBeneficiario).click()
        cy.contains('li', `${btnBeneficiario}`).dblclick()
        cy.get(el.ELEMENTS.btnConcluir).click()

        cy.get(elPassDir.ELEMENTS.telBeneficiario).type(telBeneficiario)
        cy.get(elPassDir.ELEMENTS.numBancoBeneficiario).type(numBancoBeneficiario)
        cy.get(elPassDir.ELEMENTS.nomeBancoBeneficiario).type(nomeBancoBeneficiario)
        cy.get(elPassDir.ELEMENTS.agenciaBancoBeneficiario).type(agenciaBancoBeneficiario)
        cy.get(elPassDir.ELEMENTS.contaBancoBeneficiario).type(contaBancoBeneficiario)
    }
    terceiraPartePiv(idViagem, refSecao) {
        cy.get(elPassDir.ELEMENTS.piv).click()
        cy.get(elPassDir.ELEMENTS.idViagem).type(idViagem)
        cy.get(elPassDir.ELEMENTS.refSecao).type(refSecao)
    }
    terceiraPartePvmeb(idViagem, refSecao) {
        cy.get(elPassDir.ELEMENTS.pvmeb).click()
        cy.get(elPassDir.ELEMENTS.idViagem).type(idViagem)
        cy.get(elPassDir.ELEMENTS.refSecao).type(refSecao)
    }
    terceiraParteOutros(planoVisitaOutros, idViagem, refSecao) {
        cy.get(elPassDir.ELEMENTS.outros).click()
        cy.get(elPassDir.ELEMENTS.planoVisitaOutros).type(planoVisitaOutros)
        cy.get(elPassDir.ELEMENTS.idViagem).type(idViagem)
        cy.get(elPassDir.ELEMENTS.refSecao).type(refSecao)
    }
    quartaParte(idtViagem, refSecaoAtualizacao, roteiro, cMilA, guarnicao, OmVisitada) {
        cy.get(elPassDir.ELEMENTS.idtViagem).type(idtViagem)
        cy.get(elPassDir.ELEMENTS.refSecaoAtualizacao).type(refSecaoAtualizacao)
        cy.get(elPassDir.ELEMENTS.roteiro).type(roteiro)
        cy.get(elPassDir.ELEMENTS.cMilA).type(cMilA)
        cy.get(elPassDir.ELEMENTS.guarnicao).type(guarnicao)
        cy.get(elPassDir.ELEMENTS.OmVisitada).type(OmVisitada)
    }
    quintaParte(itinerarioCompleto, BiAutorizaca) {
        cy.get(elPassDir.ELEMENTS.itinerarioCompleto).type(itinerarioCompleto)
        cy.get(elPassDir.ELEMENTS.dtIda).click().get('tbody > tr').contains('24').click()
        cy.get(elPassDir.ELEMENTS.dtVolta).click().get('tbody > tr').contains('25').click()
        cy.get(elPassDir.ELEMENTS.BiAutorizaca).type(BiAutorizaca)
    }
    sextaParte(evento, campoInicioTermino) {
        cy.get(elPassDir.ELEMENTS.evento).type(evento)
        cy.get(elPassDir.ELEMENTS.dtInicioEvento).click().get('tbody > tr').contains('24').click()
        cy.get(elPassDir.ELEMENTS.dtTerminoEvento).click().get('tbody > tr').contains('24').click()
        cy.get(elPassDir.ELEMENTS.campoInicioTermino).type(campoInicioTermino)
    }
    setimaParte(justificativa) {
        cy.get(elPassDir.ELEMENTS.justificativa).type(justificativa)
    }
    oitavaParte(numDias, totalDiarias, localidadesDiaria, valorDiarias, valorEmbarqueDesembarque, valorTotalDiariasPorExtenso) {
        cy.get(elPassDir.ELEMENTS.numDias).type(numDias)
        cy.get(elPassDir.ELEMENTS.totalDiarias).type(totalDiarias)
        cy.get(elPassDir.ELEMENTS.localidadesDiaria).type(localidadesDiaria)
        
        cy.get(elPassDir.ELEMENTS.valorDiarias).type(valorDiarias)
        cy.get(elPassDir.ELEMENTS.valorEmbarqueDesembarque).type(valorEmbarqueDesembarque)
        cy.get(elPassDir.ELEMENTS.valorTotalDiariasPorExtenso).type(valorTotalDiariasPorExtenso)
    }
    nonaParte() {
        cy.get(elPassDir.ELEMENTS.categoriaTransporteFerroviario).click()
    }
    decimaParte(data, valorTotalPassagens, valorTotalPassagensPorExtenso) {
        cy.get(elPedMat.ELEMENTS.addLinha).click()
        cy.get(elPassDir.ELEMENTS.dtBilhete0).eq(0).type(data)
        cy.get(elPassDir.ELEMENTS.valorTotalPassagens).eq(0).type(valorTotalPassagens)
        cy.get(elPassDir.ELEMENTS.valorTotalPassagensPorExtenso).eq(0).type(valorTotalPassagensPorExtenso)
    }
    decimaPrimeiraParte(destinatario) {
        cy.get(elPassDir.ELEMENTS.btnAutoridadeProponente).click()
        cy.contains('li', `${destinatario}`).dblclick()
        cy.get(el.ELEMENTS.btnConcluir).click()
    }
    decimaSegundaParte(destinatario) {
        cy.get(elPassDir.ELEMENTS.btnResponsavel).click()
        cy.contains('li', `${destinatario}`).dblclick()
        cy.get(el.ELEMENTS.btnConcluir).click()
    }
    decimaTerceiraParte(destinatario, protocolo, destinoProtocolo, obervacao) {
        cy.get(elPassDir.ELEMENTS.btnOrdenador).click()
        cy.contains('li', `${destinatario}`).dblclick()
        cy.get(el.ELEMENTS.btnConcluir).click()

        cy.get(elPassDir.ELEMENTS.protocolo).type(protocolo)
        cy.get(elPassDir.ELEMENTS.dtProtocolo).click().get('tbody > tr').contains('24').click()
        cy.get(elPassDir.ELEMENTS.destinoProtocolo).type(destinoProtocolo)
        cy.get(elPassDir.ELEMENTS.paraProvidenciar).click()
        cy.get(elPassDir.ELEMENTS.obervacao).type(obervacao)
    }
}

export default new PassagensDiarias();