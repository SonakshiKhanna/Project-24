
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

function setup() {
	createCanvas(800, 800);

	engine = Engine.create();
	
	world = engine.world;

	box1 = new Box(600, 690, 120, 10);
	box2 = new Box(545, 660, 20, 70);
	box3 = new Box(655, 660, 20, 70);
	ball = new Ball(100,150,13,13);
	ground = new Ground(400,700,800,10);

	Engine.run(engine);
	
}


function draw() {
  
  background(0);

  Engine.update(engine);
  box1.display();
  ball.display();
  ground.display();
  box2.display();
  box3.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(ball.body,ball.body.position,{x:13,y:-13});
	}
}

