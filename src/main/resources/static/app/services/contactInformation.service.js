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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var ContactInformationService = (function () {
    function ContactInformationService(http) {
        this.http = http;
    }
    ContactInformationService.prototype.getPhones = function (email) {
        return this.getAllContactInforamationByUserEmail(email, "phones");
    };
    ContactInformationService.prototype.getEmails = function (email) {
        return this.getAllContactInforamationByUserEmail(email, "emails");
    };
    ContactInformationService.prototype.getAddresses = function (email) {
        return this.getAllContactInforamationByUserEmail(email, "addresses");
    };
    ContactInformationService.prototype.addPhone = function (phone) {
        return this.addContactInformation(phone, "add-phone");
    };
    ContactInformationService.prototype.addEmail = function (email) {
        return this.addContactInformation(email, "add-email");
    };
    ContactInformationService.prototype.addAddress = function (address) {
        return this.addContactInformation(address, "add-address");
    };
    ContactInformationService.prototype.removePhone = function (phone) {
        return this.removeContactInformation('phones/remove/' + phone.number);
    };
    ContactInformationService.prototype.removeEmail = function (email) {
        return this.removeContactInformation('phones/remove/' + email.email);
    };
    ContactInformationService.prototype.removeAddress = function (address) {
        return this.removeContactInformation('phones/remove/' + address.address);
    };
    ContactInformationService.prototype.getAllContactInforamationByUserEmail = function (email, path) {
        return this.http.get('service/' + path + '/' + email + '/')
            .map(function (response) { return response.json(); })
            .catch(function (error) { return error; });
    };
    ContactInformationService.prototype.addContactInformation = function (contactInformation, path) {
        var headers = new http_1.Headers();
        headers.append("Content-Type", 'application/json');
        var requestoptions = new http_1.RequestOptions({
            method: http_1.RequestMethod.Post,
            url: '/service/' + path,
            headers: headers,
            body: JSON.stringify(contactInformation)
        });
        return this.http.request(new http_1.Request(requestoptions))
            .map(function (response) { return response; })
            .catch(function (error) { return error; });
    };
    ContactInformationService.prototype.removeContactInformation = function (path) {
        return this.http.get('service/' + path + '/')
            .map(function (response) { return response; })
            .catch(function (error) { return error; });
    };
    ContactInformationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ContactInformationService);
    return ContactInformationService;
}());
exports.ContactInformationService = ContactInformationService;
//# sourceMappingURL=contactInformation.service.js.map