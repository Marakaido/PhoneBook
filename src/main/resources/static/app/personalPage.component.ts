import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { Person } from './entities/Person';
import { PersonService } from './services/person.service';
import { SessionService } from './services/session.service';

@Component({
    moduleId : module.id,
    selector: 'personal-page',
    templateUrl: './templates/personal-page.component.html'
})
export class PersonalPageComponent implements OnInit
{
    person: Person;
    errorMessage: string;

    constructor(
        private personService: PersonService,
        private session: SessionService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.person = this.session.getUser();
    }

    goBack(): void {
        this.location.back();
    }
}