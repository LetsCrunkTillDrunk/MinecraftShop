import { Component, OnInit, ComponentFactoryResolver } from "@angular/core";
import { Location } from "@angular/common";
import { AppComponent } from "./app.component";
@Component({
    selector: 'admin',
    templateUrl: '/home/adminComponent'
})

export class AdminComponent implements OnInit {
    location: Location;
    factory: ComponentFactoryResolver;
    isAdmin: boolean = false;

    constructor(_location: Location, cfr: ComponentFactoryResolver) { this.location = _location; this.factory = cfr; }
    
    ngOnInit() {
        
    }

    change() {
        this.isAdmin = !this.isAdmin;
    }
    
}
