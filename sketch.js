var hammer;
var stone;
var ground;
var ball;
var sand1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1320, 620);


	engine = Engine.create();
	world = engine.world;

  
var ball_options={
  restitution:0.3,
  friction:5 ,
  density:1                                     

}

var sand_options={
  restitution:0.3,
  friction:5 ,
  density:1                                     

}
	//Create the Bodies Here.
hammer=new Hammer(100,100);
stone=new Stone(500,500,100,100);
stone.shapeColor="blue";

ground=new Ground(660,615,1320,10)

	Engine.run(engine);
  
ball=Bodies.circle(700,100,50,ball_options)
World.add(world,ball)

sand1=Bodies.circle(800,400,5,sand_options)
World.add(world,sand1)
sand2=Bodies.circle(800,400,5,sand_options)
World.add(world,sand2)
sand3=Bodies.circle(800,400,5,sand_options)
World.add(world,sand3)
sand4=Bodies.circle(800,400,5,sand_options)
World.add(world,sand4)
sand5=Bodies.circle(800,400,5,sand_options)
World.add(world,sand5)
sand6=Bodies.circle(800,400,5,sand_options)
World.add(world,sand6)
sand7=Bodies.circle(800,400,5,sand_options)
World.add(world,sand7)
sand8=Bodies.circle(800,400,5,sand_options)
World.add(world,sand8)


}
  


function draw() {
  rectMode(CENTER);
  background("lightBlue");
  hammer.display();
  stone.display();
  ground.display();

  drawSprites();

  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,50,50)

 ellipseMode(RADIUS)
  ellipse(sand1.position.x,sand1.position.y,8,8)

  ellipseMode(RADIUS)
  ellipse(sand2.position.x,sand2.position.y,8,8)

  ellipseMode(RADIUS)
  ellipse(sand3.position.x,sand3.position.y,8,8)

  ellipseMode(RADIUS)
  ellipse(sand4.position.x,sand4.position.y,8,8)

  ellipseMode(RADIUS)
  ellipse(sand5.position.x,sand5.position.y,8,8)

  ellipseMode(RADIUS)
  ellipse(sand6.position.x,sand6.position.y,8,8)

  ellipseMode(RADIUS)
  ellipse(sand7.position.x,sand7.position.y,8,8)

  ellipseMode(RADIUS)
  ellipse(sand8.position.x,sand8.position.y,8,8)
  
}
