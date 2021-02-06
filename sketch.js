const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var engine ;
var world ;
var object ;
var ball;
function setup() {
  createCanvas(800,400);
 engine = Engine.create();
 world=engine.world;
// JSON FORMAT(javascript object notation)
var options= {
  isStatic : true ,

}

var ballOptions= {
  restitution : 1 ,
}

 object = Bodies.rectangle(400,400,800,20,options);
 World.add(world, object)
 
 
 ball = Bodies.circle(400,200,50,ballOptions);
 World.add(world, ball);
 console.log(ball)

}

function draw() {
  Engine.update(engine);
  background(0,0,0); 

  rectMode(CENTER); 
  rect(object.position.x,object.position.y,800,20);

  ellipse(ball.position.x,ball.position.y,50);
}