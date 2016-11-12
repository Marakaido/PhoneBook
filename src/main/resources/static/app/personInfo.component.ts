import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { Person } from './entities/Person';
import { PersonService } from './services/person.service';

@Component({
    moduleId : module.id,
    selector: 'person-info',
    templateUrl: './templates/person-info.component.html'
})
export class PersonInfoComponent implements OnInit
{
    person: Person;
    errorMessage: string;

    constructor(
        private personService: PersonService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => alert(params['email']));
        
        this.route.params.forEach((params: Params) => {
            let email = params['email'];
            this.personService.getPerson(email).subscribe(
                response => this.person = response,
                error =>  this.errorMessage = <any>error,
                () => null);
        });
    }

    goBack(): void {
        this.location.back();
    }
}