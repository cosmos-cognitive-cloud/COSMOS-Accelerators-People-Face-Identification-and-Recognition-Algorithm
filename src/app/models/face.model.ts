import {IRectangle} from '../models/rectangle.model';
import {IFaceLandmarks} from '../models/face-landmarks.model';
import {IFaceAttributes} from '../models/face-attributes.model';

export interface IFace {
    faceId: string,
    faceRectangle: IRectangle,
    faceLandmarks?: IFaceLandmarks,
    faceAttributes?: IFaceAttributes
}