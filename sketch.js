
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint

var engine, world;
var tree, boyIMG


function preload()
{
	boyIMG=loadImage("Plucking mangoes/boy.png")
}

function setup() {
	var canvas= createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	
treee=new tree0(800,215,280,380)
	   ground=new Ground(600,390,1200,5)
	   stone1=new Stone(369,293,25)
	   cons1=new CON(stone1.body,{x:369,y:293})
	   man1=new mango(711,150,25)
	   man2=new mango(744,185,25)
	   man3=new mango(743,114,25)
	   man4=new mango(775,85,25)
	   man5=new mango(788,149,25)
	  man6= new mango(830,81,25)
	   man7=new mango(851,146,25)
	   man8=new mango(902,184,25)
	   man9=new mango(883,111,25)

	Engine.run(engine);
  
}


function draw() {
 
  background(255);
text("x:"+mouseX,100,50)
text("y:"+mouseY,100,60)
 treee.display()
ground.display()
stone1.display()

man1.display()
man2.display()
man3.display()
man4.display()
man5.display()
man6.display()
man7.display()
man8.display()
man9.display()

detectCollision(stone1,man1)
detectCollision(stone1,man2)
detectCollision(stone1,man3)
detectCollision(stone1,man4)
detectCollision(stone1,man5)
detectCollision(stone1,man6)
detectCollision(stone1,man7)
detectCollision(stone1,man8)
detectCollision(stone1,man9)

imageMode(CENTER)
image(boyIMG,400,340,100,200)
cons1.display()
  drawSprites();
 
}
function mouseDragged(){
	Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
	cons1.fly()
}
function detectCollision(stone,mango){
	mangobodyposition=mango.body.position
	stonebodyposition=stone.body.position
var distance=dist(stonebodyposition.x,stonebodyposition.y,mangobodyposition.x,mangobodyposition.y)
if(distance<=mango.r+stone.r){
	Matter.Body.setStatic(mango.body,false)
}
}
function keyPressed(){
	if(keyCode=== 32){
		Matter.Body.setPosition(stone1.body,{x:369,y:293})
   cons1.attach(stone1.body)
	}
}


