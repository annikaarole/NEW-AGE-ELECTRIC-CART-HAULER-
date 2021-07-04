var scene;
var stationImage, wallImage, lawnImage, treeImage, dollyImage, cartImage ,carImage, backgroundImage;

function preload(){  
  stationImage = loadImage("station.png");
  wallImage = loadImage("wall.png");
  lawnImage = loadImage("lawn.jpg");
  treeImage = loadImage("tree.png");
  dollyImage = loadImage("Dolly.png");
  cartImage = loadImage("cart.png");
  carImage = loadImage("car.png");
}

function setup() {
  createCanvas(800, 500);
  
  //creating background
  scene = createSprite(0,0,800,500);
  scene.addImage(lawnImage);
  scene.scale = 3; 

  station = createSprite(5,460,50,50);
  station.addImage(stationImage);
  station.scale = 0.2;

  dolly = createSprite(35,465,50,50);
  dolly.addImage(dollyImage);
  dolly.scale = 0.3;

  dollydestination = createSprite(775,50,50,50);
  dollydestination.addImage(dollyImage);
  dollydestination.scale = 0.3;

  cart = createSprite(35,465,50,50);
  cart.addImage(cartImage);
  cart.scale = 0.1;
  cart.velocityY = -1.1; //source
  cart.lifetime = 160;

  
  car = createSprite(455,275,50,70);
  car.addImage(carImage);
  car.scale = 0.25;

  wall = createSprite(560,465,50,70);
  wall.addImage(wallImage);
  wall.scale = 0.25;

  tree = createSprite(400,460,50,70);
  tree.addImage(treeImage);
  tree.scale = 0.08;

  treeright = createSprite(720,460,50,70);
  treeright.addImage(treeImage);
  treeright.scale = 0.08;

  //stop();

}


function draw() {
 background(0);

 
  if (World.frameCount % 10 == 0) {
    createcartSource();
    createcartA();
    createcartB();
    createcartC();
  }
 
 



 if(keyDown("a"))
    {
      createcartA();
    }
  else if(keyDown("b")){
      createcartB();
  }
  else if(keyDown("c")){
    createcartC();
 }
 
 drawSprites();
 

 text("NEW AGE ELECTRIC CART HAULER",10,10);
 text("INVENTORS: ANNIKA & KELLY",10,20);
 text("TIME: 5 AM ET",10,30);
 text("DAY: FRIDAY",10,40);
 text("STATUS: READY TO HAUL!",10,50);
 text("SPEED: 3 MPH!", 10, 60);
 text("FRAMECOUNT: " + World.frameCount, 10, 70); 
 text("TIME TAKEN TO BUILD SAFE GUIDED PATHWAY: 18 SECONDS",10,80);
 text("TIME TAKEN TO HAUL CART: 1 MINUTE",10,90);

 //text("Press a b c after each object disappears to track trajectory",250,390);

  }
   
  function createcartSource(){
    cart = createSprite(35,465,50,50);
    cart.addImage(cartImage);
    cart.scale = 0.1;
    cart.velocityY = -1.1; //source
    cart.lifetime = 165;
  }
  

  function createcartA(){
    cartA = createSprite(30,265,50,50);
    cartA.addImage(cartImage);
    cartA.scale = 0.1;
    cartA.velocityX = 1.1; 
    cartA.lifetime = 155;
  }

  function createcartB(){
    cartB = createSprite(205,265,50,50);
    cartB.addImage(cartImage);
    cartB.scale = 0.1;
    cartB.velocityY = -1.1; 
    cartB.lifetime = 180;
  }

  function createcartC(){
    cartC = createSprite(205,50,50,50);
    cartC.addImage(cartImage);
    cartC.scale = 0.1;
    cartC.velocityX = 1.1; 
    cartC.lifetime = 520;
  }

