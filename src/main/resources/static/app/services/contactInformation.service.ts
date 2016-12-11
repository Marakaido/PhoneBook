import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, RequestMethod, Headers, Request } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Person } from '../entities/EntityBase';
import { ContactInformation, Phone, Email, Address } from '../entities/ContactInformation';
import { SessionService } from './session.service';

@Injectable()
export class ContactInformationService {
    constructor (private http: Http, private session: SessionService) {}
    
    getPhones(email: string): Observable<Phone[]>
    {
        return this.getAllContactInforamationByUserEmail<Phone[]>(email, "phone");
    }
    getEmails(email: string): Observable<Email[]>
    {
        return this.getAllContactInforamationByUserEmail<Email[]>(email, "email");
    }
    getAddresses(email: string): Observable<Address[]>
    {
        return this.getAllContactInforamationByUserEmail<Address[]>(email, "address");
    }

    add<T extends ContactInformation>(contactInformation: T): Observable<string>
    {
        var request : Request = this.formRequest(contactInformation, RequestMethod.Post);

        return this.http.request(request)
        .map(response => response.text)
        .catch(error => error);
    }

    remove<T extends ContactInformation>(contactInformation: T): Observable<string>
    {
        var request : Request = this.formRequest(contactInformation, RequestMethod.Delete);

        return this.http.request(request)
        .map(response => response.text)
        .catch(error => error);
    }

    private formRequest(contactInformation: ContactInformation, method: RequestMethod) : Request
    {
        var data = {
            userData: {email: this.session.getUser().email, password: this.session.getPassword()},
            data: contactInformation
        };
        alert(JSON.stringify(data));
        var headers = new Headers();
        headers.append("Content-Type", 'application/json');
        var requestOptions: RequestOptions = new RequestOptions({
            method: method,
            url: 'service/contact-information',
            headers: headers,
            body: JSON.stringify(data)
        });

        return new Request(requestOptions);
    }

    private getAllContactInforamationByUserEmail<T>(email: string, path: string): Observable<T>
    {
        return this.http.get('service/contact-information/' + path + '/' + email + '/')
                    .map(response => response.json())
                    .catch(error => error);
    }

    private determineTypeProperty<T>(instance: T): string
    {
        if(instance instanceof Phone) return "phone";
        else if(instance instanceof Email) return "email";
        else if(instance instanceof Address) return "address";
    }
}