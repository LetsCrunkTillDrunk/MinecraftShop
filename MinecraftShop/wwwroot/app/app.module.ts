import { NgModule, enableProdMode } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { routing, routedComponents } from './app.routing';
import { APP_BASE_HREF, Location } from '@angular/common';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SampleDataService } from './values.services';
import { UserService } from './user.services';

import './rxjs-operators';

enableProdMode();

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, routing],
    declarations: [AppComponent, routedComponents],
    providers: [SampleDataService, UserService, Title, { provide: APP_BASE_HREF, useValue: '/' }],
    bootstrap: [AppComponent]
})

export class AppModule { }