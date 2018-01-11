import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from './user.models';



@Injectable()
export class UserService {
    private url: string = 'api/user/';
    private result: string;
    constructor(private http: Http) { }

    getAllUsers() {
        return this.http.get(this.url, this.jwt())
            .map((resp: Response) => resp.json())
            .catch(this.handleError);
    }

    getById(id: number) {
        return this.http.get(this.url + id, this.jwt())
            .map((resp: Response) => resp.json())
            .catch(this.handleError);
    }

    getByRole(role: string) {
        return this.http.get(this.url + role, this.jwt())
            .map((resp: Response) => resp.json())
            .catch(this.handleError);
    }

    addUser(user: User) {
        return this.http
            .post(this.url, user, this.jwt())
            .map((resp: Response) => resp.json())
            .catch(this.handleError);
    }

    updateUser(user: User) {
        return this.http.post(this.url + user.id, user, this.jwt())
            .map((resp: Response) => resp.json())
            .catch(this.handleError);
    }

    deleteUser(id: number) {
        console.log(this.url + id);
        return this.http.delete(this.url + id, this.jwt())
        //.map((resp: Response) => resp.json())
        //.catch(this.handleError);
    }
    private handleError(error: Response | any) {
        let errMsg: string;

        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }

        console.error(errMsg);

        return Observable.throw(errMsg);
    }

    private jwt() {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Owner ' + currentUser.token });
            return new RequestOptions({ headers: headers });

        }
    }
}