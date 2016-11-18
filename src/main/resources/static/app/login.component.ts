import { Component, OnInit } from '@angular/core';

import { Person } from './entities/Person';

import { PersonService } from './services/person.service';
import { SessionService } from './services/session.service';

@Component({
    moduleId : module.id,
    selector: 'login',
    templateUrl: './templates/login.component.html'
})
export class LoginComponent
{
    errorMessage: string;
    person: Person = new Person();

    constructor(private personService: PersonService, private session: SessionService) { }

    login(): void
    {
        this.personService.loginPerson(this.person.email, this.person.password)
            .subscribe(user => this.session.setUser(user),
                        error => this.errorMessage = "Authentication failed, please check your email and password",
                        () => { alert("Welcome, " + this.session.getUser().name); this.errorMessage = null });
    }    
}
