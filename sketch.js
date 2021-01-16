let song1;
let song2;
let song3;
let playbutton1;
let pausebutton1;
let playbutton2;
let pausebutton2;
let playbutton3;
let pausebutton3;
let ampSlider;
let analyzer;
let amplitude;
var sliderCol;


function preload(){

 //load Images
  myImage1 = loadImage("./assets/Brokensignal.png");
  myImage2 = loadImage("./assets/Trippybackground.png");
  myImage3 = loadImage("./assets/Woman.png");
  myImage4 = loadImage("./assets/Universe.png");
  myImage5 = loadImage("./assets/Flower.png");
  myImage6 = loadImage("./assets/Hand.png");
  myImage7 = loadImage("./assets/TV.png");
  myImage8 = loadImage("./assets/Background1.png");

 //Load Sound
  song1 = loadSound("./assets/Choose_Love.mp3");
  song2 = loadSound("./assets/Get_me_high.mp3");
  song3 = loadSound("./assets/S&P.mp3");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background("lavender");

  //images
  imageMode(CENTER);
  image(myImage8, width/2 , height/2);
  image(myImage1, width/5 , height/2);
  image(myImage2, width/5 , height/2);
  image(myImage3, width/5 , height/2);
  image(myImage4, width/5 , height/2);
  image(myImage5, width/5 , height/2);
  image(myImage6, width/5 , height/2);
  image(myImage7, width/5 , height/2);

  // analyser
  analyzer = new p5.Amplitude();

  analyzer.setInput(song1);
  analyzer.setInput(song2);
  analyzer.setInput(song3);

  amplitude = new p5.Amplitude();

  //playbutton1 + pausebutton1
   playbutton1 = createImg("./assets/Play_button1.png");
   playbutton1.style("width", "60px");
   playbutton1.position(width/2.8, height/2.7);
   playbutton1.mousePressed(playpause1);

   pausebutton1 = createImg("./assets/Pause_button1.png");
   pausebutton1.style("width", "60px");
   pausebutton1.position(width/2.8, height/2.7);
   pausebutton1.mousePressed(playpause1);
   pausebutton1.style("visibility", "hidden");

   //playbutton2 + pausebutton2
    playbutton2 = createImg("./assets/Play_button2.png");
    playbutton2.style("width", "60px");
    playbutton2.position(width/2.8, height/2.1);
    playbutton2.mousePressed(playpause2);

    pausebutton2 = createImg("./assets/Pause_button2.png");
    pausebutton2.style("width", "60px");
    pausebutton2.position(width/2.8, height/2.1);
    pausebutton2.mousePressed(playpause2);
    pausebutton2.style("visibility", "hidden");

    //playbutton3 + pausebutton3
    playbutton3 = createImg("./assets/Play_button3.png");
    playbutton3.style("width", "60px");
    playbutton3.position(width/2.8, height/1.7);
    playbutton3.mousePressed(playpause3);

    pausebutton3 = createImg("./assets/Pause_button3.png");
    pausebutton3.style("width", "60px");
    pausebutton3.position(width/2.8, height/1.7);
    pausebutton3.mousePressed(playpause3);
    pausebutton3.style("visibility", "hidden");

    // volume slider
    ampSlider = createSlider(0, 5, 1, 0);
    ampSlider.position(width*2/10, height*4/5);
    ampSlider.style('width', '120px');

    // slider colos

    colorMode(HSB, 255)
    sliderCol = createSlider(0, 255, 127);
    sliderCol.position(width*2/10, height*4.2/5);
    sliderCol.style("width", '120px');


}

function draw() {

// text1
push();
 let text1 = "CHOOSE LOVE";
  fill("white");
  textSize(40);
  textFont("Fredoka One");
  textAlign(LEFT);
  text(text1, width/2.5, height/2.4);
pop();

// text2
push();
 let text2 = "GET ME HIGH";
  fill("white");
  textSize(40);
  textFont("Fredoka One");
  textAlign(LEFT);
  text(text2, width/2.5, height/1.9);
pop();

// text3
push();
 let text3 = "S&P";
  fill("white");
  textSize(40);
  textFont("Fredoka One");
  textAlign(LEFT);
  text(text3, width/2.5, height/1.57);
pop();

push();
 let text4 = "WLSM EP";
  fill("white");
  textSize(90);
  textFont("Fredoka One");
  textAlign(LEFT);
  text(text4, width*1/10, height/5);
pop();

// volume slider
push();
  let val1 = ampSlider.value();
  song1.amp(val1);
  let val2 = ampSlider.value();
  song2.amp(val2);
  let val3 = ampSlider.value();
  song3.amp(val2);
  let volume = 0;
  volume = analyzer.getLevel();
  volume = map(volume, 0, 1, 200, 850);
pop();

// textVolume
  push();
  let textVolume = "VOLUME";
  fill("white");
  textSize(40);
  textFont("VT323");
  textAlign(LEFT);
  text(textVolume, width*1/9, height*4.1/5);
  pop();


  //textColor
  push();
  let textCol = "COLOR";
  fill("white");
  textSize(40);
  textFont("VT323");
  textAlign(LEFT);
  text(textCol, width*1/9, height*4.3/5);
  pop();


 // sliderCol
 push();
 strokeWeight(1);
 stroke("white");
 let level = amplitude.getLevel();
 let size = map(level, 0, 1, 0, 800);
 fill(sliderCol.value(), 255, 255, 20);
 ellipse(width*4/5, height/2, size, size);

 pop();

}

//playbutton1
function playpause1() {
  if (song1.isPlaying() == true) {
    song1.pause();
    pausebutton1.style("visibility", "hidden");
    playbutton1.style("visibility", "visible");
  } else {
    song1.loop();
    playbutton1.style("visibility", "hidden");
    pausebutton1.style("visibility", "visible");
  }
}

function playpause2() {
  if (song2.isPlaying() == true) {
    song2.pause();
    pausebutton2.style("visibility", "hidden");
    playbutton2.style("visibility", "visible");
  } else {
    song2.loop();
    playbutton2.style("visibility", "hidden");
    pausebutton2.style("visibility", "visible");
  }
}

function playpause3() {
  if (song3.isPlaying() == true) {
    song3.pause();
    pausebutton3.style("visibility", "hidden");
    playbutton3.style("visibility", "visible");
  } else {
    song3.loop();
    playbutton3.style("visibility", "hidden");
    pausebutton3.style("visibility", "visible");
  }
}
