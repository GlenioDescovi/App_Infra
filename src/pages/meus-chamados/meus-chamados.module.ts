import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MeusChamadosPage } from './meus-chamados';

@NgModule({
  declarations: [
    MeusChamadosPage,
  ],
  imports: [
    IonicPageModule.forChild(MeusChamadosPage),
  ],
})
export class MeusChamadosPageModule {}
