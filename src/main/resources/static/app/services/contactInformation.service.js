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
        return this.http.get('service/phones/' + email + '/')
            .map(this.extractData)
            .catch(this.handleError);
    };
    ContactInformationService.prototype.addPhone = function (phone) {
        var headers = new http_1.Headers();
        headers.append("Content-Type", 'application/json');
        var requestoptions = new http_1.RequestOptions({
            method: http_1.RequestMethod.Post,
            url: '/service/add-phone',
            headers: headers,
            body: JSON.stringify(phone)
        });
        return this.http.request(new http_1.Request(requestoptions))
            .map(this.extractData)
            .catch(this.handleError);
    };
    ContactInformationService.prototype.extractData = function (res) {
        var body = res.json();
        console.log(res.json());
        return body;
    };
    ContactInformationService.prototype.handleError = function (error) {
        var errMsg = "Error";
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return null;
    };
    ContactInformationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ContactInformationService);
    return ContactInformationService;
}());
exports.ContactInformationService = ContactInformationService;
//# sourceMappingURL=contactInformation.service.js.map