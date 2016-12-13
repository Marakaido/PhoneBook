import { Component, OnInit } from '@angular/core';
import { Router }   from '@angular/router';
import { Location }                 from '@angular/common';

import { EntityBase, Person, Company } from './entities/EntityBase';

import { UserService } from './services/user.service';
import { SessionService } from './services/session.service';

@Component({
    moduleId : module.id,
    selector: 'registration',
    templateUrl: './templates/registration.component.html'
})
export class RegistrationComponent
{
    user: EntityBase;
    password: string;
    responseMessage: string;
    registrationType: string;

    constructor(private userService: UserService,
                private session: SessionService,
                private router: Router,
                private location: Location) {}

    onSubmit(): void
    {
        alert(JSON.stringify(this.user));
        this.userService.register(this.user, this.password).subscribe(
            response => this.user = response,
            error =>  this.responseMessage = <any>error,
            () => this.completeRegistration());
    }

    completeRegistration(): void
    {
        this.session.setUser(this.user, this.password);
        this.router.navigateByUrl("/personal-page");
    }

    chooseType(type: string): void
    {
        this.registrationType = type;
        switch(type)
        {
            case "person": this.user = new Person(); break;
            case "company": this.user = new Company();
        }
    }
}