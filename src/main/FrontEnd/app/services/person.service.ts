import { Injectable } from '@angular/core';

import { Person } from '../entities/Person';

import { PEOPLE } from '../mocks/mock-people';

@Injectable()
export class PersonService {
    getPeople(): Promise<Person[]> {
        return Promise.resolve(PEOPLE);
    }

    getPerson(id: number): Promise<Person> {
        return this.getPeople().then(people => people.find(hero => hero.id === id));
    }
}