var mySong;


function preload(){
  // put preload code here
  mySong = loadSound("./assets/Cabecera Opening.mp3");
  myImage = loadImage('./assets/donna.png');
  occhio = loadImage('./assets/occhio.png');
}

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);

   frameRate(10);

  mySong.setVolume(0.5);
  mySong.loop();
  analyzer = new p5.Amplitude();
  analyzer.setInput(mySong);
  mySong.loop();

  // button = createButton('pause');
  // button.position(width/9, height/9);
  // button.mousePressed(stop);
  //
  // button = createButton('play');
  // button.position(width/30, height/9);
  // button.mousePressed(Replay);
}

function draw() {
  // put drawing code here
  background('black')

  var volume = analyzer.getLevel();
      console.log(volume);
      var volume1 = map(volume,0,1,0,6000)
     var volume2 = map(volume,0,1,0,8000)
      var volume3 = map(volume,0,1,80,0)
      translate(width/2,height/2);
        imageMode(CENTER);
        tint(255, 127);
      if(volume<=0.005){
        image(myImage,0,0,volume2*10,volume2*10);
      } else if(volume>0.005 || volume<=0.007){
        image(occhio,0,0,volume2*3,volume2);
      }else if(volume>0.007 || volume<=0.09){
        image(myImage,0,0,volume2*3,volume2*3);
      } else if(volume>0.009 || volume<=0.02){
        image(occhio,0,0,volume2*3,volume2);
      }

      push();
        noStroke();
        //translate(width/2,height/2)
        rotate(frameCount*300);
        fill(7,23,226,50);
        ellipse(width/6,height,volume1*3);
        fill(255,0,0,50);
        ellipse(0,height,volume1*3);
        fill(7,23,226,50);
        ellipse(width,height/8,volume3);
        pop();
        push();
          noStroke();
          rotate(frameCount*300);
            fill(255,0,0,50);
          ellipse(random(0,width),random(0,height),volume2*5);
            fill(7,23,226,50);
            ellipse(random(0,width),random(0,height),volume2*5);
            fill(255,0,0,50);
          ellipse(random(0,width),random(0,height),volume3);
            fill(7,23,226,50);
            ellipse(random(0,width),random(0,height),volume3);
            pop();

}

// function stop() {
//   if(mySong.isPlaying()) {
//    mySong.pause();
//    }
// }
//
// function Replay() {
//   if (mySong.isPaused()){
//    mySong.loop();
//    }
//  }



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
