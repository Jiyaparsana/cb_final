
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1;
var dustbin1,dusbin2,dustbin3
var ground

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1 = new Paper(100,580,3)
    dustbin1 = new Dustbin(360,640,20,100)
	dustbin2 = new Dustbin(415,640,20,100)
	dustbin3 = new Dustbin(430,640,200,20)

	ground = Bodies.rectangle(width/2,height-20,width,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  paper1.display()
  push()
  fill("black")
dustbin1.display()
dustbin2.display()
dustbin3.display()
pop()

rect(width/2,height,width,20)
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85})
	}
}


