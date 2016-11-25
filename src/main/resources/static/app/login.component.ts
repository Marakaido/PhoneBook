import { Component, OnInit } from '@angular/core';

import { EntityBase, Person } from './entities/EntityBase';

import { UserService } from './services/user.service';
import { SessionService } from './services/session.service';

@Component({
    moduleId : module.id,
    selector: 'login',
    templateUrl: './templates/login.component.html'
})
export class LoginComponent
{
    errorMessage: string;
    user: EntityBase = new Person();

    constructor(private userService: UserService, private session: SessionService) { }

    login(): void
    {
        this.userService.login(this.user.email, this.user.password)
            .subscribe(user => this.session.setUser(user),
                       error => this.errorMessage = "Authentication failed, please check your email and password");
    }    
}
