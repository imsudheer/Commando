"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var base_container_1 = require("./base-container");
// import { AfterViewInit, OnInit, OnDestroy } from '@angular/core';
var type_builder_1 = require("./../dynamic/type.builder");
// import { FilterComponent } from './../components/filter-component';
var MainContainer = (function (_super) {
    __extends(MainContainer, _super);
    function MainContainer(typeBuilder) {
        var _this = _super.call(this, typeBuilder) || this;
        _this.typeBuilder = typeBuilder;
        // private d : any = {name:'Neelesh'}
        // private city : string = 'Bangalore'
        _this.city1 = { city: 'Bangalore' };
        _this.cities = ['Hyderabad', 'Bangalore', 'Mumbai', 'Delhi'];
        // private resultData: any;
        _this.entity = {
            code: 'ABC123',
            description: 'A description of this Entity',
            active: 'true'
        };
        _this.selectedFilters = { 'Value': 'hi from main container' };
        return _this;
    }
    MainContainer.prototype.getTemplate = function () {
        return "<dropdown-editor propertyName='city' [entity]=entity [entityList]=entityList></dropdown-editor>";
    };
    MainContainer.prototype.bindData = function (component) {
        // component.entity = this.entity;
        component.entity = this.city1;
        component.entityList = this.cities;
    };
    MainContainer.prototype.getDisplayTemplate = function () {
        return "<grid-view [model]='resultData' ></grid-view>";
    };
    return MainContainer;
}(base_container_1.BaseContainer));
MainContainer = __decorate([
    core_1.Component({
        selector: 'main-container',
        template: "<filter-component [selectedFilters]='selectedFilters'></filter-component><br/>\n    <div #dynamicContentPlaceHolder></div>\n    <br/>\n    SELECTED FILTERS: {{selectedFilters.Value}}\n    <div #dynamicDisplayContentPlaceHolder></div>\n    ",
    }),
    __metadata("design:paramtypes", [type_builder_1.DynamicTypeBuilder])
], MainContainer);
exports.MainContainer = MainContainer;
//# sourceMappingURL=main-container.js.map