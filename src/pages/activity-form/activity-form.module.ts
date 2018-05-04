import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActivityFormPage } from './activity-form';

@NgModule({
  declarations: [
    ActivityFormPage,
  ],
  imports: [
    IonicPageModule.forChild(ActivityFormPage),
  ],
})
export class ActivityFormPageModule {}
