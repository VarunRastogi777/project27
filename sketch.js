
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var bob,bob1,bob2,bob3,bob4
var ground
var rope,rope1,rope2,rope3,rope4

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground= new Ground(375,250,240,10)

	bob=new Bob(299,400,19)
	bob1=new Bob(337,400,19)
	bob2=new Bob(375,400,19)
	bob3=new Bob(413,400,19)
	bob4=new Bob(451,400,19)

	rope=new Chain(bob.body,ground.body,-19*4,0)
	rope1=new Chain(bob1.body,ground.body,-19*2,0)
	rope2=new Chain(bob2.body,ground.body,19*0,0)
	rope3=new Chain(bob3.body,ground.body,19*2,0)
	rope4=new Chain(bob4.body,ground.body,19*4,0)





	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  ground.display()
  rope.display()
  rope2.display()
  rope1.display()
  rope3.display()
  rope4.display()
  bob.display()
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bob4.body,bob4.body.position,{x:50,y:35})
			
	}
}



