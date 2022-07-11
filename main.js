song_1="baby-shark.mp3";
song_2="despacito.mp3";

function preload(){
    song_1=loadSound("baby-shark.mp3");
    song_2=loadSound("despacito.mp3");
}

function setup(){
   canvas=createCanvas(600,500);
   canvas.center();

   video=createCapture(VIDEO);
   video.hide();

}
function draw(){
    image(video,0,0,600,500);
}

function play(){
    song.play();
}
 function pause(){
    song.stop();
 }