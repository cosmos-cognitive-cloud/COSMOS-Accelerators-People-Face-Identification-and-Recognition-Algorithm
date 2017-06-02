export interface IOcrResult {
    language: string;
    textAngle: number;
    orientation: string;
    regions: IOcrRegion[];
}

export interface IOcrRegion {
    boundingBox: string;
    lines: IOcrLine[];
}

export interface IOcrLine {
    boundingBox: string;
    words: IOcrWord[];
}

export interface IOcrWord {
    boundingBox: string;
    text: string;
}