import { Component, EventEmitter, Output, OnInit } from '@angular/core';

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
    data = {email: "", password: ""};
    @Output() onSuccessfulLogin = new EventEmitter<boolean>();

    constructor(private userService: UserService, private session: SessionService) { }

    login(): void
    {
        this.userService.login(this.data.email, this.data.password)
            .subscribe(user => {
                this.session.setUser(user, this.data.password);
                alert("Successful log in, emiting event");
                this.onSuccessfulLogin.emit(true);
            },
                       error => this.errorMessage = "Authentication failed, please check your email and password"
            );
    }    
}
