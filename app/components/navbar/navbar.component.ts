import {Component, Input} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {RouterLink} from '@angular/router-deprecated';

@Component({
    selector: 'navbar',
    templateUrl: '../prod/components/navbar/navbar.html',
    styleUrls: ['../prod/components/navbar/navbar.css'],
    directives: [RouterLink, CORE_DIRECTIVES]
})
export class NavbarComponent {
    @Input() brand: string;
}