
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
const Body = Matter.Body;
var engine,world;
var roof1;
var rope1;
var bob1;

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
  world = engine.world;
  
  bobDiameter=40;

	startBobPositionX=width/2;
	startBobPositionY=height/4+500;

roof1=new Roof(width/2,height/4,width/7,20);
bob1=new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
bob2= new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
bob3=new Bob(startBobPositionX,startBobPositionY,bobDiameter);
bob4=new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);


rope1=new Rope(bob1.body,roof1.body,-bobDiameter*2, 0);
rope2=new Rope(bob2.body,roof1.body,-bobDiameter*1, 0);
rope3=new Rope(bob3.body,roof1.body,0, 0);
rope4=new Rope(bob4.body,roof1.body,bobDiameter*1, 0);

}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  roof1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});

  }
}



