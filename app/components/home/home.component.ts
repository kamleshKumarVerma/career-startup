import { Component } from '@angular/core';
import { HomeService } from '../home/home.service';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';

@Component({
    templateUrl: '../prod/components/home/home.html',
    styleUrls: ['../prod/components/home/home.css'],
    directives: [ROUTER_DIRECTIVES]
    providers: [HomeService]
})
export class HomeComponent {
	
	menus: Array<any>;

	constructor(private _homeService: HomeService) {
        this.menus = _homeService.getMenus();
    }

}


