
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body

function setup() {
  createCanvas(1000,800);
  engine = Engine.create();
  world = engine.world;
  
  land = new Ground(width/2, height-50, width, 20);
  box1 = new Box(500, 715)
  box2 = new Box(550, 715)
  box3 = new Box(600, 715)
  box4 = new Box(500, 665)
  box5 = new Box(500, 565)
  box6 = new Box(500, 515)
  box7 = new Box(500, 465)
  box8 = new Box(500, 415)
  box9 = new Box(500, 365)
  box10 = new Box(500, 615)
  box11 = new Box(500, 315)
  box12 = new Box(500, 265)
  box13 = new Box(500, 215)
  box14 = new Box(550, 665)
  box15 = new Box(550, 615)
  box16 = new Box(550, 565)
  box17 = new Box(550, 515)
  box18 = new Box(550, 465)
  box19 = new Box(550, 415)
  box20 = new Box(550, 365)
  box21 = new Box(550, 315)
  box22 = new Box(550, 265)
  box23 = new Box(550, 215)
  box24 = new Box(550, 165)
  box25 = new Box(600, 665)
  box26 = new Box(600, 615)
  box27 = new Box(600, 565)
  box28 = new Box(600, 515)
  box29 = new Box(600, 465)
  box30 = new Box(600, 415)
  box31 = new Box(600, 365)
  box32 = new Box(600, 315)
  box33 = new Box(600, 265)
  box34 = new Box(600, 215)

  ball1 = new Ball(200, 200, 30)
 
  rope1 = new Rope(ball1.body, {x: 100, y: 0})
}

function mouseDragged(){
  Body.setPosition(ball1.body, {x: mouseX, y: mouseY})
}

function draw() {
  background(0); 
  Engine.update(engine);
  land.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();
box17.display();
box18.display();
box19.display();
box20.display();
box21.display();
box22.display();
box23.display();
box24.display();
box25.display();
box26.display();
box27.display();
box28.display();
box29.display();
box30.display();
box31.display();
box32.display();
box33.display();
box34.display();
ball1.display();

rope1.display();
}