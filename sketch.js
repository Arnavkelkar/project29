const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1,ground2;
var engine, world;
var sling,polygon;
var box1,box2,box3,box4,box5,box6,box7;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  polygon = Bodies.circle(50,200,20,{isStatic : false});
  World.add(world, polygon);
  ground1 = new Ground(width/2,390,800,20);
  ground2 = new Ground(650,250,200,20);
  sling = new SlingShot(polygon,{x:100,y:200});  
  box1 = new Box(580,240);
  box2 = new Box(610,240);
  box3 = new Box(640,240);
  box4 = new Box(670,240);
  box5 = new Box(700,240);
  box6 = new Box(730,240);
  box7 = new Box(595,210);

  Engine.run(engine);
}

function draw() {
  background(0,200,255); 
  drawSprites();

  ground1.display();
  ground2.display();
  sling.display();
  fill("green")
  box1.display();
  box2.display();
  box3.display();
  fill("red")
  box4.display();
  box5.display();
  box6.display();
  fill("blue")
  box7.display();

  ellipse(polygon.position.x,polygon.position.y,20,20);

}

function mouseDragged(){
  Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  sling.fly();
}