import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs-operators';

@Injectable()
export class AuthService {

    url: string = "api/auth";

    constructor(private http: Http) { }

    login(username: string, password: string) {
        return this.http.post(this.url, { username: username, password: password })
            .map((response: Response) => {
                let user = response.json();
                if (user && user.token) {
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
            });
    }

    logout() {
        localStorage.removeItem('currentUser');
    }
}