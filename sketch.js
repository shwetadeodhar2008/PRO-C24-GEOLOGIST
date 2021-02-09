const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var hammer,stone,rubber,iron;
var sand1, sand2, sand3, sand4,sand5,sand6,sand7,sand8,sand9,sand10;

var ground;


function preload()
{
	
}

function setup() {
	createCanvas(1200,400);

	engine = Engine.create();
	world = engine.world;

	//Creating the Bodies Here.
	ground=new Ground(600,height,1200,20);
	hammer=new Hammer(700,320,100,30);
	stone=new Stone(300,320,100,100);
	rubber=new Rubber(700,320,70,70);
	iron = new Iron(300,350);

	sand1 = new Sand(300,450,10);
    sand2 = new Sand(510,450,10);
    sand3 = new Sand(515,450,10);
    sand4 = new Sand(520,450,10);
    sand5 = new Sand(525,450,10);
    sand6 = new Sand(515,445,10);
    sand7 = new Sand(520,445,10);
    sand8 = new Sand(525,445,10);
    sand9 = new Sand(530,445,10);
    sand10 = new Sand(535,445,10);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyBlue");
  //Engine.update(engine);

  ground.display();
  hammer.display();
  stone.display();
  rubber.display();
  iron.display();


  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
  sand9.display();
  sand10.display();
  
  drawSprites();
 
}



