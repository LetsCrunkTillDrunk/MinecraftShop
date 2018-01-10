import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Location } from "@angular/common";

@Component({
    selector: 'my-app',
    templateUrl: '/partial/appComponent'
})
export class AppComponent implements OnInit {

    noAdmin: boolean;
    location: Location;
    public constructor(_location: Location) { this.location = _location;}

    ngOnInit() {
    }

    angularClientSideData = 'Angular';

    public changeNoAdmin() {
        this.noAdmin = !(this.noAdmin);
        
    }

    public setTitle() {
        
    }
}