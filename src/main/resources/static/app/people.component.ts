import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { Person } from './entities/EntityBase';

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

    constructor(private personService: PersonService,
                private route: ActivatedRoute,
                private location: Location) {}
    
    onSelect(person: Person): void {
        this.selectedPerson = person;
        this.location.go('/person/' + person.email + '/');
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
