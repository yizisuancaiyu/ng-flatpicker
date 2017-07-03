import { Component } from '@angular/core';
import {FlatpickrOptions} from "../components/flat-picker/flat-picker.interface";

const UUID = require("uuidjs");

@Component({
    template: `<ion-content padding>
               <flat-picker [config]="exampleOptions" [(ngModel)]="myTime"></flat-picker>
               <button (click)="print()">打印时间</button>
               </ion-content>
    `
})
export class MyApp {
    myTime;

    constructor() {

    }
    exampleOptions: FlatpickrOptions = {
        // altInput: true
    };
    print=()=>{
        console.log(this.myTime);
    };
}

