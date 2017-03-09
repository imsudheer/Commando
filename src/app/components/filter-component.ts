import { Component, OnInit, Input } from '@angular/core';
import { FilterService } from './../services/filter-service'
// import { FilterObject } from './../bo/app.bo.filter-object'

@Component({
    //   moduleId: module.id,
    selector: 'filter-component',
    templateUrl: './app/components/filter-component.html',
    providers: [FilterService],
    styles: ['.error {color:red;}']
})
export class FilterComponent implements OnInit {
    @Input() public selectedFilters: any;
    errorMessage: string;
    filters: {
        filterSchema: Array<any>,
        filterModels: Array<any>,
        filterSelectedModels: Array<any>
    };
    mode = 'Observable';
    searched = false;
    resultDataSet: Array<any> = null;

    ngOnInit() {
        this.selectedFilters.Value = 'hi from the filter component';
        this.getFilters();
    }

    constructor(private filterService: FilterService) {
        this.filters = {
            filterSchema: [],
            filterModels: [],
            filterSelectedModels: []
        }
    }

    getFilters() {
        this.filterService.getFilters()
            .subscribe(
            filters => this.initializeFilters(filters.data),
            error => this.errorMessage = <any>error);
    }

    initializeFilters(filters: any) {
        this.filters = filters;
        this.filters.filterSelectedModels = [];
        for (let i = 0; i < filters.filterSchema.length; i++) {
            let filterId = filters.filterSchema[i].FilterId;
            this.filters.filterSelectedModels.push({ 'Name': filterId, 'Value': '' });
            if (filters.filterSchema[i].DataService != null) {
                this.filterService.get(filters.filterSchema[i].DataService, i)
                    .subscribe(
                    data => this.saveDataList(data.data, filters.filterSchema[data.payLoad].FilterId),
                    error => this.errorMessage = <any>error);
            }
        }
    }

    saveDataList(dataList: Array<any>, filterId: string) {
        this.filters.filterModels[filterId] = {};
        this.filters.filterModels[filterId].Model = dataList;
    }

    onSearchClicked() {
        this.resultDataSet = null;
        this.filterService.get('json/data/users.json', null)
            .subscribe(
            data => this.resultDataSet = data.data,
            error => this.errorMessage = <any>error);
        this.searched = true;
    }
}
