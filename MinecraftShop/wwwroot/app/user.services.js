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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.url = 'api/user/';
    }
    UserService.prototype.getAllUsers = function () {
        return this.http.get(this.url)
            .map(function (resp) { return resp.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.getById = function (id) {
        return this.http.get(this.url + id)
            .map(function (resp) { return resp.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.getByRole = function (role) {
        return this.http.get(this.url + role)
            .map(function (resp) { return resp.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.addUser = function (user) {
        return this.http
            .post(this.url, user)
            .map(function (resp) { return resp.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.updateUser = function (user) {
        return this.http.post(this.url + user.id, user)
            .map(function (resp) { return resp.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.deleteUser = function (id) {
        console.log(this.url + id);
        return this.http.delete(this.url + id);
        //.map((resp: Response) => resp.json())
        //.catch(this.handleError);
    };
    UserService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.services.js.map