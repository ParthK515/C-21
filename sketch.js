const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
 var ball;
let engine;
let world;
var button;
var ground;
var left;
var right;
var top_wall;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  button = createImg("right.png");
  button.position(220,30);
  button.size(50,50);
   button.mouseClicked(hForce);
  var ops={
    restitution:0.9
  }
  ball = Bodies.circle(200,200,10,ops);

  World.add(world,ball);
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ellipse(ball.position.x,ball.position.y,10);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
}
function hForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0.0});
}
