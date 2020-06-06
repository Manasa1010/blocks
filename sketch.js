const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

/*function preload(){
  this.image=loadImage("poly.png.png");
}*/

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  ground1=new Ground(800,400,1600,30);
  ground2=new Ground(400,250,200,20);
  box1=new Box(415,230,30,50);
  box2=new Box(330,230,30,50);
 box3=new Box(360,230,30,50);
 box4=new Box(390,230,30,50);
 box5=new Box(420,230,30,50);
 box6=new Box(450,230,30,50);
 box7=new Box(350,180,30,50);
 box8=new Box(380,180,30,50);
 box9=new Box(410,180,30,50);
 box10=new Box(440,180,30,50);
 box11=new Box(380,120,30,50);
 box12=new Box(410,120,30,50);

polygon = new Polygon(100,300);
  
 rope=new Rope(polygon.body,{x:100,y:250});
}

function draw() {
  background("green");  
  Engine.update(engine);
  ground1.display();
  ground2.display();
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
  
  polygon.display();
  rope.display();
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  rope.fly();
}
function keyPressed(){
  if(keyCode===32){
    rope.attach(polygon.body);
  }
}