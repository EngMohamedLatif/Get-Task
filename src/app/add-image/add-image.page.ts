import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { AlertController } from '@ionic/angular';
import { ApiServicesService } from '../api-services.service';
import { NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.page.html',
  styleUrls: ['./add-image.page.scss'],
})
export class AddImagePage implements OnInit {

  capturedSnapURL: string[];
  selectedImage: any;


  cameraOptions: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
  file: any;
  constructor(private imagePicker: ImagePicker, public navCtrl: NavController,
    private camera: Camera,
    private api: ApiServicesService) { }

  ngOnInit() {
  }


  capture() {
    this.camera.getPicture(this.cameraOptions).then((imageData) => {
      let base64Image = this.api.imagesList.push('data:image/jpeg;base64,' + imageData);
      // this.capturedSnapURL = this.api.imagesList.push(base64Image);

      // this.camera.getPictures(this.cameraOptions).then((results) => {
      //   for (let index = 0; index < results.length; index++) {
      //     this.api.imagesList.push('data:image/jpeg;base64,' + results[index]);
      //   }
      // });
    }, (err) => {
      console.log(err);
    });
  }



  public pickImage() {
    let options = {
      quality: 100, width: 600, height: 600, DATA_URI: 1, outputType: 1, maximumImagesCount: 1
    };
    this.imagePicker.getPictures(options).then((results) => {
      for (let index = 0; index < results.length; index++) {
        this.api.imagesList.push('data:image/jpeg;base64,' + results[index]);
      }
    }, (err) => {
      console.log('Error occurredwhile loading', err);
    });
  }



  showImage() {
    this.navCtrl.navigateForward('/image-list');
  }
}
