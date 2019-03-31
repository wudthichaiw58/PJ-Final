import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import {
  CameraPreview,
  CameraPreviewDimensions,
  CameraPreviewOptions,
  CameraPreviewPictureOptions
} from "@ionic-native/camera-preview";

/**
 * Generated class for the CamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-cam',
  templateUrl: 'cam.html',
})
export class CamPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private plateform:Platform,
    private cameraPreview: CameraPreview) {
      plateform.backButton.subscribe(even=>{
        this.cameraPreview.stopCamera();
        navCtrl.pop();
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CamPage');
    // this.startCam()
  }

  ionViewDidEnter() {
    console.log("ionViewDidEnter PatientSearchPage");
    //this.startCam();
    this.startCam();
    //this.cameraPreview.show();

  }
  startCam() {

    // camera options (Size and location). In the following example, the preview uses the rear camera and display the preview in the back of the webview
    const cameraPreviewOpts: CameraPreviewOptions = {
      x: 0,
      y: 0,
      width: window.screen.width,
      height: window.screen.height,
      camera: this.cameraPreview.CAMERA_DIRECTION.BACK,
      tapPhoto: true,
      previewDrag: false,
      toBack: true,
    };

    this.cameraPreview.startCamera(cameraPreviewOpts).then(
      (res) => {
        console.log(res)
      },
      (err) => {
        console.log(err)
      });


  }


}
