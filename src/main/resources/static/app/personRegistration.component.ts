import { Component, OnInit } from '@angular/core';
import { Router }   from '@angular/router';
import { Location }                 from '@angular/common';

import { Person } from './entities/Person';

import { PersonService } from './services/person.service';
import { SessionService } from './services/session.service';

@Component({
    moduleId : module.id,
    selector: 'person-registration',
    templateUrl: './templates/person-registration.component.html'
})
export class PersonRegistrationComponent
{
    person: Person = new Person();
    responseMessage: string;

    constructor(private personService: PersonService,
                private session: SessionService,
                private router: Router,
                private location: Location) {}

    onSubmit(): void
    {
        alert(JSON.stringify(this.person));
        this.personService.registerPerson(this.person).subscribe(
            response => this.person = response,
            error =>  this.responseMessage = <any>error,
            () => this.completeRegistration());
    }

    completeRegistration(): void
    {
        this.session.setUser(this.person);
        this.router.navigateByUrl("/personal-page");
    }
}