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
/**
 * Generated class for the NotificacoesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotificacoesPage = (function () {
    function NotificacoesPage(auth, nav, navParams) {
        this.auth = auth;
        this.nav = nav;
        this.navParams = navParams;
    }
    NotificacoesPage.prototype.logout = function () {
        var _this = this;
        this.auth.logout().subscribe(function (succ) {
            _this.nav.setRoot('LoginPage');
        });
    };
    NotificacoesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotificacoesPage');
    };
    return NotificacoesPage;
}());
NotificacoesPage = __decorate([
    ionic_angular_1.IonicPage(),
    core_1.Component({
        selector: 'page-notificacoes',
        templateUrl: 'notificacoes.html',
    })
], NotificacoesPage);
exports.NotificacoesPage = NotificacoesPage;
