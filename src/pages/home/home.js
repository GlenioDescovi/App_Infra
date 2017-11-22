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
var Predio_model_1 = require("../../model/Predio-model");
var Sala_model_1 = require("../../model/Sala-model");
var CategoriaDeServico_model_1 = require("../../model/CategoriaDeServico-model");
var Servico_model_1 = require("../../model/Servico-model");
var Chamado_model_1 = require("../../model/Chamado-model");
var HomePage = (function () {
    function HomePage(alertCtrl, imagePicker, nav, auth, camera, chamadoService, loadingCtrl) {
        this.alertCtrl = alertCtrl;
        this.imagePicker = imagePicker;
        this.nav = nav;
        this.auth = auth;
        this.camera = camera;
        this.chamadoService = chamadoService;
        this.loadingCtrl = loadingCtrl;
        this.username = '';
        this.email = '';
        this.categoriaDeServico = new CategoriaDeServico_model_1.CategoriaDeServico();
        this.servico = new Servico_model_1.Servico();
        this.predio = new Predio_model_1.Predio();
        this.sala = new Sala_model_1.Sala();
        this.chamado = new Chamado_model_1.Chamado();
        var info = this.auth.getUsuarioInfo();
        this.username = info['nome'];
        this.email = info['email'];
    }
    HomePage.prototype.buscarCategoriaServico = function () {
        var _this = this;
        this.chamadoService.getCategoriaDeServico().subscribe(function (categoriaDeServico) { _this.categoriaDeServicos = categoriaDeServico; });
    };
    HomePage.prototype.buscarServicos = function () {
        var _this = this;
        this.chamadoService.getServico(this.categoriaDeServico).subscribe(function (servico) { _this.servicos = servico; });
    };
    HomePage.prototype.buscarPredios = function () {
        var _this = this;
        this.chamadoService.getPredios().subscribe(function (predio) { _this.predios = predio; });
    };
    HomePage.prototype.buscarSalas = function () {
        var _this = this;
        this.chamadoService.getSalas(this.predio).subscribe(function (sala) { _this.salas = sala; });
    };
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TakePicture');
    };
    HomePage.prototype.logout = function () {
        var _this = this;
        this.auth.logout().subscribe(function (succ) {
            _this.nav.setRoot('LoginPage');
        });
    };
    HomePage.prototype.takePhoto = function () {
        var _this = this;
        var options = {
            quality: 60,
            correctOrientation: true,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.base64Image = "data:image/jpeg;base64," + imageData;
            console.log("String da imagem" + _this.base64Image);
            //this.photos.push(this.base64Image); faz um array de fotos
            //this.photos.reverse();
        }, function (err) {
            console.log(err);
        });
    };
    HomePage.prototype.openGallery = function () {
        var _this = this;
        var options = {
            quality: 60,
            correctOrientation: true,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.base64Image = "data:image/jpeg;base64," + imageData;
            //this.photos.push(this.base64Image); faz um array de fotos
            //this.photos.reverse();
        }, function (err) {
            console.log(err);
        });
    };
    HomePage.prototype.cadastraChamado = function (formulario, chamado) {
        var _this = this;
        this.chamado.categoriaDeServico = this.categoriaDeServico;
        this.chamado.servico = this.servico;
        this.chamado.predio = this.predio;
        this.chamado.sala = this.sala;
        this.chamado.foto = this.base64Image;
        this.chamado.usuario = this.auth.getUsuarioInfo();
        this.showLoading();
        this.chamadoService.realizaChamado(this.chamado).subscribe(function (retorno) {
            if (retorno) {
                formulario.resetForm();
                _this.showMensagem("Chamado solicitado.", "Sucesso!");
            }
            else {
                _this.showMensagem("Chamado não solicitado.", "ops!");
            }
        }, function (error) { _this.showMensagem("Chamado não solicitado.", "ops!"); });
    };
    HomePage.prototype.showMensagem = function (text, title) {
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: ['OK']
        });
        alert.present(prompt);
    };
    HomePage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Espere um momento...',
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    HomePage.prototype.ngOnInit = function () {
        this.buscarCategoriaServico();
        this.buscarPredios();
    };
    return HomePage;
}());
HomePage = __decorate([
    core_1.Component({
        selector: 'page-home',
        templateUrl: 'home.html'
    })
], HomePage);
exports.HomePage = HomePage;
