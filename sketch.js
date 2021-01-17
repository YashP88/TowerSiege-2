const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground,base
var block1,block2,block3,block4,block5,block6,block7,block8,block9
var polygon,polygonImage
var slingShot

function preload(){

  polygonImage= loadImage("polygon.png");

}

function setup(){
    createCanvas(1000, 700);
	engine = Engine.create();
  world = engine.world;
  
  polygon=createSprite(200,400,200,10)
  polygon.addImage(polygonImage);
  polygon.scale=0.12;
  imageMode(CENTER);
  image(polygonImage,polygon.position.x,polygon.position.y,40,40);
  

	ground = new Ground(500,650,1000,20);
	base = new Ground(710,520,380,30);
  block1 = new Block(630,475,40,60);
  block2 = new Block(670,475,40,60);
  block3 = new Block(710,475,40,60);
  block4 = new Block(750,475,40,60);
  block5 = new Block(790,475,40,60);

  block6 = new Block(670,415,40,60);
  block7 = new Block(710,415,40,60);
  block8 = new Block(750,415,40,60);

  block9 = new Block(710,355,40,60);
  
  

	Engine.run(engine);
}

function draw(){
  rectMode(CENTER);
  background(95,147,227);

  polygon = Bodies.circle(50,200,20,{isStatic:true});
  World.add(world,polygon)

  slingShot = new SlingShot(this.polygon,{x:200,y:400});
  
  ground.display();
  base.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();

  block6.display();
  block7.display();
  block8.display();
  
  block9.display();
  slingShot.display();


  drawSprites();
    
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(polygon.body)
    slingShot.attach(polygon.body);
  }
}