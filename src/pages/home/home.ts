import { Component } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';
import { AuthServiceProvider } from "../../providers/auth-service/auth-service";
import { Camera, CameraOptions } from "@ionic-native/camera";
import { ImagePicker } from "@ionic-native/image-picker";
import 'rxjs/add/operator/map';
import {Predio} from "../../model/Predio-model";
import {ChamadoServiceProvider} from "../../providers/chamado-service/chamado-service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public base64Image : string;
  username = '';
  email = '';
  public predios: Predio[];

  constructor(public alertCtrl : AlertController,
              public imagePicker: ImagePicker,
              public nav: NavController,
              private auth: AuthServiceProvider,
              private camera: Camera, private chamado: ChamadoServiceProvider) {


    //chama o metodo que puxa os predios
    //chamado.getPredios().subscribe(teste => {this.predios= teste;});


    let info = this.auth.getUsuarioInfo();
    this.username = info['nome'];
    this.email = info['email'];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TakePicture');
  }
  public logout() {
    this.auth.logout().subscribe(succ => {
      this.nav.setRoot('LoginPage')
    });
  }

  takePhoto() {
    const options : CameraOptions = {
      quality: 60, // picture quality
      correctOrientation: true,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    }
    this.camera.getPicture(options).then((imageData) => {
      this.base64Image = "data:image/jpeg;base64," + imageData;
      console.log("String da imagem"+ this.base64Image);
      //this.photos.push(this.base64Image); faz um array de fotos
      //this.photos.reverse();
    }, (err) => {
      console.log(err);
    });
  }

  openGallery() {
    const options : CameraOptions = {
      quality: 60, // picture quality
      correctOrientation: true,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    }
    this.camera.getPicture(options).then((imageData) => {
      this.base64Image = "data:image/jpeg;base64," + imageData;
      //this.photos.push(this.base64Image); faz um array de fotos
      //this.photos.reverse();
    }, (err) => {
      console.log(err);
    });
  }

}
