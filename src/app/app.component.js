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
var home_1 = require("../pages/home/home");
var meus_chamados_1 = require("../pages/meus-chamados/meus-chamados");
var notificacoes_1 = require("../pages/notificacoes/notificacoes");
var Infraestrutura = (function () {
    function Infraestrutura(platform, statusBar, splashScreen, oneSignal) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.oneSignal = oneSignal;
        this.rootPage = 'LoginPage';
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Realizar Chamado', component: home_1.HomePage },
            { title: 'Meus Chamados', component: meus_chamados_1.MeusChamadosPage },
            { title: 'Notificações', component: notificacoes_1.NotificacoesPage }
        ];
        var notificationOpenedCallback = function (jsonData) {
            console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
        };
        window["plugins"].OneSignal.startInit('003d6491-81e2-4196-8911-536ed937eaae', '234129329300').handleNotificationOpened(notificationOpenedCallback).endInit();
    }
    Infraestrutura.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            //window["plugins"].oneSignal.startInit("21af418a-2f04-4c9a-b153-186b1493ece0",
            // "234129329300")
        });
    };
    Infraestrutura.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return Infraestrutura;
}());
__decorate([
    core_1.ViewChild(ionic_angular_1.Nav)
], Infraestrutura.prototype, "nav", void 0);
Infraestrutura = __decorate([
    core_1.Component({
        templateUrl: 'app.html',
    })
], Infraestrutura);
exports.Infraestrutura = Infraestrutura;
