"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ionic_angular_1 = require("ionic-angular");
var Chamado_model_1 = require("../../model/Chamado-model");
require("rxjs/add/operator/catch");
var Sala_model_1 = require("../../model/Sala-model");
var Predio_model_1 = require("../../model/Predio-model");
var Servico_model_1 = require("../../model/Servico-model");
var CategoriaDeServico_model_1 = require("../../model/CategoriaDeServico-model");
var editar_chamado_1 = require("../editar-chamado/editar-chamado");
/**
 * Generated class for the MeusChamadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MeusChamadosPage = MeusChamadosPage_1 = (function () {
    function MeusChamadosPage(loadingCtrl, alertCtrl, nav, navParams, auth, chamadoService) {
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.nav = nav;
        this.navParams = navParams;
        this.auth = auth;
        this.chamadoService = chamadoService;
        this.categoriaDeServico = new CategoriaDeServico_model_1.CategoriaDeServico();
        this.servico = new Servico_model_1.Servico();
        this.predio = new Predio_model_1.Predio();
        this.sala = new Sala_model_1.Sala();
        this.chamado = new Chamado_model_1.Chamado();
    }
    MeusChamadosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MeusChamadosPage');
    };
    MeusChamadosPage.prototype.buscaMeusChamados = function () {
        var _this = this;
        this.chamadoService.getMeusChamados(this.auth.getUsuarioInfo()).subscribe(function (meusChamados) { _this.chamados = meusChamados; });
    };
    MeusChamadosPage.prototype.editando = function (chamado) {
        chamado.usuario = this.auth.getUsuarioInfo();
        this.nav.push(editar_chamado_1.EditarChamadoPage, {
            parametroReferenciaEnviado: chamado
        });
    };
    MeusChamadosPage.prototype.excluir = function (chamado) {
        var _this = this;
        this.showLoading();
        this.chamadoService.deletaChamado(chamado).subscribe(function (retorno) {
            if (retorno) {
                _this.nav.setRoot(MeusChamadosPage_1);
                _this.showMensagem("Chamado excluido.", "Sucesso!");
            }
            else {
                _this.showMensagem("Chamado não excluido.", "Ops!");
            }
        }, function (error) { _this.showMensagem("Chamado não excluido.", "Ops!"); });
    };
    MeusChamadosPage.prototype.showPrompt = function (chamado) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Opções',
            message: "O que você deseja?",
            buttons: [
                {
                    text: 'Excluir',
                    handler: function (data) {
                        _this.excluir(chamado);
                    }
                },
                {
                    text: 'Editar',
                    handler: function (data) {
                        _this.editando(chamado);
                    }
                }
            ]
        });
        prompt.present();
    };
    MeusChamadosPage.prototype.showMensagem = function (text, title) {
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: ['OK']
        });
        alert.present(prompt);
    };
    MeusChamadosPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Espere um momento...',
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    MeusChamadosPage.prototype.logout = function () {
        var _this = this;
        this.auth.logout().subscribe(function (succ) {
            _this.nav.setRoot('LoginPage');
        });
    };
    MeusChamadosPage.prototype.ngOnInit = function () {
        this.buscaMeusChamados();
    };
    return MeusChamadosPage;
}());
MeusChamadosPage = MeusChamadosPage_1 = __decorate([
    ionic_angular_1.IonicPage(),
    core_1.Component({
        selector: 'page-meus-chamados',
        templateUrl: 'meus-chamados.html',
    })
], MeusChamadosPage);
exports.MeusChamadosPage = MeusChamadosPage;
var MeusChamadosPage_1;
