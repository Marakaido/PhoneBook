import { Injectable } from '@angular/core';

import { EntityBase } from '../entities/EntityBase';

@Injectable()
export class SessionService {
    private user: EntityBase;

    public getUser()
    {
        return this.user;
    }

    public setUser(user: EntityBase)
    {
        this.user = user;
    }
}