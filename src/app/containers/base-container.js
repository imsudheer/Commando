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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// import { ReflectiveInjector } from '@angular/core';
var BaseContainer = (function () {
    // protected typeBuilder: DynamicTypeBuilder
    function BaseContainer(typeBuilder) {
        this.typeBuilder = typeBuilder;
    }
    BaseContainer.prototype.getTemplate = function () {
        return "Not Overridden";
    };
    BaseContainer.prototype.getDisplayTemplate = function () {
        return "Not Overridden";
    };
    BaseContainer.prototype.bindData = function (component) {
    };
    BaseContainer.prototype.bindDisplayData = function (component) {
    };
    BaseContainer.prototype.ngOnInit = function () {
        this.bindInputComponents();
    };
    BaseContainer.prototype.showResults = function () {
        this.bindDisplayComponents();
    };
    BaseContainer.prototype.bindInputComponents = function () {
        var _this = this;
        var template = this.getTemplate();
        this.bindComponents(this.componentRef, template, this.dynamicComponentTarget)
            .then(function (component) { return _this.bindData(component); });
    };
    BaseContainer.prototype.bindDisplayComponents = function () {
        var _this = this;
        var template = this.getDisplayTemplate();
        this.bindComponents(this.displayComponentRef, template, this.dynamicDisplayComponentTarget)
            .then(function (component) { return _this.bindDisplayData(component); });
    };
    BaseContainer.prototype.bindComponents = function (componentRef, template, dynamicComponentTarget) {
        if (componentRef) {
            componentRef.destroy();
        }
        // here we get Factory (just compiled or from cache)
        var promise = this.typeBuilder
            .createComponentFactory(template)
            .then(function (factory) {
            // Target will instantiate and inject component (we'll keep reference to it)
            componentRef = dynamicComponentTarget
                .createComponent(factory);
            // let's inject @Inputs to component instance
            return componentRef.instance;
        });
        return promise;
    };
    return BaseContainer;
}());
__decorate([
    core_1.ViewChild('dynamicContentPlaceHolder', { read: core_1.ViewContainerRef }),
    core_1.ViewChild('dynamicDisplayContentPlaceHolder', { read: core_1.ViewContainerRef }),
    __metadata("design:type", core_1.ViewContainerRef)
], BaseContainer.prototype, "dynamicComponentTarget", void 0);
exports.BaseContainer = BaseContainer;
//# sourceMappingURL=base-container.js.map