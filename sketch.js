var a;
var circles=[];

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
function setup() {
  createCanvas(800,800);
  stroke(255)
  
  engine = Engine.create();
  world = engine.world;
 
  a=height;
  circles.push(width/2)
}

function draw() {
  //camera.zoom=camera.zoom+1
  background(0);  
  
  
  a=a-1;
  
  
  block = new Block(200,300,2,10);
 
  
  for (i=0;i<circles.length;i++)
{
	circle(circles[i], height/2,20)
}
if(camera.position.x%width===0)
{
	circles.push(camera.position.x+width/2)
}
 
 drawSprites();
}

function keyPressed ()
{
  if(keyCode === RIGHT_ARROW)
  {
  }
} 
