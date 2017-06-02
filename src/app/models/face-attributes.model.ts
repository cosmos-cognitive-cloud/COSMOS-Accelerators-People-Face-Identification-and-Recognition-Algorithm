export interface IFaceAttributes {
    age: number,
    gender: string,
    smile: number,
    facialHair: {
        mustache: number,
        beard: number,
        sideburns: number
    },
    glasses: string,
    headPose: IRotation
}

export interface IRotation {
    roll: number,
    yaw: number,
    pitch: number
}

