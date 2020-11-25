
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tree,stone,ground,boy;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7;
var slingShot;

function preload()
{
	boy = loadImage(" images / boy.png");
	mango1 = loadImage(" images / mango.png");
	mango2 = loadImage(" images / mango.png");
	mango3 = loadImage("  images / mango.png");
	mango4 = loadImage("  images / mango.png");
	mango5 = loadImage("  images / mango.png");
	mango6 = loadImage("  images / mango.png");
	mango7 = loadImage("  images /mango.png");
	stone = loadImage("  images / stone.png");
	tree = loadImage("  images / tree.png");
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	boy = createSprite(50,180,20,20);
	boy = addImage(boy);
	boy.scale = 0.5;

	mango1 = new Mango ( 200,200,10,10);
	mango1 = addImage(mangoImg);
	mango1.scale = 0.5;

	mango2 = new Mango( 220,200,10,10);
	mango2 = addImage(mangoImg);
	mango2.scale = 0.5;

	mango3 = new Mango( 200,200,10,10);
	mango3 = addImage(mangoImg);
	mango3.scale = 0.5;

	mango4 = new Mango( 200,200,10,10);
	mango4 = addImage(mangoImg);
	mango4.scale = 0.5;

	mango5 = new Mango( 200,200,10,10);
	mango5 = addImage(mangoImg);
	mango5.scale = 0.5;

	mango6 = new Mango( 200,200,10,10);
	mango6 = addImage(mangoImg);
	mango6.scale = 0.5;

	mango7 = new Mango( 200,200,10,10);
	mango7 = addImage(mangoImg);
	mango7.scale = 0.5;

	stone = new Stone(100,100,10,10);
	stone = addImage(stoneImg);
	stone.scale = 0.5;

	tree = new Tree(300,300,50,50);
	tree = addImage(treeImg);
	tree.scale = 0.5;

	Engine.run(engine);
  
}
	
function draw() {
  rectMode(CENTER);
  background(0);

    mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	ground.display();
	slingShot.display();
	stone.display();
	tree.display();

 detectCollision(stone,mango1);
 detectCollision(stone,mango2);
 detectCollision(stone,mango3);
 detectCollision(stone,mango4);
 detectCollision(stone,mango5);
 detectCollision(stone,mango6);
 detectCollision(stone,mango7);

  drawSprites();
 
}


function mouseDragged(){
	Matter.Body.setPosition(mango.body,{x:mouseX,y:mouseY});
	}
	
	function mouseReleased(){
		slingShot.fly();
	}

function detectCollision(stone,mango){
mangoBodyPosition = mango.body.setPosition
stoneBodyPosition = stone.body.setPosition

var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBody.y)
if(distance<-mango.r+stone.r){
	Matter.Body.setStatic(mango.body,false);
}
}