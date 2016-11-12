import { Component, OnInit } from '@angular/core';

import { Person } from './entities/Person';

import { PersonService } from './services/person.service';

@Component({
    moduleId : module.id,
    selector: 'person-registration',
    templateUrl: './templates/person-registration.component.html'
})
export class PersonRegistrationComponent
{
    person: Person = new Person();
    responseMessage: string;

    constructor(private personService: PersonService) { }

    onSubmit(): void
    {
        alert(JSON.stringify(this.person));
        this.personService.registerPerson(this.person).subscribe(
            response => this.responseMessage = response,
            error =>  this.responseMessage = <any>error);
    }
}