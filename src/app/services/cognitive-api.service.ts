export class CognitiveApiService {
    subscriptionKeys = {
        emotion: 'ec74eaadd31748cc9835dec61a47791c',
        textAnalytics: '80b810070c7b4580aa3aadaa819b60ab',
        computerVision: 'bb1f0f6b950f47daa9187ff26699aae8',
        face: '34e8320f715e411e9837dd3d72b124f1',
        video: '60437caf48404fde996a46a6b3d2ff7a',
        speakerRecognition: '9645aba3016d43a9a8eb13777717a67f',
        speech: 'f7afcd2d8f6840e0bfed1c28ba263aa5',
        bingSearch: '13e6941894984c19bbef56aa023bb325',
        bingAutosuggest: '6fc5c859cee94cc7bd2833c4d729ea2e',
        entityLinking: 'af9ab232fe924760b8afecc652e54592',
        linguistic: '33d675272e2f408d9526a760436323d8',
        bingSpellCheck: '36d7f43796464280aaa357719e6eb30f', //SANKET BAKSHI's key. Need to be changed.
        translation: '1fae7e4b369449d6a5bd50704b4c48b7', //SANKET BAKSHI
        qnaMaker :'2e21889eb3744b8f83590b590341b1c9' //SANKET BAKSHI
    };

    faceImageUrls = [
        'https://cosmosstore.blob.core.windows.net/cognitive-creative-content/Vision/Face/Face Detection/Cosmos_FaceAPI_Detection1.jpg',
        'https://cosmosstore.blob.core.windows.net/cognitive-creative-content/Vision/Face/Face Detection/Cosmos_FaceAPI_Detection2.jpg',
        'https://cosmosstore.blob.core.windows.net/cognitive-creative-content/Vision/Face/Face Detection/Cosmos_FaceAPI_Detection3.jpg',
        'https://cosmosstore.blob.core.windows.net/cognitive-creative-content/Vision/Face/Face Detection/Cosmos_FaceAPI_Detection4.jpg',
        'https://cosmosstore.blob.core.windows.net/cognitive-creative-content/Vision/Face/Face Detection/Cosmos_FaceAPI_Detection5.jpg',
        'https://cosmosstore.blob.core.windows.net/cognitive-creative-content/Vision/Face/Face Detection/Cosmos_FaceAPI_Detection6.jpg'
        // 'https://cosmosstore.blob.core.windows.net/images/AlanWexler.jpg',
        // 'https://cosmosstore.blob.core.windows.net/images/ShannonDenton.jpg',
        // 'https://cosmosstore.blob.core.windows.net/images/EdFalconer.jpg',
        // 'https://cosmosstore.blob.core.windows.net/images/EllaChinitz.jpg',
        // 'https://cosmosstore.blob.core.windows.net/images/JacobWalker.jpg',
        // 'https://cosmosstore.blob.core.windows.net/images/KylePloessl.jpg',
        // 'https://cosmosstore.blob.core.windows.net/images/RayVelez.jpg',
        // 'https://cosmosstore.blob.core.windows.net/images/SamihFadli.jpg',
        // 'https://cosmosstore.blob.core.windows.net/images/ScottLair.jpg',
        // 'https://cosmosstore.blob.core.windows.net/images/SheldonMonteiro.jpg',
        // 'https://cosmosstore.blob.core.windows.net/images/TimAshby.jpg',
        // 'https://cosmosstore.blob.core.windows.net/images/MauriceLevy.jpg'
    ];

    faceImagePairs: Array<ImagePair> = [
        {
            image1: 'https://cosmosstore.blob.core.windows.net/cognitive-creative-content/Vision/Face/Face Verification/Cosmos_FaceAPI_Verification1.jpg',
            image2: 'https://cosmosstore.blob.core.windows.net/cognitive-creative-content/Vision/Face/Face Verification/Cosmos_FaceAPI_Verification2.jpg'
        },
        {
            image1: 'https://cosmosstore.blob.core.windows.net/cognitive-creative-content/Vision/Face/Face Verification/Cosmos_FaceAPI_Verification6.jpg',
            image2: 'https://cosmosstore.blob.core.windows.net/cognitive-creative-content/Vision/Face/Face Verification/Cosmos_FaceAPI_Verification4.jpg'
        },
        {
            image1: 'https://cosmosstore.blob.core.windows.net/cognitive-creative-content/Vision/Face/Face Verification/Cosmos_FaceAPI_Verification4.jpg',
            image2: 'https://cosmosstore.blob.core.windows.net/cognitive-creative-content/Vision/Face/Face Verification/Cosmos_FaceAPI_Verification5.jpg'
        }
    ]

    emotionImageUrls = [
        'https://cosmosstore.blob.core.windows.net/cognitive-creative-content/Vision/Emotion/Recognize Emotions in Images/Cosmos_EmotionAPI_Recognize1.jpg',
        'https://cosmosstore.blob.core.windows.net/cognitive-creative-content/Vision/Emotion/Recognize Emotions in Images/Cosmos_EmotionAPI_Recognize2.jpg',
        'https://cosmosstore.blob.core.windows.net/cognitive-creative-content/Vision/Emotion/Recognize Emotions in Images/Cosmos_EmotionAPI_Recognize3.jpg',
        'https://cosmosstore.blob.core.windows.net/cognitive-creative-content/Vision/Emotion/Recognize Emotions in Images/Cosmos_EmotionAPI_Recognize4.jpg',
        'https://cosmosstore.blob.core.windows.net/cognitive-creative-content/Vision/Emotion/Recognize Emotions in Images/Cosmos_EmotionAPI_Recognize5.jpg',
        'https://cosmosstore.blob.core.windows.net/cognitive-creative-content/Vision/Emotion/Recognize Emotions in Images/Cosmos_EmotionAPI_Recognize6.jpg'
    ];

    emotionVideoUrls = [
        'https://cosmosstore.blob.core.windows.net/cognitive-creative-content/Vision/Emotion/Recognize Emotions in Video/Emotion-02022017.mp4'
        //'https://portalstoragewuprod.azureedge.net/media/Default/Media/EmotionAPI/framebyframe_demo_emotion1.mp4'
    ];

    emotionVideoPosters = [
        'https://cosmosstore.blob.core.windows.net/cognitive-creative-content/Vision/Emotion/Recognize Emotions in Video/Emotion-Poster-PlaybuttonOverlay-02032017.png'
        // 'https://www.microsoft.com/cognitive-services/Modules/Microsoft.ProjectOxford.Website.Demos/Images/framebyframe/Emotion1_Thumb.png',
        // 'https://www.microsoft.com/cognitive-services/Modules/Microsoft.ProjectOxford.Website.Demos/Images/framebyframe/Emotion2_Thumb.png',
        // 'https://www.microsoft.com/cognitive-services/Modules/Microsoft.ProjectOxford.Website.Demos/Images/framebyframe/Emotion3_Thumb.png'
    ];

    objectImageUrls = [
        'https://cosmosstore.blob.core.windows.net/cognitive-creative-content/Vision/Computer Vision/Analyze an image/Group 3/3a-AnalyzeImage.jpg',
        'https://cosmosstore.blob.core.windows.net/cognitive-creative-content/Vision/Computer Vision/Analyze an image/Group 1/1a-AnalyzeImage.jpg',
        'https://cosmosstore.blob.core.windows.net/cognitive-creative-content/Vision/Computer Vision/Analyze an image/Group 2/2a-AnalyzeImage.jpg',
        'https://cosmosstore.blob.core.windows.net/cognitive-creative-content/Vision/Computer Vision/Analyze an image/Group 4/4a-AnalyzeImage.jpg',
        'https://cosmosstore.blob.core.windows.net/cognitive-creative-content/Vision/Computer Vision/Analyze an image/Group 5/5a-AnalyzeImage.jpg',
        'https://cosmosstore.blob.core.windows.net/cognitive-creative-content/Vision/Computer Vision/Analyze an image/Group 6/6a-AnalyzeImage.jpg'
    ];

    textImageUrls = [
        'https://cosmosstore.blob.core.windows.net/cognitive-creative-content/Vision/Computer Vision/Read text in images/Group 1/1a-TextImages.jpg',
        'https://cosmosstore.blob.core.windows.net/cognitive-creative-content/Vision/Computer Vision/Read text in images/Group 2/2a-TextImages.jpg',
        'https://cosmosstore.blob.core.windows.net/cognitive-creative-content/Vision/Computer Vision/Read text in images/Group 3/3a-TextImages.jpg',
        'https://cosmosstore.blob.core.windows.net/cognitive-creative-content/Vision/Computer Vision/Read text in images/Group 4/4a-TextImages.jpg',
        'https://cosmosstore.blob.core.windows.net/cognitive-creative-content/Vision/Computer Vision/Read text in images/Group 5/5a-TextImages.jpg',
        'https://cosmosstore.blob.core.windows.net/cognitive-creative-content/Vision/Computer Vision/Read text in images/Group 6/6a-TextImages.jpg'
    ];

    thumbnailImageUrls = [
        'https://cosmosstore.blob.core.windows.net/cognitive-creative-content/Vision/Computer Vision/Generate a thumbnail/Group 1/1a-Thumbnail.jpg',
        'https://cosmosstore.blob.core.windows.net/cognitive-creative-content/Vision/Computer Vision/Generate a thumbnail/Group 2/2a-Thumbnail.jpg',
        'https://cosmosstore.blob.core.windows.net/cognitive-creative-content/Vision/Computer Vision/Generate a thumbnail/Group 3/3a-Thumbnail.jpg',
        'https://cosmosstore.blob.core.windows.net/cognitive-creative-content/Vision/Computer Vision/Generate a thumbnail/Group 4/4a-Thumbnail.jpg',
        'https://cosmosstore.blob.core.windows.net/cognitive-creative-content/Vision/Computer Vision/Generate a thumbnail/Group 5/5a-Thumbnail.jpg',
        'https://cosmosstore.blob.core.windows.net/cognitive-creative-content/Vision/Computer Vision/Generate a thumbnail/Group 6/6a-Thumbnail.jpg'
    ];

    videoUrls = [
        'https://cosmosstore.blob.core.windows.net/cognitive-creative-content/Vision/Video/Detect and track faces/DetectAndTrack-Sidebyside-02012017.mp4'
        //'https://portalstoragewuprod2.azureedge.net/videos/video_demo_face1.mp4'
    ];

    videoPosters = [
        'https://cosmosstore.blob.core.windows.net/content/FaceDetectPoster1.jpg',
        'https://cosmosstore.blob.core.windows.net/content/FaceDetectPoster2.jpg',
        'https://cosmosstore.blob.core.windows.net/content/FaceDetectPoster3.jpg'
    ];

    analyzeVideoUrls = [
        'https://cosmosstore.blob.core.windows.net/cognitive-creative-content/Vision/Face/Analyze video in near real-time/Face-02022017.mp4'
        //'https://portalstoragewuprod.azureedge.net/media/Default/Media/Computer Vision/framebyframe_demo_tagging1.mp4'
    ];

    analyzeVideoPosters = [
        'https://www.microsoft.com/cognitive-services/Modules/Microsoft.ProjectOxford.Website.Demos/Images/framebyframe/CV1_Thumb.png',
        'https://www.microsoft.com/cognitive-services/Modules/Microsoft.ProjectOxford.Website.Demos/Images/framebyframe/CV2_Thumb.png',
        'https://www.microsoft.com/cognitive-services/Modules/Microsoft.ProjectOxford.Website.Demos/Images/framebyframe/CV3_Thumb.png'
    ];

    stabilizeShakyVideosUrls = [
        'https://cosmosstore.blob.core.windows.net/cognitive-creative-content/Vision/Video/Stabilize shaky videos/Stabilize-Sidebyside-02012017.mp4'
    ];

    detectMotionUrls = [
        'https://cosmosstore.blob.core.windows.net/cognitive-creative-content/Vision/Video/Detect motion/MotionDetect-02022017.mp4'
    ];

    speakers = [
        {
            name: 'Barack Obama',
            imageUrl: 'https://cosmosstore.blob.core.windows.net/images/BarackObama.jpg',
            identificationProfileId: 'bf058f39-538d-4145-bf56-3bb9ec8fa662',
            audio: 'https://cosmosstore.blob.core.windows.net/content/Barack_Obama-Inaugural_Address-enrollment'
        },
        {
            name: 'George W Bush',
            imageUrl: 'https://cosmosstore.blob.core.windows.net/images/GeorgeWBush.jpg',
            identificationProfileId: 'f6af5ac0-1333-43f8-b0eb-307821567b2c',
            audio: 'https://cosmosstore.blob.core.windows.net/content/George_W_Bush-Inaugural_Address-enrollment'
        },
        {
            name: 'Bill Clinton',
            imageUrl: 'https://cosmosstore.blob.core.windows.net/images/BillClinton.jpg',
            identificationProfileId: 'a435a5dc-ed25-49ef-a2d2-ccd4b2e9d65b',
            audio: 'https://cosmosstore.blob.core.windows.net/content/William_J_Clinton-Inaugural_Address-enrollment'
        },
        {
            name: 'George H W Bush',
            imageUrl: 'https://cosmosstore.blob.core.windows.net/images/GeorgeHWBush.jpg',
            identificationProfileId: 'd6cdb1c5-6e1f-401e-a627-adc068fdc0a3',
            audio: 'https://cosmosstore.blob.core.windows.net/content/George_H_W_Bush-Inaugural_Address-enrollment'
        }/*,
        {
            name: 'Ronald Reagan',
            imageUrl: 'https://www.microsoft.com/cognitive-services/Modules/Microsoft.ProjectOxford.Website.Demos/Images/spid/Picture5.jpg',
            identificationProfileId: 'b4421a6b-70e9-45c0-b300-81557a371925',
            audio: 'https://cosmosstore.blob.core.windows.net/content/Ronald_Reagan-Inaugural_Address-enrollment'
        }*/
    ]
}

export class ImagePair {
    image1: string;
    image2: string;
}