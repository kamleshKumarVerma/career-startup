import {Component} from '@angular/core';
import {RouterOutlet, RouteConfig} from '@angular/router-deprecated';
import {APP_ROUTES} from '../routes/app.routes';
import {NavbarComponent} from '../navbar/navbar.component';

@Component({
    selector: 'my-app',
    templateUrl: '../prod/components/app/app.html',
    styleUrls: ['../prod/components/app/app.css'],
    directives: [RouterOutlet, NavbarComponent]
})
@RouteConfig(APP_ROUTES)
export class AppComponent {

}


