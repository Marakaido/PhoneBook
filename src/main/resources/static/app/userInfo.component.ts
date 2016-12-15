import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { EntityBase, Person, Company, Review } from './entities/EntityBase';
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
    newReview: Review = new Review();

    constructor(userService: UserService,
                contactInformationService: ContactInformationService,
                reviewService: ReviewService,
                session: SessionService,
                route: ActivatedRoute,
                location: Location) 
    {
        super(userService, contactInformationService, reviewService, session, route, location);
        this.editable = false;
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

    addReview(): void
    {
        this.newReview.author = this.session.getUser() as Person;
        alert(this.user);
        this.newReview.company = this.user as Company;
        this.reviewService.add(this.newReview).subscribe(
            response => this.handleResponce(),
            error => this.handleError(error)
        );
    }

    handleResponce(): void
    {
        this.reviews.push(this.newReview);
        this.newReview = new Review();
    }
}