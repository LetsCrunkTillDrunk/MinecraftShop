import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from './user.models';



@Injectable()
export class UserService {
    private url: string = 'api/user';
    private result: string;
    constructor(private http: Http) { }

    getAllUsers(): Observable<User> {
        return this.http.get(this.url).map((resp: Response) => resp.json()).catch(this.handleError);
    }

    //getUser(user: User): Observable<User> {
    //    let headers = new Headers(
    //        {
    //            'Content-Type': 'application/json'
    //        });
    //    return this.http.post(this.url, JSON.stringify(User), {headers:headers})
    //        .map((resp: Response) => resp.json())
    //        .catch(this.handleError);
    //}

    addUser(user: User): Observable<User> {


        return this.http
            .post(this.url, user)
            .map((resp: Response) => resp.json())
            .catch(this.handleError);

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
}