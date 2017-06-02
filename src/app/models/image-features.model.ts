import {IRectangle} from '../models/rectangle.model';

export interface IImageFeatures
{
    categories: Array<{name: string, score: number, detail: any}>,
    adult: {
        isAdultContent: boolean,
        isRacyContent: boolean,
        adultScore: number,
        racyScore: number
    },
    tags: Array<{name: string, confidence: number}>,
    description: {
        tags: Array<string>,
        captions: Array<{text: string, confidence: number}>
    },
    requestId: string,
    metadata: {
        width: number,
        height: number,
        format: string
    },
    faces: Array<{age: number, gender: string, faceRectangle: IRectangle}>,
    color: {
        dominantColorForeground: string,
        dominantColorBackground: string,
        dominantColors: Array<string>,
        accentColor: string,
        isBWImg: boolean
    },
    imageType: {
        clipArtType: number,
        lineDrawingType: number
    }
}