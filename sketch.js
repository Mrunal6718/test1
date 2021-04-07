
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var line1, line2, line3, line4, line5, line6, line7, line8, line9, line10;
var line11, line12, line13, line14, line15, line16, line17, line18, line19, line20;
var line21, line22, line23, line24, line25, line26, line27, line28, line29, line20;

var player, player_left, player_right, playerwalkLeft, playerwalkRight, playerjumpRight, playerjumpLeft, playerattackLeft, playerattackRight;    
var smallMonster, SMleft, SMright;
var greenMonster, GMleft, GMright;
var blueMonster, BMleft, BMright;
var heart, heart_Img;
var key, key_Img;
var diamond,diamond_Img;
var edge;
var lineGroup, monsterGroup;
var bomb,bomb_Img;

function preload(){

  //PLAYER
  //player still left & right
  player_left = loadImage("PlayerLeft.png");
  player_right = loadImage("PlayerRight.png");
  //player walk left & right 
  playerwalkLeft = loadAnimation("PW1 left.png", "PW2 left.png", "PW3 left.png", "PW4 left.png", "PW5 left.png");
  playerwalkRight = loadAnimation("PW1 right.png", "PW2 right.png", "PW3 right.png", "PW4 right.png", "PW5 right.png");
  //player jump 
  playerjumpLeft = loadAnimation("PJ1 left.png", "PJ2 left.png","PJ3 left.png")
  playerjumpRight = loadAnimation("PJ1 right.png", "PJ2 right.png","PJ3 right.png")
  //player attack
  playerattackLeft = ("PA1left.png", "PA2left.png", "PA3left.png", "PA4left.png","PA5left.png","PA6left.png");
  playerattackRight = ("PA1right.png", "PA2right.png", "PA3right.png", "PA4right.png","PA5right.png","PA6right.png");
  
  //Small Monster 
  SMleft = loadAnimation("SM1 left.png", "SM2 left.png", "SM3 left.png", "SM4 left.png", "SM5 left.png", "SM6 left.png");
  SMright = loadAnimation ("SM1 right.png", "SM2 right.png", "SM3 right.png", "SM4 right.png", "SM5 right.png", "SM6 right.png");

  //Green Monster
  GMleft = loadAnimation("GM1left.png", "GM2left.png" ,"GM3left.png");
  GMright = loadAnimation("GM1right.png", "GM2right.png", "GM3right.png", "GM4right.png");

  //Blue Monster
  BMleft = loadAnimation("BM1left.png", "BM2left.png", "BM3left.png");
  BMright = loadAnimation("BM1right.png", "BM2right.png", "BM3right.png");

  //other sprites
  heart_Img = loadImage("Heart.png");
  bomb_Img = loadImage("bomb1.png");
  diamond_Img = loadImage("Diamond.png");
  
}

function setup() {
	createCanvas(500, 800);
	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.

  //monster(s)
  greenMonster = createSprite(200, 200, 30, 30);
  greenMonster.addAnimation("GMleft")
  //monsterGroup.add(greenMonster);
  
  blueMonster = createSprite(300, 300, 30, 30);
  blueMonster.addAnimation("BMleft")
  //monsterGroup.add(blueMonster);

  smallMonster = createSprite(300, 600, 30, 30);
  smallMonster.addAnimation("SMright")
  //monsterGroup.add(smallMonster);
  

  player = createSprite(500, 500, 30, 30)
    

  

 



  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  

  if (keyDown("RIGHT_ARROW")){
    player.addAnimation(playerWalk_Img);
  }

  if (keyDown("RIGHT_ARROW")) {
    player.velocityX=2;
    player.velocityY=0;
}
    
  if (keyDown("LEFT_ARROW")) {
  player.velocityX=-2;
  player.velocityY=0;
}
     if (keyDown("UP_ARROW")) {
      player.velocityX=0;
      player.velocityY=-2;
    }
     
     if (keyDown("DOWN_ARROW")) {
      player.velocityX=0;
   player.velocityY=2;

     }
     
     //stickman.collide(edges[2]);
     //stickman.collide(edges[1])
     //player.collide(lineGroup)

     


     
  spawnBomb();
  //BombGroup();
  drawSprites();
 
}


/*function BombGroup(){
  BombGroup = createGroup();
  bomb = createSprite(100, 100, 20, 20);
  bomb2 = createSprite(200, 200, 30, 30);
  BombGroup.add(bomb);
  BombGroup.add(bomb2);
  bomb.addImage("bomb_Img");
  bomb2.addImage("bomb2_Img");
  
}*/

function spawnBomb (){
  if (frameCount % 60 === 0) {
    var bomb = createSprite(100,50,100,100);
    bomb.x = Math.round(random(100,700));
    bomb.addImage(bomb_Img);
    bomb.scale = 0.1;
    bomb.velocityY = 3;
    bomb.lifetime = 200;
    //cloud.depth = trex.depth;
    //trex.depth = trex.depth + 1;
    //cloudsGroup.add(cloud);
  }
  
}