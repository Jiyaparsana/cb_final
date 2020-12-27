class Dustbin{
    constructor(x,y,width,height){

this.body = Bodies.rectangle(x,y,width,height,{isStatic:true});

World.add(world, this.body);

    }
    display(){
rectMode(CENTER)
var pos = this.body.position
push()
fill("black")
rect(pos.x,pos.y,this.width,this.height)
pop()

    }
}