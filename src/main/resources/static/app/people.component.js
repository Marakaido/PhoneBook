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
var person_service_1 = require('./services/person.service');
var PeopleComponent = (function () {
    function PeopleComponent(personService) {
        this.personService = personService;
    }
    PeopleComponent.prototype.onSelect = function (person) {
        this.selectedPerson = person;
    };
    PeopleComponent.prototype.getPeople = function () {
        var _this = this;
        this.personService.getPeople().subscribe(function (people) { return _this.people = people; }, function (error) { return _this.errorMessage = error; });
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
        __metadata('design:paramtypes', [person_service_1.PersonService])
    ], PeopleComponent);
    return PeopleComponent;
}());
exports.PeopleComponent = PeopleComponent;
//# sourceMappingURL=people.component.js.map