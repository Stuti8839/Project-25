var ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbinBody;

function preload()
{
	dustbinImage = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 200);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	Paper = new paper(10,180,10);

	dustbinBody = createSprite(700,140,10,10);
	dustbinBody.addImage(dustbinImage);
	dustbinBody.scale = 0.315;

	rectangle1 = new dustbin(700,180,70,10);

	rectangle2 = new dustbin(665,135,10,90);

	rectangle3 = new dustbin(735,135,10,90);

	packageBody = Bodies.circle(width/2 , 200 , 25 , {restitution:0, isStatic:true});
	World.add(world, packageBody);

	ground = new Ground(width/2, 200, width, 20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER); 
  Engine.update(engine);
  background(255); 
  rectangle1.display();
  rectangle2.display();
  rectangle3.display();
  ground.display();
  Paper.display();
  drawSprites();
  keyPressed();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(Paper.body, Paper.body.position, {x: 0, y: -1});
	}
	if (keyCode === RIGHT_ARROW) {
		Matter.Body.applyForce(Paper.body, Paper.body.position, {x: 0.5, y: 0});
	}
}


