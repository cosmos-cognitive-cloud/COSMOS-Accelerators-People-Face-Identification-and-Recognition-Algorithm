import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BingAutosuggestComponent } from './bing-autosuggest/bing-autosuggest.component';
import 'rxjs/add/operator/toPromise';
import * as $ from "jquery";
import { OutputSectionComponent } from './directives/output-section.component';
import { ApiHeaderComponent } from './directives/api-details-header.component';
import  * as ng2Bootstrap from 'ng2-bootstrap';
import { SearchDataService } from "app/services/search-data.service";
import { DataService } from "app/services/data.service";
import { CognitiveApiService } from "app/services/cognitive-api.service";
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

@NgModule({
  declarations: [
    AppComponent,
    BingAutosuggestComponent,
    OutputSectionComponent,
    ApiHeaderComponent
  ],
  imports: [
    ng2Bootstrap.Ng2BootstrapModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DataService,
              SearchDataService,
              CognitiveApiService,
              ng2Bootstrap.ComponentLoaderFactory,
              ng2Bootstrap.PositioningService],
  bootstrap: [AppComponent]
})
export class AppModule { }
