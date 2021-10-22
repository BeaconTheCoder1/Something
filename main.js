noseX=0;
noseY=0;
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
leftEyeX=0;
leftEyeY=0;
rightEyeX=0;
rightEyeY=0;

function preload() {
    clown_nose = loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
}


function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);

        console.log("leftWrist x = " + results[0].pose.leftWristX.x);
        console.log("leftWrist y = " + results[0].pose.leftWristY.y);

        console.log("rightWrist x = " + results[0].pose.rightWristX.x);
        console.log("rightWrist y = " + results[0].pose.rightWristY.y);

        console.log("leftEye x = " + results[0].pose.leftEyeX.x);
        console.log("leftEye y = " + results[0].pose.leftEyeY.y);

        console.log("rightEye x = " + results[0].pose.rightEyeX.x);
        console.log("rightEye y = " + results[0].pose.rightEyeY.y);

    }
}
function draw()  {
    image(video, 0, 0, 300, 300);
    image(clown_nose, noseX, noseY, 30, 30);
}

function take_snapshot(){
    save('myFilterImage.png');
}

