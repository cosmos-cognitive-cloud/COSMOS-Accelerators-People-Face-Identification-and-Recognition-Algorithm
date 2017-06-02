import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { SafeResourceUrl } from '@angular/platform-browser';

import { CognitiveApiService } from '../services/cognitive-api.service';
import { DataService } from '../services/data.service';
import { IFace } from '../models/face.model';
import { IRectangle } from '../models/rectangle.model';
import { IFaceVerification } from '../models/face-verification.model';

@Injectable()
export class FaceDataService extends DataService {

    constructor(protected http: Http, private cognitiveApiService: CognitiveApiService) {
        super(http)
    }

    detect(imageUrlOrData: SafeResourceUrl | ArrayBuffer): Promise<IFace[]> {
        // Detect human faces in an image and returns face locations, and optionally with faceIds, landmarks, and attributes.
        let apiUrl = this.apiServer + 'face/v1.0/detect?returnFaceId=true&returnFaceLandmarks=true&returnFaceAttributes=age,gender,smile,facialHair,headPose,glasses';
        
        if (typeof imageUrlOrData === 'string') {
            let body = { url: imageUrlOrData };
            return this.postAsPromise<IFace[]>(apiUrl, body, this.cognitiveApiService.subscriptionKeys.face);
        }
        else {
            return this.postBinaryData<IFace[]>(apiUrl, <ArrayBuffer>imageUrlOrData, this.cognitiveApiService.subscriptionKeys.face);
        }
    }

    verify(faceId1: string, faceId2: string) {
        // Verify whether two faces belong to a same person or whether one face belongs to a person.
        let apiUrl = this.apiServer + 'face/v1.0/verify';

        let body = { faceId1: faceId1, faceId2: faceId2 };

        return this.postAsPromise<IFaceVerification>(apiUrl, body, this.cognitiveApiService.subscriptionKeys.face);
    }
}
