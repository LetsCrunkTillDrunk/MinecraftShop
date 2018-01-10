"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var login_component_1 = require("./login.component");
var main_component_1 = require("./main.component");
var register_component_1 = require("./register.component");
var admin_component_1 = require("./admin.component");
var panel_component_1 = require("./panel.component");
var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: main_component_1.MainComponent, data: { title: 'Home' } },
    { path: 'login', component: login_component_1.LoginComponent, data: { title: 'Login' } },
    { path: 'register', component: register_component_1.RegisterComponent, data: { title: 'Register' } },
    { path: 'admin', component: admin_component_1.AdminComponent },
    { path: 'panel', component: panel_component_1.PanelComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
exports.routedComponents = [register_component_1.RegisterComponent, main_component_1.MainComponent, login_component_1.LoginComponent, admin_component_1.AdminComponent, panel_component_1.PanelComponent];
//# sourceMappingURL=app.routing.js.map