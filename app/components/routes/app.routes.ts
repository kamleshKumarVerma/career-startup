import {RouteDefinition} from '@angular/router-deprecated';
import {HomeComponent} from '../home/home.component';
import {AddEducationComponent} from '../add-education/add-education.component';
import {SearchbyComponent} from '../searchby/searchby.component';

export var APP_ROUTES: RouteDefinition[] = [
    { path: '/', name: 'Home', component: HomeComponent, useAsDefault: true },
    { path: '/add-education', name: 'AddEducation', component: AddEducationComponent },
    { path: '/searchby/:educationType' , name: 'Searchby' , component: SearchbyComponent }
];