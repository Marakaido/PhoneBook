"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var person_service_1 = require('./services/person.service');
var PeopleComponent = (function () {
    function PeopleComponent(personService, route, location) {
        this.personService = personService;
        this.route = route;
        this.location = location;
        this.people = new Array();
        this.count = 10;
        this.page = 0;
    }
    PeopleComponent.prototype.onSelect = function (person) {
        this.selectedPerson = person;
        this.location.go('/person/' + person.email + '/');
    };
    PeopleComponent.prototype.getPeople = function () {
        this.loadMore();
    };
    PeopleComponent.prototype.loadMore = function () {
        var _this = this;
        this.personService.getPeople(this.page, this.count).subscribe(function (people) { return _this.people = _this.people.concat(people); }, function (error) { return _this.errorMessage = error; }, function () { return null; });
        this.page += 1;
    };
    PeopleComponent.prototype.ngOnInit = function () {
        this.getPeople();
    };
    PeopleComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'people-list',
            templateUrl: './templates/people.component.html'
        }), 
        __metadata('design:paramtypes', [person_service_1.PersonService, router_1.ActivatedRoute, common_1.Location])
    ], PeopleComponent);
    return PeopleComponent;
}());
exports.PeopleComponent = PeopleComponent;
//# sourceMappingURL=people.component.js.map