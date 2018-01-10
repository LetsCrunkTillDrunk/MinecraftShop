import { Component, OnInit } from "@angular/core";
import { AppComponent } from "./app.component"

@Component({
    selector: 'panel',
    templateUrl: 'partial/panelComponent'
})

export class PanelComponent implements OnInit{
    app: AppComponent = null;

    ngOnInit() {
        
    }


}