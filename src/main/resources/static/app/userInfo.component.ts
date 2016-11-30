import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { EntityBase, Person, Company } from './entities/EntityBase';
import { ContactInformation, Phone, Email, Address } from './entities/ContactInformation';
import { UserService } from './services/user.service';
import { SessionService } from './services/session.service';
import { ContactInformationService } from './services/contactInformation.service';

@Component({
    moduleId : module.id,
    selector: 'user-info',
    templateUrl: './templates/personal-page.component.html'
})
export class UserInfoComponent implements OnInit
{
    user: EntityBase = null;

    phones: Phone[];
    emails: Email[];
    addresses: Address[];

    displayPersonInformation: boolean = false;
    displayCompanyInformation: boolean = false;

    errorMessage: string;

    constructor(
        public userService: UserService,
        private contactInformationService: ContactInformationService, 
        private session: SessionService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
        alert("Initializing user information component");
        this.route.params.forEach((params: Params) => {
            let email = params['email'];
            this.userService.get(email).subscribe(
                response => {
                    this.user = response;
                    this.getContactInformation();
                    this.determineInformationToDisplay();
                },
                error =>  this.handleError(error))
        });
    }

    getContactInformation()
    {
        this.contactInformationService.getPhones(this.user.email).subscribe(
            response => this.phones = response,
            error => this.handleError(error));
        this.contactInformationService.getEmails(this.user.email).subscribe(
            response => this.emails = response,
            error => this.handleError(error)
        );
        this.contactInformationService.getAddresses(this.user.email).subscribe(
            response => this.addresses = response,
            error => this.handleError(error)
        );
    }

    private handleError(error)
    {
        //alert(error);
    }

    private determineInformationToDisplay()
    {
        if(this.user.type == "person") this.displayPersonInformation = true;
        else if(this.user.type == "company") this.displayCompanyInformation = true;
    }

    goBack(): void {
        this.location.back();
    }
}