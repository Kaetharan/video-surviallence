video="";
status="";
objects=[];
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
    if(status != ""){
      objectDetector.detect(video,gotResult);

      for(i=0; i < objects.length; i++){
         document.getElementById("status").innerHTML="Status: Objects Detected";
         document.getElementById("number_of_items").innerHTML= "Number of Objects Are: " + objects.length;

         fill(255,0,0);
         percent=floor(objects[i].confidence*100);
         text(objects[i].label + " " + percent + "%", objects[i].x, objects[i].y);
         noFill();
         stroke(255, 0, 0);
         rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
      }
    }
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

function gotResult(error, results){
 if(error){
     console.log(error);
 }else{
     console.log(results);
     objects=results;
 }
}