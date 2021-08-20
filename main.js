video="";
status="";
function setup(){
    canvas=createCanvas(450,380);
    canvas.center();
}

function preload(){
    video=createVideo("video.mp4");
    video.hide();
}

function draw(){
    image(video, 0, 0, 450, 380);
}

function Start(){
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
}

function modelLoaded(){
    console.log("model loaded");
    status=true;
    video.loop(); 
    video.speed(1);
    video.volume(0);
}