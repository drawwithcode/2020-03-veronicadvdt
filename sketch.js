function preload(){
  myImage1 = loadImage("./assets/Brokensignal.png");
  myImage2 = loadImage("./assets/Trippybackground.png");
  myImage3 = loadImage("./assets/Woman.png");
  myImage4 = loadImage("./assets/Universe.png");
  myImage5 = loadImage("./assets/Flower.png");
  myImage6 = loadImage("./assets/Hand.png");
  myImage7 = loadImage("./assets/TV.png");

}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background("lavender");
  image(myImage1, width/3 , height/6);
  image(myImage2, width/3 , height/6);
  image(myImage3, width/3 , height/6);
  image(myImage4, width/3 , height/6);
  image(myImage5, width/3 , height/6);
  image(myImage6, width/3 , height/6);
  image(myImage7, width/3 , height/6);

}

function draw() {
  // put drawing code here
}
