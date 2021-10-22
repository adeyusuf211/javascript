const video = document.getElementById('video');
const btn   = document.querySelector('button');

btn.addEventListener('click', function() {
    startVideo();
});

Promise.all([
    faceapi.nets.tnyFaceDetector.loadFromUri('/models'),
    faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
    faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
    faceapi.nets.faceExpressionNet.loadFromUri('/models'),
]).then(startVideo);

function startVideo(){
    navigator.getUserMedia(
        { video: {} },
        stream => video.srcObject = stream,
        err => console.log(err)
    )
}

video.addEventListener('play', () => {
    const canvas = faceapi.createCanvasFromMedia(video);
    document.body.append(canvas);
    const display = { width: video.width, height: video.height }
    faceapi.matchDimentions(canvas, display);
    setInterval(async () => {
        const detection = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
        .withFaceLandmarks().withFaceExpressions()
        const resize = faceapi.resizeResults(detection, display);
        canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
        faceapi.draw.drawDetections(canvas, resize);
        faceapi.draw.drawLandmarks(canvas, resize);
        faceapi.draw.drawFaceExpressions(canvas, resize);
    }, 100);
});