import { Component } from '@angular/core';

@Component({
  selector: 'st-hello',
  template: '<h1>{{title}}</h1> <h2>{{uname}} </h2>',
})
export class HelloComponent {
    title : string  = 'Hello World! I am learning Angular! ';
    uname  : string = "Srikanth Pragada"
}
