import {Component} from 'angular2/core';
import {NgFor} from 'angular2/common';

@Component({
    selector: 'my-app',
    template: `
            <div *ngFor="#j of js; #i = index">
                <span>{{i + j}}</span>
            </div>
    `,
    directives: [NgFor]
})
export class AppComponent { 
    
    js: [number];
    
    constructor(){
        this.js = [1, 2, 3];
    }
  
}