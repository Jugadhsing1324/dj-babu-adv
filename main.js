song_1="baby-shark.mp3";
song_2="despacito.mp3";
leftWristX=0;
rightWristX=0;
leftWristY=0;
rightWristY=0;
scoreRightWrist=0;
scoreleftWrist=0;


function preload(){
    song_1=loadSound("baby-shark.mp3");
    song_2=loadSound("despacito.mp3");
}

function setup(){
   canvas=createCanvas(600,500);
   canvas.center();

   video=createCapture(VIDEO);
   video.hide();

  poseNet=ml5.poseNet(video,modelLoaded);
   poseNet.on('pose',gotPoses);

}

function modelLoaded(){
    console.log("model is Done!!");
}

function gotPoses(){
    if(results.length>0){
        console.log(results);

        leftWrist_x=results[0].pose.leftWrist.x;
        leftWrist_y=results[0].pose.leftWrist.y;
        rightWrist_x=results[0].pose.rightWrist.x;
        rightWrist_y=results[0].pose.rightWrist.y;

        console.log("leftWrist_x : "+leftWrist_x+"leftWrist_y : "+leftWrist_y);
        console.log("rightWrist_x : "+rightWrist_x+"rightWrist_y : "+rightWrist_y);

        scoreleftWrist=results[0].pose.keypoints[9].score;
        console.log("score of the left wrist is = "+scoreleftWrist);

        scoreRightWrist=results[0].pose.keypoints[10].score;
        console.log("score of the right wrist is = "+scoreRightWrist);
    }
}

function draw(){
    image(video,0,0,600,500);
    fill("red");
    stroke("darkblue");

    status_1=song_1.isPlaying();
    status_2=song_.isPlaying(); 

    if(scoreleftWrist>0.2){
       circle(leftWristX,leftWristY,20);
       song_2.stop();

       if(status_1==false){
        song_1.play();
        document.getElementById("song").innerHTML="1st Most Veiwed! is playing!";
       }
    }

    if(scoreRightWrist>0.2){
        circle(rightWristX,rightWristY,20);
        song_1.stop();
 
        if(status_2==false){
         song_2.play();
         document.getElementById("song").innerHTML="2nd Most Veiwed! is playing!";
        }
     }

}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}
 function pause(){
    song.stop();
 }