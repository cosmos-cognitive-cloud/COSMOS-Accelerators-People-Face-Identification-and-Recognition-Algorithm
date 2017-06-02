import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';

@Component({
    selector: 'face',
    templateUrl: './face.component.html',
    styleUrls: ['./face.component.css']
})
export class FaceComponent {
    constructor(private titleService: Title) {
        this.titleService.setTitle('Facial Recognition API');
    }

    apiTitle = 'Facial Recognition API';
    apiBackgroundImage = 'https://cosmosstore.blob.core.windows.net/content/COSMOS-DeeperPersonalization-NoLoop'; //'https://cosmosstore.blob.core.windows.net/content/COSMOS-CognitiveIntelligence';
    apiDescription = 'Detect human faces and compare similar ones, organize people into groups according to visual similarity, and identify previously tagged people in images.';
    apiReferenceUrl = 'https://dev.projectoxford.ai/docs/services/563879b61984550e40cbbe8d';
}