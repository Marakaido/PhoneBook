"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var EntityBase = (function () {
    function EntityBase(type) {
        this.type = type;
    }
    return EntityBase;
}());
exports.EntityBase = EntityBase;
var Person = (function (_super) {
    __extends(Person, _super);
    function Person() {
        _super.call(this, "person");
    }
    return Person;
}(EntityBase));
exports.Person = Person;
//# sourceMappingURL=EntityBase.js.map