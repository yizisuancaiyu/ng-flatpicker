import { Component } from '@angular/core';

@Component({
    template: `<ion-content padding>
               <flat-picker [(ngModel)]="myTime"></flat-picker>
               <button (click)="print()">打印时间</button>
               </ion-content>`
})
export class MyApp {
    myTime;
    constructor() {

    }

    print=()=>{
        console.log(this.myTime);
    }
}

