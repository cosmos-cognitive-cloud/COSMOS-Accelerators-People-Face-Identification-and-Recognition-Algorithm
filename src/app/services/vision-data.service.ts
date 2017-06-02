import { Injectable } from '@angular/core';
import { Http, Response, ResponseContentType } from '@angular/http';
import { SafeResourceUrl } from '@angular/platform-browser';

import { CognitiveApiService } from './cognitive-api.service';
import { DataService } from '../services/data.service';
import { IImageFeatures } from '../models/image-features.model';
import { IOcrResult } from '../models/ocr-result.model';

@Injectable()
export class VisionDataService extends DataService {

    constructor(protected http: Http, private cognitiveApiService: CognitiveApiService) {
        super(http)
    }

    analyze(imageUrlOrData: SafeResourceUrl | ArrayBuffer): Promise<IImageFeatures> {
        // Detect human faces in an image and returns face locations, and optionally with faceIds, landmarks, and attributes.
        let apiUrl = this.apiServer + 'vision/v1.0/analyze?visualFeatures=Categories,Tags,Description,Faces,ImageType,Color,Adult';
        
        if (typeof imageUrlOrData === 'string') {
            let body = { url: imageUrlOrData };
            return this.postAsPromise<IImageFeatures>(apiUrl, body, this.cognitiveApiService.subscriptionKeys.computerVision);
        }
        else {
            return this.postBinaryData<IImageFeatures>(apiUrl, <ArrayBuffer>imageUrlOrData, this.cognitiveApiService.subscriptionKeys.computerVision);
        }
    }

    ocr(imageUrlOrData: SafeResourceUrl | ArrayBuffer): Promise<IOcrResult> {
        // Detect human faces in an image and returns face locations, and optionally with faceIds, landmarks, and attributes.
        let apiUrl = this.apiServer + 'vision/v1.0/ocr';
        
        if (typeof imageUrlOrData === 'string') {
            let body = { url: imageUrlOrData };
            return this.postAsPromise<IOcrResult>(apiUrl, body, this.cognitiveApiService.subscriptionKeys.computerVision);
        }
        else {
            return this.postBinaryData<IOcrResult>(apiUrl, <ArrayBuffer>imageUrlOrData, this.cognitiveApiService.subscriptionKeys.computerVision);
        }
    }

    generateThumbnail(imageUrlOrData: SafeResourceUrl | ArrayBuffer,
                        width: number, height: number, smartCropping = false): Promise<ArrayBuffer> {
        let apiUrl = `${this.textApiServer}vision/v1.0/generateThumbnail?width=${width.toString()}&height=${height.toString()}`;

        if (smartCropping) {
            apiUrl += '&smartCropping=true';
        }

        if (typeof imageUrlOrData === 'string') {
            let body = { url: imageUrlOrData };
            return this.postAsPromise<ArrayBuffer>(apiUrl, body, this.cognitiveApiService.subscriptionKeys.computerVision, ResponseContentType.ArrayBuffer);
        } else {
            return this.postBinaryData<ArrayBuffer>(apiUrl, <ArrayBuffer>imageUrlOrData, this.cognitiveApiService.subscriptionKeys.computerVision, ResponseContentType.ArrayBuffer);
        }
    }
}
