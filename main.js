function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(450,450);
    canvas.position(550,75)

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotResults);

    
}

function modelLoaded(){
    console.log('poseNet has been initialised ')

}

function gotResults(results){
console.log(results);
}

function draw(){
    background("grey");
}