import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HttpModule } from "@angular/http";
import { FlatPickerComponentModule } from "../components/flat-picker/flat-picker.module";
@NgModule({
    declarations: [
        MyApp
    ],
    imports: [
        FlatPickerComponentModule,
        // http服务
        BrowserModule,
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp
    ],

    providers: [

    ]
})
export class AppModule {}
