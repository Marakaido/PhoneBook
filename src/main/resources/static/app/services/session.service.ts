import { Injectable } from '@angular/core';

import { EntityBase } from '../entities/EntityBase';

@Injectable()
export class SessionService {
    private user: EntityBase;
    private password: string;
    public getUser(): EntityBase
    {
        return this.user;
    }

    public setUser(user: EntityBase, password: string): void
    {
        this.user = user;
        this.password = password;
    }

    public getPassword() { return this.password; }
    

    public isAuthenticated(): boolean
    {
        return this.user != null;
    }
}