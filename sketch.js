var roof,rope1, rope2, rope3, rope4, rope5, ballObject1, ballObject2, ballObject3, ballObject4, ballObject5, ballDiameter
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	roof = new Roof(350, 100, 300, 30);
	World.add(world, roof);
  
	ballObject1 = new Ball(250, 300);
	ballObject2 = new Ball(300, 300);
	ballObject3 = new Ball(350, 300);
	ballObject4 = new Ball(400, 300);
	ballObject5 = new Ball(400, 300);

	rope1 = new Rope(ballObject1.body, roof.body, -100, 0);
	World.add(world, rope1);

	rope2 = new Rope(ballObject2.body, roof.body, -50, 0);
	World.add(world, rope2);

	rope3 = new Rope(ballObject3.body, roof.body, 0, 0);
	World.add(world, rope3);

	rope4 = new Rope(ballObject4.body, roof.body, 50, 0);
	World.add(world, rope4);

	rope5 = new Rope(ballObject5.body, roof.body, 100, 0);
	World.add(world, rope5);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("white");

  roof.display();

  ballObject1.display();
  ballObject2.display();
  ballObject3.display();
  ballObject4.display();
  ballObject5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(ballObject1.body, ballObject1.body.position, {x:-730, y:0})
	}
}




