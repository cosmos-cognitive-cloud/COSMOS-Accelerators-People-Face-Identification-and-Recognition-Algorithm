import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FaceComponent } from './face/face.component';
import { FaceViewerComponent } from './face-viewer/face-viewer.component';
import { FaceVerificationComponent } from './face-verification/face-verification.component';
import { FaceDetectionComponent } from './face-detection/face-detection.component';
import 'rxjs/add/operator/toPromise';
import * as $ from "jquery";
import { OutputSectionComponent } from './directives/output-section.component';
import { ApiHeaderComponent } from './directives/api-details-header.component';
import  * as ng2Bootstrap from 'ng2-bootstrap';
import { DataService } from "./services/data.service";
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import { FaceDataService } from "./services/face-data.service";
import { VisionDataService } from "./services/vision-data.service";
import { CognitiveApiService } from "app/services/cognitive-api.service";

@NgModule({
  declarations: [
    AppComponent,
    FaceComponent,
    FaceViewerComponent,
    FaceVerificationComponent,
    FaceDetectionComponent,
    OutputSectionComponent,
    ApiHeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ng2Bootstrap.Ng2BootstrapModule
  ],
  providers: [DataService,
              FaceDataService,
              VisionDataService,
              CognitiveApiService,
              ng2Bootstrap.ComponentLoaderFactory,
              ng2Bootstrap.PositioningService],
  bootstrap: [AppComponent]
})
export class AppModule { }
