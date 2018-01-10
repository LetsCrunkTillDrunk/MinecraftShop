import { Component, OnInit } from '@angular/core';
import { UserService } from './user.services';
import { User } from './user.models';

@Component
    ({
        selector: 'my-login',
        templateUrl: '/partial/loginComponent'
    })

export class LoginComponent  {
    user: User = null;
    errorMessage: string;

    constructor(private userService: UserService) { }
}