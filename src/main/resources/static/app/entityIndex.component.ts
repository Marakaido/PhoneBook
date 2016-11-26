import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { EntityBase, Person, Company } from './entities/EntityBase';

import { UserService } from './services/user.service';

@Component({
    moduleId : module.id,
    selector: 'entity-index',
    templateUrl: './templates/entity-index.component.html'
})
export class EntityIndexComponent implements OnInit
{
    errorMessage: string;
    
    selectedEntity: EntityBase;
    entities: EntityBase[] = new Array<EntityBase>();
    
    count: number = 10;
    page: number = 0;

    includePeople: boolean = true;
    includeCompanies: boolean = true;

    constructor(private userService: UserService,
                private route: ActivatedRoute,
                private location: Location) {}
    
    onSelect(entity: EntityBase): void {
        this.selectedEntity = entity;
        this.location.go('/' + entity.email + '/');
    }

    getPeople(): void {
        this.loadMore();
    }

    loadMore(): void {
        this.userService.getPeoplePage(this.page, this.count).subscribe(
            people => this.entities = this.entities.concat(people),
            error =>  this.errorMessage = <any>error,
            () => null);
        this.page += 1;
    }

    ngOnInit(): void {
        this.getPeople();
    }
}
