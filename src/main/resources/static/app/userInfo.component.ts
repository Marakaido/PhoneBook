import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { EntityBase, Person, Company } from './entities/EntityBase';
import { ContactInformation, Phone, Email, Address } from './entities/ContactInformation';
import { UserService } from './services/user.service';
import { SessionService } from './services/session.service';
import { ContactInformationService } from './services/contactInformation.service';
import { ReviewService } from './services/review.service';
import { UserPageBase } from './userPageBase';

@Component({
    moduleId : module.id,
    selector: 'user-info',
    templateUrl: './templates/personal-page.component.html'
})
export class UserInfoComponent extends UserPageBase implements OnInit
{
    constructor(userService: UserService,
                contactInformationService: ContactInformationService,
                reviewService: ReviewService,
                session: SessionService,
                route: ActivatedRoute,
                location: Location) 
    {
        super(userService, contactInformationService, reviewService, session, route, location);
    }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let email = params['email'];
            this.userService.get(email).subscribe(
                response => this.init(response),
                error => this.handleError(error)
            );
        });
    }
}