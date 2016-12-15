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
    selector: 'personal-page',
    templateUrl: './templates/personal-page.component.html'
})
export class PersonalPageComponent extends UserPageBase implements OnInit
{
    newPhones: Phone[] = new Array<Phone>();
    newEmails: Email[] = new Array<Email>();
    newAddresses: Address[] = new Array<Address>();

    private editPhones: boolean = false;
    private editEmails: boolean = false;
    private editAddresses: boolean = false;

    constructor(userService: UserService,
                contactInformationService: ContactInformationService,
                reviewService: ReviewService,
                session: SessionService,
                route: ActivatedRoute,
                location: Location) 
    {
        super(userService, contactInformationService, reviewService, session, route, location);
        this.editable = true;
    }

    ngOnInit(): void {
        this.init(this.session.getUser());
    }

    addNewPhoneInput(): void
    {
        this.addNewInput(this.newPhones, new Phone());
    }
    addNewEmailInput(): void
    {
        this.addNewInput(this.newEmails, new Email());
    }
    addNewAddressInput(): void
    {
        this.addNewInput(this.newAddresses, new Address());
    }
    private addNewInput<T extends ContactInformation>(contacts: T[], instance: T): void
    {
        instance.entity = this.user.email;
        contacts.push(instance);
    }

    addPhone(phone): void
    {
        this.contactInformationService.add<Phone>(phone).subscribe(
            response => this.commitContactInformationAddition<Phone>(this.phones, this.newPhones, phone),
            error => this.handleError(error)
        );
    }
    addEmail(email): void
    {
        this.contactInformationService.add<Phone>(email).subscribe(
            response => this.commitContactInformationAddition<Email>(this.emails, this.newEmails, email),
            error => this.handleError(error)
        );
    }
    addAddress(address): void
    {
        this.contactInformationService.add<Address>(address).subscribe(
            response => this.commitContactInformationAddition<Address>(this.addresses, this.newAddresses, address),
            error => this.handleError(error)
        );
    }

    saveNewPhones(): void
    {
        this.newPhones.forEach(phone => this.contactInformationService.add<Phone>(phone).subscribe(
            response => this.commitContactInformationAddition<Phone>(this.phones, this.newPhones, phone),
            error => this.handleError(error)
        ));
    }
    saveNewEmails(): void
    {
        this.newEmails.forEach(email => this.contactInformationService.add<Email>(email).subscribe(
            response => this.commitContactInformationAddition<Email>(this.emails, this.newEmails, email),
            error => this.handleError(error)
        ));
    }
    saveNewAddresses(): void
    {
        this.newAddresses.forEach(address => this.contactInformationService.add<Address>(address).subscribe(
            response => this.commitContactInformationAddition<Address>(this.addresses, this.newAddresses, address),
            error => this.handleError(error)
        ));
    }
    commitContactInformationAddition<T extends ContactInformation>(contacts: T[], newContacts: T[], instance: T): void
    {
        newContacts.splice(newContacts.indexOf(instance), 1);
        contacts.push(instance);
    }

    removeNewPhone(phone)
    {
        this.commitContactInformationRemoval<Phone>(this.newPhones, phone);
    }
    removeNewEmail(email)
    {
        this.commitContactInformationRemoval<Email>(this.newEmails, email);
    }
    removeNewAddress(address)
    {
        this.commitContactInformationRemoval<Address>(this.newAddresses, address);
    }

    removePhone(phone: Phone): void
    {
        this.contactInformationService.remove<Phone>(phone).subscribe(
            response => this.commitContactInformationRemoval<Phone>(this.phones, phone),
            error => this.handleError(error)
        );
    }
    removeEmail(email: Email): void
    {
        this.contactInformationService.remove<Email>(email).subscribe(
            response => this.commitContactInformationRemoval<Email>(this.emails, email),
            error => this.handleError(error)
        );
    }
    removeAddress(address: Address): void
    {
        this.contactInformationService.remove<Address>(address).subscribe(
            response => this.commitContactInformationRemoval<Address>(this.addresses, address),
            error => this.handleError(error)
        );
    }
    commitContactInformationRemoval<T>(contacts: T[], instance: T)
    {
        contacts.splice(contacts.indexOf(instance), 1)
    }
}