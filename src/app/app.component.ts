import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    I = 1;
    numbers_array = [0];

    update_array(){
    	this.numbers_array = [];
    	for (var i = 0; i < Math.min(this.I, 10); i++){
    		this.numbers_array.push(i);
    	}
    }
}
