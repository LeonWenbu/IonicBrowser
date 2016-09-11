import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/SearchPage/SearchPage.html'
})
export class SearchPage {

  constructor(public navCtrl: NavController) {
  	this.navCtrl = navCtrl;

  }
}
