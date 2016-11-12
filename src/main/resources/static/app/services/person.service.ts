import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, RequestMethod, Headers, Request } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Person } from '../entities/Person';

@Injectable()
export class PersonService {
    constructor (private http: Http) {}
    
    getPeople(page: number, count: number): Observable<Person[]> {
        return this.http.get('/service/people-list?' + 'page=' + page + '&count=' + count)
                    .map(this.extractData)
                    .catch(this.handleError);
    }

    getPerson(email: string): Observable<Person> {
        return this.http.get('/service/person/' + email + '/')
                    .map(this.extractData)
                    .catch(this.handleError);
    }

    registerPerson(data:Person): Observable<string> {
        var headers = new Headers();
        headers.append("Content-Type", 'application/json');
        var requestoptions = new RequestOptions({
            method: RequestMethod.Post,
            url: '/service/register-person',
            headers: headers,
            body: JSON.stringify(data)
        });
        return this.http.request(new Request(requestoptions))
        .map(response => response)
        .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        console.log(res.json());
        return body;
    }

    private handleError (error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
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