import { Injectable } from '@angular/core';

import { EntityBase } from '../entities/EntityBase';

@Injectable()
export class SessionService {
    private user: EntityBase;

    public getUser(): EntityBase
    {
        return this.user;
    }

    public setUser(user: EntityBase): void
    {
        this.user = user;
    }
}