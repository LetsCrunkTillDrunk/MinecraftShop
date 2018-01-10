import { Component } from '@angular/core';
import { UserService } from './user.services'; 
import { User } from './user.models';
@Component({
    selector: 'my-register',
    templateUrl: '/partial/registerComponent'
})



export class RegisterComponent  {

    currentUser: User = new User();
    errorMessage:string = null;

    constructor(private service: UserService) { }

    register(event: Event): void {
        event.preventDefault();

        if (!this.currentUser)
            return;
        this.service.addUser(this.currentUser)
            .subscribe((user: User) => this.currentUser = user, error => this.errorMessage = <any>error);
    }

}