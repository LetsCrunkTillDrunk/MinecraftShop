"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var login_component_1 = require("./login.component");
var main_component_1 = require("./main.component");
var register_component_1 = require("./register.component");
var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: main_component_1.MainComponent, data: { title: 'Home' } },
    { path: 'login', component: login_component_1.LoginComponent, data: { title: 'Login' } },
    { path: 'register', component: register_component_1.RegisterComponent, data: { title: 'Register' } }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
exports.routedComponents = [register_component_1.RegisterComponent, main_component_1.MainComponent, login_component_1.LoginComponent];
//# sourceMappingURL=app.routing.js.map