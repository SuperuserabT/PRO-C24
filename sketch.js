var bottom, left, right;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    ground = new Ground(600,height,1200,20);

	//Create the Bodies Here.
	bottom=new DustbinClass(500, 650, 200, 20);
	left=new DustbinClass(600, 620, 20, 80);
	right=new DustbinClass(400, 620, 20, 80);
	paper=new PaperClass(50,50,20);

	ground = Bodies.rectangle(width/2, 664, width, 10 , {isStatic:true} );
	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  rect(ground.position.x,ground.position.y,width,10)
  bottom.display();
  left.display();
  right.display();
  paper.display();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paper.body,paper.body.position,{x:60,y:-60});

	}
}