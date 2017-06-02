import { Output, EventEmitter } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { CognitiveApiComponent } from '../app/cognitive-api.component';
import { IRectangle } from './models/rectangle.model';

export class ImageSelectedEvent {
    imagePath: string;
}

export abstract class VisionApiComponent extends CognitiveApiComponent {
    @Output() imageSelected = new EventEmitter<ImageSelectedEvent>();

    protected selectedImage: HTMLImageElement;
    protected imagePosition: {
        container: HTMLElement,
        scale: number
    }
    protected imageList: Array<string>;
    protected selectedImageUrl: SafeResourceUrl;
    protected internetImageUrl: string;
    protected faceRectangles: Array<any> = [];
    protected faceIds: Array<string> = [];

    public constructor(protected sanitizer: DomSanitizer) {
        super();
    }

    // Implement these in child classes
    protected abstract refreshDetection(): void;
    protected abstract processFile(result: any): void;

    clearFaces(): void {
        this.faceRectangles = [];
    }

    onInternetUrlSelected(): void {
        this.selectedImageUrl = this.internetImageUrl;
        this.imageSelected.emit({ imagePath: this.internetImageUrl });
        this.refreshDetection();
    }

    selectStockImage(imagePath: string) {
        if (!this.isLoading) {
            this.selectedImageUrl = imagePath;
            this.internetImageUrl = imagePath;
            this.imageSelected.emit({ imagePath: this.internetImageUrl });
            this.refreshDetection();
        }
    }

    onFilesSelected(event: Event): void {

        let file = (<HTMLInputElement>event.target).files[0];
        let url = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file));

        this.selectedImageUrl = url;
        this.internetImageUrl = '';
        this.clearFaces();

        let fileReader = new FileReader();

        fileReader.onloadend = () => {
            this.processFile(fileReader.result);
        }

        fileReader.readAsArrayBuffer(file);
        (<HTMLInputElement>event.target).value = '';
    }

    onFilesClicked(event: Event): void {
        (<HTMLInputElement>event.target).value = "";
    }

    selectedImageLoaded(event: Event) {
        this.selectedImage = <HTMLImageElement>event.target;
        this.imagePosition = {
            container: this.selectedImage.parentElement,
            scale: this.selectedImage.width / this.selectedImage.naturalWidth
        };
    }

    protected processFaceRectangle(faceRectangle: IRectangle) {
        var top = (faceRectangle.top * this.imagePosition.scale + this.selectedImage.offsetTop) / this.imagePosition.container.clientHeight * 100;
        var left = (faceRectangle.left * this.imagePosition.scale + this.selectedImage.offsetLeft) / this.imagePosition.container.clientWidth * 100;
        var width = (faceRectangle.width * this.imagePosition.scale) / this.imagePosition.container.clientWidth * 100;
        var height = (faceRectangle.height * this.imagePosition.scale) / this.imagePosition.container.clientHeight * 100

        let faceRectangleStyle = {
            percentTop: top,
            percentLeft: left,
            percentWidth: width,
            percentHeight: height
        }

        return faceRectangleStyle;
    }
}