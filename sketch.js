
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var l1;
var gameState = "start";
var player,playerwalkright,playerstand;
var l1i1,l2i2,l3i3;
var bg;
var playerbody;
function preload(){
  playerstand = loadAnimation("pengu walk right/2.png");
  bg = loadImage("background1.jpg");
  playerwalkright = loadAnimation("pengu walk right/1.png","pengu walk right/2.png","pengu walk right/3.png");
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create(); 
  world = engine.world;
  count = 0
  //form();
  playerbody = Bodies.rectangle(50,height-200,20,20,{isStatic:false,friction:0.04,restitution:0.4,density:2});
  World.add(world,playerbody)
  player = createSprite(0,0,50,50)
  player.addAnimation("stand",playerstand)
  player.addAnimation("right",playerwalkright)
  player.visible = false;
  player.scale = 0.5
 // l1i1 = new island(50,100);
  //l1i2 = new island(150,300);
  //l1i3 = new island(250,500);
   ground =Bodies.rectangle(width/2,height-20,width,40,{isStatic:true,friction:100000000000})
   World.add(world,ground)
   
}

function draw() {
  background(bg)
  Engine.update(engine);
  rectMode(CENTER)
  console.log(playerbody.position)
  if(gameState==="start"){
    player.visible = true;
   // l1i1.display();
   // l1i2.display();
   // l1i3.display();
  rect(ground.position.x,ground.position.y,width,20)
  if(keyWentDown("left")){
      playerbody.position.x = playerbody.position.x -5
  }
  if(keyWentUp("left")){
    playerbody.position.x = playerbody.position.x
  }
  if(keyWentDown("right")){
    playerbody.position.x = playerbody.position.x +5
    player.changeAnimation("right",playerwalkright);
  }                 
  if(keyWentUp("right")){
    playerbody.position.x = playerbody.position.x
    player.changeAnimation("stand",playerstand);
  }                                    
  if(keyWentDown("space")){
    playerbody.position.y = playerbody.position.y -5
  }
  if(keyWentDown("space")){
    playerbody.position.y = playerbody.position.y 
  }
  player.x = playerbody.position.x;
  player.y =playerbody.position.y
//  player.velocityY = player.velocityY + 1;                                                                  
 
  }
  drawSprites();
}

function form(){
button = createButton("PLAY")
button.position(windowWidth/2,windowHeight/2)
button.style('width', '100px'); 
button.style('height', '40px'); 
button.style('background', 'lightgrey');
//button.presses
button.mousePressed(() => {

  button.hide();
  l1 = createButton("LEVEL 1")
  l1.position(windowWidth/2,windowHeight/2)
  l1.style('width', '100px'); 
  l1.style('height', '100px'); 
  l1.style('background', "grey");
  //level1.pressed
  l1.mousePressed(()=>{
  l1.hide();

  gameState = "start"
})
})
}

