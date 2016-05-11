import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home/home.service';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { CONSTANT } from '../../utility/constant';

@Component({
    templateUrl: '../prod/components/home/home.html',
    styleUrls: ['../prod/components/home/home.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [HomeService]
})
export class HomeComponent implements OnInit {
	
	appName: string;
	appTagLine: string;
	menus: Array<any>;

	constructor(private _homeService: HomeService) {
        this.menus = _homeService.getMenus();
    }

    ngOnInit(): any {
        this.appName = CONSTANT.APP_NAME;
		this.appTagLine = CONSTANT.APP_TAGLINE;
    }

}


