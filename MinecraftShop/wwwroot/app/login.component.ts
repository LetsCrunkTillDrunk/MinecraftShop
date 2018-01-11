import { Component, OnInit } from '@angular/core';
import { UserService } from './user.services';
import { User } from './user.models';

@Component
    ({
        selector: 'my-login',
        templateUrl: '/partial/loginComponent'
    })

export class LoginComponent  {
    currentUser: User = null;
    errorMessage: string;

    constructor(private service: UserService) { }

    login(event: Event): void {
        event.preventDefault();

        if (!this.currentUser)
            return;
        this.service.addUser(this.currentUser)
            .subscribe((data: User) => this.currentUser = data, error => this.errorMessage = <any>error);
    }
}