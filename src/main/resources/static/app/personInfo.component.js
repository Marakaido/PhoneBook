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
var Person_1 = require('./entities/Person');
var person_service_1 = require('./services/person.service');
var session_service_1 = require('./services/session.service');
var contactInformation_service_1 = require('./services/contactInformation.service');
var PersonInfoComponent = (function () {
    function PersonInfoComponent(personService, contactInformationService, session, route, location) {
        this.personService = personService;
        this.contactInformationService = contactInformationService;
        this.session = session;
        this.route = route;
        this.location = location;
        this.person = new Person_1.Person();
    }
    PersonInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var email = params['email'];
            _this.personService.getPerson(email).subscribe(function (response) {
                _this.person = response;
                _this.getContactInformation();
            }, function (error) { return _this.handleError; });
        });
    };
    PersonInfoComponent.prototype.getContactInformation = function () {
        var _this = this;
        this.contactInformationService.getPhones(this.person.email).subscribe(function (response) { return _this.phones = response; }, function (error) { return _this.errorMessage = error; });
        this.contactInformationService.getEmails(this.person.email).subscribe(function (response) { return _this.emails = response; }, function (error) { return _this.handleError(error); });
        this.contactInformationService.getAddresses(this.person.email).subscribe(function (response) { return _this.addresses = response; }, function (error) { return _this.handleError(error); });
    };
    PersonInfoComponent.prototype.handleError = function (error) {
        alert(error);
    };
    PersonInfoComponent.prototype.goBack = function () {
        this.location.back();
    };
    PersonInfoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'person-info',
            templateUrl: './templates/person-info.component.html'
        }), 
        __metadata('design:paramtypes', [person_service_1.PersonService, contactInformation_service_1.ContactInformationService, session_service_1.SessionService, router_1.ActivatedRoute, common_1.Location])
    ], PersonInfoComponent);
    return PersonInfoComponent;
}());
exports.PersonInfoComponent = PersonInfoComponent;
//# sourceMappingURL=personInfo.component.js.map