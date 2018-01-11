import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Location } from "@angular/common";

@Component({
    selector: 'my-app',
    templateUrl: '/partial/appComponent'
})
export class AppComponent implements OnInit {

    public isAdmin: boolean = false;
    location: Location;
    public constructor(_location: Location) { this.location = _location;}

    ngOnInit() {
    }

    angularClientSideData = 'Angular';

    public changeAdmin() {
        this.isAdmin = !(this.isAdmin);
        
    }

    public setTitle() {
        
    }
}