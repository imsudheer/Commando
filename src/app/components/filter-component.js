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
var filter_service_1 = require("./../services/filter-service");
// import { FilterObject } from './../bo/app.bo.filter-object'
var FilterComponent = (function () {
    function FilterComponent(filterService) {
        this.filterService = filterService;
        this.mode = 'Observable';
        this.searched = false;
        this.resultDataSet = null;
        this.filters = {
            filterSchema: [],
            filterModels: [],
            filterSelectedModels: []
        };
    }
    FilterComponent.prototype.ngOnInit = function () {
        this.selectedFilters.Value = 'hi from the filter component';
        this.getFilters();
    };
    FilterComponent.prototype.getFilters = function () {
        var _this = this;
        this.filterService.getFilters()
            .subscribe(function (filters) { return _this.initializeFilters(filters.data); }, function (error) { return _this.errorMessage = error; });
    };
    FilterComponent.prototype.initializeFilters = function (filters) {
        var _this = this;
        this.filters = filters;
        this.filters.filterSelectedModels = [];
        for (var i = 0; i < filters.filterSchema.length; i++) {
            var filterId = filters.filterSchema[i].FilterId;
            this.filters.filterSelectedModels.push({ 'Name': filterId, 'Value': '' });
            if (filters.filterSchema[i].DataService != null) {
                this.filterService.get(filters.filterSchema[i].DataService, i)
                    .subscribe(function (data) { return _this.saveDataList(data.data, filters.filterSchema[data.payLoad].FilterId); }, function (error) { return _this.errorMessage = error; });
            }
        }
    };
    FilterComponent.prototype.saveDataList = function (dataList, filterId) {
        this.filters.filterModels[filterId] = {};
        this.filters.filterModels[filterId].Model = dataList;
    };
    FilterComponent.prototype.onSearchClicked = function () {
        var _this = this;
        this.resultDataSet = null;
        this.filterService.get('json/data/users.json', null)
            .subscribe(function (data) { return _this.resultDataSet = data.data; }, function (error) { return _this.errorMessage = error; });
        this.searched = true;
    };
    return FilterComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], FilterComponent.prototype, "selectedFilters", void 0);
FilterComponent = __decorate([
    core_1.Component({
        //   moduleId: module.id,
        selector: 'filter-component',
        templateUrl: './app/components/filter-component.html',
        providers: [filter_service_1.FilterService],
        styles: ['.error {color:red;}']
    }),
    __metadata("design:paramtypes", [filter_service_1.FilterService])
], FilterComponent);
exports.FilterComponent = FilterComponent;
//# sourceMappingURL=filter-component.js.map