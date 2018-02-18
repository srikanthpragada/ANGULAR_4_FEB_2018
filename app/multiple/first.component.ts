import { Component} from '@angular/core';

@Component({
    selector: 'st-first',
    template: '<h1>First Component</h1> <hr/> <st-second></st-second>'
})
export class FirstComponent  {
    constructor() { }

}