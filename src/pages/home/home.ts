import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CamPage } from '../cam/cam';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  openCam(){
    this.navCtrl.push(CamPage)
  }
}
