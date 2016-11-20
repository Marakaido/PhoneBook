import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, RequestMethod, Headers, Request } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Person } from '../entities/Person';
import { Phone, Email, Address  } from '../entities/ContactInformation';

@Injectable()
export class ContactInformationService {
    constructor (private http: Http) {}
    
    getPhones(email: string): Observable<Phone[]>
    {
        return this.getAllContactInforamationByUserEmail<Phone[]>(email, "phones");
    }
    getEmails(email: string): Observable<Email[]>
    {
        return this.getAllContactInforamationByUserEmail<Email[]>(email, "emails");
    }
    getAddresses(email: string): Observable<Address[]>
    {
        return this.getAllContactInforamationByUserEmail<Address[]>(email, "addresses");
    }

    addPhone(phone: Phone): Observable<string>
    {
        return this.addContactInformation<Phone>(phone, "add-phone");
    }
    addEmail(email: Email): Observable<string>
    {
        return this.addContactInformation<Email>(email, "add-email");
    }
    addAddress(address: Address): Observable<string>
    {
        return this.addContactInformation<Address>(address, "add-address");
    }

    removePhone(phone: Phone): Observable<string>
    {
        return this.removeContactInformation<Phone>('phones/remove/' + phone.number);
    }
    removeEmail(email: Email): Observable<string>
    {
        return this.removeContactInformation<Email>('phones/remove/' + email.email);
    }
    removeAddress(address: Address): Observable<string>
    {
        return this.removeContactInformation<Phone>('phones/remove/' + address.address);
    }

    private getAllContactInforamationByUserEmail<T>(email: string, path: string): Observable<T>
    {
        return this.http.get('service/' + path + '/' + email + '/')
                    .map(response => response.json())
                    .catch(error => error);
    }

    private addContactInformation<T>(contactInformation: T, path: string): Observable<string>
    {
        var headers = new Headers();
        headers.append("Content-Type", 'application/json');
        var requestoptions = new RequestOptions({
            method: RequestMethod.Post,
            url: '/service/' + path,
            headers: headers,
            body: JSON.stringify(contactInformation)
        });
        return this.http.request(new Request(requestoptions))
        .map(response => response)
        .catch(error => error);
    }

    private removeContactInformation<T>(path: string): Observable<string>
    {
        return this.http.get('service/' + path + '/')
                    .map(response => response)
                    .catch(error => error);
    }
}