var ball,ground,bin;

var world;



const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

    

	engine = Engine.create();
	world = engine.world;

	

		var options = {
			isStatic: true,	
					
			}

			

	//Create the Bodies Here.
	ground = Bodies.rectangle(400,671,801,20, options);

	fill(203,223,234);

	ball = new Paper(330,200,30,30);
 	bin = new Bin ();
	
	
	
	   World.add(world, ground);
		
		//World.add(world, bin);
		

	Engine.run(engine);
  
 
	
	

}


function draw() {
  rectMode(CENTER);
  background(rgb(70,145,114));

   
    

	
	rect(ground.position.x,ground.position.y,801,60);
	

	
	ball.display();
	bin.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:150,y:-120}); 

 }
 }