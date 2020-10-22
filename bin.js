class Bin{
constructor(){
    this.image = loadImage("sprites/dustbingreen.png.png");

    
    
var options = {
    isStatic: true
}

this.body = Matter.Bodies.rectangle(200,200,30,30,options);

this.body = Matter.Bodies.rectangle(200,200,30,30,options);
this.body = Matter.Bodies.rectangle(200,200,30,30,options);


    this.width = width;
    this.height = height;


    World.add(world, this.body); 
}

display(){
    var pos = this.body.position;

    imageMode(CENTER);

    image(this.image, pos.x, pos.y, this.width, this.height);


}



}