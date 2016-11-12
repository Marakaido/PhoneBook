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
    people: Person[] = new Array<Person>();
    person: any;
    count: number = 10;
    page: number = 0;

    constructor(private personService: PersonService) { }
    
    onSelect(person: Person): void {
        this.selectedPerson = person;
    }

    getPeople(): void {
        this.loadMore();
    }

    loadMore(): void {
        this.personService.getPeople(this.page, this.count).subscribe(
            people => this.people = this.people.concat(people),
            error =>  this.errorMessage = <any>error,
            () => null);
        this.page += 1;
    }

    ngOnInit(): void {
        this.getPeople();
    }
}
