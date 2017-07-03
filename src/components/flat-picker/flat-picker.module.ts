import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FlatPickerComponent } from './flat-picker';

@NgModule({
  declarations: [
    FlatPickerComponent,
  ],
  imports: [
    IonicPageModule.forChild(FlatPickerComponent),
  ],
  exports: [
    FlatPickerComponent
  ]
})
export class FlatPickerComponentModule {}
