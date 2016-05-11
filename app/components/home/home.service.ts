import {Injectable} from '@angular/core';

@Injectable()
export class HomeService {

	public menus: Array<any> = [{
        label: 'Search by School name',
        href: ['Searchby', {educationType: 'School'}],
        img_url: '../../assets/img/school.jpg'
    },
    {
        label: 'Search by College name',
        href: ['Searchby', {educationType: 'College'}],
        img_url: '../../assets/img/college.jpg'
    },
    {
        label: 'Search by Coaching name',
        href: ['Searchby', {educationType: 'Coaching'}],
        img_url: '../../assets/img/coaching.jpg'
    },
    {
        label: 'Search by Tuition name',
        href: ['Searchby', {educationType: 'Tuition'}],
        img_url: '../../assets/img/tuition.jpg'
    }];

	getMenus() {
		return this.menus;
	}

}


href: ['Fitness', {type: 'slimming_centers'}]