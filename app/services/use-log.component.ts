import { Component, OnInit } from '@angular/core';
import { LogService } from './log.service';

@Component({
    selector: 'st-log',
    template: `<h1>Using Log Service </h1>`,
    providers : [LogService]     // Service is associated with only this component 
})
export class UseLogComponent  {
    
    // Depedency Injection 
    constructor(private log : LogService) { 
        this.log.log("This is in constructor!");
    }
    
    ngOnInit() {
       this.log.log("This is to test!");
       this.log.error("This is an error!");
    }
  
}