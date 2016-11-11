import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Person } from '../entities/Person';

import { PEOPLE } from '../mocks/mock-people';

@Injectable()
export class PersonService {
    private apiUrl = 'localhost:8080/';
    private peopleUrl = this.apiUrl + 'greeting';  // URL to web API
    
    constructor (private http: Http) {}
    
    getPeople(): Observable<Person[]> {
        return this.http.get('greeting')
                    .map(this.extractData)
                    .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        console.log(res.json());
        return body;
    }

    private handleError (error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
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

    //getPerson(id: number): Promise<Person> {
      //  return this.getPeople().then(people => people.find(hero => hero.id === id));
    //}
}