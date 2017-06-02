import { Component, OnInit, Input, Output, ViewChild } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

import { CognitiveApiComponent } from '../cognitive-api.component';
import { CognitiveApiService, ImagePair } from '../services/cognitive-api.service';
import { FaceDataService } from '../services/face-data.service';
import { FaceViewerComponent } from '../face-viewer/face-viewer.component';
import { IFace } from '../models/face.model';
import { FaceDetectedEvent } from '../face-detection/face-detection.events';
import { ImageSelectedEvent } from '../vision-api.component';

@Component({
    selector: 'face-verification-component',
    templateUrl: './face-verification.component.html',
    styleUrls: ['./face-verification.component.css']
})
export class FaceVerificationComponent extends CognitiveApiComponent {
    @ViewChild('fvc1') viewerComponent1: FaceViewerComponent;
    @ViewChild('fvc2') viewerComponent2: FaceViewerComponent;

    imagePairs: Array<ImagePair>;
    selectedImagePair: ImagePair;
    faceId1: string;
    faceId2: string;
    verificationStatus: string;
    resultStatus: string;

    constructor(private cognitiveApiService: CognitiveApiService, private faceDataService: FaceDataService) {
        super();
    }

    onFaceDetecting() {
        this.errorMessage = "";
    }

    ngOnInit() {
        this.imagePairs = this.cognitiveApiService.faceImagePairs;
        this.selectImagePair(this.imagePairs[0]);

        this.viewerComponent1.imageSelected.subscribe((e: ImageSelectedEvent) => {
            this.selectedImagePair = { image1: e.imagePath, image2: this.selectedImagePair.image2 }
        });
        this.viewerComponent1.faceDetected.subscribe((e: FaceDetectedEvent) => {
            if(this.validateFace(e.faces)) {
                this.faceId1 = e.faces[0].faceId;
                this.verifyFaces();
            }
        });

        this.viewerComponent2.imageSelected.subscribe((e: ImageSelectedEvent) => {
            this.selectedImagePair = { image1: this.selectedImagePair.image1, image2: e.imagePath }
        });
        this.viewerComponent2.faceDetected.subscribe((e: FaceDetectedEvent) => {
            if(this.validateFace(e.faces)) {
                this.faceId2 = e.faces[0].faceId;
                this.verifyFaces();
            }
        });
    }

    selectImagePair(imagePair: any) {
        this.selectedImagePair = imagePair;
        this.viewerComponent1.selectStockImage(imagePair.image1);
        this.viewerComponent2.selectStockImage(imagePair.image2);
    }

    validateFace(faces: Array<IFace>): boolean {
        if(faces.length == 0) {
            this.verificationStatus = "No faces detected. Please choose an image containing one face.";
            return false;
        }
        else if(faces.length > 1) {
            this.verificationStatus = "More than one face detected. Please choose an image containing only one face.";
            return false;
        }

        return true;
    }

    verifyFaces() {
        if(this.faceId1 && this.faceId2) {
            this.faceDataService.verify(this.faceId1, this.faceId2).then(result => {
                if(result.isIdentical) {
                    this.verificationStatus = "The two faces belong to the same person.";
                }
                else {
                    this.verificationStatus = "The two faces belong to different people.";
                }
                this.resultStatus = "Confidence is " + result.confidence;
            })
            .catch((error) => {
                this.errorMessage = error;
            });
        }
    }

    onError(errorMessage: string) {
        this.errorMessage = errorMessage;
    }
}