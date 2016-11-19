import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, RequestMethod, Headers, Request } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Person } from '../entities/Person';
import { Phone } from '../entities/Phone';

@Injectable()
export class ContactInformationService {
    constructor (private http: Http) {}
    
    getPhones(email: string): Observable<Phone[]>
    {
        return this.http.get('service/phones/' + email + '/')
                    .map(this.extractData)
                    .catch(this.handleError);
    }

    addPhone(phone: Phone): Observable<string>
    {
        var headers = new Headers();
        headers.append("Content-Type", 'application/json');
        var requestoptions = new RequestOptions({
            method: RequestMethod.Post,
            url: '/service/add-phone',
            headers: headers,
            body: JSON.stringify(phone)
        });
        return this.http.request(new Request(requestoptions))
        .map(this.extractData)
        .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        console.log(res.json());
        return body;
    }

    private handleError (error: Response | any) {
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