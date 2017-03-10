import { Component, OnInit } from '@angular/core';
import { BaseContainer } from './base-container';
// import { AfterViewInit, OnInit, OnDestroy } from '@angular/core';

import { DynamicTypeBuilder } from './../dynamic/type.builder';

// import { FilterComponent } from './../components/filter-component';

@Component({
    selector: 'main-container',
    template: `
    <form>
        <filter-component [selectedFilters]='selectedFilters'></filter-component><br/>
        <div #dynamicContentPlaceHolder></div>
        <br/>
        SELECTED FILTERS: {{selectedFilters.Value}}
        <div #dynamicDisplayContentPlaceHolder></div>
     </form>
    `,
})
export class MainContainer extends BaseContainer implements OnInit {

    // private d : any = {name:'Neelesh'}
    // private city : string = 'Bangalore'
    private city1: any = { city: 'Bangalore' };
    private cities: Array<string> = ['Hyderabad', 'Bangalore', 'Mumbai', 'Delhi'];

    private selectedFilters: any;
    // private resultData: any;



    protected entity = {
        code: 'ABC123',
        description: 'A description of this Entity',
        active: 'true'
    };


    protected getTemplate() {
        return `<dropdown-editor propertyName='city' [entity]=entity [entityList]=entityList></dropdown-editor>`;
    }

    protected bindData(component: any): void {
        // component.entity = this.entity;
        component.entity = this.city1;
        component.entityList = this.cities;
    }

    protected getDisplayTemplate() {
        return `<grid-view [model]='resultData' ></grid-view>`;
    }

    constructor(protected typeBuilder: DynamicTypeBuilder) {
        super(typeBuilder);
        this.selectedFilters = { 'Value': 'hi from main container' };
    }

    OnInit(): void {
        this.getBaseData();
    }

    protected getBaseData(): void {

    }
}
