// make all parts as one DYNAMIC_DIRECTIVES
import { forwardRef } from '@angular/core';
import { MainContainer } from './main-container';
import { ComponentsModule } from './../components/components-module';

export const DYNAMIC_DIRECTIVES = [
    forwardRef(() => MainContainer)
];

// module itself
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ComponentsModule
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
export class ContainersModule {

    static forRoot() {
        return {
            ngModule: ContainersModule,
            providers: [], // not used here, but if singleton needed
        };
    }
}
