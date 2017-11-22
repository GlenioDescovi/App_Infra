"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
//import { Http } from '@angular/http';
require("rxjs/add/operator/map");
var Usuario_model_1 = require("../../model/Usuario-model");
var Observable_1 = require("rxjs/Observable");
/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthServiceProvider = (function () {
    function AuthServiceProvider() {
    }
    AuthServiceProvider.prototype.login = function (credenciais) {
        var _this = this;
        if (credenciais.email === null || credenciais.senha === null) {
            return Observable_1.Observable.throw("Por favor insira suas credenciais");
        }
        else {
            return Observable_1.Observable.create(function (observable) {
                //Neste ponto, faça um pedido para o seu backend para fazer um cheque real!
                console.log("credenciais do auth service " + credenciais.senha + credenciais.email);
                var acesso = (credenciais.senha === "1234" && credenciais.email === "g");
                _this.currentUser = new Usuario_model_1.Usuario('Glenio', 'glenio.descovi@gmail.com', 2);
                observable.next(acesso);
                observable.complete();
            });
        }
    };
    AuthServiceProvider.prototype.getUsuarioInfo = function () {
        return this.currentUser;
    };
    AuthServiceProvider.prototype.logout = function () {
        var _this = this;
        return Observable_1.Observable.create(function (observable) {
            _this.currentUser = null;
            observable.next(true);
            observable.complete();
        });
    };
    return AuthServiceProvider;
}());
AuthServiceProvider = __decorate([
    core_1.Injectable()
], AuthServiceProvider);
exports.AuthServiceProvider = AuthServiceProvider;
