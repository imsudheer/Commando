import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { COMPILER_PROVIDERS } from '@angular/compiler';

import { AppComponent } from './app.component';
import { DynamicModule } from './dynamic/dynamic.module';
import { InputComponentsModule } from './components/input-components/input-components.module';

import { ContainersModule } from './containers/containers.module';
// import { FilterService } from './services/filter-service';
// import { FilterComponent } from './components/filter-component';
import { HttpHelper } from './common/HttpHelper';

@NgModule({
  imports: [BrowserModule,
    HttpModule, FormsModule, DynamicModule.forRoot()
    , InputComponentsModule, ContainersModule],
  declarations: [
    AppComponent
  ],
  providers: [HttpHelper, COMPILER_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
