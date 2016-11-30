import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { EntityBase, Person, Company, Review } from './entities/EntityBase';
import { ContactInformation, Phone, Email, Address } from './entities/ContactInformation';
import { UserService } from './services/user.service';
import { SessionService } from './services/session.service';
import { ReviewService } from './services/review.service';
import { ContactInformationService } from './services/contactInformation.service';

export class UserPageBase
{
    user: EntityBase = null;

    phones: Phone[];
    emails: Email[];
    addresses: Address[];
    reviews: Review[];

    displayPersonInformation: boolean = false;
    displayCompanyInformation: boolean = false;

    errorMessage: string;

    constructor(
        public userService: UserService,
        public contactInformationService: ContactInformationService,
        public reviewService: ReviewService,
        public session: SessionService,
        public route: ActivatedRoute,
        public location: Location
    ) {}

    init(user: EntityBase): void
    {
        this.user = user;
        this.getContactInformation();
        this.determineInformationToDisplay();
        if(user.type == "company") this.getReviews();
    }

    getContactInformation()
    {
        this.contactInformationService.getPhones(this.user.email).subscribe(
            response => this.phones = response,
            error => this.handleError(error)
        );

        this.contactInformationService.getEmails(this.user.email).subscribe(
            response => this.emails = response,
            error => this.handleError(error)
        );

        this.contactInformationService.getAddresses(this.user.email).subscribe(
            response => this.addresses = response,
            error => this.handleError(error)
        );
    }

    getReviews()
    {
        this.reviewService.get(this.user.email).subscribe(
            response => this.reviews = response,
            error => this.handleError(error)
        );
    }

    handleError(error)
    {
        console.error(error);
    }

    determineInformationToDisplay()
    {
        if(this.user.type == "person") this.displayPersonInformation = true;
        else if(this.user.type == "company") this.displayCompanyInformation = true;
    }

    goBack(): void {
        this.location.back();
    }
}