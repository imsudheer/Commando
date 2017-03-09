// make all parts as one DYNAMIC_DIRECTIVES
import { forwardRef } from '@angular/core';
import { FilterComponent } from './filter-component';
// module itself
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


export const DYNAMIC_DIRECTIVES = [
    forwardRef(() => FilterComponent)
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        DYNAMIC_DIRECTIVES
    ],
    exports: [
        DYNAMIC_DIRECTIVES,
        CommonModule,
        FormsModule
    ]
})
export class ComponentsModule {

    static forRoot() {
        return {
            ngModule: ComponentsModule,
            providers: [], // not used here, but if singleton needed
        };
    }
}