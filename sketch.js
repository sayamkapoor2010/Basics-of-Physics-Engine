
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;



var ball; 
var ground; 
var wedge; 
var angle=60; 
var poly;




function setup()
{
  createCanvas(800,800);


  engine = Engine.create();
  world = engine.world;

  var ground_options ={ isStatic: true };

  ground = Bodies.rectangle(200,390,400,20,ground_options); 
  World.add(world,ground);

  var ball_options ={
  restitution: 0.9,
  frictionAir:0.01
 }


  ball = Bodies.circle(100,10,20,ball_options)
  World.add(world,ball)
  

  wall = Bodies.rectangle(300, 150, 70, 10, ground_options); 
  World.add(world,wall);


  var ops={ isStatic:true };
  wedge = Bodies.rectangle(100,200,100,20,ops); 
  World.add(world,wedge);




  rectMode(CENTER); 
  ellipseMode(RADIUS);


}

function draw() 
{
  background(51);
 
  Engine.update(engine);

  
  Matter.Body.rotate(wedge,angle);
  push()
  translate(wedge.position.x,wedge.position.y);
  rotate(angle);
  rect(0,0,100,20);
  pop()
  angle +=0.1;

  rect(ground.position.x,ground.position.y,400,20);

  ellipse(ball.position.x,ball.position.y,20);


  rect(wall.position.x,wall.position.y,70,20);

  
 


}

