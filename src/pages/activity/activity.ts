import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ActivityFormPage } from '../activity-form/activity-form';

/**
 * Generated class for the ActivityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-activity',
  templateUrl: 'activity.html',
})
export class ActivityPage {


  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActivityPage');
  }
  
  
  mudarPagina(){
    this.navCtrl.push(ActivityFormPage);
  }
}
