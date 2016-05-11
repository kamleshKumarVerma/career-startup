import {Component} from '@angular/core';
import {RouteParams} from '@angular/router-deprecated';

@Component({
    templateUrl: '../prod/components/searchby/searchby.html',
    styleUrls: ['../prod/components/searchby/searchby.css']
})
export class SearchbyComponent {
	
	educationType: string;

	constructor(params: RouteParams) {
        this.educationType = params.get('educationType');
    }

}


