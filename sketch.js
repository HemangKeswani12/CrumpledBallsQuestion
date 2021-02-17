var ball;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbinObj ;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	dustbinObj = new Dustbin(1200,650);
	ball = new Ball(200,450,70);
	ground = new Ground(width/2, 690, 1600, 20);
	
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  dustbinObj.display();
  ball.display();
  ground.display();
  
  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball.body, ball.body.position,{x:85, y:-85});
	}
}