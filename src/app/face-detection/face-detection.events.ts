import { IFace } from '../models/face.model';

export class FaceDetectingEvent {
}

export class FaceDetectedEvent {
    public faces: Array<IFace>;
}