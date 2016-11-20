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
                    .map(response => response.json())
                    .catch(error => error);
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
        .map(response => response)
        .catch(error => error);
    }

    removePhone(phone: Phone): Observable<string>
    {
        return this.http.get('service/phones/remove/' + phone.number + '/')
                    .map(response => response)
                    .catch(error => error);
    }
}