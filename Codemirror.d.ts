// Imports
import {
    NgZone,
    EventEmitter
} from '@angular/core';
import {ControlValueAccessor} from '@angular/forms';

/**
 * CKEditor component
 */
export declare class Codemirror implements ControlValueAccessor {

    value:any;
    change:EventEmitter<any>;

    constructor(zone:NgZone);
    codemirrorInit(config:any):void;
    updateValue(value:String):void;

    // ControlValueAccessor
    writeValue(value:any):void;
    onChange(_:any):void;
    registerOnChange(fn:Function):void;
    registerOnTouched(fn:Function):void;

}
