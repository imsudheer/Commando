import {  ComponentRef, ViewChild, ViewContainerRef, ComponentFactory } from '@angular/core';
import {  OnInit } from '@angular/core';

import { IHaveDynamicData, DynamicTypeBuilder } from './../dynamic/type.builder';
// import { ReflectiveInjector } from '@angular/core';


export abstract class BaseContainer implements OnInit {

    // reference for a <div> with #dynamicContentPlaceHolder
    @ViewChild('dynamicContentPlaceHolder', { read: ViewContainerRef })
    @ViewChild('dynamicDisplayContentPlaceHolder', { read: ViewContainerRef })
    protected dynamicComponentTarget: ViewContainerRef;
    protected dynamicDisplayComponentTarget: ViewContainerRef;
    // this will be reference to dynamic content - to be able to destroy it
    protected componentRef: ComponentRef<IHaveDynamicData>;
    protected displayComponentRef: ComponentRef<IHaveDynamicData>;
    // protected typeBuilder: DynamicTypeBuilder


    constructor(
        protected typeBuilder: DynamicTypeBuilder
    ) {
    }

    protected getTemplate() {
        return `Not Overridden`;
    }

    protected getDisplayTemplate() {
        return `Not Overridden`;
    }

    protected bindData(component: any): void {

    }

    protected bindDisplayData(component: any): void {

    }

    public ngOnInit(): void {
        this.bindInputComponents();
    }

    public showResults() {
        this.bindDisplayComponents();
    }

    private bindInputComponents() {
        let template: string = this.getTemplate();
        this.bindComponents(this.componentRef, template, this.dynamicComponentTarget)
            .then(component => this.bindData(component));
    }

    private bindDisplayComponents() {
        let template: string = this.getDisplayTemplate();
        this.bindComponents(this.displayComponentRef, template, this.dynamicDisplayComponentTarget)
            .then(component => this.bindDisplayData(component));
    }

    private bindComponents(componentRef: ComponentRef<IHaveDynamicData>,
        template: string, dynamicComponentTarget: ViewContainerRef): Promise<IHaveDynamicData> {
        if (componentRef) {
            componentRef.destroy();
        }

        // here we get Factory (just compiled or from cache)
        let promise: Promise<IHaveDynamicData> = this.typeBuilder
            .createComponentFactory(template)
            .then((factory: ComponentFactory<IHaveDynamicData>) => {
                // Target will instantiate and inject component (we'll keep reference to it)
                componentRef = dynamicComponentTarget
                    .createComponent(factory);

                // let's inject @Inputs to component instance
                return componentRef.instance;

            });
        return promise;
    }
}
