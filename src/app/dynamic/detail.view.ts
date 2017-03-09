import { Component, ComponentRef, ViewChild, ViewContainerRef } from '@angular/core';
import { AfterViewInit,  OnDestroy } from '@angular/core';
import { OnChanges, SimpleChange, ComponentFactory } from '@angular/core';

import { IHaveDynamicData, DynamicTypeBuilder } from './type.builder';
import { DynamicTemplateBuilder } from './template.builder';

@Component({
    selector: 'dynamic-detail',
    template: `
<div>
  check/uncheck to use INPUT vs TEXTAREA:
  <input type='checkbox' #val (click)='refreshContent(val.checked)' /><hr />
  <div #dynamicContentPlaceHolder></div>  <hr />
  entity: <pre>{{entity | json}}</pre>
  <text-editor propertyName='name' [entity]='d'></text-editor>
  <dropdown-editor propertyName='city' [entity]='city' [entityList]='cities'></dropdown-editor>
  {{d.name}}, {{city1.city}}
</div>
`,
})
export class DynamicDetail implements AfterViewInit, OnChanges, OnDestroy {
    // reference for a <div> with #dynamicContentPlaceHolder
    @ViewChild('dynamicContentPlaceHolder', { read: ViewContainerRef })
    protected dynamicComponentTarget: ViewContainerRef;
    // this will be reference to dynamic content - to be able to destroy it
    protected componentRef: ComponentRef<IHaveDynamicData>;

    // private d: any = { name: 'Neelesh' };
    // private city: string = 'Bangalore';
    private city1: any = { city: 'Bangalore' };
    // private cities: Array<string> = ['Hyderabad', 'Bangalore', 'Mumbai', 'Delhi'];

    // until ngAfterViewInit, we cannot start (firstly) to process dynamic stuff
    protected wasViewInitialized = false;

    // example entity ... to be recieved from other app parts
    // this is kind of candiate for @Input
    protected entity = {
        code: 'ABC123',
        description: 'A description of this Entity',
        active: 'true'
    };

    // wee need Dynamic component builder
    constructor(
        protected typeBuilder: DynamicTypeBuilder,
        protected templateBuilder: DynamicTemplateBuilder
    ) { }

    /** Get a Factory and create a component */

    protected refreshContent(useTextarea = false) {

        if (this.componentRef) {
            this.componentRef.destroy();
        }

        // here we get a TEMPLATE with dynamic content === TODO
        //   valetr template = this.templateBuilder.prepareTemplate(this.entity, useTextarea);
        let template = `<dropdown-editor propertyName='city' [entity]=entity [entityList]=entityList></dropdown-editor>`;
        // template += `<text-editor propertyName='city' [entity]=entity></text-editor>`;
        // here we get Factory (just compiled or from cache)
        this.typeBuilder
            .createComponentFactory(template)
            .then((factory: ComponentFactory<IHaveDynamicData>) => {
                // Target will instantiate and inject component (we'll keep reference to it)
                this.componentRef = this
                    .dynamicComponentTarget
                    .createComponent(factory);

                // let's inject @Inputs to component instance
                let component = this.componentRef.instance;

                // component.entity = this.entity;
                component.entity = this.city1;
                // component.entityList = this.cities;
            });
    }

    /** IN CASE WE WANT TO RE/Gerante - we need cean up */

    // this is the best moment where to start to process dynamic stuff
    public ngAfterViewInit(): void {
        this.wasViewInitialized = true;
        this.refreshContent();
    }
    // wasViewInitialized is an IMPORTANT switch
    // when this component would have its own changing @Input()
    // - then we have to wait till view is intialized - first OnChange is too soon
    public ngOnChanges(changes: { [key: string]: SimpleChange }): void {
        if (this.wasViewInitialized) {
            return;
        }
        this.refreshContent();
    }
    public ngOnDestroy() {
        if (this.componentRef) {
            this.componentRef.destroy();
            this.componentRef = null;
        }
    }


}



