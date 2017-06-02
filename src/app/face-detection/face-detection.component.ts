import { Component, OnInit, ViewChild } from '@angular/core';

import { CognitiveApiComponent } from '../cognitive-api.component';
import { CognitiveApiService } from '../services/cognitive-api.service';
import { FaceViewerComponent } from '../face-viewer/face-viewer.component';
import { IFace } from '../models/face.model';
import { ImageSelectedEvent } from '../vision-api.component';

@Component({
    selector: 'face-detection-component',
    templateUrl: './face-detection.component.html',
    styleUrls: ['./face-detection.component.css']
})
export class FaceDetectionComponent extends CognitiveApiComponent implements OnInit {
    @ViewChild(FaceViewerComponent) viewerComponent: FaceViewerComponent;

    imageList: Array<string>;
    selectedImagePath: string;
    faces: Array<IFace> = [];

    showCodeButtons=false;
    

    constructor(private cognitiveApiService: CognitiveApiService) {
        super();
    }

    ngOnInit() {
        this.imageList = this.cognitiveApiService.faceImageUrls;
        this.selectImage(this.imageList[0]);
        this.viewerComponent.imageSelected.subscribe((e: ImageSelectedEvent) => {
            this.selectedImagePath = e.imagePath;
        });
    }

    selectImage(imagePath: string) {
        this.errorMessage = "";
        this.viewerComponent.selectStockImage(imagePath);
    }

    onFaceDetected(faceViewerId: string, faces: Array<IFace>) {
        this.faces = faces;
    }

    onError(errorMessage: string) {
        this.errorMessage = errorMessage;
    }
}