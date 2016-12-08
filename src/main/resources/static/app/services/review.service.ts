import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, RequestMethod, Headers, Request } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { SessionService } from './session.service';
import { Person, Review } from '../entities/EntityBase';
import { ContactInformation, Phone, Email, Address } from '../entities/ContactInformation';
import { ReviewInput, AuthentificationInput } from '../entities/RequestWrapper';

@Injectable()
export class ReviewService {
    constructor(private http: Http,
                private session: SessionService) {}
    get(email: string): Observable<Review[]>
    {
        return this.http.get('service/review/' + email + '/')
                    .map(response => response.json())
                    .catch(error => error);
    }

    add(review: Review): Observable<string>
    {
        var request : Request = this.formRequest(review, RequestMethod.Post);

        return this.http.request(request)
        .map(response => response.text)
        .catch(error => error);
    }

    private formRequest(review: Review, method: RequestMethod) : Request
    {
        //alert(JSON.stringify(new ReviewInput(review, new AuthentificationInput(this.session.getUser().email, this.session.getUser().password))));
        var headers = new Headers();
        headers.append("Content-Type", 'application/json');
        var requestOptions: RequestOptions = new RequestOptions({
            method: method,
            url: 'service/review',
            headers: headers,
            body: JSON.stringify(review)
        });

        return new Request(requestOptions);
    }
}