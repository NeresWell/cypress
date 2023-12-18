const el = require('../../../elements/util/utils.elements')
const elDescargaMateriais = require('../../../elements/documentos/documentosAdm/material.elements')

class DescargaMateriais {
    addMaterial(especificacao, duracao, quantidade, valorUnitario, observacao) {
        cy.get(elDescargaMateriais.ELEMENTS.addLinha).click()
        cy.get(elDescargaMateriais.ELEMENTS.especificacao).type(especificacao)
        cy.get(elDescargaMateriais.ELEMENTS.duracao).type(duracao)
        cy.get(elDescargaMateriais.ELEMENTS.quantidade).type(quantidade)
        cy.get(elDescargaMateriais.ELEMENTS.valorUnitario).type(valorUnitario)
        cy.get(elDescargaMateriais.ELEMENTS.observacao).type(observacao)
    }
    addLinha() {
        cy.get(elDescargaMateriais.ELEMENTS.addLinha).click()
    }
    setNrParecer(numero) {
        cy.get(elDescargaMateriais.ELEMENTS.NrParecer).type(numero)
    }
    setRemetente(remetente){
        cy.get(elDescargaMateriais.ELEMENTS.remetenteDescMateriais).click()
        cy.contains('li', `${remetente}`).dblclick()
        cy.get(el.ELEMENTS.btnConcluir).click()
    }
    setDestinatario(destinatario){
        cy.get(elDescargaMateriais.ELEMENTS.destinatarioDescMateriais).click()
        cy.contains('li', `${destinatario}`).dblclick()
        cy.get(el.ELEMENTS.btnConcluir).click()
    }
    btnSalvar() {
        cy.get(elDescargaMateriais.ELEMENTS.btnSalvar).eq(1).click()
    }
    addPedidoMaterial(especificacao, qtdExistente, qtdPerdida, observacao) {
        cy.get(elDescargaMateriais.ELEMENTS.addLinha).click()
        cy.get(elDescargaMateriais.ELEMENTS.especificacaoPedMaterial).type(especificacao)
        cy.get(elDescargaMateriais.ELEMENTS.qtdExistente).type(qtdExistente)
        cy.get(elDescargaMateriais.ELEMENTS.qtdPerdida).type(qtdPerdida)
        cy.get(elDescargaMateriais.ELEMENTS.observacao).type(observacao)
    }
    setData(dia, mes, ano) {
        cy.get(elDescargaMateriais.ELEMENTS.campoEm).type(dia)
        cy.get(elDescargaMateriais.ELEMENTS.campoDe1).type(mes)
        cy.get(elDescargaMateriais.ELEMENTS.campoDe2).type(ano)
    }
}

export default new DescargaMateriais();