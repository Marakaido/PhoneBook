import { Component, OnInit } from '@angular/core';

import { Person } from './entities/Person';

import { PersonService } from './services/person.service';

@Component({
    moduleId : module.id,
    selector: 'people-list',
    templateUrl: './templates/people.component.html'
})
export class PeopleComponent implements OnInit
{
    errorMessage: string;
    selectedPerson: Person;
    people: Person[];

    constructor(private personService: PersonService) { }
    
    onSelect(person: Person): void {
        this.selectedPerson = person;
    }

    getPeople(): void {
        this.personService.getPeople().then(people => this.people = people);
    }

    ngOnInit(): void {
        this.getPeople();
    }
}
