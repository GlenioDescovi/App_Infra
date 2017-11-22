"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/catch");
/*
  Generated class for the ChamadoServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ChamadoServiceProvider = (function () {
    function ChamadoServiceProvider(http) {
        this.http = http;
        //private url= "http://192.168.83.187:8181/backend/";
        //private url= "http://192.168.15.8:8181/backend/";
        //private url= "http://192.168.90.66:8282/";
        this.url = "http://192.168.90.66:8080/";
    }
    ChamadoServiceProvider.prototype.getCategoriaDeServico = function () {
        return this.http.get(this.url + "categoriaDeServico/todasCategorias").map(function (response) { return response.json(); }).catch(function (error) { return Observable_1.Observable.throw(error); });
    };
    ChamadoServiceProvider.prototype.getServico = function (categoriaDeServico) {
        console.log("service categoria: " + categoriaDeServico);
        return this.http.get(this.url + "servico/servicosDeUmaCategoria/" + categoriaDeServico.idCategoriaServico).map(function (response) { return response.json(); }).catch(function (error) { return Observable_1.Observable.throw(error); });
    };
    ChamadoServiceProvider.prototype.getPredios = function () {
        return this.http.get(this.url + "predio/todosPredios").map(function (response) { return response.json(); }).catch(function (error) { return Observable_1.Observable.throw(error); });
    };
    ChamadoServiceProvider.prototype.getSalas = function (predio) {
        return this.http.get(this.url + "predio/buscarSalas/" + predio.idPredio).map(function (response) { return response.json(); }).catch(function (error) { return Observable_1.Observable.throw(error); });
    };
    ChamadoServiceProvider.prototype.getMeusChamados = function (usuario) {
        return this.http.get(this.url + "chamado/chamadosDoUsuario/" + usuario.idUsuario).map(function (response) { return response.json(); }).catch(function (error) { return Observable_1.Observable.throw(error); });
    };
    ChamadoServiceProvider.prototype.realizaChamado = function (chamado) {
        console.log(chamado);
        return this.http.post(this.url + "chamado/registrarChamado", chamado)
            .map(function (res) { return res; }).catch(function (error) { return Observable_1.Observable.throw(error); });
    };
    ChamadoServiceProvider.prototype.editarChamado = function (chamado) {
        return this.http.put(this.url + "chamado/editarUmChamado", chamado)
            .map(function (res) { return res; }).catch(function (error) { return Observable_1.Observable.throw(error); });
    };
    ChamadoServiceProvider.prototype.deletaChamado = function (chamado) {
        console.log("id do chamado no service: " + chamado.idChamado);
        return this.http.delete(this.url + 'chamado/excluirChamado/' + chamado.idChamado).map(function (resposta) { return resposta; }).catch(function (erro) { return Observable_1.Observable.throw(erro); });
    };
    return ChamadoServiceProvider;
}());
ChamadoServiceProvider = __decorate([
    core_1.Injectable()
], ChamadoServiceProvider);
exports.ChamadoServiceProvider = ChamadoServiceProvider;
