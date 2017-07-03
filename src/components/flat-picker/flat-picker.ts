import { AfterViewInit, Component, forwardRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FlatpickrOptions } from "./flat-picker.interface";
const flatpickr = require( 'flatpickr' );
const CHS = require("flatpickr/dist/l10n/zh.js").zh;
@Component({
    selector: 'flat-picker',
    templateUrl: 'flat-picker.html',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef( () => FlatPickerComponent ),
            multi: true
        }
    ]
})
export class FlatPickerComponent implements AfterViewInit, OnChanges, ControlValueAccessor{

    constructor() {
        console.log(CHS);
    }

    private flatpickr: object;

    private defaultFlatpickrOptions: FlatpickrOptions = {
        locale: CHS,
        wrap: true,
        clickOpens: true,
        onChange: ( selectedDates: any ) => { this.writeValue( selectedDates ); }
    };

    @ViewChild('flatpickr')
    flatpickrElement: any;

    @Input()
    config: FlatpickrOptions;

    @Input()
    placeholder: string = "";

    @Input()
    setDate: string | Date;

    ///////////////////////////////////

    writeValue( value:any ) {
        this.propagateChange( value );
    }

    registerOnChange( fn: any ) {
        this.propagateChange = fn;
    }

    registerOnTouched() {

    }

    propagateChange = ( _: any ) => {};

    ///////////////////////////////////

    setDateFromInput( date: any ) {
        this.flatpickrElement.nativeElement._flatpickr.setDate( date, true );
    }

    ngAfterViewInit() {
        if( this.config ) {
            // 传入的配置覆盖默认配置
            Object.assign( this.defaultFlatpickrOptions, this.config );
        }
        this.defaultFlatpickrOptions.locale = CHS;
        // 配置传入组件
        this.flatpickr = this.flatpickrElement.nativeElement.flatpickr( this.defaultFlatpickrOptions );
        console.log(this.flatpickr);
        if( this.setDate ) {
            this.setDateFromInput( this.setDate );
        }
    }

    ngOnChanges( changes: SimpleChanges ) {
        if( changes.hasOwnProperty( 'setDate' ) && changes.setDate.currentValue ) {
            this.setDateFromInput( changes.setDate.currentValue );
        }
    }

}
