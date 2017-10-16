import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditarChamadoPage } from './editar-chamado';

@NgModule({
  declarations: [
    EditarChamadoPage,
  ],
  imports: [
    IonicPageModule.forChild(EditarChamadoPage),
  ],
})
export class EditarChamadoPageModule {}
