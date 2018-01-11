import { Component } from '@angular/core';
import { UserService } from './user.services'; 
import { User } from './user.models';
import { Router } from '@angular/router';
@Component({
    selector: 'my-register',
    templateUrl: '/partial/registerComponent'
})



export class RegisterComponent  {

    currentUser: User = new User();
    errorMessage: string = null;
    loadMsg: string = "Cheking register information";
    loading: boolean = false;

    constructor(private service: UserService, private router: Router) { }

    register(event: Event): void {
        event.preventDefault();
        this.loading = true;
        if (!this.currentUser)
            return;
        this.service.addUser(this.currentUser)
            .subscribe((data: User) => { this.currentUser = data; this.router.navigate(['']); }, error => this.errorMessage = <any>error);
    }

}