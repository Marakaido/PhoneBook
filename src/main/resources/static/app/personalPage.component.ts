import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { Person } from './entities/Person';
import { Phone } from './entities/Phone';
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
    newPhones: Phone[] = new Array<Phone>();
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
            error => this.errorMessage = error);
    }

    addNewPhoneInput(): void
    {
        let phone: Phone = new Phone();
        phone.entity = this.session.getUser();
        
        this.newPhones.push(phone);
    }

    saveNewPhones(): void
    {
        this.newPhones.forEach(phone => this.contactInformationService.addPhone(phone).subscribe(
            response => alert("Phone " + phone.number + " added"),
            error => alert(error)
        ));
    }

    goBack(): void {
        this.location.back();
    }
}