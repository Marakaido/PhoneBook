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
var ContactInformation_1 = require('./entities/ContactInformation');
var person_service_1 = require('./services/person.service');
var session_service_1 = require('./services/session.service');
var contactInformation_service_1 = require('./services/contactInformation.service');
var PersonalPageComponent = (function () {
    function PersonalPageComponent(personService, contactInformationService, session, route, location) {
        this.personService = personService;
        this.contactInformationService = contactInformationService;
        this.session = session;
        this.route = route;
        this.location = location;
        this.newPhones = new Array();
        this.newEmails = new Array();
        this.newAddresses = new Array();
        this.editPhones = false;
    }
    PersonalPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.person = this.session.getUser();
        this.contactInformationService.getPhones(this.person.email).subscribe(function (response) { return _this.phones = response; }, function (error) { return _this.errorMessage = error; });
        this.contactInformationService.getEmails(this.person.email).subscribe(function (response) { return _this.emails = response; }, function (error) { return _this.handleError(error); });
        this.contactInformationService.getAddresses(this.person.email).subscribe(function (response) { return _this.addresses = response; }, function (error) { return _this.handleError(error); });
    };
    PersonalPageComponent.prototype.addNewPhoneInput = function () {
        this.addNewInput(this.newPhones, new ContactInformation_1.Phone());
    };
    PersonalPageComponent.prototype.addNewEmailInput = function () {
        this.addNewInput(this.newEmails, new ContactInformation_1.Email());
    };
    PersonalPageComponent.prototype.addNewAddressInput = function () {
        this.addNewInput(this.newAddresses, new ContactInformation_1.Address());
    };
    PersonalPageComponent.prototype.addNewInput = function (contacts, instance) {
        instance.entity = this.session.getUser().email;
        contacts.push(instance);
    };
    PersonalPageComponent.prototype.saveNewPhones = function () {
        var _this = this;
        this.newPhones.forEach(function (phone) { return _this.contactInformationService.addPhone(phone).subscribe(function (response) { return _this.commitContactInformationAddition(_this.phones, _this.newPhones, phone); }, function (error) { return _this.handleError(error); }); });
    };
    PersonalPageComponent.prototype.saveNewEmails = function () {
        var _this = this;
        this.newEmails.forEach(function (email) { return _this.contactInformationService.addEmail(email).subscribe(function (response) { return _this.commitContactInformationAddition(_this.emails, _this.newEmails, email); }, function (error) { return _this.handleError(error); }); });
    };
    PersonalPageComponent.prototype.saveNewAddresses = function () {
        var _this = this;
        this.newAddresses.forEach(function (address) { return _this.contactInformationService.addAddress(address).subscribe(function (response) { return _this.commitContactInformationAddition(_this.addresses, _this.newAddresses, address); }, function (error) { return _this.handleError(error); }); });
    };
    PersonalPageComponent.prototype.commitContactInformationAddition = function (contacts, newContacts, instance) {
        newContacts.splice(newContacts.indexOf(instance), 1);
        contacts.push(instance);
    };
    PersonalPageComponent.prototype.removePhone = function (phone) {
        var _this = this;
        this.contactInformationService.removePhone(phone).subscribe(function (response) { return _this.commitContactInformationRemoval(_this.phones, phone); }, function (error) { return _this.handleError(error); });
    };
    PersonalPageComponent.prototype.removeEmail = function (email) {
        var _this = this;
        this.contactInformationService.removeEmail(email).subscribe(function (response) { return _this.commitContactInformationRemoval(_this.emails, email); }, function (error) { return _this.handleError(error); });
    };
    PersonalPageComponent.prototype.removeAddress = function (address) {
        var _this = this;
        this.contactInformationService.removeAddress(address).subscribe(function (response) { return _this.commitContactInformationRemoval(_this.addresses, address); }, function (error) { return _this.handleError(error); });
    };
    PersonalPageComponent.prototype.commitContactInformationRemoval = function (contacts, instance) {
        contacts.splice(contacts.indexOf(instance), 1);
    };
    PersonalPageComponent.prototype.handleError = function (error) {
        alert("Error");
    };
    PersonalPageComponent.prototype.goBack = function () {
        this.location.back();
    };
    PersonalPageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'personal-page',
            templateUrl: './templates/personal-page.component.html'
        }), 
        __metadata('design:paramtypes', [person_service_1.PersonService, contactInformation_service_1.ContactInformationService, session_service_1.SessionService, router_1.ActivatedRoute, common_1.Location])
    ], PersonalPageComponent);
    return PersonalPageComponent;
}());
exports.PersonalPageComponent = PersonalPageComponent;
//# sourceMappingURL=personalPage.component.js.map