import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule, NavController} from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { Infraestrutura } from './app.component';
import { HomePage } from "../pages/home/home";
import { Camera } from "@ionic-native/camera";
import { ImagePicker } from "@ionic-native/image-picker";
import { ChamadoServiceProvider } from '../providers/chamado-service/chamado-service';
import { HttpModule } from "@angular/http";
import { MeusChamadosPage } from "../pages/meus-chamados/meus-chamados";
import { EditarChamadoPage } from "../pages/editar-chamado/editar-chamado";

@NgModule({
  declarations: [
    Infraestrutura,
    HomePage,
    MeusChamadosPage,
    EditarChamadoPage

  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(Infraestrutura),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    Infraestrutura,
    HomePage,
    MeusChamadosPage,
    EditarChamadoPage,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    ImagePicker,
    {provide:ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider, ChamadoServiceProvider,
  ]
})
export class AppModule {}