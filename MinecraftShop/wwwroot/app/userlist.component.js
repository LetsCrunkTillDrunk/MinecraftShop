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
var UserListComponent = /** @class */ (function () {
    function UserListComponent(service) {
        this.service = service;
        this.users = [];
        this.user = new user_models_1.User();
    }
    UserListComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    UserListComponent.prototype.getUsers = function () {
        var _this = this;
        this.service.getAllUsers()
            .subscribe(function (data) { _this.users = data, console.log(_this.users); }, function (error) { return _this.errorMessage = error; });
    };
    UserListComponent.prototype.deleteUser = function (id) {
        var _this = this;
        console.log(id);
        this.service.deleteUser(id)
            .subscribe(function () { return _this.getUsers(); });
    };
    UserListComponent = __decorate([
        core_1.Component({
            selector: 'userlist',
            templateUrl: '/partial/userListComponent'
        }),
        __metadata("design:paramtypes", [user_services_1.UserService])
    ], UserListComponent);
    return UserListComponent;
}());
exports.UserListComponent = UserListComponent;
//# sourceMappingURL=userlist.component.js.map