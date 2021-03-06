import { Component, OnInit, Input } from '@angular/core';
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
    entities: EntityBase[];
    
    searchResult: EntityBase[] = new Array<EntityBase>();
    searchString: string = "";

    
    inputEntities() 
    {
        if(this.searchResult != null) this.entities = this.searchResult;
        else this.updateList();
    }

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

    loadNextPage()
    {
        this.page += 1;
        this.updateList();
    }

    toggleIncludePeople()
    {
        this.includePeople = !this.includePeople;
        this.updateList();
    }

    toggleIncludeCompanies()
    {
        this.includeCompanies = !this.includeCompanies;
        this.updateList();
    }

    updateList()
    {
        this.entities = new Array<EntityBase>();
        if(this.includePeople) this.loadMorePeople();
        if(this.includeCompanies) this.loadMoreCompanies();
        this.sortList();
    }

    loadMorePeople(): void {
        this.userService.getPeoplePage(this.page, this.count).subscribe(
            people => this.entities = this.entities.concat(people),
            error =>  this.errorMessage = <any>error);
    }

    loadMoreCompanies(): void {
        this.userService.getCompaniesPage(this.page, this.count).subscribe(
            companies => this.entities = this.entities.concat(companies),
            error =>  this.errorMessage = <any>error);
    }

    sortList()
    {
        
    }

    search(event)
    {
        console.log(event);
        if(event.length > 0)
        {
        this.userService.search(event, event).subscribe(
            (result) => {
                this.searchResult = <any>result
                this.inputEntities();
            },
            (error) => alert(error)
        );
        }
        else this.searchResult = null;
    }

    ngOnInit(): void {
        this.updateList();
    }
}
