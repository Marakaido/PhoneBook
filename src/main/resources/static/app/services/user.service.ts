import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, RequestMethod, Headers, Request } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { EntityBase, Person, Company } from '../entities/EntityBase';
import { Phone } from '../entities/ContactInformation';

@Injectable()
export class UserService {
    constructor (private http: Http) {}

    get(email: string): Observable<EntityBase> {
        return this.http.get('/service/' + email + '/')
        .map(UserService.extractData)
        .catch(UserService.handleError);
    }

    login(email: string, password: string): Observable<EntityBase> {
        var headers = new Headers();
        headers.append("Content-Type", 'application/x-www-form-urlencoded');
        var requestoptions = new RequestOptions({
            method: RequestMethod.Post,
            url: '/service/login',
            headers: headers,
            body: 'email=' + email + '&password=' + password
        });
        alert('email=' + email + '&password=' + password);
        return this.http.request(new Request(requestoptions))
        .map(UserService.extractData)
        .catch(UserService.handleError);
    }

    search(name: string, surname: string)
    {
        return this.http.get('/service/search/' + name)
        .map(UserService.extractData)
        .catch(UserService.handleError);
    }

    register(entity:EntityBase, _password:string): Observable<EntityBase> {
        var headers = new Headers();
        var data = {user: entity, password: _password};
        alert(JSON.stringify(data));
        headers.append("Content-Type", 'application/json');
        var requestoptions = new RequestOptions({
            method: RequestMethod.Post,
            url: '/service/register',
            headers: headers,
            body: JSON.stringify(data)
        });
        return this.http.request(new Request(requestoptions))
        .map(UserService.extractData)
        .catch(UserService.handleError);
    }

    getPeoplePage(page: number, count: number): Observable<Person[]> {
        return this.http.get('/service/people?' + 'page=' + page + '&count=' + count)
                    .map(UserService.extractData)
                    .catch(UserService.handleError);
    }

    getCompaniesPage(page: number, count: number): Observable<Company[]> {
        return this.http.get('/service/companies?' + 'page=' + page + '&count=' + count)
                    .map(UserService.extractData)
                    .catch(UserService.handleError);
    }

    static extractData(res: Response) {
        let body = res.json();
        console.log(res.json());
        return body;
    }

    static handleError (error: Response | any) {
        let errMsg = "Error";
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return null;
    }
}