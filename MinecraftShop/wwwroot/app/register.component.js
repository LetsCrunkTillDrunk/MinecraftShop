"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_services_1 = require("./user.services");
var user_models_1 = require("./user.models");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(service) {
        this.service = service;
        this.currentUser = new user_models_1.User();
        this.errorMessage = null;
    }
    RegisterComponent.prototype.register = function (event) {
        var _this = this;
        event.preventDefault();
        if (!this.currentUser)
            return;
        this.service.addUser(this.currentUser)
            .subscribe(function (user) { return _this.currentUser = user; }, function (error) { return _this.errorMessage = error; });
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'my-register',
            templateUrl: '/partial/registerComponent'
        }),
        __metadata("design:paramtypes", [user_services_1.UserService])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map