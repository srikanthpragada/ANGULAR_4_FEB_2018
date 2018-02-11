import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'st-sd',
    templateUrl: './sd.component.html'
})
export class SdComponent  {
     hide:boolean = true
     discount : boolean = false;
     timing : string = 'm';

     showMouse(info) {
         console.log(info)
         console.log(info.x + "," + info.y)
     }
}