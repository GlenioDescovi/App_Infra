"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Chamado = (function () {
    //statusChamado: statusChamado;
    function Chamado(idChamado, usuario, categoriaDeServico, servico, predio, sala, ramal, descricao, base64Image, numeroProinfra) {
        this.idChamado = idChamado;
        this.usuario = usuario;
        this.categoriaDeServico = categoriaDeServico;
        this.servico = servico;
        this.predio = predio;
        this.sala = sala;
        this.ramal = ramal;
        this.descricao = descricao;
        this.foto = base64Image;
        this.numero_proinfra = numeroProinfra;
    }
    return Chamado;
}());
exports.Chamado = Chamado;
