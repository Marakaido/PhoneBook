import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { Person } from './entities/EntityBase';
import { ContactInformation, Phone, Email, Address } from './entities/ContactInformation';
import { PersonService } from './services/person.service';
import { SessionService } from './services/session.service';
import { ContactInformationService } from './services/contactInformation.service';

@Component({
    moduleId : module.id,
    selector: 'personal-page',
    templateUrl: './templates/personal-page.component.html'
})
export class PersonalPageComponent implements OnInit
{
    person: Person;

    phones: Phone[];
    emails: Email[];
    addresses: Address[];

    newPhones: Phone[] = new Array<Phone>();
    newEmails: Email[] = new Array<Email>();
    newAddresses: Address[] = new Array<Address>();

    editPhones: boolean = false;

    errorMessage: string;

    constructor(
        private personService: PersonService,
        private contactInformationService: ContactInformationService, 
        private session: SessionService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.person = this.session.getUser();
        this.contactInformationService.getPhones(this.person.email).subscribe(
            response => this.phones = response,
            error => this.handleError(error));
        this.contactInformationService.getEmails(this.person.email).subscribe(
            response => this.emails = response,
            error => this.handleError(error)
        );
        this.contactInformationService.getAddresses(this.person.email).subscribe(
            response => this.addresses = response,
            error => this.handleError(error)
        );
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
        instance.entity = this.session.getUser().email;
        contacts.push(instance);
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

    private handleError(error)
    {
        //alert(error);
    }

    goBack(): void {
        this.location.back();
    }
}