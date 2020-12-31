
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var tree1, boy1, mango1,mango2,mango3,mango4,mango5;
var link1,stone1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stone1= new stone(80,500,50,50);
	tree1= new Tree(500,400,600,500);
	boy1 = new boy(80,600,180,250);
	mango1= new mango(400,200,20,20);
	mango2= new mango(450,250,20,20);
	mango3= new mango(500,300,20,20);
	mango4= new mango(550,350,20,20);
	mango5= new mango(570,400,20,20);
    chain1 = new Link(stone1.body,{x:30,y:540});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("indigo");
  rect(400,670,800,20);
  tree1.display();
  stone1.display();
  chain1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  boy1.display();
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    chain1.fly();
}

