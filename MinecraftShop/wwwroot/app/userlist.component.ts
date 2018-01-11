import { Component, OnInit } from '@angular/core';
import { UserService } from './user.services';
import { User } from './user.models';

@Component
    ({
        selector: 'userlist',
        templateUrl: '/partial/userListComponent'
    })

export class UserListComponent implements OnInit {
    users: User[] = [];
    errorMessage: string;
    user: User = new User();

    constructor(private service: UserService) { 
        
    }

    ngOnInit() {
        this.getUsers();
    }

    getUsers(): void {
        
        this.service.getAllUsers()
            .subscribe((data: User[]) => { this.users = data, console.log(this.users) }, error => this.errorMessage = <any>error);
    }

    deleteUser(id: number) {
        console.log(id);
        this.service.deleteUser(id)
            .subscribe(() => this.getUsers())
    }
}