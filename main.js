difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup() {
    canvas = createCanvas(500, 500);
    canvas.position(560, 150);
    video = createCapture(VIDEO);
    video.size(400, 300);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is Initialized!");
}

function gotPoses(results){
    if (results.length > 0) {

    console.log(results)

    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);

    }
}

function draw() {
     background("#6C91C2");
     textSize(difference);
     fill("#FFE787");
     text('Vishruth', 50, 400);
 }