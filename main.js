function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('PoseNet Is Initialized');
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWrist_x = results[0].pose.leftWrist.x;
        rightWrist_x = results[0].pose.rightWrist.x;
        console.log(leftWrist_x);
        console.log(rightWrist_x)
        Difference = Math.floor(leftWrist_x - rightWrist_x);
    }
}
function draw(){
    background("#FAF2D9");
    textSize(Difference);
    fill(red);
    text("Aarav", 0, 0, 70, 80);
  }