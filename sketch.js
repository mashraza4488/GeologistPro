
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var sand,sand1;
var plane,backgroundImg;
var stoneImg;

function preload()
{
	backgroundImg = loadImage("bg1.jpg");

}

function setup() {
	createCanvas(1300, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	plane = new Plane(1000,670,2000,20);
	stone = new Stone(300,200,200,100);
	//stone.addImage(stoneImg)
	rubber = new Rubber(600,20,300,150);
	sand = new Sand(400,20,25);
	sand1 = new Sand(450,20,25);
	sand2 = new Sand(500,20,25);
	sand3 = new Sand(550,20,25);
	sand4 = new Sand(600,20,25);
	sand5 = new Sand(650,20,25);

	iron = new Iron(500,20,400,300)
  
  hammer = new Hammer(200,200);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundImg);

  plane.display();
  stone.display();
  rubber.display();
  sand.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  iron.display();
  hammer.display();

  drawSprites();
  
  textSize(40);
  stroke("white");
  textFont("algerian")
  text("WELCOME TO CONSTRUCTION HOUSE",350,100);
  
 
}



